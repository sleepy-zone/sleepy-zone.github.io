export const site = {
  title: 'Sleepy Zone',
  domain: 'sleepyzone.online',
  description:
    '前端开发者 SleepyZone 的项目与 AI 绘图资源站：AI 绘图素材库、二次元角色换装、标签词典、设计档案与开源工具。',

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
