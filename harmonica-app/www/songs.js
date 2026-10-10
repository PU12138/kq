// 口琴大师 - 内置琴谱库 (高质量版)
let SONGS = [
  {
    "title": "小星星",
    "notes": "1 1 5 5 6 6 5- 4 4 3 3 2 2 1-",
    "lyrics": "一闪一闪亮晶晶",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "小星星 (G调)",
    "notes": "1 1 5 5 6 6 5- 4 4 3 3 2 2 1-",
    "lyrics": "一闪一闪亮晶晶",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "小星星 (F调)",
    "notes": "1 1 5 5 6 6 5- 4 4 3 3 2 2 1-",
    "lyrics": "一闪一闪亮晶晶",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "小星星 (D调)",
    "notes": "D4 D4 A4 A4 B4 B4 G4- G4 G4 F#4 F#4 E4 E4 C4- A4 A4 G4 G4 F#4 F#4 D4- A4 A4 G4 G4 F#4 F#4 D4- D4 D4 A4 A4 B4 B4 G4- G4 G4 F#4 F#4 E4 E4 C4- A4 A4 G4 G4 F#4 F#4 D4- D5 A4 B4 A4 G4 F#4 E4 C4-",
    "lyrics": "一闪一闪亮晶晶 满天都是小星星 挂在天空放光明 好像千万小眼睛 ——间奏—— 太阳慢慢向西沉 乌鸦回家一群群 星星眨着小眼睛 闪闪烁烁到天明 一闪一闪亮晶晶 满天都是小星星",
    "key": "D",
    "cat": "children"
  },
  {
    "title": "小星星 (A调)",
    "notes": "A4 A4 E5 E5 F#5 F#5 G4- D5 D5 C#5 C#5 B4 B4 C4- E5 E5 D5 D5 C#5 C#5 D4- E5 E5 D5 D5 C#5 C#5 D4- A4 A4 E5 E5 F#5 F#5 G4- D5 D5 C#5 C#5 B4 B4 C4- E5 E5 D5 D5 C#5 C#5 D4- A5 E5 F#5 E5 D5 C#5 B4 C4-",
    "lyrics": "一闪一闪亮晶晶 满天都是小星星 挂在天空放光明 好像千万小眼睛 ——间奏—— 太阳慢慢向西沉 乌鸦回家一群群 星星眨着小眼睛 闪闪烁烁到天明 一闪一闪亮晶晶 满天都是小星星",
    "key": "A",
    "cat": "children"
  },
  {
    "title": "小星星 (Eb调)",
    "notes": "D#4 D#4 A#4 A#4 C5 C5 G4- G#4 G#4 G4 G4 F4 F4 C4- A#4 A#4 G#4 G#4 G4 G4 D4- A#4 A#4 G#4 G#4 G4 G4 D4- D#4 D#4 A#4 A#4 C5 C5 G4- G#4 G#4 G4 G4 F4 F4 C4- A#4 A#4 G#4 G#4 G4 G4 D4- D#5 A#4 C5 A#4 G#4 G4 F4 C4-",
    "lyrics": "一闪一闪亮晶晶 满天都是小星星 挂在天空放光明 好像千万小眼睛 ——间奏—— 太阳慢慢向西沉 乌鸦回家一群群 星星眨着小眼睛 闪闪烁烁到天明 一闪一闪亮晶晶 满天都是小星星",
    "key": "Eb",
    "cat": "children"
  },
  {
    "title": "两只老虎",
    "notes": "1 2 3 1 1 2 3 1 3 4 5- 3 4 5-",
    "lyrics": "两只老虎跑得快",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "两只老虎 (G调)",
    "notes": "1 2 3 1 1 2 3 1 3 4 5- 3 4 5-",
    "lyrics": "两只老虎跑得快",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "两只老虎 (F调)",
    "notes": "1 2 3 1 1 2 3 1 3 4 5- 3 4 5-",
    "lyrics": "两只老虎跑得快",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "两只老虎 (D调)",
    "notes": "D4 E4 F#4 C4- D4 E4 F#4 C4- F#4 G4 G4- F#4 G4 G4- A4 B4 A4 G4 F#4 C4- A4 B4 A4 G4 F#4 C4- D4 A3 C4- D4 A3 C4- D4 E4 F#4 C4- D4 E4 F#4 C4- F#4 G4 G4- F#4 G4 G4- A4 B4 A4 G4 F#4 C4- A4 B4 A4 G4 F#4 C4- D4 A3 C4- D4 A3 C4-",
    "lyrics": "两只老虎 两只老虎 跑得快 跑得快 一只没有耳朵 一只没有尾巴 真奇怪 真奇怪 两只老虎 两只老虎 跑得快 跑得快 一只没有耳朵 一只没有尾巴 真奇怪 真奇怪",
    "key": "D",
    "cat": "children"
  },
  {
    "title": "两只老虎 (A调)",
    "notes": "A4 B4 C#5 C4- A4 B4 C#5 C4- C#5 D5 G4- C#5 D5 G4- E5 F#5 E5 D5 C#5 C4- E5 F#5 E5 D5 C#5 C4- A4 E4 C4- A4 E4 C4- A4 B4 C#5 C4- A4 B4 C#5 C4- C#5 D5 G4- C#5 D5 G4- E5 F#5 E5 D5 C#5 C4- E5 F#5 E5 D5 C#5 C4- A4 E4 C4- A4 E4 C4-",
    "lyrics": "两只老虎 两只老虎 跑得快 跑得快 一只没有耳朵 一只没有尾巴 真奇怪 真奇怪 两只老虎 两只老虎 跑得快 跑得快 一只没有耳朵 一只没有尾巴 真奇怪 真奇怪",
    "key": "A",
    "cat": "children"
  },
  {
    "title": "两只老虎 (Eb调)",
    "notes": "D#4 F4 G4 C4- D#4 F4 G4 C4- G4 G#4 G4- G4 G#4 G4- A#4 C5 A#4 G#4 G4 C4- A#4 C5 A#4 G#4 G4 C4- D#4 A#3 C4- D#4 A#3 C4- D#4 F4 G4 C4- D#4 F4 G4 C4- G4 G#4 G4- G4 G#4 G4- A#4 C5 A#4 G#4 G4 C4- A#4 C5 A#4 G#4 G4 C4- D#4 A#3 C4- D#4 A#3 C4-",
    "lyrics": "两只老虎 两只老虎 跑得快 跑得快 一只没有耳朵 一只没有尾巴 真奇怪 真奇怪 两只老虎 两只老虎 跑得快 跑得快 一只没有耳朵 一只没有尾巴 真奇怪 真奇怪",
    "key": "Eb",
    "cat": "children"
  },
  {
    "title": "祝你生日快乐",
    "notes": "G4 G4 A4 G4 C5 B4- G4 G4 A4 G4 D5 C5- G4 G4 G5 E5 C5 B4 A4- F5 F5 E5 C5 D5 C5- G4 G4 A4 G4 C5 B4- G4 G4 A4 G4 D5 C5- G4 G4 G5 E5 C5 B4 A4- F5 F5 E5 C5 D5 C5-",
    "lyrics": "祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 Happy Birthday to you Happy Birthday to you Happy Birthday dear friend Happy Birthday to you",
    "key": "C",
    "cat": "children"
  },
  {
    "title": "祝你生日快乐 (G调)",
    "notes": "D5 D5 E5 D5 G5 B4- D5 D5 E5 D5 A5 C5- D5 D5 D6 B5 G5 F#5 A4- C6 C6 B5 G5 A5 C5- D5 D5 E5 D5 G5 B4- D5 D5 E5 D5 A5 C5- D5 D5 D6 B5 G5 F#5 A4- C6 C6 B5 G5 A5 C5-",
    "lyrics": "祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 Happy Birthday to you Happy Birthday to you Happy Birthday dear friend Happy Birthday to you",
    "key": "G",
    "cat": "children"
  },
  {
    "title": "祝你生日快乐 (F调)",
    "notes": "C5 C5 D5 C5 F5 B4- C5 C5 D5 C5 G5 C5- C5 C5 C6 A5 F5 E5 A4- A#5 A#5 A5 F5 G5 C5- C5 C5 D5 C5 F5 B4- C5 C5 D5 C5 G5 C5- C5 C5 C6 A5 F5 E5 A4- A#5 A#5 A5 F5 G5 C5-",
    "lyrics": "祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 Happy Birthday to you Happy Birthday to you Happy Birthday dear friend Happy Birthday to you",
    "key": "F",
    "cat": "children"
  },
  {
    "title": "祝你生日快乐 (D调)",
    "notes": "A4 A4 B4 A4 D5 B4- A4 A4 B4 A4 E5 C5- A4 A4 A5 F#5 D5 C#5 A4- G5 G5 F#5 D5 E5 C5- A4 A4 B4 A4 D5 B4- A4 A4 B4 A4 E5 C5- A4 A4 A5 F#5 D5 C#5 A4- G5 G5 F#5 D5 E5 C5-",
    "lyrics": "祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 Happy Birthday to you Happy Birthday to you Happy Birthday dear friend Happy Birthday to you",
    "key": "D",
    "cat": "children"
  },
  {
    "title": "祝你生日快乐 (A调)",
    "notes": "E5 E5 F#5 E5 A5 B4- E5 E5 F#5 E5 B5 C5- E5 E5 E6 C#6 A5 G#5 A4- D6 D6 C#6 A5 B5 C5- E5 E5 F#5 E5 A5 B4- E5 E5 F#5 E5 B5 C5- E5 E5 E6 C#6 A5 G#5 A4- D6 D6 C#6 A5 B5 C5-",
    "lyrics": "祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 Happy Birthday to you Happy Birthday to you Happy Birthday dear friend Happy Birthday to you",
    "key": "A",
    "cat": "children"
  },
  {
    "title": "祝你生日快乐 (Eb调)",
    "notes": "A#4 A#4 C5 A#4 D#5 B4- A#4 A#4 C5 A#4 F5 C5- A#4 A#4 A#5 G5 D#5 D5 A4- G#5 G#5 G5 D#5 F5 C5- A#4 A#4 C5 A#4 D#5 B4- A#4 A#4 C5 A#4 F5 C5- A#4 A#4 A#5 G5 D#5 D5 A4- G#5 G#5 G5 D#5 F5 C5-",
    "lyrics": "祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 祝你生日快乐 Happy Birthday to you Happy Birthday to you Happy Birthday dear friend Happy Birthday to you",
    "key": "Eb",
    "cat": "children"
  },
  {
    "title": "丢手绢",
    "notes": "5 3 5 3 5 3 5 2 1 2 3 5 3 1-",
    "lyrics": "丢丢丢手绢",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "丢手绢 (G调)",
    "notes": "5 3 5 3 5 3 5 2 1 2 3 5 3 1-",
    "lyrics": "丢丢丢手绢",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "丢手绢 (F调)",
    "notes": "5 3 5 3 5 3 5 2 1 2 3 5 3 1-",
    "lyrics": "丢丢丢手绢",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "丢手绢 (D调)",
    "notes": "D4 F#4 A4 F#4 D4 F#4 G4- A4 B4 A4 F#4 A4 B4 G4- G4 A4 B4 A4 G4 E4 C4- D4 D4 D4 E4 F#4 F#4 G4 F#4 D4- D4 F#4 A4 F#4 D4 F#4 G4- A4 B4 A4 F#4 A4 B4 G4- G4 A4 B4 A4 G4 E4 C4- D4 D4 D4 E4 F#4 F#4 G4 F#4 D4- C4-",
    "lyrics": "丢丢丢手绢 轻轻地放在小朋友的后面 大家不要告诉他 快点快点抓住他 快点快点抓住他 丢丢丢手绢 轻轻地放在小朋友的后面 大家不要告诉他 快点快点抓住他 快点快点抓住他",
    "key": "D",
    "cat": "children"
  },
  {
    "title": "丢手绢 (A调)",
    "notes": "A4 C#5 E5 C#5 A4 C#5 G4- E5 F#5 E5 C#5 E5 F#5 G4- D5 E5 F#5 E5 D5 B4 C4- A4 A4 A4 B4 C#5 C#5 D5 C#5 D4- A4 C#5 E5 C#5 A4 C#5 G4- E5 F#5 E5 C#5 E5 F#5 G4- D5 E5 F#5 E5 D5 B4 C4- A4 A4 A4 B4 C#5 C#5 D5 C#5 D4- C4-",
    "lyrics": "丢丢丢手绢 轻轻地放在小朋友的后面 大家不要告诉他 快点快点抓住他 快点快点抓住他 丢丢丢手绢 轻轻地放在小朋友的后面 大家不要告诉他 快点快点抓住他 快点快点抓住他",
    "key": "A",
    "cat": "children"
  },
  {
    "title": "丢手绢 (Eb调)",
    "notes": "D#4 G4 A#4 G4 D#4 G4 G4- A#4 C5 A#4 G4 A#4 C5 G4- G#4 A#4 C5 A#4 G#4 F4 C4- D#4 D#4 D#4 F4 G4 G4 G#4 G4 D4- D#4 G4 A#4 G4 D#4 G4 G4- A#4 C5 A#4 G4 A#4 C5 G4- G#4 A#4 C5 A#4 G#4 F4 C4- D#4 D#4 D#4 F4 G4 G4 G#4 G4 D4- C4-",
    "lyrics": "丢丢丢手绢 轻轻地放在小朋友的后面 大家不要告诉他 快点快点抓住他 快点快点抓住他 丢丢丢手绢 轻轻地放在小朋友的后面 大家不要告诉他 快点快点抓住他 快点快点抓住他",
    "key": "Eb",
    "cat": "children"
  },
  {
    "title": "找朋友",
    "notes": "5 3 5 3 5 3 1 2 3 4 5 4 3 2 1",
    "lyrics": "找呀找呀找朋友",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "找朋友 (G调)",
    "notes": "5 3 5 3 5 3 1 2 3 4 5 4 3 2 1",
    "lyrics": "找呀找呀找朋友",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "找朋友 (F调)",
    "notes": "5 3 5 3 5 3 1 2 3 4 5 4 3 2 1",
    "lyrics": "找呀找呀找朋友",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "找朋友 (D调)",
    "notes": "D4 E4 D4 A4 D4 E4 D4 G4- A4 B4 C#5 B4 A4 B4 C#5 A4- D5 C#5 B4 A4 B4 C#5 C5- A4 D4 A3 C4- D4 E4 D4 A4 D4 E4 D4 G4- A4 B4 C#5 B4 A4 B4 C#5 A4- D5 C#5 B4 A4 B4 C#5 C5- A4 D4 A3 C4-",
    "lyrics": "找呀找呀找朋友 找到一个好朋友 敬个礼呀握握手 你是我的好朋友 再见 找呀找呀找朋友 找到一个好朋友 敬个礼呀握握手 你是我的好朋友 再见",
    "key": "D",
    "cat": "children"
  },
  {
    "title": "找朋友 (A调)",
    "notes": "A4 B4 A4 E5 A4 B4 A4 G4- E5 F#5 G#5 F#5 E5 F#5 G#5 A4- A5 G#5 F#5 E5 F#5 G#5 C5- E5 A4 E4 C4- A4 B4 A4 E5 A4 B4 A4 G4- E5 F#5 G#5 F#5 E5 F#5 G#5 A4- A5 G#5 F#5 E5 F#5 G#5 C5- E5 A4 E4 C4-",
    "lyrics": "找呀找呀找朋友 找到一个好朋友 敬个礼呀握握手 你是我的好朋友 再见 找呀找呀找朋友 找到一个好朋友 敬个礼呀握握手 你是我的好朋友 再见",
    "key": "A",
    "cat": "children"
  },
  {
    "title": "找朋友 (Eb调)",
    "notes": "D#4 F4 D#4 A#4 D#4 F4 D#4 G4- A#4 C5 D5 C5 A#4 C5 D5 A4- D#5 D5 C5 A#4 C5 D5 C5- A#4 D#4 A#3 C4- D#4 F4 D#4 A#4 D#4 F4 D#4 G4- A#4 C5 D5 C5 A#4 C5 D5 A4- D#5 D5 C5 A#4 C5 D5 C5- A#4 D#4 A#3 C4-",
    "lyrics": "找呀找呀找朋友 找到一个好朋友 敬个礼呀握握手 你是我的好朋友 再见 找呀找呀找朋友 找到一个好朋友 敬个礼呀握握手 你是我的好朋友 再见",
    "key": "Eb",
    "cat": "children"
  },
  {
    "title": "数鸭子",
    "notes": "1 1 1 1 2 2 3 3 2 1 2 3 4 5",
    "lyrics": "门前大桥下",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "数鸭子 (G调)",
    "notes": "1 1 1 1 2 2 3 3 2 1 2 3 4 5",
    "lyrics": "门前大桥下",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "数鸭子 (F调)",
    "notes": "1 1 1 1 2 2 3 3 2 1 2 3 4 5",
    "lyrics": "门前大桥下",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "数鸭子 (D调)",
    "notes": "D4 A4 D4 A4 D4 E4 E4- G4 A4 G4 F#4 E4 F#4 E4 C4- A4 A4 B4 A4 B4 A4 B4 G4- A4 D5 A4 D5 A4 D5 A4 C5- D5 A4 D5 A4 D5 A4 D5 G4- G5 F#5 E5 D5 C#5 B4 A4 F4- F#5 E5 D5 C#5 B4 A4 G4 E4- E5 D5 C#5 B4 A4 G4 F#4 D4- C4-",
    "lyrics": "门前大桥下 游过一群鸭 快来快来数一数 二四六七八 咕嘎咕嘎 真呀真多呀 数不清到底多少鸭 数不清到底多少鸭 赶鸭老爷爷 胡子白花花 唱呀唱着家乡戏 还会说笑话 小孩小孩快快上学校 别考个鸭蛋抱回家 别考个鸭蛋 抱回家",
    "key": "D",
    "cat": "children"
  },
  {
    "title": "数鸭子 (A调)",
    "notes": "A4 E5 A4 E5 A4 B4 E4- D5 E5 D5 C#5 B4 C#5 B4 C4- E5 E5 F#5 E5 F#5 E5 F#5 G4- E5 A5 E5 A5 E5 A5 E5 C5- A5 E5 A5 E5 A5 E5 A5 G4- D6 C#6 B5 A5 G#5 F#5 E5 F4- C#6 B5 A5 G#5 F#5 E5 D5 E4- B5 A5 G#5 F#5 E5 D5 C#5 D4- C4-",
    "lyrics": "门前大桥下 游过一群鸭 快来快来数一数 二四六七八 咕嘎咕嘎 真呀真多呀 数不清到底多少鸭 数不清到底多少鸭 赶鸭老爷爷 胡子白花花 唱呀唱着家乡戏 还会说笑话 小孩小孩快快上学校 别考个鸭蛋抱回家 别考个鸭蛋 抱回家",
    "key": "A",
    "cat": "children"
  },
  {
    "title": "数鸭子 (Eb调)",
    "notes": "D#4 A#4 D#4 A#4 D#4 F4 E4- G#4 A#4 G#4 G4 F4 G4 F4 C4- A#4 A#4 C5 A#4 C5 A#4 C5 G4- A#4 D#5 A#4 D#5 A#4 D#5 A#4 C5- D#5 A#4 D#5 A#4 D#5 A#4 D#5 G4- G#5 G5 F5 D#5 D5 C5 A#4 F4- G5 F5 D#5 D5 C5 A#4 G#4 E4- F5 D#5 D5 C5 A#4 G#4 G4 D4- C4-",
    "lyrics": "门前大桥下 游过一群鸭 快来快来数一数 二四六七八 咕嘎咕嘎 真呀真多呀 数不清到底多少鸭 数不清到底多少鸭 赶鸭老爷爷 胡子白花花 唱呀唱着家乡戏 还会说笑话 小孩小孩快快上学校 别考个鸭蛋抱回家 别考个鸭蛋 抱回家",
    "key": "Eb",
    "cat": "children"
  },
  {
    "title": "世上只有妈妈好",
    "notes": "6 5 3 5 3 2 1 2 3 5 6-",
    "lyrics": "世上只有妈妈好",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "世上只有妈妈好 (G调)",
    "notes": "6 5 3 5 3 2 1 2 3 5 6-",
    "lyrics": "世上只有妈妈好",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "世上只有妈妈好 (F调)",
    "notes": "6 5 3 5 3 2 1 2 3 5 6-",
    "lyrics": "世上只有妈妈好",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "世上只有妈妈好 (D调)",
    "notes": "A4 D5 D5 C#5 B4 A4 D5 C#5 B4 G4- G4 B4 B4 A4 G4 F#4 G4 F#4 E4 C4- A4 D5 D5 C#5 B4 A4 D5 C#5 B4 G4- G4 B4 A4 G4 F#4 E4 C4- A4 D5 D5 C#5 B4 A4 D5 C#5 B4 G4- G4 B4 B4 A4 G4 F#4 G4 F#4 E4 C4- A4 D5 D5 C#5 B4 A4 D5 C#5 B4 G4- G4 B4 A4 G4 F#4 E4 C4-",
    "lyrics": "世上只有妈妈好 有妈的孩子像块宝 投进妈妈的怀抱 幸福享不了 世上只有妈妈好 没妈的孩子像根草 离开妈妈的怀抱 幸福哪里找 世上只有妈妈好 有妈的孩子像块宝 投进妈妈的怀抱 幸福享不了",
    "key": "D",
    "cat": "children"
  },
  {
    "title": "世上只有妈妈好 (A调)",
    "notes": "E5 A5 A5 G#5 F#5 E5 A5 G#5 F#5 G4- D5 F#5 F#5 E5 D5 C#5 D5 C#5 B4 C4- E5 A5 A5 G#5 F#5 E5 A5 G#5 F#5 G4- D5 F#5 E5 D5 C#5 B4 C4- E5 A5 A5 G#5 F#5 E5 A5 G#5 F#5 G4- D5 F#5 F#5 E5 D5 C#5 D5 C#5 B4 C4- E5 A5 A5 G#5 F#5 E5 A5 G#5 F#5 G4- D5 F#5 E5 D5 C#5 B4 C4-",
    "lyrics": "世上只有妈妈好 有妈的孩子像块宝 投进妈妈的怀抱 幸福享不了 世上只有妈妈好 没妈的孩子像根草 离开妈妈的怀抱 幸福哪里找 世上只有妈妈好 有妈的孩子像块宝 投进妈妈的怀抱 幸福享不了",
    "key": "A",
    "cat": "children"
  },
  {
    "title": "世上只有妈妈好 (Eb调)",
    "notes": "A#4 D#5 D#5 D5 C5 A#4 D#5 D5 C5 G4- G#4 C5 C5 A#4 G#4 G4 G#4 G4 F4 C4- A#4 D#5 D#5 D5 C5 A#4 D#5 D5 C5 G4- G#4 C5 A#4 G#4 G4 F4 C4- A#4 D#5 D#5 D5 C5 A#4 D#5 D5 C5 G4- G#4 C5 C5 A#4 G#4 G4 G#4 G4 F4 C4- A#4 D#5 D#5 D5 C5 A#4 D#5 D5 C5 G4- G#4 C5 A#4 G#4 G4 F4 C4-",
    "lyrics": "世上只有妈妈好 有妈的孩子像块宝 投进妈妈的怀抱 幸福享不了 世上只有妈妈好 没妈的孩子像根草 离开妈妈的怀抱 幸福哪里找 世上只有妈妈好 有妈的孩子像块宝 投进妈妈的怀抱 幸福享不了",
    "key": "Eb",
    "cat": "children"
  },
  {
    "title": "铃儿响叮当",
    "notes": "3 3 3 3 3 3 3 4 5 3 3 3 2 2 2 3 2 5",
    "lyrics": "叮叮当叮叮当",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "铃儿响叮当 (G调)",
    "notes": "3 3 3 3 3 3 3 4 5 3 3 3 2 2 2 3 2 5",
    "lyrics": "叮叮当叮叮当",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "铃儿响叮当 (F调)",
    "notes": "3 3 3 3 3 3 3 4 5 3 3 3 2 2 2 3 2 5",
    "lyrics": "叮叮当叮叮当",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "铃儿响叮当 (D调)",
    "notes": "F#4 F#4 E4- F#4 F#4 E4- F#4 A4 D4 E4 E4- G4 G4 G4 G4 G4 F#4 F#4 F#4 F#4 E4 E4 F#4 E4 G4- F#4 F#4 E4- F#4 F#4 E4- F#4 A4 D4 E4 E4- G4 G4 G4 G4 G4 F#4 F#4 F#4 F#4 E4 E4 C4- A4 A4 A4 G4 G4 G4 F#4 F#4 F#4 E4 E4 D4- F#4 E4 F#4 G4 G4- G4 A4 B4 B4- D5 D5 C#5 B4 A4 G4 F#4 E4 C4- A4 A4 B4 B4 A4 G4 F#4 E4 C4-",
    "lyrics": "叮叮当 叮叮当 铃儿响叮当 今晚滑雪多快乐 我们坐在雪橇上 叮叮当 叮叮当 铃儿响叮当 今晚滑雪多快乐 我们坐在雪橇上 冲破大风雪 我们坐在雪橇上 快奔驰过田野 我们欢笑又歌唱 马铃儿响叮当 令人精神多欢畅 我们今晚滑雪真快乐 把滑雪歌儿唱",
    "key": "D",
    "cat": "children"
  },
  {
    "title": "铃儿响叮当 (A调)",
    "notes": "C#5 C#5 E4- C#5 C#5 E4- C#5 E5 A4 B4 E4- D5 D5 D5 D5 D5 C#5 C#5 C#5 C#5 B4 B4 C#5 B4 G4- C#5 C#5 E4- C#5 C#5 E4- C#5 E5 A4 B4 E4- D5 D5 D5 D5 D5 C#5 C#5 C#5 C#5 B4 B4 C4- E5 E5 E5 D5 D5 D5 C#5 C#5 C#5 B4 B4 D4- C#5 B4 C#5 D5 G4- D5 E5 F#5 B4- A5 A5 G#5 F#5 E5 D5 C#5 B4 C4- E5 E5 F#5 F#5 E5 D5 C#5 B4 C4-",
    "lyrics": "叮叮当 叮叮当 铃儿响叮当 今晚滑雪多快乐 我们坐在雪橇上 叮叮当 叮叮当 铃儿响叮当 今晚滑雪多快乐 我们坐在雪橇上 冲破大风雪 我们坐在雪橇上 快奔驰过田野 我们欢笑又歌唱 马铃儿响叮当 令人精神多欢畅 我们今晚滑雪真快乐 把滑雪歌儿唱",
    "key": "A",
    "cat": "children"
  },
  {
    "title": "铃儿响叮当 (Eb调)",
    "notes": "G4 G4 E4- G4 G4 E4- G4 A#4 D#4 F4 E4- G#4 G#4 G#4 G#4 G#4 G4 G4 G4 G4 F4 F4 G4 F4 G4- G4 G4 E4- G4 G4 E4- G4 A#4 D#4 F4 E4- G#4 G#4 G#4 G#4 G#4 G4 G4 G4 G4 F4 F4 C4- A#4 A#4 A#4 G#4 G#4 G#4 G4 G4 G4 F4 F4 D4- G4 F4 G4 G#4 G4- G#4 A#4 C5 B4- D#5 D#5 D5 C5 A#4 G#4 G4 F4 C4- A#4 A#4 C5 C5 A#4 G#4 G4 F4 C4-",
    "lyrics": "叮叮当 叮叮当 铃儿响叮当 今晚滑雪多快乐 我们坐在雪橇上 叮叮当 叮叮当 铃儿响叮当 今晚滑雪多快乐 我们坐在雪橇上 冲破大风雪 我们坐在雪橇上 快奔驰过田野 我们欢笑又歌唱 马铃儿响叮当 令人精神多欢畅 我们今晚滑雪真快乐 把滑雪歌儿唱",
    "key": "Eb",
    "cat": "children"
  },
  {
    "title": "好一朵美丽的茉莉花",
    "notes": "E5 E5 D5 C5 E5 E5 D5 C5- D5 E5 C5 D5 E5 D5 C5 A4- B4 B4 A4 G4 A4 B4 A4 G4- A4 B4 C5 D5 E5 D5 C5 A4- E5 E5 D5 C5 D5 E5 D5 C5- E5 D5 C5 A4 B4 A4 G4- E5 E5 D5 C5 E5 E5 D5 C5- D5 E5 C5 D5 E5 D5 C5 A4-",
    "lyrics": "好一朵美丽的茉莉花 好一朵美丽的茉莉花 芬芳美丽满枝桠 又香又白人人夸 让我来将你摘下 送给别人家 茉莉花呀茉莉花 好一朵美丽的茉莉花 好一朵美丽的茉莉花 芬芳美丽满枝桠 又香又白人人夸",
    "key": "C",
    "cat": "folk"
  },
  {
    "title": "好一朵美丽的茉莉花 (G调)",
    "notes": "B5 B5 A5 G5 B5 B5 A5 C5- A5 B5 G5 A5 B5 A5 G5 A4- F#5 F#5 E5 D5 E5 F#5 E5 G4- E5 F#5 G5 A5 B5 A5 G5 A4- B5 B5 A5 G5 A5 B5 A5 C5- B5 A5 G5 E5 F#5 E5 G4- B5 B5 A5 G5 B5 B5 A5 C5- A5 B5 G5 A5 B5 A5 G5 A4-",
    "lyrics": "好一朵美丽的茉莉花 好一朵美丽的茉莉花 芬芳美丽满枝桠 又香又白人人夸 让我来将你摘下 送给别人家 茉莉花呀茉莉花 好一朵美丽的茉莉花 好一朵美丽的茉莉花 芬芳美丽满枝桠 又香又白人人夸",
    "key": "G",
    "cat": "folk"
  },
  {
    "title": "好一朵美丽的茉莉花 (F调)",
    "notes": "A5 A5 G5 F5 A5 A5 G5 C5- G5 A5 F5 G5 A5 G5 F5 A4- E5 E5 D5 C5 D5 E5 D5 G4- D5 E5 F5 G5 A5 G5 F5 A4- A5 A5 G5 F5 G5 A5 G5 C5- A5 G5 F5 D5 E5 D5 G4- A5 A5 G5 F5 A5 A5 G5 C5- G5 A5 F5 G5 A5 G5 F5 A4-",
    "lyrics": "好一朵美丽的茉莉花 好一朵美丽的茉莉花 芬芳美丽满枝桠 又香又白人人夸 让我来将你摘下 送给别人家 茉莉花呀茉莉花 好一朵美丽的茉莉花 好一朵美丽的茉莉花 芬芳美丽满枝桠 又香又白人人夸",
    "key": "F",
    "cat": "folk"
  },
  {
    "title": "好一朵美丽的茉莉花 (D调)",
    "notes": "F#5 F#5 E5 D5 F#5 F#5 E5 C5- E5 F#5 D5 E5 F#5 E5 D5 A4- C#5 C#5 B4 A4 B4 C#5 B4 G4- B4 C#5 D5 E5 F#5 E5 D5 A4- F#5 F#5 E5 D5 E5 F#5 E5 C5- F#5 E5 D5 B4 C#5 B4 G4- F#5 F#5 E5 D5 F#5 F#5 E5 C5- E5 F#5 D5 E5 F#5 E5 D5 A4-",
    "lyrics": "好一朵美丽的茉莉花 好一朵美丽的茉莉花 芬芳美丽满枝桠 又香又白人人夸 让我来将你摘下 送给别人家 茉莉花呀茉莉花 好一朵美丽的茉莉花 好一朵美丽的茉莉花 芬芳美丽满枝桠 又香又白人人夸",
    "key": "D",
    "cat": "folk"
  },
  {
    "title": "好一朵美丽的茉莉花 (A调)",
    "notes": "C#6 C#6 B5 A5 C#6 C#6 B5 C5- B5 C#6 A5 B5 C#6 B5 A5 A4- G#5 G#5 F#5 E5 F#5 G#5 F#5 G4- F#5 G#5 A5 B5 C#6 B5 A5 A4- C#6 C#6 B5 A5 B5 C#6 B5 C5- C#6 B5 A5 F#5 G#5 F#5 G4- C#6 C#6 B5 A5 C#6 C#6 B5 C5- B5 C#6 A5 B5 C#6 B5 A5 A4-",
    "lyrics": "好一朵美丽的茉莉花 好一朵美丽的茉莉花 芬芳美丽满枝桠 又香又白人人夸 让我来将你摘下 送给别人家 茉莉花呀茉莉花 好一朵美丽的茉莉花 好一朵美丽的茉莉花 芬芳美丽满枝桠 又香又白人人夸",
    "key": "A",
    "cat": "folk"
  },
  {
    "title": "好一朵美丽的茉莉花 (Eb调)",
    "notes": "G5 G5 F5 D#5 G5 G5 F5 C5- F5 G5 D#5 F5 G5 F5 D#5 A4- D5 D5 C5 A#4 C5 D5 C5 G4- C5 D5 D#5 F5 G5 F5 D#5 A4- G5 G5 F5 D#5 F5 G5 F5 C5- G5 F5 D#5 C5 D5 C5 G4- G5 G5 F5 D#5 G5 G5 F5 C5- F5 G5 D#5 F5 G5 F5 D#5 A4-",
    "lyrics": "好一朵美丽的茉莉花 好一朵美丽的茉莉花 芬芳美丽满枝桠 又香又白人人夸 让我来将你摘下 送给别人家 茉莉花呀茉莉花 好一朵美丽的茉莉花 好一朵美丽的茉莉花 芬芳美丽满枝桠 又香又白人人夸",
    "key": "Eb",
    "cat": "folk"
  },
  {
    "title": "送别",
    "notes": "5 3 5 1- 6 1 5- 6^ 1^ 5-",
    "lyrics": "长亭外古道边",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "送别 (G调)",
    "notes": "5 3 5 1- 6 1 5- 6^ 1^ 5-",
    "lyrics": "长亭外古道边",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "送别 (F调)",
    "notes": "5 3 5 1- 6 1 5- 6^ 1^ 5-",
    "lyrics": "长亭外古道边",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "送别 (D调)",
    "notes": "A4 F#4 D4 E4 F#4 A4 A4- A4 A4 E4 F#4 G4 A4 E4- C#5 B4 A4 F#4 A4 B4 G4- C#5 C#5 B4 A4 F#4 B4 A4 E4- D5 C#5 B4 A4 F#4 B4 A4 E4- D5 D5 C#5 B4 A4 C#5 B4 G4- A4 F#4 D4 E4 F#4 A4 A4- A4 A4 E4 F#4 G4 A4 E4- C4-",
    "lyrics": "长亭外 古道边 芳草碧连天 晚风拂柳笛声残 夕阳山外山 天之涯 地之角 知交半零落 一壶浊酒尽余欢 今宵别梦寒 长亭外 古道边 芳草碧连天 晚风拂柳笛声残 夕阳山外山",
    "key": "D",
    "cat": "folk"
  },
  {
    "title": "送别 (A调)",
    "notes": "E5 C#5 A4 B4 C#5 E5 A4- E5 E5 B4 C#5 D5 E5 E4- G#5 F#5 E5 C#5 E5 F#5 G4- G#5 G#5 F#5 E5 C#5 F#5 E5 E4- A5 G#5 F#5 E5 C#5 F#5 E5 E4- A5 A5 G#5 F#5 E5 G#5 F#5 G4- E5 C#5 A4 B4 C#5 E5 A4- E5 E5 B4 C#5 D5 E5 E4- C4-",
    "lyrics": "长亭外 古道边 芳草碧连天 晚风拂柳笛声残 夕阳山外山 天之涯 地之角 知交半零落 一壶浊酒尽余欢 今宵别梦寒 长亭外 古道边 芳草碧连天 晚风拂柳笛声残 夕阳山外山",
    "key": "A",
    "cat": "folk"
  },
  {
    "title": "送别 (Eb调)",
    "notes": "A#4 G4 D#4 F4 G4 A#4 A4- A#4 A#4 F4 G4 G#4 A#4 E4- D5 C5 A#4 G4 A#4 C5 G4- D5 D5 C5 A#4 G4 C5 A#4 E4- D#5 D5 C5 A#4 G4 C5 A#4 E4- D#5 D#5 D5 C5 A#4 D5 C5 G4- A#4 G4 D#4 F4 G4 A#4 A4- A#4 A#4 F4 G4 G#4 A#4 E4- C4-",
    "lyrics": "长亭外 古道边 芳草碧连天 晚风拂柳笛声残 夕阳山外山 天之涯 地之角 知交半零落 一壶浊酒尽余欢 今宵别梦寒 长亭外 古道边 芳草碧连天 晚风拂柳笛声残 夕阳山外山",
    "key": "Eb",
    "cat": "folk"
  },
  {
    "title": "甜蜜蜜",
    "notes": "6 7 1^ 7 6 5 3 6 1^ 7 6-",
    "lyrics": "甜蜜蜜你笑得甜蜜蜜",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "甜蜜蜜 (G调)",
    "notes": "6 7 1^ 7 6 5 3 6 1^ 7 6-",
    "lyrics": "甜蜜蜜你笑得甜蜜蜜",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "甜蜜蜜 (F调)",
    "notes": "6 7 1^ 7 6 5 3 6 1^ 7 6-",
    "lyrics": "甜蜜蜜你笑得甜蜜蜜",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "甜蜜蜜 (D调)",
    "notes": "D5 D5 C#5 B4 C#5 D5 E5 C5- B4 B4 A4 G4 A4 B4 C5- D5 D5 C#5 B4 C#5 D5 E5 C5- B4 A4 B4 C#5 B4 A4 G4 E4- E5 E5 D5 C#5 D5 E5 F#5 D5- C#5 C#5 B4 A4 B4 C#5 D5- D5 D5 C#5 B4 C#5 D5 E5 C5- B4 A4 G4 F#4 E4 F#4 G4 G4- C5-",
    "lyrics": "甜蜜蜜 你笑得甜蜜蜜 好像花儿开在春风里 开在春风里 在哪里 在哪里见过你 你的笑容这样熟悉 我一时想不起 啊 梦里梦里见过你 甜蜜笑得多甜蜜 是你 是你 梦见的就是你",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "甜蜜蜜 (A调)",
    "notes": "A5 A5 G#5 F#5 G#5 A5 B5 C5- F#5 F#5 E5 D5 E5 F#5 C5- A5 A5 G#5 F#5 G#5 A5 B5 C5- F#5 E5 F#5 G#5 F#5 E5 D5 E4- B5 B5 A5 G#5 A5 B5 C#6 D5- G#5 G#5 F#5 E5 F#5 G#5 D5- A5 A5 G#5 F#5 G#5 A5 B5 C5- F#5 E5 D5 C#5 B4 C#5 D5 G4- C5-",
    "lyrics": "甜蜜蜜 你笑得甜蜜蜜 好像花儿开在春风里 开在春风里 在哪里 在哪里见过你 你的笑容这样熟悉 我一时想不起 啊 梦里梦里见过你 甜蜜笑得多甜蜜 是你 是你 梦见的就是你",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "甜蜜蜜 (Eb调)",
    "notes": "D#5 D#5 D5 C5 D5 D#5 F5 C5- C5 C5 A#4 G#4 A#4 C5 C5- D#5 D#5 D5 C5 D5 D#5 F5 C5- C5 A#4 C5 D5 C5 A#4 G#4 E4- F5 F5 D#5 D5 D#5 F5 G5 D5- D5 D5 C5 A#4 C5 D5 D5- D#5 D#5 D5 C5 D5 D#5 F5 C5- C5 A#4 G#4 G4 F4 G4 G#4 G4- C5-",
    "lyrics": "甜蜜蜜 你笑得甜蜜蜜 好像花儿开在春风里 开在春风里 在哪里 在哪里见过你 你的笑容这样熟悉 我一时想不起 啊 梦里梦里见过你 甜蜜笑得多甜蜜 是你 是你 梦见的就是你",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "康定情歌",
    "notes": "6 6 5 3 2 5 6 3 5 6 5 3 2-",
    "lyrics": "跑马溜溜的山上",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "康定情歌 (G调)",
    "notes": "6 6 5 3 2 5 6 3 5 6 5 3 2-",
    "lyrics": "跑马溜溜的山上",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "康定情歌 (F调)",
    "notes": "6 6 5 3 2 5 6 3 5 6 5 3 2-",
    "lyrics": "跑马溜溜的山上",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "康定情歌 (D调)",
    "notes": "D5 E5 F#5 D5 E5 F#5 G5- B4 B4 A4 G4 A4 B4 C5- A4 B4 A4 G4 F#4 G4 E4- E4 F#4 A4 B4 A4 G4 E4- D5 E5 F#5 D5 E5 F#5 G5- B4 B4 A4 G4 A4 B4 C5- A4 B4 A4 G4 F#4 G4 E4- E4 F#4 A4 B4 A4 G4 E4- C4-",
    "lyrics": "跑马溜溜的山上 一朵溜溜的云哟 端端溜溜的照在 康定溜溜的城哟 月亮弯弯 康定溜溜的城哟 李家溜溜的大姐 人才溜溜的好哟 张家溜溜的大哥 看上溜溜的她哟 月亮弯弯 看上溜溜的她哟",
    "key": "D",
    "cat": "folk"
  },
  {
    "title": "康定情歌 (A调)",
    "notes": "A5 B5 C#6 A5 B5 C#6 G5- F#5 F#5 E5 D5 E5 F#5 C5- E5 F#5 E5 D5 C#5 D5 E4- B4 C#5 E5 F#5 E5 D5 E4- A5 B5 C#6 A5 B5 C#6 G5- F#5 F#5 E5 D5 E5 F#5 C5- E5 F#5 E5 D5 C#5 D5 E4- B4 C#5 E5 F#5 E5 D5 E4- C4-",
    "lyrics": "跑马溜溜的山上 一朵溜溜的云哟 端端溜溜的照在 康定溜溜的城哟 月亮弯弯 康定溜溜的城哟 李家溜溜的大姐 人才溜溜的好哟 张家溜溜的大哥 看上溜溜的她哟 月亮弯弯 看上溜溜的她哟",
    "key": "A",
    "cat": "folk"
  },
  {
    "title": "康定情歌 (Eb调)",
    "notes": "D#5 F5 G5 D#5 F5 G5 G5- C5 C5 A#4 G#4 A#4 C5 C5- A#4 C5 A#4 G#4 G4 G#4 E4- F4 G4 A#4 C5 A#4 G#4 E4- D#5 F5 G5 D#5 F5 G5 G5- C5 C5 A#4 G#4 A#4 C5 C5- A#4 C5 A#4 G#4 G4 G#4 E4- F4 G4 A#4 C5 A#4 G#4 E4- C4-",
    "lyrics": "跑马溜溜的山上 一朵溜溜的云哟 端端溜溜的照在 康定溜溜的城哟 月亮弯弯 康定溜溜的城哟 李家溜溜的大姐 人才溜溜的好哟 张家溜溜的大哥 看上溜溜的她哟 月亮弯弯 看上溜溜的她哟",
    "key": "Eb",
    "cat": "folk"
  },
  {
    "title": "半个月亮爬上来",
    "notes": "3 5 6 1^ 6 5 3 5 6 1^-",
    "lyrics": "半个月亮爬上来",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "半个月亮爬上来 (G调)",
    "notes": "3 5 6 1^ 6 5 3 5 6 1^-",
    "lyrics": "半个月亮爬上来",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "半个月亮爬上来 (F调)",
    "notes": "3 5 6 1^ 6 5 3 5 6 1^-",
    "lyrics": "半个月亮爬上来",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "半个月亮爬上来 (D调)",
    "notes": "D5 D5 B4 A4 G4 G4 F#4 D4- A4 B4 A4 G4 F#4 G4 G4- D5 D5 B4 A4 G4 G4 F#4 D4- A4 B4 A4 G4 F#4 G4 C4- E5 E5 C#5 B4 A4 A4 G4 E4- B4 C#5 B4 A4 G4 A4 A4- D5 D5 B4 A4 G4 G4 F#4 D4- A4 B4 A4 G4 F#4 G4 C4-",
    "lyrics": "半个月亮爬上来 咿啦啦 爬上来 照着我的姑娘梳妆台 咿啦啦 梳妆台 半个月亮爬上来 咿啦啦 爬上来 为什么我的姑娘不出来 咿啦啦 不出来 请你把那纱窗快打开 咿啦啦 快打开 再把你那玫瑰摘一朵 轻轻的扔下来",
    "key": "D",
    "cat": "folk"
  },
  {
    "title": "半个月亮爬上来 (A调)",
    "notes": "A5 A5 F#5 E5 D5 D5 C#5 D4- E5 F#5 E5 D5 C#5 D5 G4- A5 A5 F#5 E5 D5 D5 C#5 D4- E5 F#5 E5 D5 C#5 D5 C4- B5 B5 G#5 F#5 E5 E5 D5 E4- F#5 G#5 F#5 E5 D5 E5 A4- A5 A5 F#5 E5 D5 D5 C#5 D4- E5 F#5 E5 D5 C#5 D5 C4-",
    "lyrics": "半个月亮爬上来 咿啦啦 爬上来 照着我的姑娘梳妆台 咿啦啦 梳妆台 半个月亮爬上来 咿啦啦 爬上来 为什么我的姑娘不出来 咿啦啦 不出来 请你把那纱窗快打开 咿啦啦 快打开 再把你那玫瑰摘一朵 轻轻的扔下来",
    "key": "A",
    "cat": "folk"
  },
  {
    "title": "半个月亮爬上来 (Eb调)",
    "notes": "D#5 D#5 C5 A#4 G#4 G#4 G4 D4- A#4 C5 A#4 G#4 G4 G#4 G4- D#5 D#5 C5 A#4 G#4 G#4 G4 D4- A#4 C5 A#4 G#4 G4 G#4 C4- F5 F5 D5 C5 A#4 A#4 G#4 E4- C5 D5 C5 A#4 G#4 A#4 A4- D#5 D#5 C5 A#4 G#4 G#4 G4 D4- A#4 C5 A#4 G#4 G4 G#4 C4-",
    "lyrics": "半个月亮爬上来 咿啦啦 爬上来 照着我的姑娘梳妆台 咿啦啦 梳妆台 半个月亮爬上来 咿啦啦 爬上来 为什么我的姑娘不出来 咿啦啦 不出来 请你把那纱窗快打开 咿啦啦 快打开 再把你那玫瑰摘一朵 轻轻的扔下来",
    "key": "Eb",
    "cat": "folk"
  },
  {
    "title": "童年",
    "notes": "G4 B4 B4 A4 G4 A4 B4- C5 C5 C5 B4 A4 B4 C5- D5 D5 C5 B4 A4 G4 A4 G4- G4 A4 B4 C5 B4 A4 G4 A4- G4 B4 B4 A4 G4 A4 B4- C5 C5 C5 B4 A4 B4 C5- D5 D5 C5 B4 A4 G4 A4 G4- G4 A4 B4 C5 B4 A4 G4 A4 G4-",
    "lyrics": "池塘边的榕树上 知了在声声叫着夏天 操场边的秋千上 只有蝴蝶停在上面 黑板上老师的粉笔 还在拼命叽叽喳喳写个不停 等待着下课 等待着放学 等待游戏的童年 福利社里面什么都有 就是口袋里没有半毛钱 诸葛四郎和魔鬼党 到底谁抢到那支宝剑",
    "key": "C",
    "cat": "pop"
  },
  {
    "title": "童年 (G调)",
    "notes": "D5 F#5 F#5 E5 D5 E5 B4- G5 G5 G5 F#5 E5 F#5 C5- A5 A5 G5 F#5 E5 D5 E5 G4- D5 E5 F#5 G5 F#5 E5 D5 A4- D5 F#5 F#5 E5 D5 E5 B4- G5 G5 G5 F#5 E5 F#5 C5- A5 A5 G5 F#5 E5 D5 E5 G4- D5 E5 F#5 G5 F#5 E5 D5 E5 G4-",
    "lyrics": "池塘边的榕树上 知了在声声叫着夏天 操场边的秋千上 只有蝴蝶停在上面 黑板上老师的粉笔 还在拼命叽叽喳喳写个不停 等待着下课 等待着放学 等待游戏的童年 福利社里面什么都有 就是口袋里没有半毛钱 诸葛四郎和魔鬼党 到底谁抢到那支宝剑",
    "key": "G",
    "cat": "pop"
  },
  {
    "title": "童年 (F调)",
    "notes": "C5 E5 E5 D5 C5 D5 B4- F5 F5 F5 E5 D5 E5 C5- G5 G5 F5 E5 D5 C5 D5 G4- C5 D5 E5 F5 E5 D5 C5 A4- C5 E5 E5 D5 C5 D5 B4- F5 F5 F5 E5 D5 E5 C5- G5 G5 F5 E5 D5 C5 D5 G4- C5 D5 E5 F5 E5 D5 C5 D5 G4-",
    "lyrics": "池塘边的榕树上 知了在声声叫着夏天 操场边的秋千上 只有蝴蝶停在上面 黑板上老师的粉笔 还在拼命叽叽喳喳写个不停 等待着下课 等待着放学 等待游戏的童年 福利社里面什么都有 就是口袋里没有半毛钱 诸葛四郎和魔鬼党 到底谁抢到那支宝剑",
    "key": "F",
    "cat": "pop"
  },
  {
    "title": "童年 (D调)",
    "notes": "A4 C#5 C#5 B4 A4 B4 B4- D5 D5 D5 C#5 B4 C#5 C5- E5 E5 D5 C#5 B4 A4 B4 G4- A4 B4 C#5 D5 C#5 B4 A4 A4- A4 C#5 C#5 B4 A4 B4 B4- D5 D5 D5 C#5 B4 C#5 C5- E5 E5 D5 C#5 B4 A4 B4 G4- A4 B4 C#5 D5 C#5 B4 A4 B4 G4-",
    "lyrics": "池塘边的榕树上 知了在声声叫着夏天 操场边的秋千上 只有蝴蝶停在上面 黑板上老师的粉笔 还在拼命叽叽喳喳写个不停 等待着下课 等待着放学 等待游戏的童年 福利社里面什么都有 就是口袋里没有半毛钱 诸葛四郎和魔鬼党 到底谁抢到那支宝剑",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "童年 (A调)",
    "notes": "E5 G#5 G#5 F#5 E5 F#5 B4- A5 A5 A5 G#5 F#5 G#5 C5- B5 B5 A5 G#5 F#5 E5 F#5 G4- E5 F#5 G#5 A5 G#5 F#5 E5 A4- E5 G#5 G#5 F#5 E5 F#5 B4- A5 A5 A5 G#5 F#5 G#5 C5- B5 B5 A5 G#5 F#5 E5 F#5 G4- E5 F#5 G#5 A5 G#5 F#5 E5 F#5 G4-",
    "lyrics": "池塘边的榕树上 知了在声声叫着夏天 操场边的秋千上 只有蝴蝶停在上面 黑板上老师的粉笔 还在拼命叽叽喳喳写个不停 等待着下课 等待着放学 等待游戏的童年 福利社里面什么都有 就是口袋里没有半毛钱 诸葛四郎和魔鬼党 到底谁抢到那支宝剑",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "童年 (Eb调)",
    "notes": "A#4 D5 D5 C5 A#4 C5 B4- D#5 D#5 D#5 D5 C5 D5 C5- F5 F5 D#5 D5 C5 A#4 C5 G4- A#4 C5 D5 D#5 D5 C5 A#4 A4- A#4 D5 D5 C5 A#4 C5 B4- D#5 D#5 D#5 D5 C5 D5 C5- F5 F5 D#5 D5 C5 A#4 C5 G4- A#4 C5 D5 D#5 D5 C5 A#4 C5 G4-",
    "lyrics": "池塘边的榕树上 知了在声声叫着夏天 操场边的秋千上 只有蝴蝶停在上面 黑板上老师的粉笔 还在拼命叽叽喳喳写个不停 等待着下课 等待着放学 等待游戏的童年 福利社里面什么都有 就是口袋里没有半毛钱 诸葛四郎和魔鬼党 到底谁抢到那支宝剑",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "月亮代表我的心",
    "notes": "3 5 1^ 7 6 5 3 2 1 2 3 5-",
    "lyrics": "你问我爱你有多深",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "月亮代表我的心 (G调)",
    "notes": "3 5 1^ 7 6 5 3 2 1 2 3 5-",
    "lyrics": "你问我爱你有多深",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "月亮代表我的心 (F调)",
    "notes": "3 5 1^ 7 6 5 3 2 1 2 3 5-",
    "lyrics": "你问我爱你有多深",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "月亮代表我的心 (D调)",
    "notes": "D5 D5 C#5 B4 A4 G4 F#4 D4- D5 D5 C#5 B4 A4 G4 F#4 D4- B4 B4 A4 G4 F#4 G4 E4- E4 F#4 G4 A4 B4 C#5 C5- A4 A4 G4 F#4 E4 F#4 F4- B4 B4 A4 G4 F#4 G4 E4- D5 D5 C#5 B4 A4 G4 F#4 D4- B4 A4 G4 F#4 E4 F#4 G4 G4- C5-",
    "lyrics": "你问我爱你有多深 我爱你有几分 我的情也真 我的爱也真 月亮代表我的心 轻轻的一个吻 已经打动我的心 深深的一段情 教我思念到如今 你问我爱你有多深 我爱你有几分 你去想一想 你去看一看 月亮代表我的心",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "月亮代表我的心 (A调)",
    "notes": "A5 A5 G#5 F#5 E5 D5 C#5 D4- A5 A5 G#5 F#5 E5 D5 C#5 D4- F#5 F#5 E5 D5 C#5 D5 E4- B4 C#5 D5 E5 F#5 G#5 C5- E5 E5 D5 C#5 B4 C#5 F4- F#5 F#5 E5 D5 C#5 D5 E4- A5 A5 G#5 F#5 E5 D5 C#5 D4- F#5 E5 D5 C#5 B4 C#5 D5 G4- C5-",
    "lyrics": "你问我爱你有多深 我爱你有几分 我的情也真 我的爱也真 月亮代表我的心 轻轻的一个吻 已经打动我的心 深深的一段情 教我思念到如今 你问我爱你有多深 我爱你有几分 你去想一想 你去看一看 月亮代表我的心",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "月亮代表我的心 (Eb调)",
    "notes": "D#5 D#5 D5 C5 A#4 G#4 G4 D4- D#5 D#5 D5 C5 A#4 G#4 G4 D4- C5 C5 A#4 G#4 G4 G#4 E4- F4 G4 G#4 A#4 C5 D5 C5- A#4 A#4 G#4 G4 F4 G4 F4- C5 C5 A#4 G#4 G4 G#4 E4- D#5 D#5 D5 C5 A#4 G#4 G4 D4- C5 A#4 G#4 G4 F4 G4 G#4 G4- C5-",
    "lyrics": "你问我爱你有多深 我爱你有几分 我的情也真 我的爱也真 月亮代表我的心 轻轻的一个吻 已经打动我的心 深深的一段情 教我思念到如今 你问我爱你有多深 我爱你有几分 你去想一想 你去看一看 月亮代表我的心",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "成都",
    "notes": "3 5 6 1^ 6 5 3 2 3 5 6-",
    "lyrics": "和我在成都的街头走一走",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "成都 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5 6-",
    "lyrics": "和我在成都的街头走一走",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "成都 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5 6-",
    "lyrics": "和我在成都的街头走一走",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "成都 (D调)",
    "notes": "D5 C#5 B4 A4 G4 F#4 E4 C4- D5 C#5 B4 A4 G4 F#4 E4 C4- G4 G4 A4 A4 B4 B4 A4 F4- F#4 F#4 G4 G4 A4 A4 A4- E5 E5 D5 C#5 B4 A4 G4 E4- G5 G5 F#5 E5 D5 C#5 B4 G4- G4 G4 A4 A4 B4 B4 A4 F4- F#4 F#4 E4 E4 D4 D4 E4 E4- C5-",
    "lyrics": "和我在成都的街头走一走 喔哦喔哦 直到所有的灯都熄灭了也不停留 你会挽着我的衣袖 我会把手揣进裤兜 走到玉林路的尽头 坐在小酒馆的门口 分别总是在九月 回忆是思念的愁 深秋嫩绿的垂柳 亲吻着我额头",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "成都 (A调)",
    "notes": "A5 G#5 F#5 E5 D5 C#5 B4 C4- A5 G#5 F#5 E5 D5 C#5 B4 C4- D5 D5 E5 E5 F#5 F#5 E5 F4- C#5 C#5 D5 D5 E5 E5 A4- B5 B5 A5 G#5 F#5 E5 D5 E4- D6 D6 C#6 B5 A5 G#5 F#5 G4- D5 D5 E5 E5 F#5 F#5 E5 F4- C#5 C#5 B4 B4 A4 A4 B4 E4- C5-",
    "lyrics": "和我在成都的街头走一走 喔哦喔哦 直到所有的灯都熄灭了也不停留 你会挽着我的衣袖 我会把手揣进裤兜 走到玉林路的尽头 坐在小酒馆的门口 分别总是在九月 回忆是思念的愁 深秋嫩绿的垂柳 亲吻着我额头",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "成都 (Eb调)",
    "notes": "D#5 D5 C5 A#4 G#4 G4 F4 C4- D#5 D5 C5 A#4 G#4 G4 F4 C4- G#4 G#4 A#4 A#4 C5 C5 A#4 F4- G4 G4 G#4 G#4 A#4 A#4 A4- F5 F5 D#5 D5 C5 A#4 G#4 E4- G#5 G#5 G5 F5 D#5 D5 C5 G4- G#4 G#4 A#4 A#4 C5 C5 A#4 F4- G4 G4 F4 F4 D#4 D#4 F4 E4- C5-",
    "lyrics": "和我在成都的街头走一走 喔哦喔哦 直到所有的灯都熄灭了也不停留 你会挽着我的衣袖 我会把手揣进裤兜 走到玉林路的尽头 坐在小酒馆的门口 分别总是在九月 回忆是思念的愁 深秋嫩绿的垂柳 亲吻着我额头",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "光辉岁月",
    "notes": "G4 A4 B4 G4 A4 B4 C5 D5- G4 A4 B4 G4 A4 B4 C5 D5- E4 E4 F4 F4 G4 G4 A4 A4- B4 B4 A4 G4 F4 E4 D4 C4- C5 B4 A4 G4 A4 B4 C5 D5- C5 B4 A4 G4 A4 B4 C5 D5- E5 D5 C5 B4 A4 G4 F4 E4- D5 C5 B4 A4 G4 F4 E4 D4- C4-",
    "lyrics": "钟声响起归家的讯号 在他生命里 仿佛带点唏嘘 黑色肌肤给他的意义 是一生奉献 肤色斗争中 年月把拥有变做失去 疲倦的双眼带着期望 今天只有残留的躯壳 迎接光辉岁月 风雨中抱紧自由 一生经过彷徨的挣扎 自信可改变未来 问谁又能做到",
    "key": "C",
    "cat": "pop"
  },
  {
    "title": "光辉岁月 (G调)",
    "notes": "D5 E5 F#5 D5 E5 F#5 G5 D5- D5 E5 F#5 D5 E5 F#5 G5 D5- B4 B4 C5 C5 D5 D5 E5 A4- F#5 F#5 E5 D5 C5 B4 A4 C4- G5 F#5 E5 D5 E5 F#5 G5 D5- G5 F#5 E5 D5 E5 F#5 G5 D5- B5 A5 G5 F#5 E5 D5 C5 E4- A5 G5 F#5 E5 D5 C5 B4 D4- C4-",
    "lyrics": "钟声响起归家的讯号 在他生命里 仿佛带点唏嘘 黑色肌肤给他的意义 是一生奉献 肤色斗争中 年月把拥有变做失去 疲倦的双眼带着期望 今天只有残留的躯壳 迎接光辉岁月 风雨中抱紧自由 一生经过彷徨的挣扎 自信可改变未来 问谁又能做到",
    "key": "G",
    "cat": "pop"
  },
  {
    "title": "光辉岁月 (F调)",
    "notes": "C5 D5 E5 C5 D5 E5 F5 D5- C5 D5 E5 C5 D5 E5 F5 D5- A4 A4 A#4 A#4 C5 C5 D5 A4- E5 E5 D5 C5 A#4 A4 G4 C4- F5 E5 D5 C5 D5 E5 F5 D5- F5 E5 D5 C5 D5 E5 F5 D5- A5 G5 F5 E5 D5 C5 A#4 E4- G5 F5 E5 D5 C5 A#4 A4 D4- C4-",
    "lyrics": "钟声响起归家的讯号 在他生命里 仿佛带点唏嘘 黑色肌肤给他的意义 是一生奉献 肤色斗争中 年月把拥有变做失去 疲倦的双眼带着期望 今天只有残留的躯壳 迎接光辉岁月 风雨中抱紧自由 一生经过彷徨的挣扎 自信可改变未来 问谁又能做到",
    "key": "F",
    "cat": "pop"
  },
  {
    "title": "光辉岁月 (D调)",
    "notes": "A4 B4 C#5 A4 B4 C#5 D5 D5- A4 B4 C#5 A4 B4 C#5 D5 D5- F#4 F#4 G4 G4 A4 A4 B4 A4- C#5 C#5 B4 A4 G4 F#4 E4 C4- D5 C#5 B4 A4 B4 C#5 D5 D5- D5 C#5 B4 A4 B4 C#5 D5 D5- F#5 E5 D5 C#5 B4 A4 G4 E4- E5 D5 C#5 B4 A4 G4 F#4 D4- C4-",
    "lyrics": "钟声响起归家的讯号 在他生命里 仿佛带点唏嘘 黑色肌肤给他的意义 是一生奉献 肤色斗争中 年月把拥有变做失去 疲倦的双眼带着期望 今天只有残留的躯壳 迎接光辉岁月 风雨中抱紧自由 一生经过彷徨的挣扎 自信可改变未来 问谁又能做到",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "光辉岁月 (A调)",
    "notes": "E5 F#5 G#5 E5 F#5 G#5 A5 D5- E5 F#5 G#5 E5 F#5 G#5 A5 D5- C#5 C#5 D5 D5 E5 E5 F#5 A4- G#5 G#5 F#5 E5 D5 C#5 B4 C4- A5 G#5 F#5 E5 F#5 G#5 A5 D5- A5 G#5 F#5 E5 F#5 G#5 A5 D5- C#6 B5 A5 G#5 F#5 E5 D5 E4- B5 A5 G#5 F#5 E5 D5 C#5 D4- C4-",
    "lyrics": "钟声响起归家的讯号 在他生命里 仿佛带点唏嘘 黑色肌肤给他的意义 是一生奉献 肤色斗争中 年月把拥有变做失去 疲倦的双眼带着期望 今天只有残留的躯壳 迎接光辉岁月 风雨中抱紧自由 一生经过彷徨的挣扎 自信可改变未来 问谁又能做到",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "光辉岁月 (Eb调)",
    "notes": "A#4 C5 D5 A#4 C5 D5 D#5 D5- A#4 C5 D5 A#4 C5 D5 D#5 D5- G4 G4 G#4 G#4 A#4 A#4 C5 A4- D5 D5 C5 A#4 G#4 G4 F4 C4- D#5 D5 C5 A#4 C5 D5 D#5 D5- D#5 D5 C5 A#4 C5 D5 D#5 D5- G5 F5 D#5 D5 C5 A#4 G#4 E4- F5 D#5 D5 C5 A#4 G#4 G4 D4- C4-",
    "lyrics": "钟声响起归家的讯号 在他生命里 仿佛带点唏嘘 黑色肌肤给他的意义 是一生奉献 肤色斗争中 年月把拥有变做失去 疲倦的双眼带着期望 今天只有残留的躯壳 迎接光辉岁月 风雨中抱紧自由 一生经过彷徨的挣扎 自信可改变未来 问谁又能做到",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "海阔天空",
    "notes": "D5 C5 B4 A4 G4 F4 E4 D4- D5 C5 B4 A4 G4 F4 E4 D4- C5 B4 A4 G4 F4 E4 D4 C4- G4 A4 B4 C5 B4 A4 G4 E4- F4 F4 G4 G4 A4 A4 B4 B4- C5 C5 D5 D5 E5 E5 F5- E5 E5 D5 D5 C5 C5 B4 B4- A4 A4 G4 F4 E4 D4 C4-",
    "lyrics": "今天我 寒夜里看雪飘过 怀着冷却了的心窝飘远方 风雨里追赶 雾里分不清影踪 天空海阔你与我 可会变 谁没在变 多少次 迎着冷眼与嘲笑 从没有放弃过心中的理想 一刹那恍惚 若有所失的感觉 不知不觉已变淡 心里爱 原谅我这一生不羁放纵爱自由",
    "key": "C",
    "cat": "pop"
  },
  {
    "title": "海阔天空 (G调)",
    "notes": "A5 G5 F#5 E5 D5 C5 B4 D4- A5 G5 F#5 E5 D5 C5 B4 D4- G5 F#5 E5 D5 C5 B4 A4 C4- D5 E5 F#5 G5 F#5 E5 D5 E4- C5 C5 D5 D5 E5 E5 F#5 B4- G5 G5 A5 A5 B5 B5 F5- B5 B5 A5 A5 G5 G5 F#5 B4- E5 E5 D5 C5 B4 A4 C4-",
    "lyrics": "今天我 寒夜里看雪飘过 怀着冷却了的心窝飘远方 风雨里追赶 雾里分不清影踪 天空海阔你与我 可会变 谁没在变 多少次 迎着冷眼与嘲笑 从没有放弃过心中的理想 一刹那恍惚 若有所失的感觉 不知不觉已变淡 心里爱 原谅我这一生不羁放纵爱自由",
    "key": "G",
    "cat": "pop"
  },
  {
    "title": "海阔天空 (F调)",
    "notes": "G5 F5 E5 D5 C5 A#4 A4 D4- G5 F5 E5 D5 C5 A#4 A4 D4- F5 E5 D5 C5 A#4 A4 G4 C4- C5 D5 E5 F5 E5 D5 C5 E4- A#4 A#4 C5 C5 D5 D5 E5 B4- F5 F5 G5 G5 A5 A5 F5- A5 A5 G5 G5 F5 F5 E5 B4- D5 D5 C5 A#4 A4 G4 C4-",
    "lyrics": "今天我 寒夜里看雪飘过 怀着冷却了的心窝飘远方 风雨里追赶 雾里分不清影踪 天空海阔你与我 可会变 谁没在变 多少次 迎着冷眼与嘲笑 从没有放弃过心中的理想 一刹那恍惚 若有所失的感觉 不知不觉已变淡 心里爱 原谅我这一生不羁放纵爱自由",
    "key": "F",
    "cat": "pop"
  },
  {
    "title": "海阔天空 (D调)",
    "notes": "E5 D5 C#5 B4 A4 G4 F#4 D4- E5 D5 C#5 B4 A4 G4 F#4 D4- D5 C#5 B4 A4 G4 F#4 E4 C4- A4 B4 C#5 D5 C#5 B4 A4 E4- G4 G4 A4 A4 B4 B4 C#5 B4- D5 D5 E5 E5 F#5 F#5 F5- F#5 F#5 E5 E5 D5 D5 C#5 B4- B4 B4 A4 G4 F#4 E4 C4-",
    "lyrics": "今天我 寒夜里看雪飘过 怀着冷却了的心窝飘远方 风雨里追赶 雾里分不清影踪 天空海阔你与我 可会变 谁没在变 多少次 迎着冷眼与嘲笑 从没有放弃过心中的理想 一刹那恍惚 若有所失的感觉 不知不觉已变淡 心里爱 原谅我这一生不羁放纵爱自由",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "海阔天空 (A调)",
    "notes": "B5 A5 G#5 F#5 E5 D5 C#5 D4- B5 A5 G#5 F#5 E5 D5 C#5 D4- A5 G#5 F#5 E5 D5 C#5 B4 C4- E5 F#5 G#5 A5 G#5 F#5 E5 E4- D5 D5 E5 E5 F#5 F#5 G#5 B4- A5 A5 B5 B5 C#6 C#6 F5- C#6 C#6 B5 B5 A5 A5 G#5 B4- F#5 F#5 E5 D5 C#5 B4 C4-",
    "lyrics": "今天我 寒夜里看雪飘过 怀着冷却了的心窝飘远方 风雨里追赶 雾里分不清影踪 天空海阔你与我 可会变 谁没在变 多少次 迎着冷眼与嘲笑 从没有放弃过心中的理想 一刹那恍惚 若有所失的感觉 不知不觉已变淡 心里爱 原谅我这一生不羁放纵爱自由",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "海阔天空 (Eb调)",
    "notes": "F5 D#5 D5 C5 A#4 G#4 G4 D4- F5 D#5 D5 C5 A#4 G#4 G4 D4- D#5 D5 C5 A#4 G#4 G4 F4 C4- A#4 C5 D5 D#5 D5 C5 A#4 E4- G#4 G#4 A#4 A#4 C5 C5 D5 B4- D#5 D#5 F5 F5 G5 G5 F5- G5 G5 F5 F5 D#5 D#5 D5 B4- C5 C5 A#4 G#4 G4 F4 C4-",
    "lyrics": "今天我 寒夜里看雪飘过 怀着冷却了的心窝飘远方 风雨里追赶 雾里分不清影踪 天空海阔你与我 可会变 谁没在变 多少次 迎着冷眼与嘲笑 从没有放弃过心中的理想 一刹那恍惚 若有所失的感觉 不知不觉已变淡 心里爱 原谅我这一生不羁放纵爱自由",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "天空之城",
    "notes": "C5 E5 G5 A5 G5 E5 C5- B4 D5 F5 G5 F5 D5 B4- A4 C5 E5 G5 E5 C5 A4- G4 B4 D5 G5 D5 B4 G4- E5 G5 B5 E6 B5 G5 E5- D5 F5 A5 D6 A5 F5 D5- C5 E5 G5 C6 G5 E5 C5- B4 D5 F5 B5 F5 D5 B4- A4-",
    "lyrics": "我看见 一座座山 一座座山川 一座座山川相连 呀啦索 那就是青藏高原 ——间奏—— 我看见 一座座山 一座座山川 一座座山川相连 呀啦索 那就是青藏高原",
    "key": "C",
    "cat": "pop"
  },
  {
    "title": "天空之城 (G调)",
    "notes": "G5 B5 D6 E6 D6 B5 C5- F#5 A5 C6 D6 C6 A5 B4- E5 G5 B5 D6 B5 G5 A4- D5 F#5 A5 D6 A5 F#5 G4- B5 D6 F#6 B6 F#6 D6 E5- A5 C6 E6 A6 E6 C6 D5- G5 B5 D6 G6 D6 B5 C5- F#5 A5 C6 F#6 C6 A5 B4- A4-",
    "lyrics": "我看见 一座座山 一座座山川 一座座山川相连 呀啦索 那就是青藏高原 ——间奏—— 我看见 一座座山 一座座山川 一座座山川相连 呀啦索 那就是青藏高原",
    "key": "G",
    "cat": "pop"
  },
  {
    "title": "天空之城 (F调)",
    "notes": "F5 A5 C6 D6 C6 A5 C5- E5 G5 A#5 C6 A#5 G5 B4- D5 F5 A5 C6 A5 F5 A4- C5 E5 G5 C6 G5 E5 G4- A5 C6 E6 A6 E6 C6 E5- G5 A#5 D6 G6 D6 A#5 D5- F5 A5 C6 F6 C6 A5 C5- E5 G5 A#5 E6 A#5 G5 B4- A4-",
    "lyrics": "我看见 一座座山 一座座山川 一座座山川相连 呀啦索 那就是青藏高原 ——间奏—— 我看见 一座座山 一座座山川 一座座山川相连 呀啦索 那就是青藏高原",
    "key": "F",
    "cat": "pop"
  },
  {
    "title": "天空之城 (D调)",
    "notes": "D5 F#5 A5 B5 A5 F#5 C5- C#5 E5 G5 A5 G5 E5 B4- B4 D5 F#5 A5 F#5 D5 A4- A4 C#5 E5 A5 E5 C#5 G4- F#5 A5 C#6 F#6 C#6 A5 E5- E5 G5 B5 E6 B5 G5 D5- D5 F#5 A5 D6 A5 F#5 C5- C#5 E5 G5 C#6 G5 E5 B4- A4-",
    "lyrics": "我看见 一座座山 一座座山川 一座座山川相连 呀啦索 那就是青藏高原 ——间奏—— 我看见 一座座山 一座座山川 一座座山川相连 呀啦索 那就是青藏高原",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "天空之城 (A调)",
    "notes": "A5 C#6 E6 F#6 E6 C#6 C5- G#5 B5 D6 E6 D6 B5 B4- F#5 A5 C#6 E6 C#6 A5 A4- E5 G#5 B5 E6 B5 G#5 G4- C#6 E6 G#6 C#7 G#6 E6 E5- B5 D6 F#6 B6 F#6 D6 D5- A5 C#6 E6 A6 E6 C#6 C5- G#5 B5 D6 G#6 D6 B5 B4- A4-",
    "lyrics": "我看见 一座座山 一座座山川 一座座山川相连 呀啦索 那就是青藏高原 ——间奏—— 我看见 一座座山 一座座山川 一座座山川相连 呀啦索 那就是青藏高原",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "天空之城 (Eb调)",
    "notes": "D#5 G5 A#5 C6 A#5 G5 C5- D5 F5 G#5 A#5 G#5 F5 B4- C5 D#5 G5 A#5 G5 D#5 A4- A#4 D5 F5 A#5 F5 D5 G4- G5 A#5 D6 G6 D6 A#5 E5- F5 G#5 C6 F6 C6 G#5 D5- D#5 G5 A#5 D#6 A#5 G5 C5- D5 F5 G#5 D6 G#5 F5 B4- A4-",
    "lyrics": "我看见 一座座山 一座座山川 一座座山川相连 呀啦索 那就是青藏高原 ——间奏—— 我看见 一座座山 一座座山川 一座座山川相连 呀啦索 那就是青藏高原",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "小幸运",
    "notes": "1 2 3 4 5 4 3 2 1 2 3 5-",
    "lyrics": "我听见雨滴落在青青草地",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "小幸运 (G调)",
    "notes": "1 2 3 4 5 4 3 2 1 2 3 5-",
    "lyrics": "我听见雨滴落在青青草地",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "小幸运 (F调)",
    "notes": "1 2 3 4 5 4 3 2 1 2 3 5-",
    "lyrics": "我听见雨滴落在青青草地",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "小幸运 (D调)",
    "notes": "D5 C#5 B4 A4 G4 F#4 E4 C4- D5 C#5 B4 A4 G4 F#4 E4 C4- B4 B4 A4 G4 F#4 F#4 E4 D4- E4 F#4 G4 A4 B4 C#5 C5- A4 A4 B4 B4 C#5 C#5 D5 C5- D5 D5 C#5 C#5 B4 B4 A4 G4- G4 G4 A4 A4 B4 B4 A4 F4- F#4 F#4 E4 E4 D4 D4 E4 E4- C5-",
    "lyrics": "我听见雨滴落在青青草地 我听见远方下课钟声响起 可是我没有听见你的声音 认真 呼唤我姓名 爱上你的时候还不懂感情 离别了才觉得刻骨铭心 为什么没有发现遇见了你 是生命最好的事情",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "小幸运 (A调)",
    "notes": "A5 G#5 F#5 E5 D5 C#5 B4 C4- A5 G#5 F#5 E5 D5 C#5 B4 C4- F#5 F#5 E5 D5 C#5 C#5 B4 D4- B4 C#5 D5 E5 F#5 G#5 C5- E5 E5 F#5 F#5 G#5 G#5 A5 C5- A5 A5 G#5 G#5 F#5 F#5 E5 G4- D5 D5 E5 E5 F#5 F#5 E5 F4- C#5 C#5 B4 B4 A4 A4 B4 E4- C5-",
    "lyrics": "我听见雨滴落在青青草地 我听见远方下课钟声响起 可是我没有听见你的声音 认真 呼唤我姓名 爱上你的时候还不懂感情 离别了才觉得刻骨铭心 为什么没有发现遇见了你 是生命最好的事情",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "小幸运 (Eb调)",
    "notes": "D#5 D5 C5 A#4 G#4 G4 F4 C4- D#5 D5 C5 A#4 G#4 G4 F4 C4- C5 C5 A#4 G#4 G4 G4 F4 D4- F4 G4 G#4 A#4 C5 D5 C5- A#4 A#4 C5 C5 D5 D5 D#5 C5- D#5 D#5 D5 D5 C5 C5 A#4 G4- G#4 G#4 A#4 A#4 C5 C5 A#4 F4- G4 G4 F4 F4 D#4 D#4 F4 E4- C5-",
    "lyrics": "我听见雨滴落在青青草地 我听见远方下课钟声响起 可是我没有听见你的声音 认真 呼唤我姓名 爱上你的时候还不懂感情 离别了才觉得刻骨铭心 为什么没有发现遇见了你 是生命最好的事情",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "欢乐颂",
    "notes": "3 3 4 5 5 4 3 2 1 1 2 3-",
    "lyrics": "Ode an die Freude",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "欢乐颂 (G调)",
    "notes": "3 3 4 5 5 4 3 2 1 1 2 3-",
    "lyrics": "Ode an die Freude",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "欢乐颂 (F调)",
    "notes": "3 3 4 5 5 4 3 2 1 1 2 3-",
    "lyrics": "Ode an die Freude",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "欢乐颂 (D调)",
    "notes": "F#4 F#4 G4 A4 A4 G4 F#4 D4- D4 D4 E4 F#4 F#4 E4 D4- F#4 F#4 G4 A4 A4 G4 F#4 D4- D4 D4 E4 F#4 E4 D4 C4- E4 E4 F#4 D4 E4 F#4 G4 D4- F#4 G4 A4 F#4 G4 A4 B4 G4- F#4 F#4 G4 A4 A4 G4 F#4 D4- D4 D4 E4 F#4 E4 D4 C4-",
    "lyrics": "欢乐女神 圣洁美丽 灿烂光芒照大地 我们心中充满热情 来到你的圣殿里 你的力量能使人们 消除一切分歧 在你光辉照耀下面 人类团结成兄弟 欢乐女神 圣洁美丽 灿烂光芒照大地 我们心中充满热情 来到你的圣殿里",
    "key": "D",
    "cat": "classical"
  },
  {
    "title": "欢乐颂 (A调)",
    "notes": "C#5 C#5 D5 E5 E5 D5 C#5 D4- A4 A4 B4 C#5 C#5 B4 D4- C#5 C#5 D5 E5 E5 D5 C#5 D4- A4 A4 B4 C#5 B4 A4 C4- B4 B4 C#5 A4 B4 C#5 D5 D4- C#5 D5 E5 C#5 D5 E5 F#5 G4- C#5 C#5 D5 E5 E5 D5 C#5 D4- A4 A4 B4 C#5 B4 A4 C4-",
    "lyrics": "欢乐女神 圣洁美丽 灿烂光芒照大地 我们心中充满热情 来到你的圣殿里 你的力量能使人们 消除一切分歧 在你光辉照耀下面 人类团结成兄弟 欢乐女神 圣洁美丽 灿烂光芒照大地 我们心中充满热情 来到你的圣殿里",
    "key": "A",
    "cat": "classical"
  },
  {
    "title": "欢乐颂 (Eb调)",
    "notes": "G4 G4 G#4 A#4 A#4 G#4 G4 D4- D#4 D#4 F4 G4 G4 F4 D4- G4 G4 G#4 A#4 A#4 G#4 G4 D4- D#4 D#4 F4 G4 F4 D#4 C4- F4 F4 G4 D#4 F4 G4 G#4 D4- G4 G#4 A#4 G4 G#4 A#4 C5 G4- G4 G4 G#4 A#4 A#4 G#4 G4 D4- D#4 D#4 F4 G4 F4 D#4 C4-",
    "lyrics": "欢乐女神 圣洁美丽 灿烂光芒照大地 我们心中充满热情 来到你的圣殿里 你的力量能使人们 消除一切分歧 在你光辉照耀下面 人类团结成兄弟 欢乐女神 圣洁美丽 灿烂光芒照大地 我们心中充满热情 来到你的圣殿里",
    "key": "Eb",
    "cat": "classical"
  },
  {
    "title": "雪绒花 Edelweiss",
    "notes": "C5 C5 C5 D5 E5- D5 C5 A4 G4- C5 C5 C5 D5 E5- D5 C5 A4 A4- B4 B4 B4 A4 G4- A4 B4 C5 D5- C5 C5 C5 D5 E5- D5 C5 A4 G4- C5 C5 C5 D5 E5- D5 C5 A4 A4- B4 B4 B4 A4 G4- A4 B4 C5 D5- E5 D5 C5 B4 A4 G4 F4 E4- D5 C5 B4 A4 G4 F4 E4 D4- C4-",
    "lyrics": "雪绒花 雪绒花 每天清晨迎接我 小而白 洁又亮 见到我很快乐 愿你永远盛开芬芳 永远年轻成长 雪绒花 雪绒花 愿你永远绽放 雪绒花 雪绒花 每天清晨迎接我 小而白 洁又亮 见到我很快乐",
    "key": "C",
    "cat": "classical"
  },
  {
    "title": "雪绒花 Edelweiss (G调)",
    "notes": "G5 G5 G5 A5 E5- A5 G5 E5 G4- G5 G5 G5 A5 E5- A5 G5 E5 A4- F#5 F#5 F#5 E5 G4- E5 F#5 G5 D5- G5 G5 G5 A5 E5- A5 G5 E5 G4- G5 G5 G5 A5 E5- A5 G5 E5 A4- F#5 F#5 F#5 E5 G4- E5 F#5 G5 D5- B5 A5 G5 F#5 E5 D5 C5 E4- A5 G5 F#5 E5 D5 C5 B4 D4- C4-",
    "lyrics": "雪绒花 雪绒花 每天清晨迎接我 小而白 洁又亮 见到我很快乐 愿你永远盛开芬芳 永远年轻成长 雪绒花 雪绒花 愿你永远绽放 雪绒花 雪绒花 每天清晨迎接我 小而白 洁又亮 见到我很快乐",
    "key": "G",
    "cat": "classical"
  },
  {
    "title": "雪绒花 Edelweiss (F调)",
    "notes": "F5 F5 F5 G5 E5- G5 F5 D5 G4- F5 F5 F5 G5 E5- G5 F5 D5 A4- E5 E5 E5 D5 G4- D5 E5 F5 D5- F5 F5 F5 G5 E5- G5 F5 D5 G4- F5 F5 F5 G5 E5- G5 F5 D5 A4- E5 E5 E5 D5 G4- D5 E5 F5 D5- A5 G5 F5 E5 D5 C5 A#4 E4- G5 F5 E5 D5 C5 A#4 A4 D4- C4-",
    "lyrics": "雪绒花 雪绒花 每天清晨迎接我 小而白 洁又亮 见到我很快乐 愿你永远盛开芬芳 永远年轻成长 雪绒花 雪绒花 愿你永远绽放 雪绒花 雪绒花 每天清晨迎接我 小而白 洁又亮 见到我很快乐",
    "key": "F",
    "cat": "classical"
  },
  {
    "title": "雪绒花 Edelweiss (D调)",
    "notes": "D5 D5 D5 E5 E5- E5 D5 B4 G4- D5 D5 D5 E5 E5- E5 D5 B4 A4- C#5 C#5 C#5 B4 G4- B4 C#5 D5 D5- D5 D5 D5 E5 E5- E5 D5 B4 G4- D5 D5 D5 E5 E5- E5 D5 B4 A4- C#5 C#5 C#5 B4 G4- B4 C#5 D5 D5- F#5 E5 D5 C#5 B4 A4 G4 E4- E5 D5 C#5 B4 A4 G4 F#4 D4- C4-",
    "lyrics": "雪绒花 雪绒花 每天清晨迎接我 小而白 洁又亮 见到我很快乐 愿你永远盛开芬芳 永远年轻成长 雪绒花 雪绒花 愿你永远绽放 雪绒花 雪绒花 每天清晨迎接我 小而白 洁又亮 见到我很快乐",
    "key": "D",
    "cat": "classical"
  },
  {
    "title": "雪绒花 Edelweiss (A调)",
    "notes": "A5 A5 A5 B5 E5- B5 A5 F#5 G4- A5 A5 A5 B5 E5- B5 A5 F#5 A4- G#5 G#5 G#5 F#5 G4- F#5 G#5 A5 D5- A5 A5 A5 B5 E5- B5 A5 F#5 G4- A5 A5 A5 B5 E5- B5 A5 F#5 A4- G#5 G#5 G#5 F#5 G4- F#5 G#5 A5 D5- C#6 B5 A5 G#5 F#5 E5 D5 E4- B5 A5 G#5 F#5 E5 D5 C#5 D4- C4-",
    "lyrics": "雪绒花 雪绒花 每天清晨迎接我 小而白 洁又亮 见到我很快乐 愿你永远盛开芬芳 永远年轻成长 雪绒花 雪绒花 愿你永远绽放 雪绒花 雪绒花 每天清晨迎接我 小而白 洁又亮 见到我很快乐",
    "key": "A",
    "cat": "classical"
  },
  {
    "title": "雪绒花 Edelweiss (Eb调)",
    "notes": "D#5 D#5 D#5 F5 E5- F5 D#5 C5 G4- D#5 D#5 D#5 F5 E5- F5 D#5 C5 A4- D5 D5 D5 C5 G4- C5 D5 D#5 D5- D#5 D#5 D#5 F5 E5- F5 D#5 C5 G4- D#5 D#5 D#5 F5 E5- F5 D#5 C5 A4- D5 D5 D5 C5 G4- C5 D5 D#5 D5- G5 F5 D#5 D5 C5 A#4 G#4 E4- F5 D#5 D5 C5 A#4 G#4 G4 D4- C4-",
    "lyrics": "雪绒花 雪绒花 每天清晨迎接我 小而白 洁又亮 见到我很快乐 愿你永远盛开芬芳 永远年轻成长 雪绒花 雪绒花 愿你永远绽放 雪绒花 雪绒花 每天清晨迎接我 小而白 洁又亮 见到我很快乐",
    "key": "Eb",
    "cat": "classical"
  },
  {
    "title": "友谊地久天长",
    "notes": "F4 A4 C5 A4 G4 F4 D4- C4 E4 F4 G4 A4 A4- F4 A4 C5 A4 G4 F4 D4- C4 E4 D4 F4 E4 D4 C4- F4 A4 C5 A4 G4 F4 D4- C4 E4 F4 G4 A4 A4- F4 A4 C5 A4 G4 F4 D4- C4 E4 D4 F4 E4 D4 C4-",
    "lyrics": "怎能忘记旧日朋友 心中能不怀想 旧日朋友岂能相忘 友谊地久天长 我们曾经终日游荡 在故乡的青山上 我们也曾历尽苦辛 到处奔波流浪 友谊万岁 朋友友谊万岁 举杯痛饮同声歌唱 友谊地久天长",
    "key": "C",
    "cat": "folk"
  },
  {
    "title": "友谊地久天长 (G调)",
    "notes": "C5 E5 G5 E5 D5 C5 D4- G4 B4 C5 D5 E5 A4- C5 E5 G5 E5 D5 C5 D4- G4 B4 A4 C5 B4 A4 C4- C5 E5 G5 E5 D5 C5 D4- G4 B4 C5 D5 E5 A4- C5 E5 G5 E5 D5 C5 D4- G4 B4 A4 C5 B4 A4 C4-",
    "lyrics": "怎能忘记旧日朋友 心中能不怀想 旧日朋友岂能相忘 友谊地久天长 我们曾经终日游荡 在故乡的青山上 我们也曾历尽苦辛 到处奔波流浪 友谊万岁 朋友友谊万岁 举杯痛饮同声歌唱 友谊地久天长",
    "key": "G",
    "cat": "folk"
  },
  {
    "title": "友谊地久天长 (F调)",
    "notes": "A#4 D5 F5 D5 C5 A#4 D4- F4 A4 A#4 C5 D5 A4- A#4 D5 F5 D5 C5 A#4 D4- F4 A4 G4 A#4 A4 G4 C4- A#4 D5 F5 D5 C5 A#4 D4- F4 A4 A#4 C5 D5 A4- A#4 D5 F5 D5 C5 A#4 D4- F4 A4 G4 A#4 A4 G4 C4-",
    "lyrics": "怎能忘记旧日朋友 心中能不怀想 旧日朋友岂能相忘 友谊地久天长 我们曾经终日游荡 在故乡的青山上 我们也曾历尽苦辛 到处奔波流浪 友谊万岁 朋友友谊万岁 举杯痛饮同声歌唱 友谊地久天长",
    "key": "F",
    "cat": "folk"
  },
  {
    "title": "友谊地久天长 (D调)",
    "notes": "G4 B4 D5 B4 A4 G4 D4- D4 F#4 G4 A4 B4 A4- G4 B4 D5 B4 A4 G4 D4- D4 F#4 E4 G4 F#4 E4 C4- G4 B4 D5 B4 A4 G4 D4- D4 F#4 G4 A4 B4 A4- G4 B4 D5 B4 A4 G4 D4- D4 F#4 E4 G4 F#4 E4 C4-",
    "lyrics": "怎能忘记旧日朋友 心中能不怀想 旧日朋友岂能相忘 友谊地久天长 我们曾经终日游荡 在故乡的青山上 我们也曾历尽苦辛 到处奔波流浪 友谊万岁 朋友友谊万岁 举杯痛饮同声歌唱 友谊地久天长",
    "key": "D",
    "cat": "folk"
  },
  {
    "title": "友谊地久天长 (A调)",
    "notes": "D5 F#5 A5 F#5 E5 D5 D4- A4 C#5 D5 E5 F#5 A4- D5 F#5 A5 F#5 E5 D5 D4- A4 C#5 B4 D5 C#5 B4 C4- D5 F#5 A5 F#5 E5 D5 D4- A4 C#5 D5 E5 F#5 A4- D5 F#5 A5 F#5 E5 D5 D4- A4 C#5 B4 D5 C#5 B4 C4-",
    "lyrics": "怎能忘记旧日朋友 心中能不怀想 旧日朋友岂能相忘 友谊地久天长 我们曾经终日游荡 在故乡的青山上 我们也曾历尽苦辛 到处奔波流浪 友谊万岁 朋友友谊万岁 举杯痛饮同声歌唱 友谊地久天长",
    "key": "A",
    "cat": "folk"
  },
  {
    "title": "友谊地久天长 (Eb调)",
    "notes": "G#4 C5 D#5 C5 A#4 G#4 D4- D#4 G4 G#4 A#4 C5 A4- G#4 C5 D#5 C5 A#4 G#4 D4- D#4 G4 F4 G#4 G4 F4 C4- G#4 C5 D#5 C5 A#4 G#4 D4- D#4 G4 G#4 A#4 C5 A4- G#4 C5 D#5 C5 A#4 G#4 D4- D#4 G4 F4 G#4 G4 F4 C4-",
    "lyrics": "怎能忘记旧日朋友 心中能不怀想 旧日朋友岂能相忘 友谊地久天长 我们曾经终日游荡 在故乡的青山上 我们也曾历尽苦辛 到处奔波流浪 友谊万岁 朋友友谊万岁 举杯痛饮同声歌唱 友谊地久天长",
    "key": "Eb",
    "cat": "folk"
  },
  {
    "title": "卡农 Canon",
    "notes": "F4 E4 D4 C4 B3 A3 B3 C4- G4 F4 E4 D4 C4 B3 C4 D4- A4 G4 F4 E4 D4 C4 D4 E4- D5 C5 B4 A4 G4 F4 G4 A4- G4 F4 E4 D4 C4 B3 A3 G3- A4 G4 F4 E4 D4 C4 B3 A3- B4 A4 G4 F4 E4 D4 C4 B3- C5 B4 A4 G4 F4 E4 D4 C4-",
    "lyrics": "——卡农纯音乐—— D调卡农主题 复音口琴版 ——间奏—— 主题反复 变奏 ——尾奏—— 全曲终",
    "key": "C",
    "cat": "classical"
  },
  {
    "title": "卡农 Canon (G调)",
    "notes": "C5 B4 A4 G4 F#4 E4 F#4 C4- D5 C5 B4 A4 G4 F#4 G4 D4- E5 D5 C5 B4 A4 G4 A4 E4- A5 G5 F#5 E5 D5 C5 D5 A4- D5 C5 B4 A4 G4 F#4 E4 G3- E5 D5 C5 B4 A4 G4 F#4 A3- F#5 E5 D5 C5 B4 A4 G4 B3- G5 F#5 E5 D5 C5 B4 A4 C4-",
    "lyrics": "——卡农纯音乐—— D调卡农主题 复音口琴版 ——间奏—— 主题反复 变奏 ——尾奏—— 全曲终",
    "key": "G",
    "cat": "classical"
  },
  {
    "title": "卡农 Canon (F调)",
    "notes": "A#4 A4 G4 F4 E4 D4 E4 C4- C5 A#4 A4 G4 F4 E4 F4 D4- D5 C5 A#4 A4 G4 F4 G4 E4- G5 F5 E5 D5 C5 A#4 C5 A4- C5 A#4 A4 G4 F4 E4 D4 G3- D5 C5 A#4 A4 G4 F4 E4 A3- E5 D5 C5 A#4 A4 G4 F4 B3- F5 E5 D5 C5 A#4 A4 G4 C4-",
    "lyrics": "——卡农纯音乐—— D调卡农主题 复音口琴版 ——间奏—— 主题反复 变奏 ——尾奏—— 全曲终",
    "key": "F",
    "cat": "classical"
  },
  {
    "title": "卡农 Canon (D调)",
    "notes": "G4 F#4 E4 D4 C#4 B3 C#4 C4- A4 G4 F#4 E4 D4 C#4 D4 D4- B4 A4 G4 F#4 E4 D4 E4 E4- E5 D5 C#5 B4 A4 G4 A4 A4- A4 G4 F#4 E4 D4 C#4 B3 G3- B4 A4 G4 F#4 E4 D4 C#4 A3- C#5 B4 A4 G4 F#4 E4 D4 B3- D5 C#5 B4 A4 G4 F#4 E4 C4-",
    "lyrics": "——卡农纯音乐—— D调卡农主题 复音口琴版 ——间奏—— 主题反复 变奏 ——尾奏—— 全曲终",
    "key": "D",
    "cat": "classical"
  },
  {
    "title": "卡农 Canon (A调)",
    "notes": "D5 C#5 B4 A4 G#4 F#4 G#4 C4- E5 D5 C#5 B4 A4 G#4 A4 D4- F#5 E5 D5 C#5 B4 A4 B4 E4- B5 A5 G#5 F#5 E5 D5 E5 A4- E5 D5 C#5 B4 A4 G#4 F#4 G3- F#5 E5 D5 C#5 B4 A4 G#4 A3- G#5 F#5 E5 D5 C#5 B4 A4 B3- A5 G#5 F#5 E5 D5 C#5 B4 C4-",
    "lyrics": "——卡农纯音乐—— D调卡农主题 复音口琴版 ——间奏—— 主题反复 变奏 ——尾奏—— 全曲终",
    "key": "A",
    "cat": "classical"
  },
  {
    "title": "卡农 Canon (Eb调)",
    "notes": "G#4 G4 F4 D#4 D4 C4 D4 C4- A#4 G#4 G4 F4 D#4 D4 D#4 D4- C5 A#4 G#4 G4 F4 D#4 F4 E4- F5 D#5 D5 C5 A#4 G#4 A#4 A4- A#4 G#4 G4 F4 D#4 D4 C4 G3- C5 A#4 G#4 G4 F4 D#4 D4 A3- D5 C5 A#4 G#4 G4 F4 D#4 B3- D#5 D5 C5 A#4 G#4 G4 F4 C4-",
    "lyrics": "——卡农纯音乐—— D调卡农主题 复音口琴版 ——间奏—— 主题反复 变奏 ——尾奏—— 全曲终",
    "key": "Eb",
    "cat": "classical"
  },
  {
    "title": "致爱丽丝 Für Elise",
    "notes": "E5 D#5 E5 D#5 E5 B4 D5 C5 A4- C4 E4 A4 A3 C5- E4 G#4 C5 E5 A4- E5 D#5 E5 D#5 E5 B4 D5 C5 A4- C4 E4 A4 A3 C5- E4 G#4 C5 E5 A4- B4 C5 D5 E5- A4 E4 A4 A4 G4-",
    "lyrics": "——致爱丽丝—— 贝多芬 献给爱丽丝 ——间奏—— 主题反复 ——尾奏——",
    "key": "C",
    "cat": "classical"
  },
  {
    "title": "致爱丽丝 Für Elise (G调)",
    "notes": "B5 A#5 B5 A#5 B5 F#5 A5 G5 A4- G4 B4 E5 E4 C5- B4 D#5 G5 B5 A4- B5 A#5 B5 A#5 B5 F#5 A5 G5 A4- G4 B4 E5 E4 C5- B4 D#5 G5 B5 A4- F#5 G5 A5 E5- E5 B4 E5 E5 G4-",
    "lyrics": "——致爱丽丝—— 贝多芬 献给爱丽丝 ——间奏—— 主题反复 ——尾奏——",
    "key": "G",
    "cat": "classical"
  },
  {
    "title": "致爱丽丝 Für Elise (F调)",
    "notes": "A5 G#5 A5 G#5 A5 E5 G5 F5 A4- F4 A4 D5 D4 C5- A4 C#5 F5 A5 A4- A5 G#5 A5 G#5 A5 E5 G5 F5 A4- F4 A4 D5 D4 C5- A4 C#5 F5 A5 A4- E5 F5 G5 E5- D5 A4 D5 D5 G4-",
    "lyrics": "——致爱丽丝—— 贝多芬 献给爱丽丝 ——间奏—— 主题反复 ——尾奏——",
    "key": "F",
    "cat": "classical"
  },
  {
    "title": "致爱丽丝 Für Elise (D调)",
    "notes": "F#5 F5 F#5 F5 F#5 C#5 E5 D5 A4- D4 F#4 B4 B3 C5- F#4 A#4 D5 F#5 A4- F#5 F5 F#5 F5 F#5 C#5 E5 D5 A4- D4 F#4 B4 B3 C5- F#4 A#4 D5 F#5 A4- C#5 D5 E5 E5- B4 F#4 B4 B4 G4-",
    "lyrics": "——致爱丽丝—— 贝多芬 献给爱丽丝 ——间奏—— 主题反复 ——尾奏——",
    "key": "D",
    "cat": "classical"
  },
  {
    "title": "致爱丽丝 Für Elise (A调)",
    "notes": "C#6 C6 C#6 C6 C#6 G#5 B5 A5 A4- A4 C#5 F#5 F#4 C5- C#5 F5 A5 C#6 A4- C#6 C6 C#6 C6 C#6 G#5 B5 A5 A4- A4 C#5 F#5 F#4 C5- C#5 F5 A5 C#6 A4- G#5 A5 B5 E5- F#5 C#5 F#5 F#5 G4-",
    "lyrics": "——致爱丽丝—— 贝多芬 献给爱丽丝 ——间奏—— 主题反复 ——尾奏——",
    "key": "A",
    "cat": "classical"
  },
  {
    "title": "致爱丽丝 Für Elise (Eb调)",
    "notes": "G5 F#5 G5 F#5 G5 D5 F5 D#5 A4- D#4 G4 C5 C4 C5- G4 B4 D#5 G5 A4- G5 F#5 G5 F#5 G5 D5 F5 D#5 A4- D#4 G4 C5 C4 C5- G4 B4 D#5 G5 A4- D5 D#5 F5 E5- C5 G4 C5 C5 G4-",
    "lyrics": "——致爱丽丝—— 贝多芬 献给爱丽丝 ——间奏—— 主题反复 ——尾奏——",
    "key": "Eb",
    "cat": "classical"
  },
  {
    "title": "春风十里",
    "notes": "C5 B4 A4 G4 F4 E4 D4 C4- C5 B4 A4 G4 F4 E4 D4 C4- F4 F4 G4 G4 A4 A4 G4 F4- E4 E4 D4 D4 C4 C4 D4 E4- D5 D5 C5 B4 A4 G4 F4 E4- F5 F5 E5 D5 C5 B4 A4 G4- F4 F4 G4 G4 A4 A4 G4 F4- E4 E4 D4 D4 C4 C4 D4 E4- C5-",
    "lyrics": "我在二环路的里边 想着你 你在远方的山上 春风十里 今天的风吹向你 下了雨 我说所有的酒 都不如你 我在鼓楼的夜色中 为你唱花香自来 在别处相遇 沉默期待",
    "key": "C",
    "cat": "pop"
  },
  {
    "title": "春风十里 (G调)",
    "notes": "G5 F#5 E5 D5 C5 B4 A4 C4- G5 F#5 E5 D5 C5 B4 A4 C4- C5 C5 D5 D5 E5 E5 D5 F4- B4 B4 A4 A4 G4 G4 A4 E4- A5 A5 G5 F#5 E5 D5 C5 E4- C6 C6 B5 A5 G5 F#5 E5 G4- C5 C5 D5 D5 E5 E5 D5 F4- B4 B4 A4 A4 G4 G4 A4 E4- C5-",
    "lyrics": "我在二环路的里边 想着你 你在远方的山上 春风十里 今天的风吹向你 下了雨 我说所有的酒 都不如你 我在鼓楼的夜色中 为你唱花香自来 在别处相遇 沉默期待",
    "key": "G",
    "cat": "pop"
  },
  {
    "title": "春风十里 (F调)",
    "notes": "F5 E5 D5 C5 A#4 A4 G4 C4- F5 E5 D5 C5 A#4 A4 G4 C4- A#4 A#4 C5 C5 D5 D5 C5 F4- A4 A4 G4 G4 F4 F4 G4 E4- G5 G5 F5 E5 D5 C5 A#4 E4- A#5 A#5 A5 G5 F5 E5 D5 G4- A#4 A#4 C5 C5 D5 D5 C5 F4- A4 A4 G4 G4 F4 F4 G4 E4- C5-",
    "lyrics": "我在二环路的里边 想着你 你在远方的山上 春风十里 今天的风吹向你 下了雨 我说所有的酒 都不如你 我在鼓楼的夜色中 为你唱花香自来 在别处相遇 沉默期待",
    "key": "F",
    "cat": "pop"
  },
  {
    "title": "春风十里 (D调)",
    "notes": "D5 C#5 B4 A4 G4 F#4 E4 C4- D5 C#5 B4 A4 G4 F#4 E4 C4- G4 G4 A4 A4 B4 B4 A4 F4- F#4 F#4 E4 E4 D4 D4 E4 E4- E5 E5 D5 C#5 B4 A4 G4 E4- G5 G5 F#5 E5 D5 C#5 B4 G4- G4 G4 A4 A4 B4 B4 A4 F4- F#4 F#4 E4 E4 D4 D4 E4 E4- C5-",
    "lyrics": "我在二环路的里边 想着你 你在远方的山上 春风十里 今天的风吹向你 下了雨 我说所有的酒 都不如你 我在鼓楼的夜色中 为你唱花香自来 在别处相遇 沉默期待",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "春风十里 (A调)",
    "notes": "A5 G#5 F#5 E5 D5 C#5 B4 C4- A5 G#5 F#5 E5 D5 C#5 B4 C4- D5 D5 E5 E5 F#5 F#5 E5 F4- C#5 C#5 B4 B4 A4 A4 B4 E4- B5 B5 A5 G#5 F#5 E5 D5 E4- D6 D6 C#6 B5 A5 G#5 F#5 G4- D5 D5 E5 E5 F#5 F#5 E5 F4- C#5 C#5 B4 B4 A4 A4 B4 E4- C5-",
    "lyrics": "我在二环路的里边 想着你 你在远方的山上 春风十里 今天的风吹向你 下了雨 我说所有的酒 都不如你 我在鼓楼的夜色中 为你唱花香自来 在别处相遇 沉默期待",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "春风十里 (Eb调)",
    "notes": "D#5 D5 C5 A#4 G#4 G4 F4 C4- D#5 D5 C5 A#4 G#4 G4 F4 C4- G#4 G#4 A#4 A#4 C5 C5 A#4 F4- G4 G4 F4 F4 D#4 D#4 F4 E4- F5 F5 D#5 D5 C5 A#4 G#4 E4- G#5 G#5 G5 F5 D#5 D5 C5 G4- G#4 G#4 A#4 A#4 C5 C5 A#4 F4- G4 G4 F4 F4 D#4 D#4 F4 E4- C5-",
    "lyrics": "我在二环路的里边 想着你 你在远方的山上 春风十里 今天的风吹向你 下了雨 我说所有的酒 都不如你 我在鼓楼的夜色中 为你唱花香自来 在别处相遇 沉默期待",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "红豆",
    "notes": "C5 B4 A4 G4 F4 E4 D4 C4- C5 B4 A4 G4 F4 E4 D4 C4- A4 A4 G4 F4 E4 F4 E4- D4 E4 F4 G4 A4 B4 C5- G4 G4 F4 E4 D4 E4 F4- A4 A4 G4 F4 E4 F4 E4- C5 B4 A4 G4 F4 E4 D4 C4- A4 G4 F4 E4 D4 E4 F4 G4- C5-",
    "lyrics": "还没为你把红豆 熬成缠绵的伤口 然后一起分享 会更明白 相思的哀愁 还没为你把红豆 熬成缠绵的伤口 然后一起分享 会更明白 相思的哀愁 还没好的泪水 已经酝酿成红豆 还没为你把红豆 熬成缠绵的伤口",
    "key": "C",
    "cat": "pop"
  },
  {
    "title": "红豆 (G调)",
    "notes": "G5 F#5 E5 D5 C5 B4 A4 C4- G5 F#5 E5 D5 C5 B4 A4 C4- E5 E5 D5 C5 B4 C5 E4- A4 B4 C5 D5 E5 F#5 C5- D5 D5 C5 B4 A4 B4 F4- E5 E5 D5 C5 B4 C5 E4- G5 F#5 E5 D5 C5 B4 A4 C4- E5 D5 C5 B4 A4 B4 C5 G4- C5-",
    "lyrics": "还没为你把红豆 熬成缠绵的伤口 然后一起分享 会更明白 相思的哀愁 还没为你把红豆 熬成缠绵的伤口 然后一起分享 会更明白 相思的哀愁 还没好的泪水 已经酝酿成红豆 还没为你把红豆 熬成缠绵的伤口",
    "key": "G",
    "cat": "pop"
  },
  {
    "title": "红豆 (F调)",
    "notes": "F5 E5 D5 C5 A#4 A4 G4 C4- F5 E5 D5 C5 A#4 A4 G4 C4- D5 D5 C5 A#4 A4 A#4 E4- G4 A4 A#4 C5 D5 E5 C5- C5 C5 A#4 A4 G4 A4 F4- D5 D5 C5 A#4 A4 A#4 E4- F5 E5 D5 C5 A#4 A4 G4 C4- D5 C5 A#4 A4 G4 A4 A#4 G4- C5-",
    "lyrics": "还没为你把红豆 熬成缠绵的伤口 然后一起分享 会更明白 相思的哀愁 还没为你把红豆 熬成缠绵的伤口 然后一起分享 会更明白 相思的哀愁 还没好的泪水 已经酝酿成红豆 还没为你把红豆 熬成缠绵的伤口",
    "key": "F",
    "cat": "pop"
  },
  {
    "title": "红豆 (D调)",
    "notes": "D5 C#5 B4 A4 G4 F#4 E4 C4- D5 C#5 B4 A4 G4 F#4 E4 C4- B4 B4 A4 G4 F#4 G4 E4- E4 F#4 G4 A4 B4 C#5 C5- A4 A4 G4 F#4 E4 F#4 F4- B4 B4 A4 G4 F#4 G4 E4- D5 C#5 B4 A4 G4 F#4 E4 C4- B4 A4 G4 F#4 E4 F#4 G4 G4- C5-",
    "lyrics": "还没为你把红豆 熬成缠绵的伤口 然后一起分享 会更明白 相思的哀愁 还没为你把红豆 熬成缠绵的伤口 然后一起分享 会更明白 相思的哀愁 还没好的泪水 已经酝酿成红豆 还没为你把红豆 熬成缠绵的伤口",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "红豆 (A调)",
    "notes": "A5 G#5 F#5 E5 D5 C#5 B4 C4- A5 G#5 F#5 E5 D5 C#5 B4 C4- F#5 F#5 E5 D5 C#5 D5 E4- B4 C#5 D5 E5 F#5 G#5 C5- E5 E5 D5 C#5 B4 C#5 F4- F#5 F#5 E5 D5 C#5 D5 E4- A5 G#5 F#5 E5 D5 C#5 B4 C4- F#5 E5 D5 C#5 B4 C#5 D5 G4- C5-",
    "lyrics": "还没为你把红豆 熬成缠绵的伤口 然后一起分享 会更明白 相思的哀愁 还没为你把红豆 熬成缠绵的伤口 然后一起分享 会更明白 相思的哀愁 还没好的泪水 已经酝酿成红豆 还没为你把红豆 熬成缠绵的伤口",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "红豆 (Eb调)",
    "notes": "D#5 D5 C5 A#4 G#4 G4 F4 C4- D#5 D5 C5 A#4 G#4 G4 F4 C4- C5 C5 A#4 G#4 G4 G#4 E4- F4 G4 G#4 A#4 C5 D5 C5- A#4 A#4 G#4 G4 F4 G4 F4- C5 C5 A#4 G#4 G4 G#4 E4- D#5 D5 C5 A#4 G#4 G4 F4 C4- C5 A#4 G#4 G4 F4 G4 G#4 G4- C5-",
    "lyrics": "还没为你把红豆 熬成缠绵的伤口 然后一起分享 会更明白 相思的哀愁 还没为你把红豆 熬成缠绵的伤口 然后一起分享 会更明白 相思的哀愁 还没好的泪水 已经酝酿成红豆 还没为你把红豆 熬成缠绵的伤口",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "后来",
    "notes": "C5 B4 A4 G4 F4 E4 D4 C4- C5 B4 A4 G4 F4 E4 D4 C4- A4 A4 G4 F4 E4 E4 D4 D4- D4 E4 F4 G4 A4 B4 C5- C5 C5 B4 B4 A4 A4 G4 G4- C5 C5 B4 B4 A4 A4 G4 G4- F4 F4 G4 G4 A4 A4 G4 F4- E4 E4 D4 D4 C4 C4 D4 E4- C5-",
    "lyrics": "后来 我总算学会了如何去爱 可惜你早已远去 消失在人海 后来 终于在眼泪中明白 有些人 一旦错过就不再 后来 我总算学会了如何去爱 可惜你早已远去 消失在人海",
    "key": "C",
    "cat": "pop"
  },
  {
    "title": "后来 (G调)",
    "notes": "G5 F#5 E5 D5 C5 B4 A4 C4- G5 F#5 E5 D5 C5 B4 A4 C4- E5 E5 D5 C5 B4 B4 A4 D4- A4 B4 C5 D5 E5 F#5 C5- G5 G5 F#5 F#5 E5 E5 D5 G4- G5 G5 F#5 F#5 E5 E5 D5 G4- C5 C5 D5 D5 E5 E5 D5 F4- B4 B4 A4 A4 G4 G4 A4 E4- C5-",
    "lyrics": "后来 我总算学会了如何去爱 可惜你早已远去 消失在人海 后来 终于在眼泪中明白 有些人 一旦错过就不再 后来 我总算学会了如何去爱 可惜你早已远去 消失在人海",
    "key": "G",
    "cat": "pop"
  },
  {
    "title": "后来 (F调)",
    "notes": "F5 E5 D5 C5 A#4 A4 G4 C4- F5 E5 D5 C5 A#4 A4 G4 C4- D5 D5 C5 A#4 A4 A4 G4 D4- G4 A4 A#4 C5 D5 E5 C5- F5 F5 E5 E5 D5 D5 C5 G4- F5 F5 E5 E5 D5 D5 C5 G4- A#4 A#4 C5 C5 D5 D5 C5 F4- A4 A4 G4 G4 F4 F4 G4 E4- C5-",
    "lyrics": "后来 我总算学会了如何去爱 可惜你早已远去 消失在人海 后来 终于在眼泪中明白 有些人 一旦错过就不再 后来 我总算学会了如何去爱 可惜你早已远去 消失在人海",
    "key": "F",
    "cat": "pop"
  },
  {
    "title": "后来 (D调)",
    "notes": "D5 C#5 B4 A4 G4 F#4 E4 C4- D5 C#5 B4 A4 G4 F#4 E4 C4- B4 B4 A4 G4 F#4 F#4 E4 D4- E4 F#4 G4 A4 B4 C#5 C5- D5 D5 C#5 C#5 B4 B4 A4 G4- D5 D5 C#5 C#5 B4 B4 A4 G4- G4 G4 A4 A4 B4 B4 A4 F4- F#4 F#4 E4 E4 D4 D4 E4 E4- C5-",
    "lyrics": "后来 我总算学会了如何去爱 可惜你早已远去 消失在人海 后来 终于在眼泪中明白 有些人 一旦错过就不再 后来 我总算学会了如何去爱 可惜你早已远去 消失在人海",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "后来 (A调)",
    "notes": "A5 G#5 F#5 E5 D5 C#5 B4 C4- A5 G#5 F#5 E5 D5 C#5 B4 C4- F#5 F#5 E5 D5 C#5 C#5 B4 D4- B4 C#5 D5 E5 F#5 G#5 C5- A5 A5 G#5 G#5 F#5 F#5 E5 G4- A5 A5 G#5 G#5 F#5 F#5 E5 G4- D5 D5 E5 E5 F#5 F#5 E5 F4- C#5 C#5 B4 B4 A4 A4 B4 E4- C5-",
    "lyrics": "后来 我总算学会了如何去爱 可惜你早已远去 消失在人海 后来 终于在眼泪中明白 有些人 一旦错过就不再 后来 我总算学会了如何去爱 可惜你早已远去 消失在人海",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "后来 (Eb调)",
    "notes": "D#5 D5 C5 A#4 G#4 G4 F4 C4- D#5 D5 C5 A#4 G#4 G4 F4 C4- C5 C5 A#4 G#4 G4 G4 F4 D4- F4 G4 G#4 A#4 C5 D5 C5- D#5 D#5 D5 D5 C5 C5 A#4 G4- D#5 D#5 D5 D5 C5 C5 A#4 G4- G#4 G#4 A#4 A#4 C5 C5 A#4 F4- G4 G4 F4 F4 D#4 D#4 F4 E4- C5-",
    "lyrics": "后来 我总算学会了如何去爱 可惜你早已远去 消失在人海 后来 终于在眼泪中明白 有些人 一旦错过就不再 后来 我总算学会了如何去爱 可惜你早已远去 消失在人海",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "晴天",
    "notes": "3 5 6 1^ 6 5 3 2 1 2 3-",
    "lyrics": "故事的小黄花",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "晴天 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2 3-",
    "lyrics": "故事的小黄花",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "晴天 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2 3-",
    "lyrics": "故事的小黄花",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "晴天 (D调)",
    "notes": "A4 B4 C#5 A4 B4 C#5 D5 D5- A4 B4 C#5 A4 B4 C#5 D5 D5- F#4 F#4 G4 G4 A4 A4 B4 A4- C#5 C#5 B4 A4 G4 F#4 E4 C4- D5 C#5 B4 A4 B4 C#5 D5 D5- D5 C#5 B4 A4 B4 C#5 D5 D5- F#5 E5 D5 C#5 B4 A4 G4 E4- E5 D5 C#5 B4 A4 G4 F#4 D4- C4-",
    "lyrics": "故事的小黄花 从出生那年就飘着 童年的荡秋千 随记忆一直晃到现在 Re So So Si Do Si La So La Si Si Si Si La Si La So 吹着前奏望着天空 我想起花瓣试着掉落 为你翘课的那一天 花落的那一天",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "晴天 (A调)",
    "notes": "E5 F#5 G#5 E5 F#5 G#5 A5 D5- E5 F#5 G#5 E5 F#5 G#5 A5 D5- C#5 C#5 D5 D5 E5 E5 F#5 A4- G#5 G#5 F#5 E5 D5 C#5 B4 C4- A5 G#5 F#5 E5 F#5 G#5 A5 D5- A5 G#5 F#5 E5 F#5 G#5 A5 D5- C#6 B5 A5 G#5 F#5 E5 D5 E4- B5 A5 G#5 F#5 E5 D5 C#5 D4- C4-",
    "lyrics": "故事的小黄花 从出生那年就飘着 童年的荡秋千 随记忆一直晃到现在 Re So So Si Do Si La So La Si Si Si Si La Si La So 吹着前奏望着天空 我想起花瓣试着掉落 为你翘课的那一天 花落的那一天",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "晴天 (Eb调)",
    "notes": "A#4 C5 D5 A#4 C5 D5 D#5 D5- A#4 C5 D5 A#4 C5 D5 D#5 D5- G4 G4 G#4 G#4 A#4 A#4 C5 A4- D5 D5 C5 A#4 G#4 G4 F4 C4- D#5 D5 C5 A#4 C5 D5 D#5 D5- D#5 D5 C5 A#4 C5 D5 D#5 D5- G5 F5 D#5 D5 C5 A#4 G#4 E4- F5 D#5 D5 C5 A#4 G#4 G4 D4- C4-",
    "lyrics": "故事的小黄花 从出生那年就飘着 童年的荡秋千 随记忆一直晃到现在 Re So So Si Do Si La So La Si Si Si Si La Si La So 吹着前奏望着天空 我想起花瓣试着掉落 为你翘课的那一天 花落的那一天",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "青花瓷",
    "notes": "1 2 3 5 6 5 3 2 1 2 3-",
    "lyrics": "天青色等烟雨而我在等你",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "青花瓷 (G调)",
    "notes": "1 2 3 5 6 5 3 2 1 2 3-",
    "lyrics": "天青色等烟雨而我在等你",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "青花瓷 (F调)",
    "notes": "1 2 3 5 6 5 3 2 1 2 3-",
    "lyrics": "天青色等烟雨而我在等你",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "青花瓷 (D调)",
    "notes": "F#5 F#5 E5 D5 E5 F#5 G5- B4 B4 A4 G4 A4 B4 C5- E5 E5 D5 C#5 D5 E5 F5- C#5 C#5 B4 A4 B4 C#5 D5- F#5 F#5 E5 D5 E5 F#5 G5- B4 B4 A4 G4 A4 B4 C5- E5 D5 C#5 B4 A4 G4 F#4 D4- D5 C#5 B4 A4 G4 F#4 E4 C4-",
    "lyrics": "天青色等烟雨 而我在等你 炊烟袅袅升起 隔江千万里 在瓶底书汉隶仿前朝的飘逸 就当我为遇见你伏笔 天青色等烟雨 而我在等你 月色被打捞起 晕开了结局",
    "key": "D",
    "cat": "pop"
  },
  {
    "title": "青花瓷 (A调)",
    "notes": "C#6 C#6 B5 A5 B5 C#6 G5- F#5 F#5 E5 D5 E5 F#5 C5- B5 B5 A5 G#5 A5 B5 F5- G#5 G#5 F#5 E5 F#5 G#5 D5- C#6 C#6 B5 A5 B5 C#6 G5- F#5 F#5 E5 D5 E5 F#5 C5- B5 A5 G#5 F#5 E5 D5 C#5 D4- A5 G#5 F#5 E5 D5 C#5 B4 C4-",
    "lyrics": "天青色等烟雨 而我在等你 炊烟袅袅升起 隔江千万里 在瓶底书汉隶仿前朝的飘逸 就当我为遇见你伏笔 天青色等烟雨 而我在等你 月色被打捞起 晕开了结局",
    "key": "A",
    "cat": "pop"
  },
  {
    "title": "青花瓷 (Eb调)",
    "notes": "G5 G5 F5 D#5 F5 G5 G5- C5 C5 A#4 G#4 A#4 C5 C5- F5 F5 D#5 D5 D#5 F5 F5- D5 D5 C5 A#4 C5 D5 D5- G5 G5 F5 D#5 F5 G5 G5- C5 C5 A#4 G#4 A#4 C5 C5- F5 D#5 D5 C5 A#4 G#4 G4 D4- D#5 D5 C5 A#4 G#4 G4 F4 C4-",
    "lyrics": "天青色等烟雨 而我在等你 炊烟袅袅升起 隔江千万里 在瓶底书汉隶仿前朝的飘逸 就当我为遇见你伏笔 天青色等烟雨 而我在等你 月色被打捞起 晕开了结局",
    "key": "Eb",
    "cat": "pop"
  },
  {
    "title": "生日快乐",
    "notes": "5 5 6 5 1^ 7- 5 5 6 5 2^ 1^-",
    "lyrics": "祝你生日快乐",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "生日快乐 (G调)",
    "notes": "5 5 6 5 1^ 7- 5 5 6 5 2^ 1^-",
    "lyrics": "祝你生日快乐",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "生日快乐 (F调)",
    "notes": "5 5 6 5 1^ 7- 5 5 6 5 2^ 1^-",
    "lyrics": "祝你生日快乐",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "虫儿飞",
    "notes": "3 3 4 5 5 5 4 3 2 2 3 4 3-",
    "lyrics": "黑黑的天空低垂",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "虫儿飞 (G调)",
    "notes": "3 3 4 5 5 5 4 3 2 2 3 4 3-",
    "lyrics": "黑黑的天空低垂",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "虫儿飞 (F调)",
    "notes": "3 3 4 5 5 5 4 3 2 2 3 4 3-",
    "lyrics": "黑黑的天空低垂",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "蜗牛与黄鹂鸟",
    "notes": "5 5 3 5 5 3 5 5 3 2 3 4 5-",
    "lyrics": "阿门阿前一棵葡萄树",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "蜗牛与黄鹂鸟 (G调)",
    "notes": "5 5 3 5 5 3 5 5 3 2 3 4 5-",
    "lyrics": "阿门阿前一棵葡萄树",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "蜗牛与黄鹂鸟 (F调)",
    "notes": "5 5 3 5 5 3 5 5 3 2 3 4 5-",
    "lyrics": "阿门阿前一棵葡萄树",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "春天在哪里",
    "notes": "5 6 5 3 5 6 5 3 2 3 4 5 3-",
    "lyrics": "春天在哪里",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "春天在哪里 (G调)",
    "notes": "5 6 5 3 5 6 5 3 2 3 4 5 3-",
    "lyrics": "春天在哪里",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "春天在哪里 (F调)",
    "notes": "5 6 5 3 5 6 5 3 2 3 4 5 3-",
    "lyrics": "春天在哪里",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "小星星变奏曲",
    "notes": "1 2 3 4 5 6 7 1^ 7 6 5 4 3 2 1",
    "lyrics": "小星星变奏",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "小星星变奏曲 (G调)",
    "notes": "1 2 3 4 5 6 7 1^ 7 6 5 4 3 2 1",
    "lyrics": "小星星变奏",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "小星星变奏曲 (F调)",
    "notes": "1 2 3 4 5 6 7 1^ 7 6 5 4 3 2 1",
    "lyrics": "小星星变奏",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "茉莉花",
    "notes": "3 3 5 6 5 3 2 3 5 6 1^-",
    "lyrics": "好一朵美丽的茉莉花",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "茉莉花 (G调)",
    "notes": "3 3 5 6 5 3 2 3 5 6 1^-",
    "lyrics": "好一朵美丽的茉莉花",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "茉莉花 (F调)",
    "notes": "3 3 5 6 5 3 2 3 5 6 1^-",
    "lyrics": "好一朵美丽的茉莉花",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "大海啊故乡",
    "notes": "1 2 3 5 3 2 1 2 3 5 6-",
    "lyrics": "小时候妈妈对我讲",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "大海啊故乡 (G调)",
    "notes": "1 2 3 5 3 2 1 2 3 5 6-",
    "lyrics": "小时候妈妈对我讲",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "大海啊故乡 (F调)",
    "notes": "1 2 3 5 3 2 1 2 3 5 6-",
    "lyrics": "小时候妈妈对我讲",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "在希望的田野上",
    "notes": "5 3 5 1^ 7 6 5 3 2 3 5-",
    "lyrics": "我们的家乡",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "在希望的田野上 (G调)",
    "notes": "5 3 5 1^ 7 6 5 3 2 3 5-",
    "lyrics": "我们的家乡",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "在希望的田野上 (F调)",
    "notes": "5 3 5 1^ 7 6 5 3 2 3 5-",
    "lyrics": "我们的家乡",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "我的祖国",
    "notes": "5 3 5 6 1^ 6 5 3 5 1^-",
    "lyrics": "一条大河波浪宽",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "我的祖国 (G调)",
    "notes": "5 3 5 6 1^ 6 5 3 5 1^-",
    "lyrics": "一条大河波浪宽",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "我的祖国 (F调)",
    "notes": "5 3 5 6 1^ 6 5 3 5 1^-",
    "lyrics": "一条大河波浪宽",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "龙的传人",
    "notes": "6 5 4 3 2 1 2 3 2 3 4 5-",
    "lyrics": "遥远的东方有一条龙",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "龙的传人 (G调)",
    "notes": "6 5 4 3 2 1 2 3 2 3 4 5-",
    "lyrics": "遥远的东方有一条龙",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "龙的传人 (F调)",
    "notes": "6 5 4 3 2 1 2 3 2 3 4 5-",
    "lyrics": "遥远的东方有一条龙",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "爱拼才会赢",
    "notes": "3 5 6 5 3 2 1 2 3 5 6-",
    "lyrics": "三分天注定七分靠打拼",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "爱拼才会赢 (G调)",
    "notes": "3 5 6 5 3 2 1 2 3 5 6-",
    "lyrics": "三分天注定七分靠打拼",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "爱拼才会赢 (F调)",
    "notes": "3 5 6 5 3 2 1 2 3 5 6-",
    "lyrics": "三分天注定七分靠打拼",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "外婆的澎湖湾",
    "notes": "5 3 5 3 5 3 2 2 3 5 3-",
    "lyrics": "晚风轻拂澎湖湾",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "外婆的澎湖湾 (G调)",
    "notes": "5 3 5 3 5 3 2 2 3 5 3-",
    "lyrics": "晚风轻拂澎湖湾",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "外婆的澎湖湾 (F调)",
    "notes": "5 3 5 3 5 3 2 2 3 5 3-",
    "lyrics": "晚风轻拂澎湖湾",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "传奇",
    "notes": "3 5 1^ 5 3 2 3 5 1^ 7 6-",
    "lyrics": "只是因为在人群中多看了你一眼",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "传奇 (G调)",
    "notes": "3 5 1^ 5 3 2 3 5 1^ 7 6-",
    "lyrics": "只是因为在人群中多看了你一眼",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "传奇 (F调)",
    "notes": "3 5 1^ 5 3 2 3 5 1^ 7 6-",
    "lyrics": "只是因为在人群中多看了你一眼",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "那些年",
    "notes": "1 2 3 5 5 4 3 2 1 6 5-",
    "lyrics": "又回到最初的起点",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "那些年 (G调)",
    "notes": "1 2 3 5 5 4 3 2 1 6 5-",
    "lyrics": "又回到最初的起点",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "那些年 (F调)",
    "notes": "1 2 3 5 5 4 3 2 1 6 5-",
    "lyrics": "又回到最初的起点",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "南山南",
    "notes": "3 5 3 2 1 2 3 5 3 2 1-",
    "lyrics": "你在南方的艳阳里大雪纷飞",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "南山南 (G调)",
    "notes": "3 5 3 2 1 2 3 5 3 2 1-",
    "lyrics": "你在南方的艳阳里大雪纷飞",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "南山南 (F调)",
    "notes": "3 5 3 2 1 2 3 5 3 2 1-",
    "lyrics": "你在南方的艳阳里大雪纷飞",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "平凡之路",
    "notes": "6 5 3 1 2 3 5 6 7 1^-",
    "lyrics": "徘徊着的在路上的",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "平凡之路 (G调)",
    "notes": "6 5 3 1 2 3 5 6 7 1^-",
    "lyrics": "徘徊着的在路上的",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "平凡之路 (F调)",
    "notes": "6 5 3 1 2 3 5 6 7 1^-",
    "lyrics": "徘徊着的在路上的",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "起风了",
    "notes": "5 3 1 2 3 5 6 5 3 2 1-",
    "lyrics": "我曾将青春翻涌成她",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "起风了 (G调)",
    "notes": "5 3 1 2 3 5 6 5 3 2 1-",
    "lyrics": "我曾将青春翻涌成她",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "起风了 (F调)",
    "notes": "5 3 1 2 3 5 6 5 3 2 1-",
    "lyrics": "我曾将青春翻涌成她",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "告白气球",
    "notes": "1 2 3 3 3 2 1 5 5 5-",
    "lyrics": "塞纳河畔左岸的咖啡",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "告白气球 (G调)",
    "notes": "1 2 3 3 3 2 1 5 5 5-",
    "lyrics": "塞纳河畔左岸的咖啡",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "告白气球 (F调)",
    "notes": "1 2 3 3 3 2 1 5 5 5-",
    "lyrics": "塞纳河畔左岸的咖啡",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "东风破",
    "notes": "3 5 6 1^ 7 6 5 3 2 3 5-",
    "lyrics": "一盏离愁孤单伫立在窗口",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "东风破 (G调)",
    "notes": "3 5 6 1^ 7 6 5 3 2 3 5-",
    "lyrics": "一盏离愁孤单伫立在窗口",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "东风破 (F调)",
    "notes": "3 5 6 1^ 7 6 5 3 2 3 5-",
    "lyrics": "一盏离愁孤单伫立在窗口",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "枫",
    "notes": "3 5 6 1^ 6 5 3 2 1 2 3-",
    "lyrics": "乌云下的枫叶",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "枫 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2 3-",
    "lyrics": "乌云下的枫叶",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "枫 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2 3-",
    "lyrics": "乌云下的枫叶",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "七里香",
    "notes": "1 2 3 3 3 2 1 1 2 3 5-",
    "lyrics": "窗外的麻雀",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "七里香 (G调)",
    "notes": "1 2 3 3 3 2 1 1 2 3 5-",
    "lyrics": "窗外的麻雀",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "七里香 (F调)",
    "notes": "1 2 3 3 3 2 1 1 2 3 5-",
    "lyrics": "窗外的麻雀",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "稻香",
    "notes": "1 1 1 1 2 3 3 2 1 1 1-",
    "lyrics": "对这个世界如果你有太多的抱怨",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "稻香 (G调)",
    "notes": "1 1 1 1 2 3 3 2 1 1 1-",
    "lyrics": "对这个世界如果你有太多的抱怨",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "稻香 (F调)",
    "notes": "1 1 1 1 2 3 3 2 1 1 1-",
    "lyrics": "对这个世界如果你有太多的抱怨",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "听妈妈的话",
    "notes": "3 5 3 2 1 2 3 5 3 2 1-",
    "lyrics": "听妈妈的话别让她受伤",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "听妈妈的话 (G调)",
    "notes": "3 5 3 2 1 2 3 5 3 2 1-",
    "lyrics": "听妈妈的话别让她受伤",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "听妈妈的话 (F调)",
    "notes": "3 5 3 2 1 2 3 5 3 2 1-",
    "lyrics": "听妈妈的话别让她受伤",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "小薇",
    "notes": "5 3 5 3 5 3 2 3 5 6-",
    "lyrics": "有一个美丽的小女孩",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "小薇 (G调)",
    "notes": "5 3 5 3 5 3 2 3 5 6-",
    "lyrics": "有一个美丽的小女孩",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "小薇 (F调)",
    "notes": "5 3 5 3 5 3 2 3 5 6-",
    "lyrics": "有一个美丽的小女孩",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "我的歌声里",
    "notes": "1 2 3 5 3 2 1 2 3 5 6-",
    "lyrics": "没有一点点防备",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "我的歌声里 (G调)",
    "notes": "1 2 3 5 3 2 1 2 3 5 6-",
    "lyrics": "没有一点点防备",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "我的歌声里 (F调)",
    "notes": "1 2 3 5 3 2 1 2 3 5 6-",
    "lyrics": "没有一点点防备",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "演员",
    "notes": "6 7 1^ 7 6 5 3 5 6 7-",
    "lyrics": "简单点说话的方式简单点",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "演员 (G调)",
    "notes": "6 7 1^ 7 6 5 3 5 6 7-",
    "lyrics": "简单点说话的方式简单点",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "演员 (F调)",
    "notes": "6 7 1^ 7 6 5 3 5 6 7-",
    "lyrics": "简单点说话的方式简单点",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "默",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "忍不住化身一条固执的鱼",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "默 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "忍不住化身一条固执的鱼",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "默 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "忍不住化身一条固执的鱼",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "美丽的神话",
    "notes": "3 5 6 1^ 6 5 3 2 1 2 3-",
    "lyrics": "梦中人熟悉的脸孔",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "美丽的神话 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2 3-",
    "lyrics": "梦中人熟悉的脸孔",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "美丽的神话 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2 3-",
    "lyrics": "梦中人熟悉的脸孔",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "仙剑奇侠传",
    "notes": "6 7 1^ 7 6 5 6 1^ 2^ 1^-",
    "lyrics": "轮回间命运的安排",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "仙剑奇侠传 (G调)",
    "notes": "6 7 1^ 7 6 5 6 1^ 2^ 1^-",
    "lyrics": "轮回间命运的安排",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "仙剑奇侠传 (F调)",
    "notes": "6 7 1^ 7 6 5 6 1^ 2^ 1^-",
    "lyrics": "轮回间命运的安排",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "沧海一声笑",
    "notes": "6 5 3 2 1 2 3 5 6 5 3-",
    "lyrics": "沧海一声笑滔滔两岸潮",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "沧海一声笑 (G调)",
    "notes": "6 5 3 2 1 2 3 5 6 5 3-",
    "lyrics": "沧海一声笑滔滔两岸潮",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "沧海一声笑 (F调)",
    "notes": "6 5 3 2 1 2 3 5 6 5 3-",
    "lyrics": "沧海一声笑滔滔两岸潮",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "敢问路在何方",
    "notes": "5 3 5 6 1^ 7 6 5 3 5-",
    "lyrics": "你挑着担我牵着马",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "敢问路在何方 (G调)",
    "notes": "5 3 5 6 1^ 7 6 5 3 5-",
    "lyrics": "你挑着担我牵着马",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "敢问路在何方 (F调)",
    "notes": "5 3 5 6 1^ 7 6 5 3 5-",
    "lyrics": "你挑着担我牵着马",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "泰坦尼克号",
    "notes": "5 1^ 7 1^ 2^ 1^ 7 5 3-",
    "lyrics": "My heart will go on",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "泰坦尼克号 (G调)",
    "notes": "5 1^ 7 1^ 2^ 1^ 7 5 3-",
    "lyrics": "My heart will go on",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "泰坦尼克号 (F调)",
    "notes": "5 1^ 7 1^ 2^ 1^ 7 5 3-",
    "lyrics": "My heart will go on",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "千与千寻",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "いつも何度でも",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "千与千寻 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "いつも何度でも",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "千与千寻 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "いつも何度でも",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "龙猫",
    "notes": "3 5 6 5 3 2 1 3 5-",
    "lyrics": "となりのトトロ",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "龙猫 (G调)",
    "notes": "3 5 6 5 3 2 1 3 5-",
    "lyrics": "となりのトトロ",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "龙猫 (F调)",
    "notes": "3 5 6 5 3 2 1 3 5-",
    "lyrics": "となりのトトロ",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "哆啦A梦",
    "notes": "1 1 5 5 6 6 5 4 4 3 3 2 2 1-",
    "lyrics": "哆啦A梦之歌",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "哆啦A梦 (G调)",
    "notes": "1 1 5 5 6 6 5 4 4 3 3 2 2 1-",
    "lyrics": "哆啦A梦之歌",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "哆啦A梦 (F调)",
    "notes": "1 1 5 5 6 6 5 4 4 3 3 2 2 1-",
    "lyrics": "哆啦A梦之歌",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "名侦探柯南",
    "notes": "3 5 6 1^ 6 5 3 2 1 2 3-",
    "lyrics": "キミがいれば",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "名侦探柯南 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2 3-",
    "lyrics": "キミがいれば",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "名侦探柯南 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2 3-",
    "lyrics": "キミがいれば",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "致爱丽丝",
    "notes": "3 #2 3 #2 3 7 2 3 1 6-",
    "lyrics": "Für Elise",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "致爱丽丝 (G调)",
    "notes": "3 #2 3 #2 3 7 2 3 1 6-",
    "lyrics": "Für Elise",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "致爱丽丝 (F调)",
    "notes": "3 #2 3 #2 3 7 2 3 1 6-",
    "lyrics": "Für Elise",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "卡农",
    "notes": "3 5 6 7 1^ 7 6 5 3 5 6 7-",
    "lyrics": "Canon",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "卡农 (G调)",
    "notes": "3 5 6 7 1^ 7 6 5 3 5 6 7-",
    "lyrics": "Canon",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "卡农 (F调)",
    "notes": "3 5 6 7 1^ 7 6 5 3 5 6 7-",
    "lyrics": "Canon",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "小步舞曲",
    "notes": "1 2 3 5 3 2 1 2 3 5 3-",
    "lyrics": "Menuet",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "小步舞曲 (G调)",
    "notes": "1 2 3 5 3 2 1 2 3 5 3-",
    "lyrics": "Menuet",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "小步舞曲 (F调)",
    "notes": "1 2 3 5 3 2 1 2 3 5 3-",
    "lyrics": "Menuet",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "圣诞快乐",
    "notes": "5 3 2 1 5 3 2 1 2 3 5 6-",
    "lyrics": "Jingle Bells",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "圣诞快乐 (G调)",
    "notes": "5 3 2 1 5 3 2 1 2 3 5 6-",
    "lyrics": "Jingle Bells",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "圣诞快乐 (F调)",
    "notes": "5 3 2 1 5 3 2 1 2 3 5 6-",
    "lyrics": "Jingle Bells",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "奇异恩典",
    "notes": "1 1 2 3 3 2 1 2 3 5 6-",
    "lyrics": "Amazing Grace",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "奇异恩典 (G调)",
    "notes": "1 1 2 3 3 2 1 2 3 5 6-",
    "lyrics": "Amazing Grace",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "奇异恩典 (F调)",
    "notes": "1 1 2 3 3 2 1 2 3 5 6-",
    "lyrics": "Amazing Grace",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "雪绒花",
    "notes": "3 5 6 5 3 2 1 2 3 5 6-",
    "lyrics": "Edelweiss",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "雪绒花 (G调)",
    "notes": "3 5 6 5 3 2 1 2 3 5 6-",
    "lyrics": "Edelweiss",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "雪绒花 (F调)",
    "notes": "3 5 6 5 3 2 1 2 3 5 6-",
    "lyrics": "Edelweiss",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "蓝色多瑙河",
    "notes": "6 7 1^ 7 6 5 3 5 6 7-",
    "lyrics": "On the Beautiful Blue Danube",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "蓝色多瑙河 (G调)",
    "notes": "6 7 1^ 7 6 5 3 5 6 7-",
    "lyrics": "On the Beautiful Blue Danube",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "蓝色多瑙河 (F调)",
    "notes": "6 7 1^ 7 6 5 3 5 6 7-",
    "lyrics": "On the Beautiful Blue Danube",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "天鹅湖",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "Swan Lake",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "天鹅湖 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "Swan Lake",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "天鹅湖 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "Swan Lake",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "月光奏鸣曲",
    "notes": "3 #2 3 #2 3 7 2 3 1-",
    "lyrics": "Moonlight Sonata",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "月光奏鸣曲 (G调)",
    "notes": "3 #2 3 #2 3 7 2 3 1-",
    "lyrics": "Moonlight Sonata",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "月光奏鸣曲 (F调)",
    "notes": "3 #2 3 #2 3 7 2 3 1-",
    "lyrics": "Moonlight Sonata",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "四季-春",
    "notes": "1 2 3 5 3 2 1 2 3 5 3-",
    "lyrics": "La Primavera",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "四季-春 (G调)",
    "notes": "1 2 3 5 3 2 1 2 3 5 3-",
    "lyrics": "La Primavera",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "四季-春 (F调)",
    "notes": "1 2 3 5 3 2 1 2 3 5 3-",
    "lyrics": "La Primavera",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "春江花月夜",
    "notes": "1 2 3 5 6 5 3 2 1 2 3-",
    "lyrics": "春江潮水连海平",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "春江花月夜 (G调)",
    "notes": "1 2 3 5 6 5 3 2 1 2 3-",
    "lyrics": "春江潮水连海平",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "春江花月夜 (F调)",
    "notes": "1 2 3 5 6 5 3 2 1 2 3-",
    "lyrics": "春江潮水连海平",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "高山流水",
    "notes": "3 5 6 1^ 2^ 1^ 6 5 3 5-",
    "lyrics": "伯牙鼓琴志在高山",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "高山流水 (G调)",
    "notes": "3 5 6 1^ 2^ 1^ 6 5 3 5-",
    "lyrics": "伯牙鼓琴志在高山",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "高山流水 (F调)",
    "notes": "3 5 6 1^ 2^ 1^ 6 5 3 5-",
    "lyrics": "伯牙鼓琴志在高山",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "梅花三弄",
    "notes": "3 5 6 1^ 6 5 3 5 6 1^-",
    "lyrics": "梅花香自苦寒来",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "梅花三弄 (G调)",
    "notes": "3 5 6 1^ 6 5 3 5 6 1^-",
    "lyrics": "梅花香自苦寒来",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "梅花三弄 (F调)",
    "notes": "3 5 6 1^ 6 5 3 5 6 1^-",
    "lyrics": "梅花香自苦寒来",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "平湖秋月",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "平湖秋月夜",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "平湖秋月 (G调)",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "平湖秋月夜",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "平湖秋月 (F调)",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "平湖秋月夜",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "彩云追月",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "彩云追月",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "彩云追月 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "彩云追月",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "彩云追月 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "彩云追月",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "渔舟唱晚",
    "notes": "3 5 6 1^ 2^ 1^ 6 5 3 5-",
    "lyrics": "渔舟唱晚响穷彭蠡之滨",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "渔舟唱晚 (G调)",
    "notes": "3 5 6 1^ 2^ 1^ 6 5 3 5-",
    "lyrics": "渔舟唱晚响穷彭蠡之滨",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "渔舟唱晚 (F调)",
    "notes": "3 5 6 1^ 2^ 1^ 6 5 3 5-",
    "lyrics": "渔舟唱晚响穷彭蠡之滨",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "旱天雷",
    "notes": "3 5 3 2 1 2 3 5 3 2 1-",
    "lyrics": "旱天雷",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "旱天雷 (G调)",
    "notes": "3 5 3 2 1 2 3 5 3 2 1-",
    "lyrics": "旱天雷",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "旱天雷 (F调)",
    "notes": "3 5 3 2 1 2 3 5 3 2 1-",
    "lyrics": "旱天雷",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "阳关三叠",
    "notes": "1 2 3 5 6 5 3 2 1 2 3-",
    "lyrics": "渭城朝雨浥轻尘",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "阳关三叠 (G调)",
    "notes": "1 2 3 5 6 5 3 2 1 2 3-",
    "lyrics": "渭城朝雨浥轻尘",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "阳关三叠 (F调)",
    "notes": "1 2 3 5 6 5 3 2 1 2 3-",
    "lyrics": "渭城朝雨浥轻尘",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "广陵散",
    "notes": "6 5 3 2 3 5 6 5 3 2-",
    "lyrics": "广陵散",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "广陵散 (G调)",
    "notes": "6 5 3 2 3 5 6 5 3 2-",
    "lyrics": "广陵散",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "广陵散 (F调)",
    "notes": "6 5 3 2 3 5 6 5 3 2-",
    "lyrics": "广陵散",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "春晓",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "春眠不觉晓处处闻啼鸟",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "春晓 (G调)",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "春眠不觉晓处处闻啼鸟",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "春晓 (F调)",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "春眠不觉晓处处闻啼鸟",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "登鹳雀楼",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "白日依山尽",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "登鹳雀楼 (G调)",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "白日依山尽",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "登鹳雀楼 (F调)",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "白日依山尽",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "静夜思",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "床前明月光",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "静夜思 (G调)",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "床前明月光",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "静夜思 (F调)",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "床前明月光",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "明月几时有",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "明月几时有把酒问青天",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "明月几时有 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "明月几时有把酒问青天",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "明月几时有 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "明月几时有把酒问青天",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "游子吟",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "慈母手中线游子身上衣",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "游子吟 (G调)",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "慈母手中线游子身上衣",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "游子吟 (F调)",
    "notes": "1 2 3 5 6 5 3 2 1 2-",
    "lyrics": "慈母手中线游子身上衣",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "江南春",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "千里莺啼绿映红",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "江南春 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "千里莺啼绿映红",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "江南春 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "千里莺啼绿映红",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "山行",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "远上寒山石径斜",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "山行 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "远上寒山石径斜",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "山行 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "远上寒山石径斜",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "枫桥夜泊",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "月落乌啼霜满天",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "枫桥夜泊 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "月落乌啼霜满天",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "枫桥夜泊 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "月落乌啼霜满天",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "出塞",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "秦时明月汉时关",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "出塞 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "秦时明月汉时关",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "出塞 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "秦时明月汉时关",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "悯农",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "锄禾日当午汗滴禾下土",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "悯农 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "锄禾日当午汗滴禾下土",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "悯农 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "锄禾日当午汗滴禾下土",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "咏鹅",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "鹅鹅鹅曲项向天歌",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "咏鹅 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "鹅鹅鹅曲项向天歌",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "咏鹅 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "鹅鹅鹅曲项向天歌",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "黄鹤楼送孟浩然",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "故人西辞黄鹤楼",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "黄鹤楼送孟浩然 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "故人西辞黄鹤楼",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "黄鹤楼送孟浩然 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 1 2-",
    "lyrics": "故人西辞黄鹤楼",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "早发白帝城",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "朝辞白帝彩云间",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "早发白帝城 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "朝辞白帝彩云间",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "早发白帝城 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "朝辞白帝彩云间",
    "key": "F",
    "cat": "classic"
  },
  {
    "title": "望庐山瀑布",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "日照香炉生紫烟",
    "key": "C",
    "cat": "classic"
  },
  {
    "title": "望庐山瀑布 (G调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "日照香炉生紫烟",
    "key": "G",
    "cat": "classic"
  },
  {
    "title": "望庐山瀑布 (F调)",
    "notes": "3 5 6 1^ 6 5 3 2 3 5-",
    "lyrics": "日照香炉生紫烟",
    "key": "F",
    "cat": "classic"
  }
];
