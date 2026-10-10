/**
 * 口琴演奏App 核心逻辑
 */

// ====== 全局状态 ======
const State = {
  currentHarmonica: null,
  chromaticBtn: false,      // 半音阶口琴变音键按下状态
  currentSong: null,        // 当前加载的歌曲
  isPlaying: false,
  isPaused: false,
  playIndex: 0,              // 当前播放到的音符索引
  parsedNotes: [],          // 解析后的音符数组
  speed: 1.0,               // 播放速度倍率
  activeHoles: new Set(),    // 当前激活的孔位(用于UI)
  audioCtx: null,
  currentOscillators: [],
  schedulerTimer: null,
  nextNoteTime: 0,
  currentPage: 'play',
  userSongs: [],            // 用户自定义歌曲
  currentCategory: 'all',
  searchQuery: '',
};

// ====== 简谱解析器 ======

/**
 * 解析简谱字符串为音符对象数组
 * 格式: "1 1 2- | 3 4 5--"
 * 返回: [{degree, octave, accidental, beats, isBar}]
 */
function parseNotes(noteStr) {
  const tokens = noteStr.trim().split(/\s+/);
  const result = [];
  
  for (const tok of tokens) {
    if (tok === '|' || tok === '') continue;
    
    // 解析八度前缀
    let rest = tok;
    let octave = 0;
    while (rest.startsWith('^')) { octave++; rest = rest.slice(1); }
    while (rest.startsWith('_')) { octave--; rest = rest.slice(1); }
    
    // 解析临时升降号
    let accidental = '';
    if (rest.startsWith('#')) { accidental = '#'; rest = rest.slice(1); }
    else if (rest.startsWith('b')) { accidental = 'b'; rest = rest.slice(1); }
    
    // 解析音级
    const degreeMatch = rest.match(/^(\d)/);
    if (!degreeMatch) continue;
    const degree = parseInt(degreeMatch[1]);
    rest = rest.slice(1);
    
    // 解析时值后缀 (- = +1拍, . = +0.5拍)
    let beats = 1;
    let hasDot = false;
    for (const ch of rest) {
      if (ch === '-') beats += 1;
      else if (ch === '.') { beats += 0.5; hasDot = true; }
    }
    
    result.push({ degree, octave, accidental, beats, isRest: degree === 0 });
  }
  
  return result;
}

/**
 * 将解析后的音符转换为实际音名
 */
function noteToNoteName(note, key) {
  if (note.degree === 0) return null; // 休止符
  
  const baseOctave = 4 + note.octave;
  return degreeToNote(note.degree, key, baseOctave, note.accidental);
}

/**
 * 将解析后的音符转换为简谱显示文本
 * 如: 1, ^1, _6, #4 等
 */
function noteToDisplayText(note) {
  if (note.degree === 0) return '0';
  let prefix = '';
  if (note.octave > 0) prefix = '↑'.repeat(note.octave);
  else if (note.octave < 0) prefix = '↓'.repeat(-note.octave);
  
  let suffix = note.accidental;
  if (note.beats >= 2) suffix += '—'.repeat(Math.floor(note.beats - 1));
  if (note.beats % 1 !== 0) suffix += '·';
  
  return prefix + note.degree + suffix;
}

/**
 * 将音名转为唱名(用于显示)
 */
