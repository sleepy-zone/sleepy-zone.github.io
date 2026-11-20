import { parse } from 'yaml';
import projectsRaw from '../data/projects.yml?raw';
import starsJson from '../data/stars.json';
import type { ProjectStatus } from '../data/site';

export interface ProjectDownload {
  provider: 'uc' | 'xunlei';
  url: string;
  password?: string;
}

export interface Project {
  slug: string;
  name: string;
  displayName?: string;
  desc: string;
  freeDownload?: boolean;
  resourceNote?: string;
  downloads?: ProjectDownload[];
  detail?: {
    intro?: string;
    highlights?: string[];
    useCases?: string[];
  };
  image?: string;
  imageAlt?: string;
  group: 'product' | 'library';
  status: ProjectStatus;
  stack: string[];
  site?: string;
  repo?: string;
  stars: number;
  featured: boolean;
  order: number;
}

const parsed = parse(projectsRaw) as Project[];
const starOverrides = starsJson as Record<string, number>;

export const projects: Project[] = parsed
  .map((project) => ({
    ...project,
    stars: starOverrides[project.slug] ?? project.stars ?? 0,
  }))
  .sort((a, b) => a.order - b.order);

export const featuredProjects = projects.filter((project) => project.featured);

export function projectsByGroup(group: Project['group']) {
  return projects.filter((project) => project.group === group);
}

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function projectHref(project: Project) {
  return project.site || project.repo || '#';
}

export function projectDetailHref(project: Project) {
  return `/projects/${project.slug}/`;
}

export function formatStars(stars: number) {
  if (!stars) return '—';
  if (stars >= 1000) {
    const value = stars / 1000;
    return `${value >= 10 ? Math.round(value) : value.toFixed(1).replace(/\.0$/, '')}k`;
  }
  return String(stars);
}
