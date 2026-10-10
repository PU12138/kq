/**
 * 口琴类型定义（简洁版）
 * 24孔复音 C调为默认
 */

const HARMONICAS = [
  {
    id: 'double24c',
    name: '复音24孔 C调',
    key: 'C',
    default: true,
    holes: [
      {n: 1, blow: 'C4', draw: 'D4'},
      {n: 2, blow: 'E4', draw: 'F4'},
      {n: 3, blow: 'G4', draw: 'A4'},
      {n: 4, blow: 'C5', draw: 'B4'},
      {n: 5, blow: 'E5', draw: 'D5'},
      {n: 6, blow: 'G5', draw: 'F5'},
      {n: 7, blow: 'C6', draw: 'A5'},
      {n: 8, blow: 'E6', draw: 'B5'},
      {n: 9, blow: 'G6', draw: 'D6'},
      {n: 10, blow: 'C7', draw: 'F6'},
      {n: 11, blow: 'E7', draw: 'A6'},
      {n: 12, blow: 'G7', draw: 'B6'},
    ]
  },
  {
    id: 'double24g',
    name: '复音24孔 G调',
    key: 'G',
    holes: [
      {n: 1, blow: 'G3', draw: 'A3'},
      {n: 2, blow: 'B3', draw: 'C4'},
      {n: 3, blow: 'D4', draw: 'E4'},
      {n: 4, blow: 'G4', draw: 'F#4'},
      {n: 5, blow: 'B4', draw: 'A4'},
      {n: 6, blow: 'D5', draw: 'C5'},
      {n: 7, blow: 'G5', draw: 'E5'},
      {n: 8, blow: 'B5', draw: 'F#5'},
      {n: 9, blow: 'D6', draw: 'A5'},
      {n: 10, blow: 'G6', draw: 'C6'},
      {n: 11, blow: 'B6', draw: 'E6'},
      {n: 12, blow: 'D7', draw: 'F#6'},
    ]
  },
  {
    id: 'double16c',
    name: '复音16孔 C调',
    key: 'C',
    holes: [
      {n: 1, blow: 'C4', draw: 'D4'},
      {n: 2, blow: 'E4', draw: 'F4'},
      {n: 3, blow: 'G4', draw: 'A4'},
      {n: 4, blow: 'C5', draw: 'B4'},
      {n: 5, blow: 'E5', draw: 'D5'},
      {n: 6, blow: 'G5', draw: 'F5'},
      {n: 7, blow: 'C6', draw: 'A5'},
      {n: 8, blow: 'E6', draw: 'B5'},
    ]
  },
  {
    id: 'blues10c',
    name: '布鲁斯10孔 C调',
    key: 'C',
    holes: [
      {n: 1, blow: 'C4', draw: 'D4'},
      {n: 2, blow: 'E4', draw: 'F4'},
      {n: 3, blow: 'G4', draw: 'A4'},
      {n: 4, blow: 'C5', draw: 'B4'},
      {n: 5, blow: 'D5', draw: 'C5'},
      {n: 6, blow: 'F5', draw: 'E5'},
      {n: 7, blow: 'A5', draw: 'G5'},
      {n: 8, blow: 'C6', draw: 'B5'},
      {n: 9, blow: 'D6', draw: 'C6'},
      {n: 10, blow: 'F6', draw: 'E6'},
    ]
  },
  {
    id: 'chromatic12c',
    name: '半音阶12孔 C调',
    key: 'C',
    hasButton: true,
    holes: [
      {n: 1, blow: 'C4', draw: 'C#4', blowBtn: 'C#4', drawBtn: 'D4'},
      {n: 2, blow: 'D4', draw: 'D#4', blowBtn: 'D#4', drawBtn: 'E4'},
      {n: 3, blow: 'E4', draw: 'F4', blowBtn: 'F4', drawBtn: 'F#4'},
      {n: 4, blow: 'F#4', draw: 'G4', blowBtn: 'G4', drawBtn: 'G#4'},
      {n: 5, blow: 'G4', draw: 'G#4', blowBtn: 'G#4', drawBtn: 'A4'},
      {n: 6, blow: 'A4', draw: 'A#4', blowBtn: 'A#4', drawBtn: 'B4'},
      {n: 7, blow: 'B4', draw: 'C5', blowBtn: 'C5', drawBtn: 'C#5'},
      {n: 8, blow: 'C5', draw: 'C#5', blowBtn: 'C#5', drawBtn: 'D5'},
      {n: 9, blow: 'D5', draw: 'D#5', blowBtn: 'D#5', drawBtn: 'E5'},
      {n: 10, blow: 'E5', draw: 'F5', blowBtn: 'F5', drawBtn: 'F#5'},
      {n: 11, blow: 'F#5', draw: 'G5', blowBtn: 'G5', drawBtn: 'G#5'},
      {n: 12, blow: 'G5', draw: 'G#5', blowBtn: 'G#5', drawBtn: 'A5'},
    ]
  },
  {
    id: 'chromatic16c',
    name: '半音阶16孔 C调',
    key: 'C',
    hasButton: true,
    holes: [
      {n: 1, blow: 'C4', draw: 'C#4', blowBtn: 'C#4', drawBtn: 'D4'},
      {n: 2, blow: 'D4', draw: 'D#4', blowBtn: 'D#4', drawBtn: 'E4'},
      {n: 3, blow: 'E4', draw: 'F4', blowBtn: 'F4', drawBtn: 'F#4'},
      {n: 4, blow: 'F#4', draw: 'G4', blowBtn: 'G4', drawBtn: 'G#4'},
      {n: 5, blow: 'G4', draw: 'G#4', blowBtn: 'G#4', drawBtn: 'A4'},
      {n: 6, blow: 'A4', draw: 'A#4', blowBtn: 'A#4', drawBtn: 'B4'},
      {n: 7, blow: 'B4', draw: 'C5', blowBtn: 'C5', drawBtn: 'C#5'},
      {n: 8, blow: 'C5', draw: 'C#5', blowBtn: 'C#5', drawBtn: 'D5'},
      {n: 9, blow: 'D5', draw: 'D#5', blowBtn: 'D#5', drawBtn: 'E5'},
      {n: 10, blow: 'E5', draw: 'F5', blowBtn: 'F5', drawBtn: 'F#5'},
      {n: 11, blow: 'F#5', draw: 'G5', blowBtn: 'G5', drawBtn: 'G#5'},
      {n: 12, blow: 'G5', draw: 'G#5', blowBtn: 'G#5', drawBtn: 'A5'},
      {n: 13, blow: 'A5', draw: 'A#5', blowBtn: 'A#5', drawBtn: 'B5'},
      {n: 14, blow: 'B5', draw: 'C6', blowBtn: 'C6', drawBtn: 'C#6'},
      {n: 15, blow: 'C6', draw: 'C#6', blowBtn: 'C#6', drawBtn: 'D6'},
      {n: 16, blow: 'D6', draw: 'D#6', blowBtn: 'D#6', drawBtn: 'E6'},
    ]
  },
];