function noteNameToSolfege(noteName) {
  const map = {
    'C': 'do', 'D': 're', 'E': 'mi', 'F': 'fa',
    'G': 'sol', 'A': 'la', 'B': 'si',
    'C#': 'do#', 'D#': 're#', 'F#': 'fa#',
    'G#': 'sol#', 'A#': 'la#',
    'Db': 'reb', 'Eb': 'mib', 'Gb': 'solb',
    'Ab': 'lab', 'Bb': 'sib'
  };
  const m = noteName.match(/^([A-G][#b]?)/);
  if (!m) return noteName;
  return map[m[1]] || noteName;
}

// ====== 音频合成 ======

/**
 * 初始化音频上下文
 */
function initAudio() {
  if (!State.audioCtx) {
    State.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (State.audioCtx.state === 'suspended') {
    State.audioCtx.resume();
  }
}

/**
 * 播放单个音符
 * @param {string} noteName 音名如 "C4"
 * @param {number} duration 持续时间(秒)
 * @param {number} startTime 开始时间
 * @param {number} velocity 音量 0-1
 */
function playNote(noteName, duration, startTime = 0, velocity = 0.15) {
  if (!State.audioCtx) return;
  const freq = noteToFreq(noteName);
  if (freq <= 0) return;
  
  const ctx = State.audioCtx;
  const t = startTime || ctx.currentTime;
  
  // 创建主振荡器 + 谐波振荡器(模拟口琴音色)
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const osc3 = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  
  osc1.type = 'sawtooth';
  osc1.frequency.value = freq;
  
  osc2.type = 'triangle';
  osc2.frequency.value = freq * 2; // 一个八度高
  
  osc3.type = 'sine';
  osc3.frequency.value = freq * 0.5; // 一个八度低(仅微弱)
  
  // 低通滤波器让音色更柔和
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(3000, t);
  filter.frequency.exponentialRampToValueAtTime(1500, t + duration);
  filter.Q.value = 1;
  
  // 音量包络(ADSR)
  const attack = Math.min(0.03, duration * 0.1);
  const release = Math.min(0.15, duration * 0.3);
  
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(velocity, t + attack);
  gain.gain.linearRampToValueAtTime(velocity * 0.7, t + attack + 0.05);
  gain.gain.setValueAtTime(velocity * 0.7, t + duration - release);
  gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
  
  // 颤音(轻微的频率调制，模拟口琴的颤音效果)
  const vibrato = ctx.createOscillator();
  const vibratoGain = ctx.createGain();
  vibrato.frequency.value = 5.5;
  vibratoGain.gain.value = freq * 0.008;
  vibrato.connect(vibratoGain);
  vibratoGain.connect(osc1.frequency);
  vibratoGain.connect(osc2.frequency);
  
  // 连接
  const osc1Gain = ctx.createGain();
  const osc2Gain = ctx.createGain();
  const osc3Gain = ctx.createGain();
  osc1Gain.gain.value = 0.5;
  osc2Gain.gain.value = 0.2;
  osc3Gain.gain.value = 0.1;
  
  osc1.connect(osc1Gain);
  osc2.connect(osc2Gain);
  osc3.connect(osc3Gain);
  osc1Gain.connect(filter);
  osc2Gain.connect(filter);
  osc3Gain.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  
  osc1.start(t);
  osc2.start(t);
  osc3.start(t);
  vibrato.start(t);
  
  osc1.stop(t + duration);
  osc2.stop(t + duration);
  osc3.stop(t + duration);
  vibrato.stop(t + duration);
}

/**
 * 播放口琴孔位音
 */
function playHole(harmonica, hole, direction, useButton = false) {
  initAudio();
  const h = harmonica.holes.find(x => x.n === hole);
  if (!h) return;
  
  let noteName;
  if (harmonica.hasButton && useButton) {
    noteName = direction === 'blow' ? h.blowBtn : h.drawBtn;
  } else {
    noteName = direction === 'blow' ? h.blow : h.draw;
  }
  if (!noteName) return;
  
  playNote(noteName, 1.5, 0, 0.2);
}

// ====== 播放控制 ======

/**
 * 加载歌曲
 */
function loadSong(song) {
  State.currentSong = song;
  State.parsedNotes = parseNotes(song.notes);
  State.playIndex = 0;
  renderSheetMusic();
}

/**
 * 开始自动演奏
 */
function startAutoPlay() {
  if (!State.currentSong) {
    showToast('请先选择一首歌曲');
    return;
  }
  
  initAudio();
  State.isPlaying = true;
  State.isPaused = false;
  State.playIndex = 0;
  State.nextNoteTime = State.audioCtx.currentTime + 0.05;
  
  updatePlayButton();
  scheduler();
}

/**
 * 暂停播放
 */
function pauseAutoPlay() {
  State.isPaused = true;
  State.isPlaying = false;
  if (State.schedulerTimer) {
    clearTimeout(State.schedulerTimer);
    State.schedulerTimer = null;
  }
  updatePlayButton();
}

/**
 * 继续播放
 */
function resumeAutoPlay() {
  if (!State.currentSong) return;
  initAudio();
  State.isPaused = false;
  State.isPlaying = true;
  State.nextNoteTime = State.audioCtx.currentTime + 0.05;
  updatePlayButton();
  scheduler();
}

/**
 * 停止播放
 */
function stopAutoPlay() {
  State.isPlaying = false;
  State.isPaused = false;
  State.playIndex = 0;
  if (State.schedulerTimer) {
    clearTimeout(State.schedulerTimer);
    State.schedulerTimer = null;
  }
  clearPlayingHighlight();
  updatePlayButton();
}

/**
 * 调度器 - 精确控制音符播放时间
 */
function scheduler() {
  if (!State.isPlaying || !State.audioCtx) return;
  
  const secPerBeat = 60 / (State.currentSong.bpm * State.speed);
  const lookAhead = 0.1; // 提前0.1秒安排
  
  while (State.nextNoteTime < State.audioCtx.currentTime + lookAhead && State.playIndex < State.parsedNotes.length) {
    const note = State.parsedNotes[State.playIndex];
    const duration = note.beats * secPerBeat;
    
    if (!note.isRest) {
      const noteName = noteToNoteName(note, State.currentSong.key);
      if (noteName) {
        playNote(noteName, duration * 0.9, State.nextNoteTime, 0.18);
        // 在适当时间高亮UI
        const delay = (State.nextNoteTime - State.audioCtx.currentTime) * 1000;
        setTimeout(() => highlightPlayingNote(State.playIndex), Math.max(0, delay));
      }
    }
    
    State.nextNoteTime += duration;
    State.playIndex++;
  }
  
  if (State.playIndex >= State.parsedNotes.length) {
    // 播放完毕
    setTimeout(() => {
      State.isPlaying = false;
      State.playIndex = 0;
      clearPlayingHighlight();
      updatePlayButton();
      showToast('演奏完毕');
    }, 500);
    return;
  }
  
  State.schedulerTimer = setTimeout(scheduler, 25);
}

// ====== UI 渲染 ======

/**
 * 渲染口琴孔位
 */
function renderHarmonica() {
  const h = State.currentHarmonica;
  const grid = document.getElementById('harmonicaGrid');
  const label = document.getElementById('harmonicaLabel');
  const btn = document.getElementById('chromaticBtn');
  
  label.textContent = h.name;
  
  if (h.hasButton) {
    btn.style.display = '';
  } else {
    btn.style.display = 'none';
    State.chromaticBtn = false;
  }
  updateChromaticBtn();
  
  // 构建吹孔行和吸孔行
  const maxHole = h.holes.length;
  let blowRow = '<div class="hole-row blow-row">';
  let drawRow = '<div class="hole-row draw-row">';
  
  for (const hole of h.holes) {
    blowRow += makeHoleCell(hole, 'blow');
    drawRow += makeHoleCell(hole, 'draw');
  }
  blowRow += '</div>';
  drawRow += '</div>';
  
  grid.innerHTML = blowRow + drawRow;
  
  // 绑定触摸/点击事件
  bindHoleEvents();
}

function makeHoleCell(hole, direction) {
  const note = direction === 'blow' ? hole.blow : hole.draw;
  const noteBtn = (hole.blowBtn || hole.drawBtn) ? 
    (direction === 'blow' ? hole.blowBtn : hole.drawBtn) : null;
  const displayNote = noteBtn && State.chromaticBtn ? noteBtn : note;
  
  return `<div class="hole-cell ${direction}" data-hole="${hole.n}" data-dir="${direction}">
    <div class="hole-note">${displayNote || '—'}</div>
    <div class="hole-dir">${direction === 'blow' ? '吹' : '吸'}</div>
    <div class="hole-num">${hole.n}</div>
    <div class="note-indicator"></div>
  </div>`;
}

/**
 * 绑定孔位触摸事件
 */
function bindHoleEvents() {
  const cells = document.querySelectorAll('.hole-cell');
  
  cells.forEach(cell => {
    const hole = parseInt(cell.dataset.hole);
    const dir = cell.dataset.dir;
    
    let isPressed = false;
    
    const onStart = (e) => {
      e.preventDefault();
      isPressed = true;
      cell.classList.add('active');
      playHole(State.currentHarmonica, hole, dir, State.chromaticBtn);
    };
    
    const onEnd = (e) => {
      if (isPressed) {
        isPressed = false;
        cell.classList.remove('active');
      }
    };
    
    cell.addEventListener('touchstart', onStart, { passive: false });
    cell.addEventListener('touchend', onEnd, { passive: false });
    cell.addEventListener('touchcancel', onEnd, { passive: false });
    cell.addEventListener('mousedown', onStart);
    cell.addEventListener('mouseup', onEnd);
    cell.addEventListener('mouseleave', onEnd);
  });
}

/**
 * 更新半音键按钮状态
 */
function updateChromaticBtn() {
  const btn = document.getElementById('chromaticBtn');
  if (State.chromaticBtn) {
    btn.classList.add('active');
    btn.textContent = '变音键 ON';
  } else {
    btn.classList.remove('active');
    btn.textContent = '变音键';
  }
}

/**
 * 渲染琴谱
 */
function renderSheetMusic() {
  const container = document.getElementById('sheetMusicInner');
  
  if (!State.currentSong) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">🎵</div><p>请从"曲谱"页面选择一首歌曲<br>或添加自定义琴谱</p></div>';
    return;
  }
  
  let html = '';
  const notes = State.parsedNotes;
  const lyrics = State.currentSong.lyrics || '';
  const lyricChars = lyrics.replace(/\s/g, '');
  let lyricIdx = 0;
  
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    const text = noteToDisplayText(note);
    const lyric = lyricIdx < lyricChars.length ? lyricChars[lyricIdx] : '';
    lyricIdx++;
    
    // 计算孔位提示
    let holeHint = '';
    if (!note.isRest) {
      const noteName = noteToNoteName(note, State.currentSong.key);
      const holeInfo = findHoleForNote(State.currentHarmonica, noteName, State.chromaticBtn);
      if (holeInfo) {
        holeHint = `${holeInfo.hole}孔${holeInfo.direction === 'blow' ? '吹' : '吸'}${holeInfo.button ? '★' : ''}`;
      }
    }
    
    // 上标点(高音点)
    let dotTop = '';
    let dotBot = '';
    if (note.octave > 0) dotTop = '·'.repeat(note.octave);
    if (note.octave < 0) dotBot = '·'.repeat(-note.octave);
    
    html += `<div class="note-cell" data-index="${i}">
      <div class="note-degree">
        ${dotTop ? `<span class="dot-top">${dotTop}</span>` : ''}
        ${note.degree === 0 ? '0' : note.degree}${note.accidental}
        ${dotBot ? `<span class="dot-bot">${dotBot}</span>` : ''}
      </div>
      <div class="note-lyric">${lyric}</div>
      ${holeHint ? `<div class="hole-hint">${holeHint}</div>` : ''}
    </div>`;
  }
  
  container.innerHTML = html;
}

/**
 * 高亮当前播放的音符
 */
function highlightPlayingNote(index) {
  clearPlayingHighlight();
  const cell = document.querySelector(`.note-cell[data-index="${index}"]`);
  if (cell) {
    cell.classList.add('playing');
    // 滚动到可视区域
    const container = document.getElementById('sheetMusic');
    const cellRect = cell.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    if (cellRect.left < containerRect.left || cellRect.right > containerRect.right) {
      cell.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }
}

function clearPlayingHighlight() {
  document.querySelectorAll('.note-cell.playing').forEach(c => c.classList.remove('playing'));
}

/**
 * 更新播放按钮
 */
function updatePlayButton() {
  const playBtn = document.getElementById('btnPlay');
  if (State.isPlaying) {
    playBtn.textContent = '⏸ 暂停';
    playBtn.classList.add('btn-pause');
    playBtn.classList.remove('btn-play');
  } else {
    playBtn.textContent = '▶ 播放';
    playBtn.classList.add('btn-play');
    playBtn.classList.remove('btn-pause');
  }
}

/**
 * 渲染歌曲列表
 */
function renderSongList() {
  const list = document.getElementById('songList');
  let songs = [...SONGS, ...State.userSongs];
  
  // 分类筛选
  if (State.currentCategory !== 'all') {
    songs = songs.filter(s => s.cat === State.currentCategory);
  }
  
  // 搜索
  if (State.searchQuery) {
    const q = State.searchQuery.toLowerCase();
    songs = songs.filter(s => s.title.toLowerCase().includes(q) || (s.lyrics && s.lyrics.toLowerCase().includes(q)));
  }
  
  if (songs.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">🎵</div><p>没有找到歌曲</p></div>';
    return;
  }
  
  const catIcons = {
    children: '🧒', folk: '🌺', pop: '🎤', movie: '🎬',
    foreign: '🌍', chinese: '🇨🇳', patriotic: '🚩', classic: '📻', custom: '📝'
  };
  
  let html = '';
  for (const song of songs) {
    const icon = catIcons[song.cat] || '🎵';
    const isCustom = song.cat === 'custom';
    html += `<div class="song-item" data-id="${song.id}">
      <div class="song-icon">${icon}</div>
      <div class="song-info">
        <div class="song-name">${song.title}</div>
        <div class="song-meta">${song.lyrics ? song.lyrics.substring(0, 20) : ''}${song.lyrics && song.lyrics.length > 20 ? '...' : ''}</div>
      </div>
      <span class="song-key">${song.key}</span>
      ${isCustom ? `<button class="song-action-btn" data-action="delete" data-id="${song.id}">🗑</button>` : ''}
    </div>`;
  }
  
  list.innerHTML = html;
  
  // 绑定点击事件
  list.querySelectorAll('.song-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.dataset.action === 'delete') {
        e.stopPropagation();
        deleteUserSong(e.target.dataset.id);
        return;
      }
      const id = item.dataset.id;
      const song = songs.find(s => s.id === id);
      if (song) {
        selectSong(song);
      }
    });
  });
}

