import type { CollectionEntry } from 'astro:content';
import { plainText } from './text';

export type Thought = CollectionEntry<'thoughts'>;

export function sortThoughts(a: Thought, b: Thought) {
  return b.data.date.valueOf() - a.data.date.valueOf();
}

export function thoughtTitle(entry: Thought, length = 28) {
  const text = plainText(entry.body ?? '');
  return text.length > length ? `${text.slice(0, length)}…` : text || formatFallback(entry);
}

function formatFallback(entry: Thought) {
  return `想法 · ${entry.data.date.toISOString().slice(0, 10)}`;
}

export function groupThoughtsByYear(entries: Thought[]) {
  const groups = new Map<number, Thought[]>();
  for (const entry of entries) {
    const year = Number(
      new Intl.DateTimeFormat('en-CA', {
        year: 'numeric',
        timeZone: 'Asia/Shanghai',
      }).format(entry.data.date),
    );
    const list = groups.get(year) ?? [];
    list.push(entry);
    groups.set(year, list);
  }
  return [...groups.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, items]) => ({ year, items }));
}

export function tagCounts(entries: Thought[]) {
  const counts = new Map<string, number>();
  for (const entry of entries) {
    for (const tag of entry.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh-CN'));
}

export function thoughtHref(entry: Thought) {
  return `/thoughts/${entry.id}/`;
}

export function tagHref(tag: string) {
  return `/thoughts/tag/${encodeURIComponent(tag)}/`;
}
