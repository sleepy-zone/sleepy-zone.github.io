import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const thoughts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/thoughts' }),
  schema: z.object({
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    project: z.string().optional(),
    link: z.string().url().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),
  }),
});

const archive = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/archive' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    legacy: z.boolean().default(true),
  }),
});

export const collections = { thoughts, archive };
