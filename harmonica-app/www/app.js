/**
 * 口琴大师 - 核心逻辑
 */
const State = {
  audioCtx: null,
  currentHarmonica: HARMONICAS.find(h => h.default) || HARMONICAS[0],
  currentSong: null,
  parsedNotes: [],
  playIndex: 0,
  isPlaying: false,
  schedulerTimer: null,
  nextNoteTime: 0,
  speed: 1.0,
  beatCount: 0,
  userSongs: [],
  // 录音
  recorder: null,
  chunks: [],
  isRecording: false,
};

// ====== 音色：三角波 + 五度叠加 + 高通去浑浊 ======
function createVoice(freq, velocity) {
  if (!State.audioCtx) return null;
  const ctx = State.audioCtx;
  const v = Math.max(0.05, Math.min(0.45, velocity));

  const reed = ctx.createOscillator();
  reed.type = 'triangle';
  reed.frequency.setValueAtTime(freq * 0.985, ctx.currentTime);
  reed.frequency.linearRampToValueAtTime(freq, ctx.currentTime + 0.02);

  const reed5 = ctx.createOscillator();
  reed5.type = 'triangle';
  reed5.frequency.value = freq * 1.5;
  const reed5Gain = ctx.createGain();
  reed5Gain.gain.value = 0.2;

  const hipass = ctx.createBiquadFilter();
  hipass.type = 'highpass';
  hipass.frequency.value = Math.max(120, freq * 0.3);

  const lowpass = ctx.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.value = Math.min(8000, freq * 6);

  // 气息噪声
  let noiseSrc = null, noiseGain = null;
  try {
    const nb = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * 2), ctx.sampleRate);
    const nd = nb.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    noiseSrc = ctx.createBufferSource();
    noiseSrc.buffer = nb;
    noiseSrc.loop = true;
    const nbp = ctx.createBiquadFilter();
    nbp.type = 'highpass';
    nbp.frequency.value = freq * 0.8;
    noiseGain = ctx.createGain();
    noiseGain.gain.value = 0;
    noiseSrc.connect(nbp); nbp.connect(noiseGain); noiseGain.connect(ctx.destination);
  } catch(e) {}

  const gain = ctx.createGain();
  gain.gain.value = 0;

  reed.connect(hipass); reed5Gain.connect(hipass);
  hipass.connect(lowpass); lowpass.connect(gain);
  gain.connect(ctx.destination);

  let vib = null, vibGain = null;

  return {
    _started: false, _stopped: false,
    start(t) {
      if (this._started) return;
      this._started = true;
      const st = t || ctx.currentTime;
      reed.start(st); reed5.start(st); if (noiseSrc) noiseSrc.start(st);
      gain.gain.setValueAtTime(0, st);
      gain.gain.linearRampToValueAtTime(v, st + 0.01);
      gain.gain.linearRampToValueAtTime(v * 0.82, st + 0.05);
      if (noiseGain) {
        noiseGain.gain.setValueAtTime(0.025, st);
        noiseGain.gain.exponentialRampToValueAtTime(0.003, st + 0.08);
      }
    },
    stop(t) {
      if (this._stopped) return;
      this._stopped = true;
      const st = t || ctx.currentTime;
      const cur = gain.gain.value;
      gain.gain.cancelScheduledValues(st);
      gain.gain.setValueAtTime(cur, st);
      gain.gain.exponentialRampToValueAtTime(0.001, st + 0.05);
      if (noiseGain) {
        noiseGain.gain.cancelScheduledValues(st);
        noiseGain.gain.setValueAtTime(noiseGain.gain.value, st);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, st + 0.03);
      }
      reed.stop(st + 0.1); reed5.stop(st + 0.1);
      if (noiseSrc) noiseSrc.stop(st + 0.1);
      if (vib) { try { vib.stop(st + 0.1); } catch(e){} }
    },
    setVibrato(on) {
      if (on && !vib) {
        vib = ctx.createOscillator();
        vibGain = ctx.createGain();
        vib.frequency.value = 5.5;
        vibGain.gain.value = freq * 0.006;
        vib.connect(vibGain); vibGain.connect(reed.frequency);
        vibGain.connect(reed5.frequency);
        vib.start();
      }
    }
  };
}

