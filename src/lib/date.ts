const dateFormatter = new Intl.DateTimeFormat('zh-CN', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'Asia/Shanghai',
});

const monthDayFormatter = new Intl.DateTimeFormat('zh-CN', {
  month: '2-digit',
  day: '2-digit',
  timeZone: 'Asia/Shanghai',
});

export function formatDate(date: Date) {
  return dateFormatter.format(date).replaceAll('/', '.');
}

export function formatMonthDay(date: Date) {
  return monthDayFormatter.format(date).replaceAll('/', '.');
}

export function formatISODate(date: Date) {
  return date.toISOString();
}

export function daysSince(date: Date) {
  const diff = Date.now() - date.valueOf();
  return Math.max(0, Math.floor(diff / 86_400_000));
}
