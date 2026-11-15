export const site = {
  title: 'Sleepy Zone',
  domain: 'sleepyzone.online',
  description:
    '前端开发者 SleepyZone 的个人站：想法、项目、AI',
  hero: {
    kicker: 'SLEEPY ZONE · UTC+8',
    title: '欢迎访问',
    titleSecond: '我的',
    titleAccent: '个人站点',
    titleEnd: '。',
    lede: '我是 SleepyZone，前端开发者，大龄大厂小工，奶爸，做了一些开源工具，喜欢新鲜的东西和尝试～',
    now: '正在学习成为一名独立开发者',
  },
  about: {
    bio: [
      '我是 SleepyZone，前端开发者，大龄大厂小工，奶爸，做了一些开源工具，喜欢新鲜的东西和尝试～',
      '这是我的个人站点，记录一些突然冒出来的想法，汇总自己做过的项目。',
      '欢迎交流～',
    ],
    now: [
      { label: '在做', value: 'AI 绘图素材站' },
      { label: '在学', value: '借助 AI 的力量～' },
      { label: '在玩', value: 'GTA6（等待中）' },
    ],
    colophon: '',
  },
  contacts: [
    { label: 'X / Twitter', handle: '@zone__online', href: 'https://twitter.com/zone__online' },
    { label: 'GitHub', handle: '@sleepy-zone', href: 'https://github.com/sleepy-zone' },
    { label: '公众号', handle: '开发者生存指南', href: '' },
  ],
} as const;

export const projectGroups = [
  {
    id: 'library',
    index: '01',
    label: 'AI 绘图素材库',
    heading: 'AI 绘图参考',
    desc: '借助这几个站点，快速 AI 出图',
  },
  {
    id: 'product',
    index: '02',
    label: '产品与工具',
    heading: '一些还不错的工具',
    desc: '从编辑器到截图美化',
  },
] as const;

export const statusLabels = {
  active: '维护中',
  paused: '暂停',
  archived: '归档',
  new: '新',
  experiment: '实验',
} as const;

export type ProjectStatus = keyof typeof statusLabels;