/**
 * 选择歌曲并切换到演奏页
 */
function selectSong(song) {
  loadSong(song);
  switchPage('play');
  showToast(`已加载: ${song.title}`);
}

/**
 * 切换页面
 */
function switchPage(page) {
  State.currentPage = page;
  
  // 更新导航
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === page);
  });
  
  // 更新页面显示
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  if (page === 'play') {
    document.getElementById('playPage').classList.add('active');
    renderHarmonica();
    renderSheetMusic();
  } else if (page === 'songs') {
    document.getElementById('songsPage').classList.add('active');
    renderSongList();
  } else if (page === 'add') {
    document.getElementById('addPage').classList.add('active');
  } else if (page === 'library') {
    document.getElementById('libraryPage').classList.add('active');
    renderLibrary();
  }
}

/**
 * 渲染曲录(用户保存的琴谱)
 */
function renderLibrary() {
  const list = document.getElementById('libraryList');
  
  if (State.userSongs.length === 0) {
    list.innerHTML = '<div class="empty-state"><div class="empty-icon">📚</div><p>曲录为空<br>添加琴谱后可在此查看</p></div>';
    return;
  }
  
  let html = '';
  for (const song of State.userSongs) {
    html += `<div class="song-item" data-id="${song.id}">
      <div class="song-icon">📝</div>
      <div class="song-info">
        <div class="song-name">${song.title}</div>
        <div class="song-meta">${song.key}调 | ${song.bpm}BPM</div>
      </div>
      <span class="song-key">${song.key}</span>
      <button class="song-action-btn" data-action="delete" data-id="${song.id}">🗑</button>
    </div>`;
  }
  
  list.innerHTML = html;
  
  list.querySelectorAll('.song-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.dataset.action === 'delete') {
        e.stopPropagation();
        deleteUserSong(e.target.dataset.id);
        renderLibrary();
        return;
      }
      const id = item.dataset.id;
      const song = State.userSongs.find(s => s.id === id);
      if (song) {
        selectSong(song);
      }
    });
  });
}

