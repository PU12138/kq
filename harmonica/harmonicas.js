/**
 * 口琴类型定义
 * 每种口琴定义了孔位、吹吸音符及半音键（变音）音符
 */

const KEY_SCALES = {
  'C':  { notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'], sharps: [] },
  'G':  { notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'], sharps: ['F#'] },
  'D':  { notes: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'], sharps: ['F#', 'C#'] },
  'A':  { notes: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'], sharps: ['F#', 'C#', 'G#'] },
  'F':  { notes: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'], sharps: ['Bb'] },
  'Bb': { notes: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'], sharps: ['Bb', 'Eb'] },
  'Eb': { notes: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'], sharps: ['Eb', 'Ab', 'Bb'] },
};

/**
 * 将音名转换为频率
 * @param {string} noteName 如 "C4", "F#5", "Bb3"
 * @returns {number} 频率(Hz)
 */
function noteToFreq(noteName) {
  const A4 = 440;
  const noteMap = { 'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4, 'F': 5, 'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11 };
  const match = noteName.match(/^([A-G][#b]?)(-?\d)$/);
  if (!match) return 0;
  const note = match[1];
  const octave = parseInt(match[2]);
  const semitones = noteMap[note];
  if (semitones === undefined) return 0;
  const n = semitones + (octave - 4) * 12;
  return A4 * Math.pow(2, (n - 9) / 12);
}

/**
 * 音阶唱名转音名
 * @param {number} degree 唱名 1-7
 * @param {string} key 调名 'C','G'等
 * @param {number} octave 八度
 * @param {string} accidental 升降号 '#' 或 'b' 或 ''
 * @returns {string} 音名如 "C4"
 */
function degreeToNote(degree, key, octave, accidental = '') {
  const scale = KEY_SCALES[key] || KEY_SCALES['C'];
  const idx = (degree - 1 + 7) % 7;
  let note = scale.notes[idx];
  let octShift = Math.floor((degree - 1) / 7);

  // 处理升号
  if (accidental === '#') {
    const noteMap = { 'C': 'C#', 'D': 'D#', 'E': 'F', 'F': 'F#', 'G': 'G#', 'A': 'A#', 'B': 'C',
      'C#': 'D', 'D#': 'E', 'F#': 'G', 'G#': 'A', 'A#': 'B', 'Bb': 'B', 'Eb': 'E', 'Ab': 'A' };
    note = noteMap[note] || note;
    if (note === 'C' && scale.notes[idx] === 'B') octShift++; // B# -> C下一八度
  }
  if (accidental === 'b') {
    const noteMap = { 'C': 'B', 'D': 'Db', 'E': 'Eb', 'F': 'E', 'G': 'Gb', 'A': 'Ab', 'B': 'Bb',
      'F#': 'F', 'C#': 'C', 'G#': 'G', 'A#': 'A', 'D#': 'D', 'Bb': 'Bb', 'Eb': 'Eb', 'Ab': 'Ab' };
    note = noteMap[note] || note;
  }

  const finalOct = octave + octShift;
  return note + finalOct;
}

const HARMONICAS = [
  {
    id: 'tremolo24C',
    name: '复音24孔 C调',
    shortName: '复音24孔',
    type: 'tremolo',
    key: 'C',
    default: true,
    holes: [
      { n: 1,  blow: 'C3',  draw: 'D3' },
      { n: 2,  blow: 'E3',  draw: 'F3' },
      { n: 3,  blow: 'G3',  draw: 'A3' },
      { n: 4,  blow: 'C4',  draw: 'B3' },
      { n: 5,  blow: 'E4',  draw: 'D4' },
      { n: 6,  blow: 'G4',  draw: 'F4' },
      { n: 7,  blow: 'C5',  draw: 'A4' },
      { n: 8,  blow: 'E5',  draw: 'B4' },
      { n: 9,  blow: 'G5',  draw: 'D5' },
      { n: 10, blow: 'C6',  draw: 'F5' },
      { n: 11, blow: 'E6',  draw: 'A5' },
      { n: 12, blow: 'G6',  draw: 'B5' },
      { n: 13, blow: 'C7',  draw: 'D6' },
      { n: 14, blow: 'E7',  draw: 'F6' },
      { n: 15, blow: 'G7',  draw: 'A6' },
      { n: 16, blow: 'C8',  draw: 'B6' },
      { n: 17, blow: 'E8',  draw: 'D7' },
      { n: 18, blow: 'G8',  draw: 'F7' },
      { n: 19, blow: 'C7',  draw: 'A7' },
      { n: 20, blow: 'E7',  draw: 'B7' },
      { n: 21, blow: 'G7',  draw: 'D7' },
      { n: 22, blow: 'C8',  draw: 'F7' },
      { n: 23, blow: 'E8',  draw: 'A7' },
      { n: 24, blow: 'G8',  draw: 'B7' },
    ]
  },
  {
    id: 'tremolo24G',
    name: '复音24孔 G调',
    shortName: '复音24孔G',
    type: 'tremolo',
    key: 'G',
    holes: [
      { n: 1,  blow: 'G2',  draw: 'A2' },
      { n: 2,  blow: 'B2',  draw: 'C3' },
      { n: 3,  blow: 'D3',  draw: 'E3' },
      { n: 4,  blow: 'G3',  draw: 'F#3' },
      { n: 5,  blow: 'B3',  draw: 'A3' },
      { n: 6,  blow: 'D4',  draw: 'C4' },
      { n: 7,  blow: 'G4',  draw: 'E4' },
      { n: 8,  blow: 'B4',  draw: 'F#4' },
      { n: 9,  blow: 'D5',  draw: 'A4' },
      { n: 10, blow: 'G5',  draw: 'C5' },
      { n: 11, blow: 'B5',  draw: 'E5' },
      { n: 12, blow: 'D6',  draw: 'F#5' },
      { n: 13, blow: 'G6',  draw: 'A5' },
      { n: 14, blow: 'B6',  draw: 'C6' },
      { n: 15, blow: 'D7',  draw: 'E6' },
      { n: 16, blow: 'G7',  draw: 'F#6' },
      { n: 17, blow: 'B7',  draw: 'A6' },
      { n: 18, blow: 'D8',  draw: 'C7' },
      { n: 19, blow: 'G6',  draw: 'E7' },
      { n: 20, blow: 'B6',  draw: 'F#7' },
      { n: 21, blow: 'D7',  draw: 'A7' },
      { n: 22, blow: 'G7',  draw: 'C7' },
      { n: 23, blow: 'B7',  draw: 'E7' },
      { n: 24, blow: 'D8',  draw: 'F#7' },
    ]
  },
  {
    id: 'tremolo16C',
    name: '复音16孔 C调',
    shortName: '复音16孔',
    type: 'tremolo',
    key: 'C',
    holes: [
      { n: 1,  blow: 'C4',  draw: 'D4' },
      { n: 2,  blow: 'E4',  draw: 'F4' },
      { n: 3,  blow: 'G4',  draw: 'A4' },
      { n: 4,  blow: 'C5',  draw: 'B4' },
      { n: 5,  blow: 'E5',  draw: 'D5' },
      { n: 6,  blow: 'G5',  draw: 'F5' },
      { n: 7,  blow: 'C6',  draw: 'A5' },
      { n: 8,  blow: 'E6',  draw: 'B5' },
      { n: 9,  blow: 'G6',  draw: 'D6' },
      { n: 10, blow: 'C7',  draw: 'F6' },
      { n: 11, blow: 'E7',  draw: 'A6' },
      { n: 12, blow: 'G7',  draw: 'B6' },
      { n: 13, blow: 'C7',  draw: 'D7' },
      { n: 14, blow: 'E7',  draw: 'F7' },
      { n: 15, blow: 'G7',  draw: 'A7' },
      { n: 16, blow: 'C8',  draw: 'B7' },
    ]
  },
  {
    id: 'blues10C',
    name: '10孔布鲁斯口琴 C调',
    shortName: '布鲁斯10孔',
    type: 'diatonic',
    key: 'C',
    holes: [
      { n: 1,  blow: 'C4',  draw: 'D4' },
      { n: 2,  blow: 'E4',  draw: 'G4' },
      { n: 3,  blow: 'G4',  draw: 'B4' },
      { n: 4,  blow: 'C5',  draw: 'D5' },
      { n: 5,  blow: 'E5',  draw: 'F5' },
      { n: 6,  blow: 'G5',  draw: 'A5' },
      { n: 7,  blow: 'C6',  draw: 'B5' },
      { n: 8,  blow: 'E6',  draw: 'D6' },
      { n: 9,  blow: 'G6',  draw: 'F6' },
      { n: 10, blow: 'C7',  draw: 'A6' },
    ]
  },
  {
    id: 'chromatic12C',
    name: '半音阶12孔 C调',
    shortName: '半音阶12孔',
    type: 'chromatic',
    key: 'C',
    hasButton: true,
    holes: [
      { n: 1,  blow: 'C4',  draw: 'D4',  blowBtn: 'C#4', drawBtn: 'D#4' },
      { n: 2,  blow: 'E4',  draw: 'F4',  blowBtn: 'F4',  drawBtn: 'F#4' },
      { n: 3,  blow: 'G4',  draw: 'A4',  blowBtn: 'G#4', drawBtn: 'A#4' },
      { n: 4,  blow: 'C5',  draw: 'B4',  blowBtn: 'C#5', drawBtn: 'C5' },
      { n: 5,  blow: 'C5',  draw: 'D5',  blowBtn: 'C#5', drawBtn: 'D#5' },
      { n: 6,  blow: 'E5',  draw: 'F5',  blowBtn: 'F5',  drawBtn: 'F#5' },
      { n: 7,  blow: 'G5',  draw: 'A5',  blowBtn: 'G#5', drawBtn: 'A#5' },
      { n: 8,  blow: 'C6',  draw: 'B5',  blowBtn: 'C#6', drawBtn: 'C6' },
      { n: 9,  blow: 'C6',  draw: 'D6',  blowBtn: 'C#6', drawBtn: 'D#6' },
      { n: 10, blow: 'E6',  draw: 'F6',  blowBtn: 'F6',  drawBtn: 'F#6' },
      { n: 11, blow: 'G6',  draw: 'A6',  blowBtn: 'G#6', drawBtn: 'A#6' },
      { n: 12, blow: 'C7',  draw: 'B6',  blowBtn: 'C#7', drawBtn: 'C7' },
    ]
  },
  {
    id: 'chromatic16C',
    name: '半音阶16孔 C调',
    shortName: '半音阶16孔',
    type: 'chromatic',
    key: 'C',
    hasButton: true,
    holes: [
      { n: 1,  blow: 'C3',  draw: 'D3',  blowBtn: 'C#3', drawBtn: 'D#3' },
      { n: 2,  blow: 'E3',  draw: 'F3',  blowBtn: 'F3',  drawBtn: 'F#3' },
      { n: 3,  blow: 'G3',  draw: 'A3',  blowBtn: 'G#3', drawBtn: 'A#3' },
      { n: 4,  blow: 'C4',  draw: 'B3',  blowBtn: 'C#4', drawBtn: 'C4' },
      { n: 5,  blow: 'C4',  draw: 'D4',  blowBtn: 'C#4', drawBtn: 'D#4' },
      { n: 6,  blow: 'E4',  draw: 'F4',  blowBtn: 'F4',  drawBtn: 'F#4' },
      { n: 7,  blow: 'G4',  draw: 'A4',  blowBtn: 'G#4', drawBtn: 'A#4' },
      { n: 8,  blow: 'C5',  draw: 'B4',  blowBtn: 'C#5', drawBtn: 'C5' },
      { n: 9,  blow: 'C5',  draw: 'D5',  blowBtn: 'C#5', drawBtn: 'D#5' },
      { n: 10, blow: 'E5',  draw: 'F5',  blowBtn: 'F5',  drawBtn: 'F#5' },
      { n: 11, blow: 'G5',  draw: 'A5',  blowBtn: 'G#5', drawBtn: 'A#5' },
      { n: 12, blow: 'C6',  draw: 'B5',  blowBtn: 'C#6', drawBtn: 'C6' },
      { n: 13, blow: 'C6',  draw: 'D6',  blowBtn: 'C#6', drawBtn: 'D#6' },
      { n: 14, blow: 'E6',  draw: 'F6',  blowBtn: 'F6',  drawBtn: 'F#6' },
      { n: 15, blow: 'G6',  draw: 'A6',  blowBtn: 'G#6', drawBtn: 'A#6' },
      { n: 16, blow: 'C7',  draw: 'B6',  blowBtn: 'C#7', drawBtn: 'C7' },
    ]
  },
];

/**
 * 在指定口琴上查找某个音名对应的孔和吹吸
 * @param {object} harmonica 口琴对象
 * @param {string} noteName 音名
 * @param {boolean} buttonPressed 是否按下变音键
 * @returns {object|null} {hole, direction: 'blow'|'draw', button: boolean}
 */
function findHoleForNote(harmonica, noteName, buttonPressed = false) {
  for (const h of harmonica.holes) {
    if (harmonica.hasButton) {
      if (buttonPressed) {
        if (h.blowBtn === noteName) return { hole: h.n, direction: 'blow', button: true };
        if (h.drawBtn === noteName) return { hole: h.n, direction: 'draw', button: true };
      } else {
        if (h.blow === noteName) return { hole: h.n, direction: 'blow', button: false };
        if (h.draw === noteName) return { hole: h.n, direction: 'draw', button: false };
      }
    } else {
      if (h.blow === noteName) return { hole: h.n, direction: 'blow', button: false };
      if (h.draw === noteName) return { hole: h.n, direction: 'draw', button: false };
    }
  }
  return null;
}
