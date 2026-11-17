export const site = {
  title: 'Sleepy Zone',
  domain: 'sleepyzone.online',
  description:
    '前端开发者 SleepyZone 的项目与 AI 绘图资源站：开源工具、素材库、标签词典。',
  hero: {
    kicker: 'PROJECTS & RESOURCES · 2019—2026',
    title: '做点工具，',
    titleSecond: '也整理',
    titleAccent: '素材',
    titleEnd: '。',
    lede: 'AI 绘图素材、标签词典、设计档案，都是能直接打开用的东西。',
    now: '正在整理 AI 绘图素材库',
  },
  about: {
    bio: [
      '我是 SleepyZone，前端开发者，大龄大厂小工，奶爸，做了一些开源工具，也整理 AI 绘图素材。',
      '这个站汇总做过的项目，以及能直接打开用的素材资源。',
      '欢迎交流～',
    ],
    now: [
      { label: '在做', value: 'AI 绘图素材库与标签工具' },
      { label: '在学', value: '借助 AI 的力量～' },
      { label: '在玩', value: 'GTA6（等待中）' },
    ],
    colophon: '本站用 Astro 手写，使用 Clarity 做基础埋点。',
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
