import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortThoughts, thoughtTitle } from '../lib/thoughts';
import { excerpt } from '../lib/text';

export async function GET(context) {
  const thoughts = (await getCollection('thoughts')).sort(sortThoughts);

  return rss({
    title: 'Sleepy Zone — 想法',
    description: '短句、链接、半成型的念头。',
    site: context.site,
    items: thoughts.map((entry) => ({
      title: thoughtTitle(entry, 32),
      description: excerpt(entry.body, 200),
      pubDate: entry.data.date,
      link: `/thoughts/${entry.id}/`,
      customData: entry.data.tags.length
        ? `<category>${entry.data.tags.map(escapeXml).join('</category><category>')}</category>`
        : undefined,
    })),
    customData: '<language>zh-cn</language>',
  });
}

function escapeXml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}
