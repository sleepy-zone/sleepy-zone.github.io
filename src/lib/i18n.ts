import { parse } from 'yaml';
import projectsEnRaw from '../data/projects.en.yml?raw';
import projectsJaRaw from '../data/projects.ja.yml?raw';
import affiliatesEnRaw from '../data/affiliates.en.yml?raw';
import affiliatesJaRaw from '../data/affiliates.ja.yml?raw';
import type { Project } from './projects';
import type { Affiliate } from './affiliates';
import type { Locale } from '../i18n/ui';

interface ProjectTranslation {
  displayName?: string;
  desc?: string;
  resourceNote?: string;
  downloadsTitle?: string;
  downloadsNote?: string;
  downloads?: Project['downloads'];
  imageAlt?: string;
  detail?: NonNullable<Project['detail']>;
}

interface AffiliateTranslation {
  title?: string;
  desc?: string;
  tag?: string;
  platform?: string;
  imageAlt?: string;
  sections?: Affiliate['sections'];
}

const projectTranslations: Record<'en' | 'ja', Record<string, ProjectTranslation>> = {
  en: parse(projectsEnRaw) as Record<string, ProjectTranslation>,
  ja: parse(projectsJaRaw) as Record<string, ProjectTranslation>,
};

const affiliateTranslations: Record<'en' | 'ja', Record<string, AffiliateTranslation>> = {
  en: parse(affiliatesEnRaw) as Record<string, AffiliateTranslation>,
  ja: parse(affiliatesJaRaw) as Record<string, AffiliateTranslation>,
};

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === 'zh') return project;
  const translation = projectTranslations[locale]?.[project.slug];
  if (!translation) return project;
  return {
    ...project,
    displayName: translation.displayName ?? project.displayName,
    desc: translation.desc ?? project.desc,
    resourceNote: translation.resourceNote ?? project.resourceNote,
    downloadsTitle: translation.downloadsTitle ?? project.downloadsTitle,
    downloadsNote: translation.downloadsNote ?? project.downloadsNote,
    downloads: translation.downloads ?? project.downloads,
    imageAlt: translation.imageAlt ?? project.imageAlt,
    detail: translation.detail ?? project.detail,
  };
}

export function localizeAffiliate(item: Affiliate, locale: Locale): Affiliate {
  if (locale === 'zh') return item;
  const translation = affiliateTranslations[locale]?.[item.id];
  if (!translation) return item;
  return {
    ...item,
    title: translation.title ?? item.title,
    desc: translation.desc ?? item.desc,
    tag: translation.tag ?? item.tag,
    platform: translation.platform ?? item.platform,
    imageAlt: translation.imageAlt ?? item.imageAlt,
    sections: translation.sections ?? item.sections,
  };
}
