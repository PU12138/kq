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

// ====== 复音口琴音色（真实物理建模） ======
// 核心：两个簧片略微失谐（detune 3-6 cents）产生经典"复音"颤音
// 簧片 = 方波（奇次谐波丰富 → 口琴金属感）
// 加 2 次谐波（八度）+ 5 次谐波（三音）增强亮度
// 高通去低频浑浊 + 带通共振模拟簧片腔体
// 呼吸噪声（粉噪声）在音头最明显
function createVoice(freq, velocity) {
  if (!State.audioCtx) return null;
  const ctx = State.audioCtx;
  const v = Math.max(0.06, Math.min(0.5, velocity));
  const t0 = ctx.currentTime;

  // ===== 主簧片（方波 - 最像复音口琴的核心波形） =====
  const reed1 = ctx.createOscillator();
  reed1.type = 'square';
  reed1.frequency.value = freq;

  // ===== 第二簧片（轻微失谐，+4 cents）=====
  // 复音口琴的精髓：两簧片拍频产生自然颤音
  const reed2 = ctx.createOscillator();
  reed2.type = 'square';
  reed2.frequency.value = freq * Math.pow(2, 4 / 1200); // +4 cents ≈ 自然颤音

  // ===== 谐波叠层 =====
  // 2 次谐波（八度上）- 增加亮度
  const h2 = ctx.createOscillator();
  h2.type = 'triangle';
  h2.frequency.value = freq * 2;

  // 5 次谐波（三音）- 增加口琴特有的金属共鸣
  const h5 = ctx.createOscillator();
  h5.type = 'triangle';
  h5.frequency.value = freq * 5;

  // ===== 各声部增益 =====
  const g1 = ctx.createGain(); g1.gain.value = 0.55;   // 主簧片 55%
  const g2 = ctx.createGain(); g2.gain.value = 0.35;   // 第二簧片 35%
  const gH2 = ctx.createGain(); gH2.gain.value = 0.18; // 2次谐波 18%
  const gH5 = ctx.createGain(); gH5.gain.value = 0.08; // 5次谐波 8%

  reed1.connect(g1); reed2.connect(g2); h2.connect(gH2); h5.connect(gH5);

  // ===== 混音总线 =====
  const mix = ctx.createGain();
  mix.gain.value = v;
  g1.connect(mix); g2.connect(mix); gH2.connect(mix); gH5.connect(mix);

  // ===== 滤波：模拟口琴腔体 =====
  // 带通滤波：簧片共振峰 + 去尖锐高频
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = freq * 2.5;      // 共振中心
  bp.Q.value = 3.5;                      // 共振尖锐度
  // 低通软化高频方波毛刺
  const lp = ctx.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = Math.min(freq * 8, 9000);
  lp.Q.value = 0.7;
  // 高通去低频嗡鸣
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = Math.max(140, freq * 0.5);
  hp.Q.value = 0.5;

  mix.connect(hp); hp.connect(bp); bp.connect(lp); lp.connect(ctx.destination);

  // ===== 呼吸噪声（粉噪声 + 高通）=====
  let noiseSrc = null, noiseGain = null, noiseLP = null;
  try {
    const nb = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * 2), ctx.sampleRate);
    const nd = nb.getChannelData(0);
    // 生成粉噪声（更像呼吸）
    let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
    for (let i = 0; i < nd.length; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886*b0 + white*0.0555179;
      b1 = 0.99332*b1 + white*0.0750759;
      b2 = 0.96900*b2 + white*0.1538520;
      b3 = 0.86650*b3 + white*0.3104856;
      b4 = 0.55000*b4 + white*0.5329522;
      b5 = -0.7616*b5 - white*0.0168980;
      const pink = (b0+b1+b2+b3+b4+b5+b6+white*0.5362)*0.11;
      b6 = white*0.115926;
      nd[i] = pink;
    }
    noiseSrc = ctx.createBufferSource();
    noiseSrc.buffer = nb;
    noiseSrc.loop = true;
    noiseLP = ctx.createBiquadFilter();
    noiseLP.type = 'bandpass';
    noiseLP.frequency.value = freq * 1.2;
    noiseLP.Q.value = 1.0;
    noiseGain = ctx.createGain();
    noiseGain.gain.value = 0;
    noiseSrc.connect(noiseLP); noiseLP.connect(noiseGain); noiseGain.connect(ctx.destination);
  } catch(e) {}

  // ===== 颤音 LFO（自动颤音，模拟口琴手气息）=====
  let vib = null, vibGain = null, vibGain2 = null;
  function enableVibrato() {
    if (vib) return;
    vib = ctx.createOscillator();
    vib.type = 'sine';
    vib.frequency.value = 5.0;          // 5Hz 口琴典型颤音速度
    vibGain = ctx.createGain();
    vibGain.gain.value = freq * 0.008;  // ±8/1000 频率偏移 ≈ 自然颤音深度
    vibGain2 = ctx.createGain();
    vibGain2.gain.value = freq * 0.004; // 第二簧片颤音稍小，更自然
    vib.connect(vibGain); vibGain.connect(reed1.frequency);
    vib.connect(vibGain2); vibGain2.connect(reed2.frequency);
    vib.start();
  }

  let started = false, stopped = false;
  return {
    start(t) {
      if (started) return;
      started = true;
      const st = t || ctx.currentTime;
      reed1.start(st); reed2.start(st); h2.start(st); h5.start(st);
      if (noiseSrc) noiseSrc.start(st);
      // ADSR 包络：快速起音（15ms），然后稳定
      mix.gain.setValueAtTime(0, st);
      mix.gain.linearRampToValueAtTime(v * 0.95, st + 0.012);
      mix.gain.linearRampToValueAtTime(v, st + 0.05);
      // 呼吸噪声：起音时最明显，快速衰减
      if (noiseGain) {
        noiseGain.gain.setValueAtTime(0, st);
        noiseGain.gain.linearRampToValueAtTime(v * 0.15, st + 0.01);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, st + 0.12);
      }
    },
    stop(t) {
      if (stopped) return;
      stopped = true;
      const st = t || ctx.currentTime;
      // 快速释放（15ms）+ 自然衰减尾音
      mix.gain.cancelScheduledValues(st);
      const cur = mix.gain.value;
      mix.gain.setValueAtTime(Math.max(cur, 0.001), st);
      mix.gain.exponentialRampToValueAtTime(0.0005, st + 0.12);
      if (noiseGain) {
        noiseGain.gain.cancelScheduledValues(st);
        noiseGain.gain.setValueAtTime(Math.max(noiseGain.gain.value, 0.001), st);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, st + 0.06);
      }
      // 延迟停止振荡器，让尾音自然衰减
      setTimeout(() => {
        try { reed1.stop(); reed2.stop(); h2.stop(); h5.stop(); } catch(e){}
        if (noiseSrc) try { noiseSrc.stop(); } catch(e){}
        if (vib) try { vib.stop(); } catch(e){}
      }, 250);
    },
    setVibrato(on) {
      if (on) enableVibrato();
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
// 把歌词按每个音符分配一个字，返回和 notes 等长的数组
function alignLyrics(lyrics, parsedNotes) {
  if (!lyrics) return parsedNotes.map(() => '');
  // 把歌词拆成字（兼容中文和拼音/空格分词）
  // 优先按空格分词，没有空格就按单字拆
  let chars;
  if (/\s/.test(lyrics)) {
    chars = lyrics.split(/\s+/).filter(Boolean);
  } else {
    chars = lyrics.split('');
  }
  // 过滤掉空字符和纯标点
  chars = chars.filter(c => c.trim() && !/^[|,，。.!！?？、\-—]+$/.test(c));
  if (chars.length === 0) return parsedNotes.map(() => '');

  // 目标长度 = 音符数（排除休止符？不，也分配占位）
  const target = parsedNotes.length;
  // 如果歌词比音符少，循环填充；多的话截断
  const result = new Array(target).fill('');
  for (let i = 0; i < target; i++) {
    result[i] = chars[i % chars.length];
  }
  return result;
}

// 将解析后的音符转为简谱数字显示
// 返回 { display, range, beats }  其中 range = 'low' | 'mid' | 'hi' | 'hi2'
function notesToJiapu(parsed, key = 'C') {
  const DEGREE_TO_C = { 1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7' };
  
  return parsed.map(n => {
    if (n.isRest) {
      const restText = '0' + '─'.repeat(Math.max(0, Math.floor(n.beats) - 1));
      return { display: restText, range:'rest', beats: n.beats };
    }
    let num = DEGREE_TO_C[n.degree] || '?';
    if (n.acc === '#') num = '#' + num;
    
    // 八度范围
    const oct = n.octave;
    let range;
    if (oct <= 3) range = 'low';      // 低音 — 蓝色 + 下点
    else if (oct === 4) range = 'mid'; // 中音 — 白色无点
    else if (oct === 5) range = 'hi';  // 高音 — 粉色 + 上点
    else range = 'hi2';                // 倍高音 — 红色 + 双上点
    
    // 延长线
    const dashes = '─'.repeat(Math.max(0, Math.floor(n.beats) - 1));
    return { display: num + dashes, range, beats: n.beats };
  });
}

// 把音符按 4 拍一小节切分,返回二维数组(小节 → 音符)
function splitIntoBars(jiapu) {
  const B = 4; // 每小节 4 拍
  const bars = [];
  let cur = [];
  let beats = 0;
  for (const n of jiapu) {
    cur.push(n);
    beats += n.beats;
    if (beats >= B) {
      bars.push(cur);
      cur = [];
      beats = beats % B; // 余数留给下小节
    }
  }
  if (cur.length) bars.push(cur);
  return bars;
}

function renderSheetMusic(song) {
  const listEl = document.getElementById('sheetList');
  const musicEl = document.getElementById('sheetMusic');
  document.getElementById('playbackBar').classList.remove('hidden');
  
  listEl.classList.add('hidden');
  musicEl.classList.remove('hidden');
  document.getElementById('sheetTitle').textContent = song.title + ' (' + song.key + '调)';
  
  const parsed = parseNotes(song.notes, song.key);
  State.parsedNotes = parsed;
  
  const jiapu = notesToJiapu(parsed, song.key);
  const lyricsArr = alignLyrics(song.lyrics, parsed);
  const bars = splitIntoBars(jiapu);
  // 把歌词也按小节切
  const barLyrics = [];
  let idx = 0;
  for (const bar of bars) {
    const group = [];
    for (let i = 0; i < bar.length; i++) group.push(lyricsArr[idx++]);
    barLyrics.push(group);
  }
  
  // 每行 2 小节
  let html = '';
  let lineNum = 0;
  for (let bi = 0; bi < bars.length; bi += 2) {
    lineNum++;
    const lineBars = bars.slice(bi, bi + 2);
    const lineLyr  = barLyrics.slice(bi, bi + 2);
    
    html += `<div class="sline-wrap">`;
    html += `<div class="sline-notes"><span class="sline-num">${lineNum}</span>`;
    for (let b = 0; b < lineBars.length; b++) {
      if (b > 0) html += '<span class="sbar-dot">·</span>'; // 小节间小点
      html += `<div class="bar">`;
      for (let j = 0; j < lineBars[b].length; j++) {
        const n = lineBars[b][j];
        let cls = 'sn';
        cls += ' r' + n.range; // rlow / rmid / rhi / rhi2 / rrest
        html += `<span class="${cls}">${n.display}</span>`;
      }
      html += `</div>`;
    }
    html += '<span class="sline-end">‖</span></div>';
    // 歌词行
    html += `<div class="sline-lyr"><span class="sline-num">${lineNum}</span>`;
    for (let b = 0; b < lineBars.length; b++) {
      if (b > 0) html += '<span class="sbar-dot">·</span>';
      html += `<div class="bar">`;
      for (const l of lineLyr[b] || []) {
        html += `<span class="sl">${l || ''}</span>`;
      }
      html += `</div>`;
    }
    html += '<span class="sline-end">‖</span></div>';
    html += `</div>`;
  }
  
  const container = document.getElementById('sheetNotes');
  container.innerHTML = html;
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
  // 半音差 -> 度（C大调首调）
  // C=1  D=2  E=3  F=4  G=5  A=6  B=7，中间半音用升降号
  const SEMI_TO_DEGREE = [1,1,2,2,3,4,4,5,5,6,6,7];
  let degree = SEMI_TO_DEGREE[((semis % 12) + 12) % 12];
  // 升降号：如果半音映射和 degree 有差，说明需要升降
  // 用原始升降号 + 计算得出的
  let acc = '';
  if (m[2] === '#') acc = '#';
  else if (m[2] === 'b') {
    // 降号对应下一个 degree 带 b
    acc = 'b';
  }
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