function initAudio() {
  if (!State.audioCtx) {
    try { State.audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch(e) { console.error('AudioContext not supported'); }
  }
  if (State.audioCtx && State.audioCtx.state === 'suspended') {
    State.audioCtx.resume();
  }
}

// ====== 简谱解析 ======
function parseNotes(text, key = 'C') {
  const notes = [];
  const tokens = text.replace(/\|/g, ' ').split(/\s+/).filter(Boolean);
  
  // 字母格式检测: C5 E5 F5
  const isLetterFormat = tokens.some(t => /^[A-G][#b]?[0-9]/.test(t));
  
  if (isLetterFormat) {
    // 字母格式解析
    const NOTE_MAP = { 'C':1,'D':2,'E':3,'F':4,'G':5,'A':6,'B':7 };
    for (const tok of tokens) {
      const m = tok.match(/^([A-G])([#b]?)([0-9])(-+)?$/);
      if (!m) continue;
      const letter = m[1]; const acc = m[2]; const octStr = m[3]; const ext = m[4] ? m[4].length : 0;
      const degree = NOTE_MAP[letter];
      const octave = parseInt(octStr);
      const beats = 1 + ext;
      notes.push({ degree, octave, acc, beats, _letter: tok });
    }
  } else {
    // 数字格式解析 (简谱)
    for (const tok of tokens) {
      const m = tok.match(/^(\^|_|)?([#b]?)([1-7])(-+)?(\.)?$/);
      const rest = tok === '0' || tok === '^0' || tok === '_0';
      if (rest) {
        const beats = 1 + (tok.includes('-') ? tok.match(/-/g).length : 0);
        notes.push({ degree: 0, beats, isRest: true });
        continue;
      }
      if (!m) continue;
      const octave = m[1] === '^' ? 5 : (m[1] === '_' ? 3 : 4);
      const acc = m[2] || '';
      const deg = parseInt(m[3]);
      const ext = m[4] ? m[4].length : 0;
      const dotted = m[5] === '.' ? 0.5 : 0;
      const beats = 1 + ext + dotted;
      notes.push({ degree: deg, octave, acc, beats });
    }
  }
  return notes;
}

// 将解析后的音符转为简谱数字显示
function notesToJiapu(parsed, key = 'C') {
  // 字母格式: 需要转调
  const DEGREE_TO_C = { 1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7' };
  const SEMI_TO_DEGREE = { 'C':1,'C#':1,'Db':2,'D':2,'D#':3,'Eb':3,'E':3,'F':4,'F#':4,'Gb':5,'G':5,'G#':5,'Ab':6,'A':6,'A#':7,'Bb':7,'B':7 };
  
  // 如果是字母格式，用实际字母显示
  if (parsed.length > 0 && parsed[0]._letter) {
    return parsed.map(n => {
      const letter = n._letter.replace(/[0-9-]/g, '');
      const octDigit = n._letter.match(/[0-9]/);
      const num = DEGREE_TO_C[n.degree] || '?';
      const dots = parseInt(octDigit) > 4 ? '˙' : '';
      const dashes = '─'.repeat(Math.max(0, n.beats - 1));
      return { text: num + dots + dashes, hi: parseInt(octDigit) > 4, rest: false };
    });
  }
  
  // 数字格式: 直接显示
  const KEY_BASE = { 'C':4,'D':4,'E':4,'F':4,'G':4,'A':4,'B':4 };
  return parsed.map(n => {
    if (n.isRest) return { text: '0' + '─'.repeat(Math.max(0,n.beats-1)), hi:false, rest:true };
    let num = DEGREE_TO_C[n.degree] || '?';
    if (n.acc === '#') num = '#' + num;
    const hi = n.octave >= 5;
    const lo = n.octave <= 3;
    const dots = hi ? '˙' : '';
    const dashes = '─'.repeat(Math.max(0, n.beats - 1));
    return { text: num + dots + dashes, hi, lo, rest:false };
  });
}

// 渲染简谱到页面
function renderSheetMusic(song) {
  const listEl = document.getElementById('sheetList');
  const musicEl = document.getElementById('sheetMusic');
  document.getElementById('playbackBar').classList.remove('hidden');
  
  listEl.classList.add('hidden');
  musicEl.classList.remove('hidden');
  document.getElementById('sheetTitle').textContent = song.title + ' (' + song.key + '调)';
  document.getElementById('sheetLyrics').textContent = song.lyrics || '';
  
  const parsed = parseNotes(song.notes, song.key);
  State.parsedNotes = parsed;
  
  const jiapu = notesToJiapu(parsed, song.key);
  const container = document.getElementById('sheetNotes');
  
  // 每 8 个音符一行（含小节分隔），支持多行完整谱面
  const PER_LINE = 8;
  let html = '';
  let lineNum = 0;
  for (let i = 0; i < jiapu.length; i += PER_LINE) {
    const line = jiapu.slice(i, i + PER_LINE);
    lineNum++;
    html += `<div class="sline"><span class="sline-num">${lineNum}</span>`;
    for (const j of line) {
      let cls = 'sheet-note';
      if (j.hi) cls += ' hi';
      if (j.lo) cls += ' lo';
      if (j.rest) cls += ' rest';
      html += `<span class="${cls}">${j.text}</span>`;
    }
    html += '<span class="sline-bar">│</span></div>';
  }
  container.innerHTML = html;
  // 滚动到顶部
  container.scrollTop = 0;
}

// ====== 自动演奏 ======
function playAutoNote(idx) {
  const note = State.parsedNotes[idx];
  if (!note || note.isRest) return;
  const key = State.currentSong ? State.currentSong.key : 'C';
  const noteName = degreeToNote(note.degree, key, note.octave, note.acc);
  const freq = noteToFreq(noteName);
  if (freq <= 0) return;

  const h = State.currentHarmonica;
  const beatInBar = State.beatCount % 4;
  let velocity = 0.18;
  if (beatInBar === 0) velocity = 0.25;
  else if (beatInBar === 2) velocity = 0.2;
  else velocity = 0.15;

  const voice = createVoice(freq, velocity);
  voice.start();
  voice.stop(note.beats * 0.5 / State.speed);
  if (note.beats * 0.5 / State.speed > 0.5) {
    setTimeout(() => voice.setVibrato(true), 300);
  }
}

function scheduler() {
  if (!State.isPlaying) return;
  const ctx = State.audioCtx;
  if (!ctx) return;
  const lookAhead = 0.1;
  while (State.nextNoteTime < ctx.currentTime + lookAhead && State.playIndex < State.parsedNotes.length) {
    const note = State.parsedNotes[State.playIndex];
    const dur = note.beats * 0.5 / State.speed;
    const playTime = State.nextNoteTime < ctx.currentTime ? ctx.currentTime + 0.01 : State.nextNoteTime;
    // 用 setTimeout 在精确时间触发
    const delay = (playTime - ctx.currentTime) * 1000;
    setTimeout(() => {
      if (State.isPlaying && !note.isRest) playAutoNote(State.playIndex);
    }, Math.max(0, delay));
    State.beatCount += note.beats;
    State.nextNoteTime += dur;
    State.playIndex++;
  }
  if (State.playIndex >= State.parsedNotes.length) {
    State.isPlaying = false;
    showToast('演奏完毕');
    return;
  }
  State.schedulerTimer = setTimeout(scheduler, 25);
}

function startPlay() {
  if (State.parsedNotes.length === 0) {
    showToast('请先选择一首歌曲');
    return;
  }
  initAudio();
  State.isPlaying = true;
  State.playIndex = 0;
  State.beatCount = 0;
  State.nextNoteTime = State.audioCtx.currentTime + 0.05;
  document.getElementById('btnPlay').textContent = '⏸';
  scheduler();
}

function stopPlay() {
  State.isPlaying = false;
  State.playIndex = 0;
  State.beatCount = 0;
  if (State.schedulerTimer) clearTimeout(State.schedulerTimer);
  document.getElementById('btnPlay').textContent = '▶';
}

// ====== 口琴渲染（3行低中高 + 简谱数字） ======
const NOTE_MIDI = { 'C':0,'C#':1,'Db':1,'D':2,'D#':3,'Eb':3,'E':4,'F':5,'F#':6,'Gb':6,'G':7,'G#':8,'Ab':8,'A':9,'A#':10,'Bb':10,'B':11 };
function noteToMidi(note) {
  const m = note.match(/^([A-G])([#b]?)(\d)$/);
  if (!m) return -1;
  return (parseInt(m[3]) + 1) * 12 + NOTE_MIDI[m[1] + (m[2] || '')];
}
// 字母音名 -> 简谱数字（C大调首调）
const DEGREE_OF = { 'C':1,'D':2,'E':3,'F':4,'G':5,'A':6,'B':7 };
function noteToJiapu(note, rootNote) {
  if (!note) return { text:'?', octave:4 };
  const m = note.match(/^([A-G])([#b]?)(\d)$/);
  if (!m) return { text:'?', octave:4 };
  // 算和根音的差，得到首调简谱
  const rootMidi = noteToMidi(rootNote);
  const curMidi = noteToMidi(note);
  const diff = curMidi - rootMidi;   // -12..24 之类
  const semis = diff % 12;
  const octaveShift = Math.floor(diff / 12);
  // 半音差 -> 度（首调）
  const SEMI_TO_DEGREE = [1,1,2,3,3,4,5,5,6,7,7,1]; // 0=C, 1=C#=1 升, 2=D=2 ...
  let degree = SEMI_TO_DEGREE[((semis % 12) + 12) % 12];
  // 降/升
  let acc = '';
  if (m[2] === '#') acc = '#';
  // 八度点
  const baseOctave = 4;
  const actualOctave = baseOctave + octaveShift;
  let octaveMark = '';
  if (actualOctave >= 6) octaveMark = '<sup>˙˙</sup>';  // 高两个八度
  else if (actualOctave >= 5) octaveMark = '<sup>˙</sup>';
  return { text: acc + degree + octaveMark, octave: actualOctave };
}

function renderHarmonica() {
  const h = State.currentHarmonica;
  const body = document.getElementById('harmonicaBody');
  const rootNote = h.key + '4'; // C调就是 C4

  // 把所有吹吸音摊平成按钮列表，带上音高排序
  const buttons = [];
  h.holes.forEach(hole => {
    [{dir:'blow', note:hole.blow}, {dir:'draw', note:hole.draw}].forEach(({dir, note}) => {
      const jiapu = noteToJiapu(note, rootNote);
      buttons.push({
        hole: hole.n, dir, note, midi: noteToMidi(note),
        jiapuText: jiapu.text, octave: jiapu.octave,
      });
    });
  });
  buttons.sort((a,b) => a.midi - b.midi);

  // 分 3 行（低/中/高），按 octave 分界自动均分
  // 先把 octave 列出来决定分界
  const octs = buttons.map(b => b.octave);
  // 找到 octave 跳变点：3/4 分界、4/5 分界、5/6 分界
  let split1 = Math.floor(buttons.length / 3);
  let split2 = Math.floor(buttons.length * 2 / 3);

  // 如果恰好 24 或 12 个，按 octave 分界更好
  if (h.holes.length >= 12) {
    // 找 octave >= 5 第一个位置
    const midIdx = buttons.findIndex(b => b.octave >= 5);
    const hiIdx  = buttons.findIndex(b => b.octave >= 6);
    if (midIdx > 0) split1 = midIdx;
    if (hiIdx > split1) split2 = hiIdx;
  }

  const lowRow  = buttons.slice(0, split1);
  const midRow  = buttons.slice(split1, split2);
  const highRow = buttons.slice(split2);
  const rows = [
    { label: '低音', items: lowRow },
    { label: '中音', items: midRow },
    { label: '高音', items: highRow },
  ];

  let html = '';
  rows.forEach(row => {
    html += `<div class="hrow">
      <div class="hrow-label">${row.label}</div>
      <div class="hrow-btns">`;
    row.items.forEach(b => {
      html += `<button class="hnote" data-hole="${b.hole}" data-dir="${b.dir}" title="孔 ${b.hole} · ${b.dir==='blow'?'吹':'吸'} · ${b.note}">
        <span class="hnote-num">${b.jiapuText}</span>
      </button>`;
    });
    html += `</div></div>`;
  });

  body.innerHTML = html;
  bindHNoteEvents();
}

function bindHNoteEvents() {
  const btns = document.querySelectorAll('.hnote');
  btns.forEach(btn => {
    const n = parseInt(btn.dataset.hole);
    const dir = btn.dataset.dir;
    let voice = null, vibTimer = null;

    const onStart = (e) => {
      e.preventDefault();
      if (voice) return;
      initAudio();
      const h = State.currentHarmonica;
      const info = h.holes.find(x => x.n === n);
      if (!info) return;
      const noteName = dir === 'blow' ? info.blow : info.draw;
      if (!noteName) return;
      const freq = noteToFreq(noteName);
      if (freq <= 0) return;
      voice = createVoice(freq, 0.22);
      voice.start();
      btn.classList.add('active');
      vibTimer = setTimeout(() => voice.setVibrato(true), 500);
    };
    const onEnd = (e) => {
      if (!voice) return;
      voice.stop(); voice = null;
      btn.classList.remove('active');
      if (vibTimer) { clearTimeout(vibTimer); vibTimer = null; }
    };
    btn.addEventListener('touchstart', onStart, { passive: false });
    btn.addEventListener('touchend', onEnd, { passive: false });
    btn.addEventListener('touchcancel', onEnd, { passive: false });
    btn.addEventListener('mousedown', onStart);
    btn.addEventListener('mouseup', onEnd);
    btn.addEventListener('mouseleave', onEnd);
  });
}

function bindHoleEvents() {
  const holes = document.querySelectorAll('.hole');
  holes.forEach(hole => {
    const n = parseInt(hole.dataset.hole);
    const dir = hole.dataset.dir;
    let voice = null, vibTimer = null;

    const onStart = (e) => {
      e.preventDefault();
      if (voice) return;
      initAudio();
      const h = State.currentHarmonica;
      const info = h.holes.find(x => x.n === n);
      if (!info) return;
      const noteName = dir === 'blow' ? info.blow : info.draw;
      if (!noteName) return;
      const freq = noteToFreq(noteName);
      if (freq <= 0) return;
      voice = createVoice(freq, dir === 'blow' ? 0.25 : 0.2);
      voice.start();
      hole.classList.add('active');
      vibTimer = setTimeout(() => voice.setVibrato(true), 500);
    };
    const onEnd = (e) => {
      if (!voice) return;
      voice.stop(); voice = null;
      hole.classList.remove('active');
      if (vibTimer) { clearTimeout(vibTimer); vibTimer = null; }
    };
    hole.addEventListener('touchstart', onStart, { passive: false });
    hole.addEventListener('touchend', onEnd, { passive: false });
    hole.addEventListener('touchcancel', onEnd, { passive: false });
    hole.addEventListener('mousedown', onStart);
    hole.addEventListener('mouseup', onEnd);
    hole.addEventListener('mouseleave', onEnd);
  });
}

// ====== 歌谱列表 ======
let ALL_SONGS = [...SONGS];

function renderSongList(filter = '') {
  const list = document.getElementById('sheetList');
  const f = filter.trim().toLowerCase();
  let items = ALL_SONGS;
  if (f) {
    items = items.filter(s =>
      s.title.toLowerCase().includes(f) ||
      (s.lyrics || '').toLowerCase().includes(f) ||
      s.title.includes(f)
    );
  }
  // 用户歌曲置顶
  const userOnes = State.userSongs;
  const builtIn = items.filter(s => !s.isUser);
  const final = [...userOnes, ...builtIn];

  if (final.length === 0) {
    list.innerHTML = '<div style="padding:20px;text-align:center;color:#8b949e;font-size:13px;">没有找到歌曲</div>';
    return;
  }

  list.innerHTML = final.map(s => {
    const active = State.currentSong && State.currentSong.title === s.title && State.currentSong.key === s.key;
    return `<div class="sheet-item ${active ? 'active' : ''}" data-title="${s.title}" data-key="${s.key}">
      <div class="sheet-info">
        <div class="sheet-title">${s.title}${s.isUser ? ' 📝' : ''}</div>
        <div class="sheet-meta">${(s.lyrics || '').substring(0, 20)}${s.lyrics && s.lyrics.length > 20 ? '...' : ''}</div>
      </div>
      <span class="sheet-key">${s.key}调</span>
    </div>`;
  }).join('');

  list.querySelectorAll('.sheet-item').forEach(el => {
    el.addEventListener('click', () => {
      const title = el.dataset.title;
      const key = el.dataset.key;
      const song = ALL_SONGS.find(s => s.title === title && s.key === key);
      if (song) selectSong(song);
    });
  });
}

function selectSong(song) {
  stopPlay();
  State.currentSong = song;
  renderSheetMusic(song);
  showToast(`已选: ${song.title}`);
}

function backToList() {
  stopPlay();
  State.currentSong = null;
  document.getElementById('sheetList').classList.remove('hidden');
  document.getElementById('sheetMusic').classList.add('hidden');
  document.getElementById('playbackBar').classList.add('hidden');
  renderSongList(document.getElementById('searchInput').value);
}

// ====== 录音 ======
async function startRec() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    showToast('录音功能需要 HTTP 或 HTTPS 环境');
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    State.recorder = new MediaRecorder(stream);
    State.chunks = [];
    State.recorder.ondataavailable = e => { if (e.data.size > 0) State.chunks.push(e.data); };
    State.recorder.onstop = () => {
      const blob = new Blob(State.chunks, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `口琴演奏-${new Date().toLocaleString()}.webm`;
      a.click();
      stream.getTracks().forEach(t => t.stop());
      showToast('录音已保存');
    };
    State.recorder.start();
    State.isRecording = true;
    document.getElementById('btnRec').classList.add('hidden');
    document.getElementById('btnRecStop').classList.remove('hidden');
    showToast('开始录音...');
  } catch(e) {
    showToast('录音权限被拒绝');
  }
}

function stopRec() {
  if (State.recorder && State.isRecording) {
    State.recorder.stop();
    State.isRecording = false;
    document.getElementById('btnRec').classList.remove('hidden');
    document.getElementById('btnRecStop').classList.add('hidden');
  }
}

// ====== Toast ======
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 1800);
}

// ====== 添加琴谱 ======
function openAddModal() {
  document.getElementById('addModal').classList.remove('hidden');
}
function closeAddModal() {
  document.getElementById('addModal').classList.add('hidden');
  document.getElementById('mTitle').value = '';
  document.getElementById('mNotes').value = '';
}
function saveUserSong() {
  const title = document.getElementById('mTitle').value.trim();
  const notes = document.getElementById('mNotes').value.trim();
  if (!title || !notes) { showToast('请填写完整'); return; }
  const song = { title, notes, key: 'C', lyrics: '', isUser: true };
  State.userSongs.push(song);
  try { localStorage.setItem('hq_songs', JSON.stringify(State.userSongs)); } catch(e) {}
  ALL_SONGS = [...State.userSongs, ...SONGS];
  closeAddModal();
  renderSongList(document.getElementById('searchInput').value);
  showToast('已保存到曲录');
}
function loadUserSongs() {
  try {
    const saved = localStorage.getItem('hq_songs');
    if (saved) State.userSongs = JSON.parse(saved);
  } catch(e) {}
  ALL_SONGS = [...State.userSongs, ...SONGS];
}

// ====== 启动 ======
function init() {
  loadUserSongs();

  // 口琴选择
  const sel = document.getElementById('harmonicaSelect');
  HARMONICAS.forEach(h => {
    const opt = document.createElement('option');
    opt.value = h.id; opt.textContent = h.name;
    if (h.default) opt.selected = true;
    sel.appendChild(opt);
  });
  sel.addEventListener('change', () => {
    State.currentHarmonica = HARMONICAS.find(h => h.id === sel.value);
    renderHarmonica();
    showToast(`已切换: ${State.currentHarmonica.name}`);
  });

  renderHarmonica();
  renderSongList();

  // 搜索
  document.getElementById('searchInput').addEventListener('input', e => {
    renderSongList(e.target.value);
  });

  // 播放控制
  document.getElementById('btnPlay').addEventListener('click', () => {
    if (State.isPlaying) stopPlay();
    else startPlay();
  });
  document.getElementById('btnStop').addEventListener('click', stopPlay);
  document.getElementById('speedSlider').addEventListener('input', e => {
    State.speed = parseFloat(e.target.value);
    document.getElementById('speedLabel').textContent = State.speed.toFixed(1) + 'x';
  });

  // 录音
  document.getElementById('btnRec').addEventListener('click', startRec);
  document.getElementById('btnRecStop').addEventListener('click', stopRec);

  // 添加琴谱
  document.getElementById('btnAddSong').addEventListener('click', openAddModal);
  document.getElementById('mCancel').addEventListener('click', closeAddModal);
  document.getElementById('mSave').addEventListener('click', saveUserSong);

  // 返回列表
  document.getElementById('btnBackToList').addEventListener('click', backToList);

  // 音频初始化
  document.body.addEventListener('touchstart', initAudio, { once: true });
  document.body.addEventListener('mousedown', initAudio, { once: true });

  console.log('=== 口琴大师 v1.0 ===');
}

if (window.cordova) {
  document.addEventListener('deviceready', init, false);
} else {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else init();
}
