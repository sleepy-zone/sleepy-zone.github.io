import { parse } from 'yaml';
import raw from '../data/affiliates.yml?raw';

export interface Affiliate {
  id: string;
  title: string;
  desc: string;
  url: string;
  tag?: string;
  mark?: string;
  sponsored?: boolean;
  enabled?: boolean;
  order?: number;
}

const parsed = parse(raw) as Affiliate[];

export const affiliates: Affiliate[] = parsed
  .filter((item) => item && item.enabled !== false && item.id && item.title && item.url)
  .map((item) => ({
    ...item,
    sponsored: item.sponsored === true,
    tag: item.tag ?? '',
    mark: item.mark ?? item.title.slice(0, 1),
    order: item.order ?? 100,
  }))
  .sort((a, b) => a.order - b.order);

export const hasSponsored = affiliates.some((item) => item.sponsored);