/**
 * 渲染分类标签
 */
function renderCategoryTabs() {
  const container = document.getElementById('categoryTabs');
  let html = '';
  for (const cat of SONG_CATEGORIES) {
    const active = cat.id === State.currentCategory ? 'active' : '';
    html += `<div class="cat-tab ${active}" data-cat="${cat.id}">${cat.name}</div>`;
  }
  container.innerHTML = html;
  
  container.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      State.currentCategory = tab.dataset.cat;
      renderCategoryTabs();
      renderSongList();
    });
  });
}

// ====== 用户歌曲管理 ======

/**
 * 加载用户歌曲 from localStorage
 */
function loadUserSongs() {
  try {
    const data = localStorage.getItem('harmonica_user_songs');
    if (data) {
      State.userSongs = JSON.parse(data);
    }
  } catch (e) {
    State.userSongs = [];
  }
}

/**
 * 保存用户歌曲 to localStorage
 */
function saveUserSongs() {
  try {
    localStorage.setItem('harmonica_user_songs', JSON.stringify(State.userSongs));
  } catch (e) {
    showToast('保存失败: 存储空间不足');
  }
}

/**
 * 添加用户歌曲
 */
function addUserSong(song) {
  State.userSongs.push(song);
  saveUserSongs();
}

/**
 * 删除用户歌曲
 */
