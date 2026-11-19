import type { Project } from './projects';
import { projectHref } from './projects';

export const SITE_URL = 'https://sleepyzone.online';
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function absoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return new URL(path, `${SITE_URL}/`).href;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function projectItemList(projects: Project[], name = 'Sleepy Zone 项目') {
  return {
    '@type': 'ItemList',
    name,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => {
      const href = projectHref(project);
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.name,
          description: project.desc,
          url: href === '#' ? `${SITE_URL}/projects/` : absoluteUrl(href),
          ...(project.image ? { image: absoluteUrl(project.image) } : {}),
        },
      };
    }),
  };
}

export interface ArchiveItem {
  title: string;
  url: string;
  date: Date;
  description?: string;
}

export function archiveItemList(items: ArchiveItem[], name = 'Sleepy Zone 长文归档') {
  return {
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        headline: item.title,
        url: absoluteUrl(item.url),
        datePublished: item.date.toISOString(),
        author: { '@id': PERSON_ID },
        ...(item.description ? { description: item.description } : {}),
      },
    })),
  };
}

export interface BlogPostingOptions {
  title: string;
  description: string;
  url: string;
  date: Date;
  tags: string[];
}

export function blogPostingSchema({ title, description, url, date, tags }: BlogPostingOptions) {
  const postUrl = absoluteUrl(url);
  return {
    '@type': 'BlogPosting',
    '@id': `${postUrl}#article`,
    headline: title,
    description,
    datePublished: date.toISOString(),
    dateModified: date.toISOString(),
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORGANIZATION_ID },
    image: absoluteUrl('/og.png'),
    mainEntityOfPage: { '@id': `${postUrl}#webpage` },
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: 'zh-Hans',
    articleSection: '归档',
    ...(tags.length ? { keywords: tags.join(', ') } : {}),
  };
}
