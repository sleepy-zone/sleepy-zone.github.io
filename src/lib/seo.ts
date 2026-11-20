import type { Project } from './projects';
import { projectHref } from './projects';
import type { Affiliate } from './affiliates';
import { localeMeta, localePath, type Locale } from '../i18n/ui';

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

export function projectItemList(projects: Project[], name = 'Sleepy Zone 项目', locale: Locale = 'zh') {
  return {
    '@type': 'ItemList',
    name,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => {
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.displayName ?? project.name,
          description: project.desc,
          url: absoluteUrl(localePath(locale, `/projects/${project.slug}/`)),
          ...(project.image ? { image: absoluteUrl(project.image) } : {}),
        },
      };
    }),
  };
}

export function projectApplicationSchema(project: Project, locale: Locale = 'zh') {
  const href = projectHref(project);
  return {
    '@type': 'WebApplication',
    '@id': absoluteUrl(localePath(locale, `/projects/${project.slug}/`)) + '#app',
    name: project.displayName ?? project.name,
    description: project.detail?.intro ?? project.desc,
    url: href === '#' ? absoluteUrl(localePath(locale, `/projects/${project.slug}/`)) : absoluteUrl(href),
    ...(project.image ? { image: absoluteUrl(project.image) } : {}),
    applicationCategory: project.group === 'library' ? 'DesignApplication' : 'UtilitiesApplication',
    operatingSystem: 'Web',
    author: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: localeMeta[locale].htmlLang,
  };
}

export function toolItemList(items: Affiliate[], name = 'Sleepy Zone 工具推荐', locale: Locale = 'zh') {
  return {
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: item.title,
        description: item.desc,
        url: absoluteUrl(localePath(locale, `/tools/${item.id}/`)),
        ...(item.image ? { image: absoluteUrl(item.image) } : {}),
        applicationCategory: item.platform === 'macOS' ? 'UtilitiesApplication' : 'BusinessApplication',
        operatingSystem: item.platform ?? 'Web',
      },
    })),
  };
}

export function toolApplicationSchema(item: Affiliate, locale: Locale = 'zh') {
  return {
    '@type': 'SoftwareApplication',
    '@id': absoluteUrl(localePath(locale, `/tools/${item.id}/`)) + '#app',
    name: item.title,
    description: item.desc,
    url: absoluteUrl(item.url),
    ...(item.image ? { image: absoluteUrl(item.image) } : {}),
    applicationCategory: item.platform === 'macOS' ? 'UtilitiesApplication' : 'BusinessApplication',
    operatingSystem: item.platform ?? 'Web',
    isPartOf: { '@id': WEBSITE_ID },
    inLanguage: localeMeta[locale].htmlLang,
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
