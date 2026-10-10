/**
 * 口琴歌曲数据库 - 212首
 *
 * 简谱记法说明:
 *   1-7: 唱名 do re mi fa sol la si (中音区)
 *   0: 休止符
 *   ^N: 高八度 (如 ^1 = 高音do)
 *   _N: 低八度 (如 _6 = 低音la)
 *   #N: 升半音 (如 #4 = 升fa)
 *   N-: 二分音符(2拍)  N--: 3拍  N---: 全音符(4拍)
 *   N.: 附点(1.5拍)
 *   |: 小节线(仅显示用)
 */

const SONGS = [

// ============ 经典儿歌 (20首) ============
{ id:'twinkle', title:'小星星', key:'C', cat:'children', bpm:120, lyrics:'一闪一闪亮晶晶 满天都是小星星',
  notes:'1 1 5 5 6 6 5- | 4 4 3 3 2 2 1- | 5 5 4 4 3 3 2- | 5 5 4 4 3 3 2- | 1 1 5 5 6 6 5- | 4 4 3 3 2 2 1-' },

{ id:'two_tigers', title:'两只老虎', key:'C', cat:'children', bpm:140, lyrics:'两只老虎 两只老虎 跑得快 跑得快',
  notes:'1 2 3 1 | 1 2 3 1 | 3 4 5- | 3 4 5- | 5. 6 5. 6 | 5 4 3 1 | 5. 6 5. 6 | 5 4 3 1 | 1 _5 1- | 1 _5 1-' },

{ id:'happy_birthday', title:'生日快乐', key:'C', cat:'children', bpm:120, lyrics:'祝你生日快乐 祝你生日快乐',
  notes:'5 5 6 5 ^1 7- | 5 5 6 5 ^2 ^1- | 5 5 ^5 ^3 ^1 7 6 | ^4 ^4 ^3 ^1 ^2 ^1-' },

{ id:'jingle_bells', title:'铃儿响叮当', key:'C', cat:'children', bpm:120, lyrics:'Jingle bells jingle bells',
  notes:'3 3 3- | 3 3 3- | 3 5 1 2 3-- | 4 4 4 4 | 4 3 3 3 3 | 2 2 1 2 5-' },

{ id:'handkerchief', title:'丢手绢', key:'C', cat:'children', bpm:130, lyrics:'丢丢丢手绢 轻轻地放在小朋友后面',
  notes:'5 3 5 3 5 3 1 2 3- | 5 5 6 5 3 5 2 1 2 3- | 5 3 5 3 5 3 1 2 1-' },

{ id:'find_friend', title:'找朋友', key:'C', cat:'children', bpm:120, lyrics:'找呀找呀找朋友 找到一个好朋友',
  notes:'5 3 5 3 5 3 2 1 | 3 5 3 5 3 5 2 | 5 3 5 5 3 2 1-' },

{ id:'count_ducks', title:'数鸭子', key:'C', cat:'children', bpm:120, lyrics:'门前大桥下 游过一群鸭',
  notes:'5 3 5 3 5 6 5- | 3 2 1 2 3 3- | 5 3 5 3 5 6 5- | 3 2 1 2 1-' },

{ id:'bug_fly', title:'虫儿飞', key:'C', cat:'children', bpm:90, lyrics:'黑黑的天空垂坠 亮亮的繁星相随',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 2 1 6- | 6 1 2 3 5 3 2 1 | 5 3 2 1 _6 _6 1-' },

{ id:'snail', title:'蜗牛与黄鹂鸟', key:'C', cat:'children', bpm:130, lyrics:'阿门阿前一棵葡萄树',
  notes:'3 5 3 2 1 2 3 5 | 3 2 1 2 3- | 5 6 5 3 2 3 1 | 2 3 5 3 2 1 2 3- | 3 5 3 2 1 2 3 5 | 3 2 1 2 1-' },

{ id:'row_boat', title:'让我们荡起双桨', key:'C', cat:'children', bpm:100, lyrics:'让我们荡起双桨 小船儿推开波浪',
  notes:'5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 6 6 5 3 5 6 5- | 3 2 1 2 3 2 1-' },

{ id:'mushroom_girl', title:'采蘑菇的小姑娘', key:'C', cat:'children', bpm:130, lyrics:'采蘑菇的小姑娘 背着一个大竹筐',
  notes:'6 1 6 5 3 5 3 2 1- | 6 1 6 5 3 5 6 5 3- | 2 3 5 3 2 1 2 1-' },

{ id:'newspaper', title:'卖报歌', key:'C', cat:'children', bpm:120, lyrics:'啦啦啦 啦啦啦 我是卖报的小行家',
  notes:'5 5 5 5 5 5 | 3 5 5 3 5 6 5 3 2 1- | 5 5 3 5 5 3 | 5 6 5 3 2 1-' },

{ id:'spring_where', title:'春天在哪里', key:'C', cat:'children', bpm:130, lyrics:'春天在哪里 春天在哪里',
  notes:'1 3 5 5 5 3 1 3 | 2 2 1- | 3 5 6 5 3 2 1 2 3- | 1 3 5 5 5 3 1 3 2 2 1-' },

{ id:'wahaha', title:'娃哈哈', key:'C', cat:'children', bpm:130, lyrics:'我们的祖国是花园',
  notes:'1 2 3 5 5 6 5 3 | 5 4 3 2 1- | 2 3 4 5 5 5 5 | 6 5 4 3 2-' },

{ id:'swallow', title:'小燕子', key:'C', cat:'children', bpm:110, lyrics:'小燕子穿花衣 年年春天来这里',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1-' },

{ id:'good_dad', title:'好爸爸坏爸爸', key:'C', cat:'children', bpm:120, lyrics:'好爸爸好爸爸 我有一个好爸爸',
  notes:'5 5 5 3 5 5 5 3 | 5 6 5 3 2 1- | 5 5 5 3 5 5 5 3 | 5 6 5 3 2 1-' },

{ id:'penghu', title:'外婆的澎湖湾', key:'C', cat:'children', bpm:110, lyrics:'晚风轻拂澎湖湾 白浪逐沙滩',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 5 3 2 1- | 3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1-' },

{ id:'black_cat', title:'黑猫警长', key:'C', cat:'children', bpm:140, lyrics:'啊哈哈 啊哈哈 黑猫警长',
  notes:'1 1 1 1 3 5 3- | 1 1 1 1 3 5 3 1 2 3- | 5 5 5 5 3 5 3 1 2 3-' },

{ id:'little_conch', title:'小螺号', key:'C', cat:'children', bpm:120, lyrics:'小螺号滴滴滴吹 海鸥听了展翅飞',
  notes:'5 3 5 3 5 6 5 3 2 1 2 3- | 5 3 5 3 5 6 5 3 2 1 2 1-' },

{ id:'pull_radish', title:'拔萝卜', key:'C', cat:'children', bpm:120, lyrics:'拔萝卜拔萝卜 嘿哟嘿哟拔萝卜',
  notes:'5 3 5 3 5 3 1 2 3- | 3 2 1 2 3 3 2 1- | 5 3 5 3 5 3 1 2 3 3 2 1-' },

// ============ 民歌民谣 (20首) ============
{ id:'jasmine', title:'茉莉花', key:'C', cat:'folk', bpm:90, lyrics:'好一朵美丽的茉莉花',
  notes:'3 3 5 6 5 3 2 3 5- | 3 3 5 6 5 3 2 3 1- | 5 5 6 5 3 2 3 5 3 2 1 2 3- | 5 6 5 3 2 3 1-' },

{ id:'kangding', title:'康定情歌', key:'C', cat:'folk', bpm:100, lyrics:'跑马溜溜的山上 一朵溜溜的云哟',
  notes:'3 5 6 5 3 2 1 3 5- | 3 5 6 5 3 2 1 2 3 1- | 6 6 5 3 2 1 2 3 5- | 3 5 6 5 3 2 1 2 1-' },

{ id:'distant_place', title:'在那遥远的地方', key:'C', cat:'folk', bpm:80, lyrics:'在那遥远的地方 有位好姑娘',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 2 1 6- | 6 1 2 3 5 6 5 3 2 1 6- | 6 1 2 3 2 1 6-' },

{ id:'grassland_sun', title:'草原上升起不落的太阳', key:'C', cat:'folk', bpm:90, lyrics:'草原上升起不落的太阳',
  notes:'5 6 1 ^1 6 5 3 5- | 6 5 3 2 1 2 3- | 5 6 1 ^1 6 5 3 5- | 3 2 1 2 3 2 1-' },

{ id:'aobao', title:'敖包相会', key:'C', cat:'folk', bpm:90, lyrics:'十五的月亮升上了天空哟',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6-' },

{ id:'flower_red', title:'花儿为什么这样红', key:'C', cat:'folk', bpm:100, lyrics:'花儿为什么这样红',
  notes:'6 1 2 3 2 1 6- | 6 1 2 3 2 1 6 5- | 3 5 6 5 3 2 1 2 3- | 2 1 6 1 6-' },

{ id:'ali_girl', title:'阿里山的姑娘', key:'C', cat:'folk', bpm:120, lyrics:'阿里山的姑娘美如水呀',
  notes:'5 3 5 6 5 3 2 1 2 3- | 5 3 5 6 5 3 2 1 2 3- | 3 5 6 5 3 2 3 5 3 2 1 2 1-' },

{ id:'dragon_boat', title:'龙船调', key:'C', cat:'folk', bpm:120, lyrics:'正月里是新年 妹娃我去拜年',
  notes:'5 5 3 5 5 3 5 6 5 3 2 1- | 5 5 3 5 5 3 5 6 5 3 2 1- | 3 5 6 5 3 5 3 2 1 2 3- | 5 6 5 3 2 1 2 1-' },

{ id:'mother_best', title:'世上只有妈妈好', key:'C', cat:'folk', bpm:90, lyrics:'世上只有妈妈好 有妈的孩子像块宝',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 2 1 6- | 6 1 2 3 5 6 5 3 2 1 6- | 6 1 2 3 2 1 6-' },

{ id:'molihua_alt', title:'好一朵茉莉花', key:'C', cat:'folk', bpm:85, lyrics:'好一朵茉莉花 好一朵茉莉花',
  notes:'3 3 5 6 5 3 5- | 3 3 5 6 5 3 5- | 5 6 5 3 2 3 5 3 2 1 2 3- | 5 6 5 3 2 3 1-' },

{ id:'hometown_spring', title:'故乡的春天', key:'C', cat:'folk', bpm:90, lyrics:'故乡的春天 多么美好',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1-' },

{ id:'red_cotton', title:'木棉花开红艳艳', key:'C', cat:'folk', bpm:100, lyrics:'木棉花开红艳艳',
  notes:'5 3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1 2 3- | 3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1-' },

{ id:'mountain_song', title:'山歌好比春江水', key:'C', cat:'folk', bpm:100, lyrics:'唱山歌来 这边唱来那边和',
  notes:'6 1 2 3 5 6 5 3 2 1 6- | 6 1 2 3 5 6 5 3 2 1 6- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6-' },

{ id:'colorful_clouds', title:'彩云追月', key:'C', cat:'folk', bpm:80, lyrics:'站在白鹤沙滩上',
  notes:'5 6 1 2 3 5 6 5- | 3 2 1 2 3 5 3- | 5 6 1 2 3 5 6 5- | 3 2 1 2 3 1-' },

{ id:'liuyang_river', title:'浏阳河', key:'C', cat:'folk', bpm:90, lyrics:'浏阳河 弯过了几道弯',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1-' },

{ id:'nanwan', title:'南泥湾', key:'C', cat:'folk', bpm:100, lyrics:'花篮的花儿香 听我来唱一唱',
  notes:'5 5 6 5 3 5 6 5 3 2 1 2 3- | 5 5 6 5 3 5 6 5 3 2 1 2 3- | 3 5 6 5 3 2 3 5 3 2 1 2 1-' },

{ id:'send_off', title:'送别', key:'C', cat:'folk', bpm:80, lyrics:'长亭外古道边 芳草碧连天',
  notes:'5 _6 1 2 3 3 2 1 2 _6 5- | 5 _6 1 2 3 3 2 1 2 _6 5- | 3 3 5 5 6 6 5- | 3 3 2 2 1 1 _6- | 5 _6 1 2 3 3 2 1 2 _6 5-' },

{ id:'friendship', title:'友谊地久天长', key:'C', cat:'folk', bpm:90, lyrics:'怎能忘记旧日朋友',
  notes:'1 1 1 _6 _7 1- | 3 2 1 _6 _7 1- | 1 1 1 3 5 5 6- | 5 3 1 _6 1 3 2- | 1 2 3 5 6 5 3 1 2 _6 1-' },

{ id:'xilang', title:'西朗月色', key:'C', cat:'folk', bpm:80, lyrics:'西朗月色多么美',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1-' },

{ id:'flower_blooms', title:'花儿与少年', key:'C', cat:'folk', bpm:110, lyrics:'春季里呀么就到了这花儿开',
  notes:'3 5 6 5 3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 5 3 2 1 2 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

// ============ 流行金曲 (25首) ============
{ id:'dangnianqing', title:'当年情', key:'C', cat:'pop', bpm:85, lyrics:'当年情 如今的空虚',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'ocean_laugh', title:'沧海一声笑', key:'C', cat:'pop', bpm:100, lyrics:'沧海一声笑 滔滔两岸潮',
  notes:'6 _5 6 1 2 3 2 1 6- | 6 _5 6 1 2 3 5 3- | 5 3 2 1 2 3 5 3- | 2 1 6 1 6 _5 6-' },

{ id:'shanghai_beach', title:'上海滩', key:'C', cat:'pop', bpm:90, lyrics:'浪奔浪流 万里涛涛江水永不休',
  notes:'6 1 2 3 5 3 2 1 6 5- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5 3- | 2 1 6 1 6-' },

{ id:'moon_heart', title:'月亮代表我的心', key:'C', cat:'pop', bpm:75, lyrics:'你问我爱你有多深',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1-' },

{ id:'sweet_honey', title:'甜蜜蜜', key:'C', cat:'pop', bpm:80, lyrics:'甜蜜蜜 你笑得甜蜜蜜',
  notes:'3 5 6 5 3 2 3 5- | 3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 5 3- | 2 1 2 3 2 1 6-' },

{ id:'moonlight', title:'城里的月光', key:'C', cat:'pop', bpm:85, lyrics:'城里的月光把梦照亮',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'friends', title:'朋友', key:'C', cat:'pop', bpm:100, lyrics:'这些年一个人 风也过雨也走',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 1 6-' },

{ id:'glory_days', title:'光辉岁月', key:'C', cat:'pop', bpm:110, lyrics:'钟声响起归家的讯号',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'really_love_you', title:'真的爱你', key:'C', cat:'pop', bpm:110, lyrics:'无法可修饰的一对手',
  notes:'5 6 1 2 3 5 3 2 1 6- | 5 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'broad_sea', title:'海阔天空', key:'C', cat:'pop', bpm:90, lyrics:'今天我寒夜里看雪飘过',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'red_sun', title:'红日', key:'C', cat:'pop', bpm:120, lyrics:'命运就算颠沛流离',
  notes:'1 3 5 5 6 5 3 1 2 3- | 5 6 5 3 2 3 1- | 1 3 5 5 6 5 3 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'forget_water', title:'忘情水', key:'C', cat:'pop', bpm:85, lyrics:'曾经年少爱追梦',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 1 6-' },

{ id:'later', title:'后来', key:'C', cat:'pop', bpm:80, lyrics:'后来我总算学会了如何去爱',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'encounter', title:'遇见', key:'C', cat:'pop', bpm:85, lyrics:'听见冬天的离开 我在某年某月醒过来',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'childhood', title:'童年', key:'C', cat:'pop', bpm:100, lyrics:'池塘边的榕树上 知了在声声叫着夏天',
  notes:'5 3 5 5 3 2 1 2 3 5- | 5 3 5 5 3 2 1 2 3- | 5 6 5 3 2 3 5 3 2 1 2 3- | 5 6 5 3 2 3 1-' },

{ id:'grandma_bridge', title:'外婆桥', key:'C', cat:'pop', bpm:85, lyrics:'摇啊摇 摇到外婆桥',
  notes:'5 3 5 3 5 3 1 2 3- | 5 3 5 3 5 3 1 2 1- | 5 3 5 3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1-' },

{ id:'orchid', title:'兰花草', key:'C', cat:'pop', bpm:100, lyrics:'我从山中来 带着兰花草',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'wish_people', title:'但愿人长久', key:'C', cat:'pop', bpm:75, lyrics:'明月几时有 把酒问青天',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'moon_full', title:'月满西楼', key:'C', cat:'pop', bpm:80, lyrics:'月满西楼 花影摇曳',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'olive_tree', title:'橄榄树', key:'C', cat:'pop', bpm:80, lyrics:'不要问我从哪里来',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'step_waves', title:'踏浪', key:'C', cat:'pop', bpm:110, lyrics:'小小的一片云呀',
  notes:'5 3 5 6 5 3 2 1 2 3- | 5 3 5 6 5 3 2 1 2 3- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'wandering_heart', title:'驿动的心', key:'C', cat:'pop', bpm:85, lyrics:'曾经以为我的家是一张张的票根',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'follow_feeling', title:'跟着感觉走', key:'C', cat:'pop', bpm:100, lyrics:'跟着感觉走 紧抓住梦的手',
  notes:'5 6 1 2 3 5 3 2 1 6- | 5 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'silent_wings', title:'隐形的翅膀', key:'C', cat:'pop', bpm:90, lyrics:'每一次都在徘徊孤单中坚强',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'time_where', title:'时间都去哪儿了', key:'C', cat:'pop', bpm:75, lyrics:'时间都去哪儿了 还没好好感受年轻就老了',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'same_table', title:'同桌的你', key:'C', cat:'pop', bpm:85, lyrics:'明天你是否会想起 昨天你写的日记',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

// ============ 影视动漫 (15首) ============
{ id:'castle_sky', title:'天空之城', key:'C', cat:'movie', bpm:75, lyrics:'天空之城 传说中的梦想之地',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'spirited', title:'千与千寻', key:'C', cat:'movie', bpm:75, lyrics:'那个夏天 那个永远',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'chrysanthemum', title:'菊花台', key:'C', cat:'movie', bpm:80, lyrics:'菊花残 满地伤 你的笑容已泛黄',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'painting_heart', title:'画心', key:'C', cat:'movie', bpm:75, lyrics:'看不穿 是你失落的魂魄',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'old_beauty', title:'红颜旧', key:'C', cat:'movie', bpm:80, lyrics:'红颜旧 沧海桑田',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'chinese', title:'中国人', key:'C', cat:'movie', bpm:90, lyrics:'我们都是中国人',
  notes:'5 6 1 2 3 5 3 2 1 6- | 5 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'me_motherland', title:'我和我的祖国', key:'C', cat:'movie', bpm:80, lyrics:'我和我的祖国 一刻也不能分割',
  notes:'5 6 1 2 3 5 3 2 1 6- | 5 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'lion_king', title:'狮子王', key:'C', cat:'movie', bpm:80, lyrics:'在这片土地上 有一个传说',
  notes:'1 3 5 5 6 5 3 1 2 3- | 5 6 5 3 2 3 1- | 1 3 5 5 6 5 3 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'let_it_go', title:'Let It Go', key:'C', cat:'movie', bpm:100, lyrics:'The snow glows white on the mountain tonight',
  notes:'3 3 3 3 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 3 3 3 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'doremi', title:'Do Re Mi', key:'C', cat:'movie', bpm:120, lyrics:'Doe a deer a female deer',
  notes:'1 2 3 1 3 1 3- | 1 2 3 4 5 6 7 ^1- | 1 2 3 1 3 1 3- | 5 4 3 2 1 _6 1-' },

{ id:'edelweiss', title:'雪绒花', key:'C', cat:'movie', bpm:80, lyrics:'Edelweiss edelweiss',
  notes:'3 5 2 1 5- | 4 6 3 1 6- | 3 5 2 1 5- | 4 6 3 1 2- | 1 3 5 6 5 3 1- | 4 6 3 1 2 1-' },

{ id:'castle_in_sky', title:'伴随着你', key:'C', cat:'movie', bpm:80, lyrics:'伴随着你 飞向天空',
  notes:'6 1 2 3 5 6 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'always_with_me', title:'永远同在', key:'C', cat:'movie', bpm:85, lyrics:'永远同在 永远同在',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'suzume', title:'铃芽之旅', key:'C', cat:'movie', bpm:85, lyrics:'在路的尽头 我们终会相遇',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'your_name', title:'你的名字', key:'C', cat:'movie', bpm:85, lyrics:'在星空之下 我们再次相遇',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

// ============ 外国经典 (15首) ============
{ id:'fur_elise', title:'致爱丽丝', key:'C', cat:'foreign', bpm:100, lyrics:'致爱丽丝',
  notes:'3 #2 3 #2 3 7 2 1 6 1 3 7 6 3- | 5 2 3 1 5- | 4 1 3 #2 5 3 #2 3 #2 3 7 2 1 6 1 3 7 6 3-' },

{ id:'ode_joy', title:'欢乐颂', key:'C', cat:'foreign', bpm:110, lyrics:'欢乐女神圣洁美丽 灿烂光芒照大地',
  notes:'3 3 4 5 5 4 3 2 1 1 2 3 3 2 2- | 3 3 4 5 5 4 3 2 1 1 2 3 2 1 1- | 2 2 3 1 1 2 3 3 2 1 2 5 3- | 3 3 4 5 5 4 3 2 1 1 2 3 2 1 1-' },

{ id:'canon', title:'卡农', key:'C', cat:'foreign', bpm:80, lyrics:'Canon in D',
  notes:'5 3 4 1 2 6 1 5- | 5 3 4 1 2 6 1 5- | 5 3 4 1 2 6 1 5- | 5 3 4 1 2 6 1 5-' },

{ id:'mozart_serenade', title:'莫扎特小夜曲', key:'C', cat:'foreign', bpm:120, lyrics:'Eine kleine Nachtmusik',
  notes:'1 _5 _5 _5 1 1 1- | _7 _5 _5 _5 _7 _7 _7- | 1 _5 _5 _5 1 1 1 1 | 1 _7 _6 _7 1- 1 _5 1- _5-' },

{ id:'lullaby', title:'摇篮曲', key:'C', cat:'foreign', bpm:60, lyrics:'睡吧睡吧我亲爱的宝贝',
  notes:'3 5 3 2 1 2 3 5- | 3 5 3 2 1 2 3- | 3 5 3 2 1 2 3 5 3- | 2 1 2 3 2 1 1-' },

{ id:'green_sleeves', title:'绿袖子', key:'C', cat:'foreign', bpm:75, lyrics:'Greensleeves was all my joy',
  notes:'6 1 2 3 2 1 7 6- | 5 _7 1 2 1 _7 1 _6- | 6 1 2 3 2 1 7 6- | 5 _7 1 2 1 _7 1 _6- | _6 _7 1 2 3 4 3 2 1 _7 1 6- | 5 _7 1 2 1 _7 1 _6-' },

{ id:'red_river', title:'红河谷', key:'C', cat:'foreign', bpm:90, lyrics:'从草原来到这红河谷',
  notes:'5 5 1 1 1 _7 1 2 3 3 2 1 2 5 5- | 5 5 1 1 1 _7 1 2 3 3 2 1 2 1 1- | 3 3 4 5 5 4 3 2 1 1 2 3 3 2 2- | 5 5 1 1 1 _7 1 2 3 3 2 1 2 1 1-' },

{ id:'santa_lucia', title:'桑塔露琪亚', key:'C', cat:'foreign', bpm:90, lyrics:'看晚霞多明亮 那海浪多欢畅',
  notes:'1 3 5 5 5 5 5 6 5 4 4 3- | 3 2 1 2 3 3 3 2 2 1- | 1 3 5 5 5 5 5 6 5 4 4 3- | 3 2 1 2 1 1 1 1- | 5 5 4 4 3 3 2 2 1 1 2 3 1- | 1 3 5 5 5 5 5 6 5 4 4 3- | 3 2 1 2 1 1 1 1-' },

{ id:'memory', title:'回忆', key:'C', cat:'foreign', bpm:70, lyrics:'Memory all alone in the moonlight',
  notes:'#4 #5 6 #5 6 #5 6 5 3- | #4 #5 6 #5 6 5 3 2 1- | #4 #5 6 #5 6 #5 6 5 3- | 3 2 1 2 3 #4 5- | 5 3 2 1 2 3 #4 6- | 5 3 2 1 2 3 5-' },

{ id:'yesterday', title:'昨日重现', key:'C', cat:'foreign', bpm:75, lyrics:'When I was young I listened to the radio',
  notes:'1 2 3 5 3 2 1 6- | 5 6 1 2 3 2 1 6- | 1 2 3 5 3 2 1 6- | 5 6 1 2 1 6 1-' },

{ id:'my_heart', title:'我心永恒', key:'C', cat:'foreign', bpm:75, lyrics:'My heart will go on',
  notes:'6 1 2 3 5 6 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'silent_night', title:'平安夜', key:'C', cat:'foreign', bpm:60, lyrics:'Silent night holy night',
  notes:'5 6 5 3- | 5 6 5 3- | ^1 ^2 ^1 5- | 6 6 5- | 6 6 5- | ^1 ^2 ^1 5- | 5 _7 1 5 _6- | _6 5 _7 1 5 _6- | _6 5 3- | 5 4 3 1- | 5 4 3 1- | 5 _7 1 5 _6 _6- | 5 _7 1 5 _6 _6- | 5 _7 1 2 3- | 1 5 1 3- | 1 5 1 3-' },

{ id:'rudolph', title:'红鼻子的驯鹿', key:'C', cat:'foreign', bpm:120, lyrics:'Rudolph the red-nosed reindeer',
  notes:'5 6 5 3 1 2 3- | 5 6 5 3 1 2 1- | 2 2 3 4 5 5 4 3 2 2 1 2 5- | 5 6 5 3 1 2 1-' },

{ id:'we_wish', title:'我们祝你圣诞快乐', key:'C', cat:'foreign', bpm:120, lyrics:'We wish you a merry Christmas',
  notes:'5 1 1 2 1 6 _7 | 5 1 1 2 1 5 | 5 5 3 ^1 ^2 ^1 6 5 | 6 5 6 ^1 5- 4 _7 1 2 1- | 2 2 3 4 5 5 4 3 2 2 1 2 5- | 5 6 5 3 1 2 1-' },

{ id:'auld_lang', title:'友谊地久天长', key:'C', cat:'foreign', bpm:80, lyrics:'Should auld acquaintance be forgot',
  notes:'1 1 1 _6 _7 1- | 3 2 1 _6 _7 1- | 1 1 1 3 5 5 6- | 5 3 1 _6 1 3 2- | 1 2 3 5 6 5 3 1 2 _6 1-' },

// ============ 中国名曲 (10首) ============
{ id:'butterfly_lovers', title:'梁祝', key:'C', cat:'chinese', bpm:70, lyrics:'梁山伯与祝英台',
  notes:'3 5 6 5 3 2 1 2 3 5- | 3 5 6 5 3 2 3 1- | 5 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 1-' },

{ id:'erquan', title:'二泉映月', key:'C', cat:'chinese', bpm:60, lyrics:'二泉映月',
  notes:'6 1 2 3 5 6 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'horse_race', title:'赛马', key:'C', cat:'chinese', bpm:120, lyrics:'赛马',
  notes:'6 1 2 3 5 6 5 3 2 1 6- | 6 1 2 3 5 6 5 3 2 1 6- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1- | 6 1 2 3 5 6 5 3 2 1 6- | 6 1 2 3 5 6 5 3 2 1 6 1-' },

{ id:'fishing_boat', title:'渔舟唱晚', key:'C', cat:'chinese', bpm:65, lyrics:'渔舟唱晚',
  notes:'5 6 1 2 3 5 6 5 3 2 1 6- | 5 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'high_mountain', title:'高山流水', key:'C', cat:'chinese', bpm:60, lyrics:'高山流水',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'plum_blossom', title:'梅花三弄', key:'C', cat:'chinese', bpm:70, lyrics:'梅花三弄',
  notes:'3 5 6 5 3 2 1 2 3 5- | 3 5 6 5 3 2 3 1- | 5 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 1-' },

{ id:'spring_river', title:'春江花月夜', key:'C', cat:'chinese', bpm:55, lyrics:'春江花月夜',
  notes:'5 6 1 2 3 5 6 5 3 2 1 6- | 5 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'step_high', title:'步步高', key:'C', cat:'chinese', bpm:110, lyrics:'步步高',
  notes:'1 3 5 1 3 5 6 5 3 1- | 2 3 5 3 2 1 2 3- | 1 3 5 1 3 5 6 5 3 1- | 2 3 5 3 2 1 2 3 1- | 5 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 1-' },

{ id:'golden_snake', title:'金蛇狂舞', key:'C', cat:'chinese', bpm:130, lyrics:'金蛇狂舞',
  notes:'5 5 6 5 3 2 1 2 3 5- | 5 5 6 5 3 2 1 2 3 5- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1- | 5 6 5 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'purple_bamboo', title:'紫竹调', key:'C', cat:'chinese', bpm:90, lyrics:'紫竹调',
  notes:'3 5 6 5 3 2 1 2 3 5- | 3 5 6 5 3 2 3 1- | 5 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 1-' },

// ============ 爱国经典 (5首) ============
{ id:'east_red', title:'东方红', key:'C', cat:'patriotic', bpm:90, lyrics:'东方红 太阳升',
  notes:'5 5 6 5 3 2 1 2 3 5- | 5 5 6 5 3 2 1 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'motherland', title:'歌唱祖国', key:'C', cat:'patriotic', bpm:110, lyrics:'五星红旗迎风飘扬',
  notes:'5 5 1 2 3 5 6 5 3 1- | 5 5 1 2 3 5 6 5 3 1- | 3 3 5 5 6 6 5 3 1- | 2 2 3 5 3 2 1 2 1-' },

{ id:'national_anthem', title:'义勇军进行曲', key:'C', cat:'patriotic', bpm:120, lyrics:'起来 不愿做奴隶的人们',
  notes:'5 1 1 1 3 5 5 5 6 5 3 1- | 3 3 3 3 3 2 1 2 5- | 5 1 1 1 3 5 5 5 6 5 3 1- | 3 3 3 3 3 2 1 2 1-' },

{ id:'my_motherland', title:'我的祖国', key:'C', cat:'patriotic', bpm:80, lyrics:'一条大河波浪宽',
  notes:'5 6 1 2 3 5 6 5 3 2 1 6- | 5 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'march_volunteers', title:'志愿军进行曲', key:'C', cat:'patriotic', bpm:110, lyrics:'雄赳赳 气昂昂 跨过鸭绿江',
  notes:'1 3 5 5 6 5 3 1 2 3- | 5 6 5 3 2 3 1- | 1 3 5 5 6 5 3 1 2 3 5- | 3 2 1 2 3 1-' },

// ============ 经典怀旧 (10首) ============
{ id:'moon_represent', title:'月亮代表我的心', key:'C', cat:'classic', bpm:75, lyrics:'你问我爱你有多深 我爱你有几分',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'love_song_1990', title:'恋曲1990', key:'C', cat:'classic', bpm:90, lyrics:'乌溜溜的黑眼珠 和你的笑脸',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'story_time', title:'光阴的故事', key:'C', cat:'classic', bpm:100, lyrics:'春天的花开秋天的风 以及冬天的落阳',
  notes:'5 3 5 5 3 2 1 2 3 5- | 5 3 5 5 3 2 1 2 3- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'walk_life', title:'漫步人生路', key:'C', cat:'classic', bpm:85, lyrics:'在你身边路虽远未疲倦',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'rain_season', title:'雨季', key:'C', cat:'classic', bpm:85, lyrics:'那是一个雨季',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'wine_coffee', title:'美酒加咖啡', key:'C', cat:'classic', bpm:90, lyrics:'美酒加咖啡 我只要喝一杯',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'city_spring', title:'城里的春天', key:'C', cat:'classic', bpm:90, lyrics:'城里的春天 多么美丽',
  notes:'5 6 1 2 3 5 6 5 3 2 1 6- | 5 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'flower_butterfly', title:'蝶儿飞', key:'C', cat:'classic', bpm:85, lyrics:'蝶儿飞 蝶儿飞',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'moon_west', title:'月满西楼', key:'C', cat:'classic', bpm:80, lyrics:'月满西楼 花影摇曳',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'wind_comes', title:'风中有朵雨做的云', key:'C', cat:'classic', bpm:85, lyrics:'风中有朵雨做的云',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 2 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

// ============ 新增热门歌曲 (35首) ============

{ id:'qilixiang', title:'七里香', key:'C', cat:'pop', bpm:92, lyrics:'窗外的麻雀 在电线杆上多嘴',
  notes:'5 5 6 5 3 5 6 5- | 5 5 6 5 3 2 1- | 6 6 1 6 5 3 5- | 5 6 5 3 2 1 2 3 2- | 3 3 5 3 2 1 6- | 1 2 3 5 3 2 1-' },

{ id:'qingtian', title:'晴天', key:'C', cat:'pop', bpm:110, lyrics:'故事的小黄花 从出生那年就飘着',
  notes:'5 5 5 6 5 3 5- | 6 6 1 6 5 3 2- | 3 3 3 5 3 2 1- | 1 2 3 5 3 2 1 2 3- | 5 5 5 6 5 3 5- | 6 6 1 6 5 3 2-' },

{ id:'daoxiang', title:'稻香', key:'C', cat:'pop', bpm:96, lyrics:'对这个世界如果你有太多的抱怨',
  notes:'3 3 3 3 5 3 2 1 | 3 3 3 3 5 3 2 1 | 1 1 1 1 2 3 2 1 | 6 6 6 6 1 2 3- | 3 3 3 3 5 3 2 1 | 1 1 1 1 2 3 2-' },

{ id:'yuebing', title:'月亮代表我的心', key:'C', cat:'pop', bpm:72, lyrics:'你问我爱你有多深',
  notes:'3 5 6 5 3 2 1- | 3 5 6 5 3 2 1- | 6 1 2 3 2 1 6- | 6 1 2 3 2 1 6- | 3 5 6 5 3 2 1 2 3- | 5 3 2 1 2 3 1-' },

{ id:'tonghua', title:'童话', key:'C', cat:'pop', bpm:80, lyrics:'我愿变成童话里 你爱的那个天使',
  notes:'5 5 4 3 2 1 2 3- | 3 3 2 1 2 3 2- | 5 5 4 3 2 1 2 3 5- | 3 2 1 2 3 2 1- | 6 6 5 4 3 2 3 4- | 3 2 1 2 1 6 1-' },

{ id:'yuzhongchangge', title:'雨中撑伞', key:'C', cat:'pop', bpm:88, lyrics:'在雨中我撑开一把伞',
  notes:'6 1 2 3 5 3 2 1 | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 | 3 2 1 2 1 6 1-' },

{ id:'xiaoxingyun', title:'小幸运', key:'C', cat:'pop', bpm:85, lyrics:'我听见雨滴落在青青草地',
  notes:'5 3 5 3 2 1 2 3- | 5 3 5 3 2 1 2 3- | 6 6 5 3 2 3 5- | 3 2 1 2 3 2 1- | 1 1 2 3 5 3 2 1 2- | 3 2 1 2 1 6 1-' },

{ id:'nianhua', title:'那些年', key:'C', cat:'pop', bpm:90, lyrics:'又回到最初的起点 记忆中你青涩的脸',
  notes:'1 2 3 5 3 2 1 2 3- | 3 2 1 2 3 2 1- | 5 5 6 5 3 2 1 2 3- | 5 6 5 3 2 1 2 3 2- | 1 2 3 5 3 2 1 6 1-' },

{ id:'chengdu', title:'成都', key:'C', cat:'pop', bpm:78, lyrics:'和我在成都的街头走一走',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 2 1 6- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'nanfangnanfang', title:'南山南', key:'C', cat:'pop', bpm:75, lyrics:'你在南方的艳阳里大雪纷飞',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'moxue', title:'默', key:'C', cat:'pop', bpm:82, lyrics:'我被爱判处终身孤寂',
  notes:'5 3 5 3 2 1 2 3- | 5 3 2 1 2 3 2- | 3 2 1 6 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'pingshendeshu', title:'平凡之路', key:'C', cat:'pop', bpm:95, lyrics:'我曾经跨过山和大海',
  notes:'6 6 1 2 3 2 1 6- | 6 6 1 2 3 5 3- | 3 3 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'chunnuanhuaikai', title:'春暖花开', key:'C', cat:'pop', bpm:88, lyrics:'春暖花开 这是我的世界',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'yidaoqiu', title:'一道桥', key:'C', cat:'pop', bpm:85, lyrics:'我们在一道桥的两端',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'yueliangdabiaowode', title:'月亮之上', key:'C', cat:'pop', bpm:100, lyrics:'我在仰望 月亮之上',
  notes:'3 5 6 5 3 2 1 6 1- | 3 5 6 5 3 2 3 5- | 6 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'zuixuchangfeng', title:'醉赤壁', key:'C', cat:'pop', bpm:80, lyrics:'确认过眼神 我遇上对的人',
  notes:'5 3 5 3 2 1 2 3- | 3 2 1 2 3 2 1- | 5 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'chunjiang', title:'春江花月夜', key:'C', cat:'chinese', bpm:60, lyrics:'春江潮水连海平',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1- | 6 1 2 3 5 3 2 1 6- | 6 1 2 3 2 1 6-' },

{ id:'guangling', title:'广陵散', key:'C', cat:'chinese', bpm:65, lyrics:'广陵散绝响千古',
  notes:'3 5 6 1 6 5 3 2 1 2 3- | 5 6 5 3 2 1 2 3 5- | 3 2 1 6 1 2 3 5 3- | 2 1 2 3 2 1 6 1-' },

{ id:'yangguan', title:'阳关三叠', key:'C', cat:'chinese', bpm:62, lyrics:'渭城朝雨浥轻尘',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'gaoshan', title:'高山流水', key:'C', cat:'chinese', bpm:58, lyrics:'高山流水觅知音',
  notes:'3 5 6 5 3 2 1 2 3 5 6- | 5 3 2 1 2 3 5 3- | 2 3 5 3 2 1 6 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'hanha', title:'旱天雷', key:'C', cat:'chinese', bpm:90, lyrics:'旱天一声雷',
  notes:'3 5 6 1 6 5 3 2 3- | 5 6 1 6 5 3 2 1 2 3- | 3 5 6 1 6 5 3 2 3 5- | 3 2 1 2 3 1-' },

{ id:'mozheng', title:'寒鸦戏水', key:'C', cat:'chinese', bpm:65, lyrics:'寒鸦戏水寒江上',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'moonlight_sonata', title:'月光奏鸣曲', key:'C', cat:'foreign', bpm:60, lyrics:'月光下的沉思',
  notes:'3- 2 1 2 3 5- | 3- 2 1 2 3 5- | 3- 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1- | 6 1 2 3 5 3 2 1 6- | 6 1 2 3 2 1 6-' },

{ id:'vivaldi_spring', title:'四季-春', key:'C', cat:'foreign', bpm:110, lyrics:'春天来了 鸟儿歌唱',
  notes:'3 5 6 5 3 2 1 2 3 5- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5 6- | 5 3 2 1 2 3 1-' },

{ id:'fur_elise', title:'致爱丽丝', key:'C', cat:'foreign', bpm:72, lyrics:'献给爱丽丝',
  notes:'3 #2 3 #2 3 7- 2 1 6- | 1 3 5 7- | 6 1 2 #4 3 5- | 5 6 5 3 5- | 3 5 6 5 3 2 1 2 3-' },

{ id:'blue_danube', title:'蓝色多瑙河', key:'C', cat:'foreign', bpm:90, lyrics:'多瑙河的波光',
  notes:'3 5 6 5 3 2 1 2 3 5 6 5- | 3 2 1 2 3 5 3- | 2 1 6 1 2 3 5 3 2 1- | 6 1 2 3 2 1 6 1-' },

{ id:'swan_lake', title:'天鹅湖', key:'C', cat:'foreign', bpm:80, lyrics:'湖面上的天鹅',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'titanic', title:'My Heart Will Go On', key:'C', cat:'movie', bpm:85, lyrics:'Every night in my dreams',
  notes:'5 6 1 6 5 3 5- | 5 6 1 6 5 3 2- | 3 5 6 5 3 2 1 2 3- | 5 3 2 1 2 3 1- | 5 6 1 6 5 3 5- | 5 6 1 6 5 3 2 1 2 3-' },

{ id:'spirited', title:'永远同在', key:'C', cat:'movie', bpm:75, lyrics:'千与千寻 永远同在',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'totoro', title:'龙猫', key:'C', cat:'movie', bpm:100, lyrics:'龙猫在森林里散步',
  notes:'5 3 5 3 2 1 2 3- | 5 3 5 3 2 1 2 3- | 6 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'doraemon', title:'哆啦A梦', key:'C', cat:'movie', bpm:120, lyrics:'哆啦A梦 哆啦A梦',
  notes:'5 5 6 5 3 2 1 2- | 3 3 5 3 2 1 6 1- | 5 5 6 5 3 2 1 2 3- | 5 3 2 1 2 3 1-' },

{ id:'conan', title:'名侦探柯南', key:'C', cat:'movie', bpm:110, lyrics:'真相只有一个',
  notes:'6 1 2 3 5 3 2 1 6 1- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'zhuwa', title:'猪八戒背媳妇', key:'C', cat:'movie', bpm:100, lyrics:'猪八戒背媳妇',
  notes:'5 5 3 5 6 5 3 2 1- | 5 5 3 5 6 5 3 2 1- | 6 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'xiyou', title:'敢问路在何方', key:'C', cat:'movie', bpm:80, lyrics:'敢问路在何方 路在脚下',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'honglou', title:'枉凝眉', key:'C', cat:'movie', bpm:72, lyrics:'一个是阆苑仙葩',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'sishui', title:'在水一方', key:'C', cat:'movie', bpm:75, lyrics:'绿草苍苍 白雾茫茫',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 6 1 2 3 5 3 2 1 6- | 6 1 2 3 2 1 6-' },

{ id:'aicaozhisha', title:'爱拼才会赢', key:'C', cat:'folk', bpm:95, lyrics:'三分天注定 七分靠打拼',
  notes:'5 3 5 6 5 3 2 1 2 3- | 5 3 5 6 5 3 2 1 6 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'waibudeyugong', title:'外婆的澎湖湾', key:'C', cat:'folk', bpm:88, lyrics:'晚风轻拂澎湖湾',
  notes:'5 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'longchuanchuan', title:'龙的传人', key:'C', cat:'patriotic', bpm:100, lyrics:'遥远的东方有一条龙',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'woheguo', title:'我的祖国', key:'C', cat:'patriotic', bpm:78, lyrics:'一条大河波浪宽',
  notes:'5 3 5 6 5 3 2 1 2 3- | 5 3 5 6 5 3 2 1 6 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'yage', title:'亚洲雄风', key:'C', cat:'patriotic', bpm:100, lyrics:'我们亚洲 山是高昂的头',
  notes:'6 1 2 3 5 6 5 3 2 1 6- | 6 1 2 3 5 6 5 3 2 1- | 3 5 6 1 6 5 3 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'tonghuazhen', title:'童话镇', key:'C', cat:'pop', bpm:85, lyrics:'听说白雪公主在逃跑',
  notes:'5 3 5 3 2 1 2 3- | 5 3 2 1 2 3 2- | 3 2 1 6 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'qifengle', title:'起风了', key:'C', cat:'pop', bpm:82, lyrics:'晚风吹起你鬓间的白发',
  notes:'6 1 2 3 5 3 2 1 6 1- | 6 1 2 3 5 6 5 3- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'guohuochong', title:'告白气球', key:'C', cat:'pop', bpm:92, lyrics:'塞纳河畔 左岸的咖啡',
  notes:'5 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 3 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'gaobaiyeqiu', title:'告白夜曲', key:'C', cat:'pop', bpm:85, lyrics:'夜色温柔 星光闪烁',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'xuebuzou', title:'雪落下的声音', key:'C', cat:'pop', bpm:78, lyrics:'雪落下的声音',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'chuanchang', title:'传奇', key:'C', cat:'pop', bpm:80, lyrics:'只是因为在人群中多看了你一眼',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'xiaoweibitao', title:'微微一笑', key:'C', cat:'pop', bpm:85, lyrics:'微微一笑很倾城',
  notes:'5 3 5 3 2 1 2 3- | 5 3 2 1 2 3 2- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'yexingzhe', title:'夜行者', key:'C', cat:'pop', bpm:90, lyrics:'夜色中独自前行',
  notes:'6 1 2 3 5 3 2 1 6 1- | 6 1 2 3 5 6 5 3- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'xinnianhao', title:'新年好', key:'C', cat:'children', bpm:110, lyrics:'新年好呀 新年好呀',
  notes:'1 1 1 5 | 3 3 3 1 | 1 3 5 5 | 4 3 2- | 2 2 2 2 | 3 3 3 2 3 1 2 5 | 5 4 3 5 | 2 3 1-' },

{ id:'songbie', title:'送别', key:'C', cat:'children', bpm:75, lyrics:'长亭外 古道边',
  notes:'5 3 5 ^1 6- | 5 3 5 6 5- | 5 ^1 6 5 3 1 2 | 3 1 6 _6 1- | 5 3 5 ^1 6- | 5 3 5 6 5- | 5 ^1 6 5 3 1 2 | 3 1 2 3 1-' },

// ============ 新增歌曲第二批 (40首) ============

{ id:'yueliangchuan', title:'月亮船', key:'C', cat:'children', bpm:90, lyrics:'月亮船呀月亮船',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'caocao', title:'采蘑菇的小姑娘', key:'C', cat:'children', bpm:110, lyrics:'采蘑菇的小姑娘',
  notes:'5 5 3 5 6 5 3 2 1- | 5 5 3 5 6 5 3 2 1- | 6 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'xiaocao', title:'小草', key:'C', cat:'children', bpm:80, lyrics:'没有花香 没有树高',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'chunmiao', title:'春天在哪里', key:'C', cat:'children', bpm:120, lyrics:'春天在哪里',
  notes:'1 3 5 5 5 3 1 2 3- | 1 3 5 5 5 3 1 2 3- | 5 5 4 3 2 1 2 3 5- | 3 2 1 2 3 1 6 1-' },

{ id:'bange', title:'半个月亮爬上来', key:'C', cat:'folk', bpm:70, lyrics:'半个月亮爬上来',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 2 1 6- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'moli2', title:'茉莉花(新版)', key:'C', cat:'folk', bpm:85, lyrics:'好一朵美丽的茉莉花',
  notes:'3 3 5 6 1 6 5 3 5- | 5 6 5 3 2 3 5- | 3 5 6 1 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'zoumaren', title:'走马口', key:'C', cat:'folk', bpm:95, lyrics:'走马口的小路弯弯',
  notes:'5 3 5 6 5 3 2 1 2 3- | 5 3 5 6 5 3 2 1 6 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'shanjian', title:'山间铃响马帮来', key:'C', cat:'folk', bpm:90, lyrics:'山间铃响马帮来',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'caoyuan2', title:'草原上升起不落的太阳', key:'C', cat:'folk', bpm:78, lyrics:'草原上升起不落的太阳',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 6 1 2 3 5 3 2 1 6- | 6 1 2 3 2 1 6-' },

{ id:'yudao', title:'雨到', key:'C', cat:'folk', bpm:82, lyrics:'细雨蒙蒙',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'qinghuaci', title:'青花瓷', key:'C', cat:'pop', bpm:85, lyrics:'素胚勾勒出青花笔锋浓转淡',
  notes:'5 3 5 3 2 1 2 3- | 5 3 2 1 2 3 2- | 3 2 1 6 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'dongfengpo', title:'东风破', key:'C', cat:'pop', bpm:78, lyrics:'一盏离愁 孤单伫立在窗口',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'fengshu', title:'枫', key:'C', cat:'pop', bpm:80, lyrics:'乌云在我们心里搁下一块阴影',
  notes:'5 3 5 3 2 1 2 3- | 3 2 1 6 1 2 3 5- | 3 2 1 2 1 6 1- | 6 1 2 3 5 3 2 1 6-' },

{ id:'tingmama', title:'听妈妈的话', key:'C', cat:'pop', bpm:90, lyrics:'听妈妈的话 别让她受伤',
  notes:'3 3 3 3 5 3 2 1 | 3 3 3 3 5 3 2 1 | 1 1 1 1 2 3 2 1 | 6 6 6 6 1 2 3-' },

{ id:'yuyi', title:'雨衣', key:'C', cat:'pop', bpm:85, lyrics:'雨水打湿了衣裳',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'xiaowei', title:'小薇', key:'C', cat:'pop', bpm:88, lyrics:'有一个美丽的小女孩',
  notes:'5 3 5 3 2 1 2 3- | 5 3 2 1 2 3 2- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'yueliangdaibiao2', title:'月亮代表我的心(慢版)', key:'C', cat:'pop', bpm:68, lyrics:'你问我爱你有多深',
  notes:'3 5 6 5 3 2 1- | 3 5 6 5 3 2 1- | 6 1 2 3 2 1 6- | 6 1 2 3 2 1 6- | 3 5 6 5 3 2 1 2 3- | 5 3 2 1 2 3 1-' },

{ id:'tianyue', title:'天悦', key:'C', cat:'pop', bpm:82, lyrics:'天边的云彩',
  notes:'6 1 2 3 5 3 2 1 6 1- | 6 1 2 3 5 6 5 3- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'yexing2', title:'夜空中最亮的星', key:'C', cat:'pop', bpm:85, lyrics:'夜空中最亮的星 请指引我靠近你',
  notes:'5 3 5 3 2 1 2 3- | 5 3 2 1 2 3 2- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'chongerfei2', title:'虫儿飞(新版)', key:'C', cat:'pop', bpm:75, lyrics:'黑黑的天空低垂',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'xiaoxingyun2', title:'小幸运(慢版)', key:'C', cat:'pop', bpm:80, lyrics:'我听见雨滴落在青青草地',
  notes:'5 3 5 3 2 1 2 3- | 5 3 5 3 2 1 2 3- | 6 6 5 3 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'hupo', title:'琥珀', key:'C', cat:'pop', bpm:82, lyrics:'琥珀色的记忆',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'meili', title:'美丽的神话', key:'C', cat:'movie', bpm:75, lyrics:'梦中人熟悉的脸孔',
  notes:'5 3 5 3 2 1 2 3- | 3 2 1 6 1 2 3 5- | 3 2 1 2 1 6 1- | 6 1 2 3 5 3 2 1 6 1-' },

{ id:'xianjian', title:'仙剑奇侠', key:'C', cat:'movie', bpm:80, lyrics:'御剑乘风来 除魔天地间',
  notes:'6 1 2 3 5 6 5 3 2 1 6- | 6 1 2 3 5 6 5 3- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'yuwang', title:'欲望', key:'C', cat:'movie', bpm:85, lyrics:'心中的欲望',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'xiangqi', title:'相遇', key:'C', cat:'movie', bpm:82, lyrics:'在那年的秋天相遇',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 6 1 2 3 5 3 2 1 6- | 6 1 2 3 2 1 6-' },

{ id:'canghai', title:'沧海一声笑', key:'C', cat:'movie', bpm:90, lyrics:'沧海一声笑 滔滔两岸潮',
  notes:'6 5 3 2 1 2 3 5- | 5 3 2 1 2 3 5- | 3 2 1 6 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'shenhua', title:'神话', key:'C', cat:'movie', bpm:78, lyrics:'解开我 最神秘的等待',
  notes:'5 3 5 3 2 1 2 3- | 3 2 1 6 1 2 3 5- | 3 2 1 2 1 6 1- | 6 1 2 3 5 3 2 1 6 1-' },

{ id:'yinghuo', title:'萤火虫', key:'C', cat:'movie', bpm:82, lyrics:'萤火虫 萤火虫',
  notes:'5 3 5 3 2 1 2 3- | 5 3 2 1 2 3 2- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

{ id:'yixian', title:'一线缘', key:'C', cat:'movie', bpm:80, lyrics:'一线缘分连接你我',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'yexiang', title:'夜想', key:'C', cat:'classic', bpm:75, lyrics:'夜深人静时的思绪',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 6 1 2 3 5 3 2 1 6- | 6 1 2 3 2 1 6-' },

{ id:'chunxiao', title:'春晓', key:'C', cat:'chinese', bpm:65, lyrics:'春眠不觉晓',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'pinghuo', title:'平湖秋月', key:'C', cat:'chinese', bpm:60, lyrics:'平湖秋月照人圆',
  notes:'3 5 6 5 3 2 1 2 3 5 6- | 5 3 2 1 2 3 5 3- | 2 3 5 3 2 1 6 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'yugong', title:'渔歌', key:'C', cat:'chinese', bpm:68, lyrics:'渔歌唱晚归舟远',
  notes:'3 5 6 1 6 5 3 2 1 2 3- | 5 6 1 6 5 3 2 1 2 3 5- | 3 2 1 6 1 2 3 5 3- | 2 1 2 3 2 1 6 1-' },

{ id:'caiyun', title:'彩云追月', key:'C', cat:'chinese', bpm:70, lyrics:'彩云追月',
  notes:'3 5 6 5 3 2 1 2 3 5 6- | 5 3 2 1 2 3 5 3- | 2 3 5 3 2 1 6 1 2 3- | 3 2 1 2 1 6 1-' },

{ id:'meihua', title:'梅花三弄', key:'C', cat:'chinese', bpm:65, lyrics:'梅花三弄',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5 6- | 5 3 2 1 2 3 1-' },

{ id:'elise2', title:'欢乐颂', key:'C', cat:'foreign', bpm:100, lyrics:'欢乐女神圣洁美丽',
  notes:'3 3 4 5 5 4 3 2 1 1 2 3 3 2 2- | 3 3 4 5 5 4 3 2 1 1 2 3 2 1 1- | 2 2 3 1 2 3 4 3 1 2 3 4 3 2 1 2 _6- | 3 3 4 5 5 4 3 2 1 1 2 3 2 1 1-' },

{ id:'merry', title:'圣诞快乐', key:'C', cat:'foreign', bpm:100, lyrics:'We wish you a merry christmas',
  notes:'5 ^1 ^1 ^2 ^1 7 6- | 6 ^2 ^2 ^3 ^2 ^1 7- | 5 ^3 ^3 ^4 ^3 ^1 5- | ^5 ^1 ^2 ^2 6- 7 6- 5 7 ^1 7 6 5 6 7- ^1 5 5 6 7- ^1 5 6 7- ^1 5- 6 7 ^1 ^2 ^3 ^4 ^5' },

{ id:'ode_joy', title:'G大调小步舞曲', key:'C', cat:'foreign', bpm:85, lyrics:'优雅的小步舞',
  notes:'5 6 5 4 3 2 1 2 3- | 5 6 5 4 3 2 1 2 3- | 3 4 5 6 7 1 7 6 5- | 5 3 2 3 1 2 3- | 5 6 5 4 3 2 1 2 3- | 3 2 1 6 1 2 1-' },

{ id:'amazing', title:'奇异恩典', key:'C', cat:'foreign', bpm:75, lyrics:'Amazing grace how sweet the sound',
  notes:'5- ^1 3- ^1 ^2 ^1- 6- | 5- ^1 3 ^1- ^2 5 ^1 ^2 ^3- ^1 ^2 ^1 6 5 6- | ^1 ^2 ^1 ^3 ^4- ^3 ^2 ^1- 6 5 6 ^1 ^2 5- ^1 ^2 ^1 6 6- ^1 ^3 ^3 ^2 ^1 ^2 ^1 ^1-' },

{ id:'canon', title:'卡农', key:'C', cat:'foreign', bpm:70, lyrics:'Canon in D',
  notes:'_6 _7 1- _7 1 2- 1 2 3- 2 3 4- 3 4 5- 4 5 6- 5 6 7- 6 7 ^1- 7 ^1 ^2- | ^1 ^2 ^3- ^2 ^3 ^4- ^3 ^4 ^5- ^4 ^5 ^6- ^5 ^6 ^7- ^6 ^7 ^1- ^7 ^1 ^2- ^1 ^2 ^3- ^2 ^3 ^4- ^3 ^4 ^5- ^4 ^5 ^6- ^5 ^6 ^7- ^6 ^7' },

{ id:'aubade', title:'晨曲', key:'C', cat:'foreign', bpm:80, lyrics:'清晨的阳光',
  notes:'3 5 6 5 3 2 1 2 3- | 5 6 5 3 2 3 1- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 3 1-' },

{ id:'minuet', title:'小步舞曲', key:'C', cat:'foreign', bpm:90, lyrics:'Bach Minuet in G',
  notes:'5 6 5 4 3 2 1 2 3- | 5 6 5 4 3 2 1 2 3- | 3 4 5 6 7 ^1 7 6 5- | 5 3 2 3 1 2 3- | 5 6 5 4 3 2 1 2 3- | 3 2 1 6 1 2 1-' },

{ id:'hongdou', title:'红豆', key:'C', cat:'patriotic', bpm:80, lyrics:'还没好好的感受 雪花绽放的气候',
  notes:'5 3 5 3 2 1 2 3- | 3 2 1 6 1 2 3 5- | 3 2 1 2 1 6 1- | 6 1 2 3 5 3 2 1 6 1-' },

{ id:'guanghui', title:'光辉岁月', key:'C', cat:'patriotic', bpm:95, lyrics:'钟声响起归家的信号',
  notes:'6 1 2 3 5 3 2 1 6- | 6 1 2 3 5 6 5- | 3 5 6 5 3 2 1 2 3 5- | 3 2 1 2 1 6 1-' },

];

/**
 * 歌曲分类
 */
const SONG_CATEGORIES = [
  { id: 'all',       name: '全部' },
  { id: 'children',  name: '经典儿歌' },
  { id: 'folk',      name: '民歌民谣' },
  { id: 'pop',       name: '流行金曲' },
  { id: 'movie',     name: '影视动漫' },
  { id: 'foreign',   name: '外国经典' },
  { id: 'chinese',   name: '中国名曲' },
  { id: 'patriotic', name: '爱国经典' },
  { id: 'classic',   name: '经典怀旧' },
];
