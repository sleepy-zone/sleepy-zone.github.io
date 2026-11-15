export const site = {
  title: 'Sleepy Zone',
  domain: 'sleepyzone.online',
  description:
    '前端开发者 SleepyZone 的个人站：短想法，以及做过的项目。',
  hero: {
    kicker: 'SLEEPY ZONE · UTC+8',
    title: '白天写代码，',
    titleSecond: '夜里写点',
    titleAccent: '想法',
    titleEnd: '。',
    lede: '我是 SleepyZone，前端开发者。做开源工具，也做 AI 绘图素材站。这里不放长文，只留两样东西：想到就记的短句，和做过的项目。',
    now: '在整理旧文，也在做新东西',
  },
  about: {
    bio: [
      '我是 SleepyZone，前端开发者。白天写代码，晚上做点自己的东西：fabritor、woocs，还有几个 AI 绘图素材站。',
      '不太擅长写长文，所以这个站只剩两样东西：想到就记的短想法，和做过的项目。',
      '如果你也在做类似的事，欢迎来聊。',
    ],
    now: [
      { label: '在做', value: '把这个站重做一遍（你正在看的就是新站）' },
      { label: '在学', value: '把重复的事情交给 Agent，留时间给判断' },
      { label: '在玩', value: 'AI 绘图、九宫格设计' },
    ],
    colophon: '本站用 Astro 手写，字体是系统宋体，没有追踪脚本。',
  },
  contacts: [
    { label: 'X / Twitter', handle: '@zone__online', href: 'https://twitter.com/zone__online' },
    { label: 'GitHub', handle: '@sleepy-zone', href: 'https://github.com/sleepy-zone' },
    { label: '公众号', handle: '前端生存指南', href: '' },
  ],
} as const;

export const projectGroups = [
  {
    id: 'product',
    index: '01',
    label: '产品与工具',
    heading: '自己每天会用的东西',
    desc: '从编辑器到截图美化，都是先解决自己的问题。',
  },
  {
    id: 'library',
    index: '02',
    label: 'AI 素材库',
    heading: '给 AI 绘图找个参照',
    desc: '把散落的素材整理成能搜、能组合、能直接用的一张表。',
  },
  {
    id: 'lab',
    index: '03',
    label: '实验与归档',
    heading: '半路停下的，也是做过的事',
    desc: '教程、实验、小工具。不一定还在维护，但都还能用。',
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