function deleteUserSong(id) {
  State.userSongs = State.userSongs.filter(s => s.id !== id);
  saveUserSongs();
  if (State.currentSong && State.currentSong.id === id) {
    State.currentSong = null;
    State.parsedNotes = [];
    renderSheetMusic();
  }
  renderSongList();
  showToast('已删除');
}

/**
 * 处理添加歌曲表单提交
 */
function handleAddSong() {
  const title = document.getElementById('inputTitle').value.trim();
  const key = document.getElementById('inputKey').value;
  const bpm = parseInt(document.getElementById('inputBpm').value) || 100;
  const cat = document.getElementById('inputCat').value;
  const notes = document.getElementById('inputNotes').value.trim();
  const lyrics = document.getElementById('inputLyrics').value.trim();
  
  if (!title) { showToast('请输入歌曲名称'); return; }
  if (!notes) { showToast('请输入琴谱内容'); return; }
  
  // 验证琴谱格式
  try {
    const parsed = parseNotes(notes);
    if (parsed.length === 0) { showToast('琴谱格式错误，请检查'); return; }
  } catch (e) {
    showToast('琴谱格式错误: ' + e.message);
    return;
  }
  
  const song = {
    id: 'custom_' + Date.now(),
    title, key, bpm, cat: cat || 'custom',
    notes, lyrics,
    custom: true
  };
  
  addUserSong(song);
  showToast(`已保存"${title}"到曲录`);
  
  // 清空表单
  document.getElementById('inputTitle').value = '';
  document.getElementById('inputNotes').value = '';
  document.getElementById('inputLyrics').value = '';
  
  // 跳转到曲录页
  switchPage('library');
}