// 音名转频率
function noteToFreq(name) {
  const A4 = 440;
  const map = { 'C':0,'C#':1,'Db':1,'D':2,'D#':3,'Eb':3,'E':4,'F':5,'F#':6,'Gb':6,'G':7,'G#':8,'Ab':8,'A':9,'A#':10,'Bb':10,'B':11 };
  const m = name.match(/^([A-G][#b]?)(-?\d)$/);
  if (!m) return 0;
  const s = map[m[1]];
  if (s === undefined) return 0;
  const n = s + (parseInt(m[2]) - 4) * 12;
  return A4 * Math.pow(2, (n - 9) / 12);
}

// 简谱转音名
const KEY_SCALES = {
  'C':  ['C','D','E','F','G','A','B'],
  'G':  ['G','A','B','C','D','E','F#'],
  'D':  ['D','E','F#','G','A','B','C#'],
  'A':  ['A','B','C#','D','E','F#','G#'],
  'F':  ['F','G','A','Bb','C','D','E'],
  'Bb': ['Bb','C','D','Eb','F','G','A'],
};

function degreeToNote(degree, key, octave, acc) {
  const scale = KEY_SCALES[key] || KEY_SCALES['C'];
  let note = scale[(degree - 1) % 7];
  let oct = octave + Math.floor((degree - 1) / 7);
  if (acc === '#') {
    const up = {'C':'C#','D':'D#','E':'F','F':'F#','G':'G#','A':'A#','B':'C','F#':'G','C#':'D','G#':'A'};
    note = up[note] || note;
    if (note === 'C' && scale[(degree-1)%7] === 'B') oct++;
  }
  return note + oct;
}