// ====== Toast ======
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}

// ====== 初始化 ======

function init() {
  // 加载用户歌曲
  loadUserSongs();
  
  // 设置默认口琴
  State.currentHarmonica = HARMONICAS.find(h => h.default) || HARMONICAS[0];
  
  // 填充口琴选择器
  const select = document.getElementById('harmonicaSelect');
  HARMONICAS.forEach(h => {
    const opt = document.createElement('option');
    opt.value = h.id;
    opt.textContent = h.name;
    if (h.default) opt.selected = true;
    select.appendChild(opt);
  });
  
  select.addEventListener('change', () => {
    State.currentHarmonica = HARMONICAS.find(h => h.id === select.value);
    renderHarmonica();
    renderSheetMusic();
    showToast(`已切换: ${State.currentHarmonica.name}`);
  });
  
  // 半音键按钮
  document.getElementById('chromaticBtn').addEventListener('click', () => {
    State.chromaticBtn = !State.chromaticBtn;
    updateChromaticBtn();
    renderHarmonica();
    renderSheetMusic();
  });
  
  // 播放控制
  document.getElementById('btnPlay').addEventListener('click', () => {
    if (State.isPlaying) {
      pauseAutoPlay();
    } else if (State.isPaused) {
      resumeAutoPlay();
    } else {
      startAutoPlay();
    }
  });
  
  document.getElementById('btnStop').addEventListener('click', () => {
    stopAutoPlay();
  });
  
  // 速度控制
  const speedSlider = document.getElementById('speedSlider');
  const speedLabel = document.getElementById('speedLabel');
  speedSlider.addEventListener('input', () => {
    State.speed = parseFloat(speedSlider.value);
    speedLabel.textContent = State.speed.toFixed(1) + 'x';
  });
  
  // 底部导航
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => switchPage(item.dataset.page));
  });
  
  // 搜索
  document.getElementById('searchInput').addEventListener('input', (e) => {
    State.searchQuery = e.target.value.trim();
    renderSongList();
  });
  
  // 分类标签
  renderCategoryTabs();
  
  // 添加歌曲按钮
  document.getElementById('btnAddSong').addEventListener('click', handleAddSong);
  
  // 添加歌曲页面的调性选择
  const inputKey = document.getElementById('inputKey');
  ['C','G','D','A','F','Bb','Eb'].forEach(k => {
    const opt = document.createElement('option');
    opt.value = k;
    opt.textContent = k + '调';
    inputKey.appendChild(opt);
  });
  
  // 添加歌曲页面的分类选择
  const inputCat = document.getElementById('inputCat');
  const cats = [
    { id: 'custom', name: '自定义' },
    { id: 'children', name: '经典儿歌' },
    { id: 'folk', name: '民歌民谣' },
    { id: 'pop', name: '流行金曲' },
    { id: 'movie', name: '影视动漫' },
    { id: 'foreign', name: '外国经典' },
    { id: 'chinese', name: '中国名曲' },
    { id: 'classic', name: '经典怀旧' },
  ];
  cats.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.name;
    inputCat.appendChild(opt);
  });
  
  // 初始渲染
  switchPage('play');
  
  // 默认加载第一首歌
  if (SONGS.length > 0) {
    loadSong(SONGS[0]);
  }
  
  // 确保音频上下文在用户首次交互时初始化
  document.body.addEventListener('touchstart', initAudio, { once: true });
  document.body.addEventListener('mousedown', initAudio, { once: true });
}

// 启动
document.addEventListener('DOMContentLoaded', init);
