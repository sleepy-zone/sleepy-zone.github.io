import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const buildDate = new Date().toISOString();

export default defineConfig({
  site: 'https://sleepyzone.online',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
  integrations: [
    sitemap({
      // 归档博客保留可访问，但不放进 sitemap；只保留首页与项目入口。
      filter: (page) => !new URL(page).pathname.startsWith('/blog'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === '/') {
          return { ...item, lastmod: buildDate, changefreq: 'daily', priority: 1.0 };
        }
        if (path === '/projects/') {
          return { ...item, lastmod: buildDate, changefreq: 'weekly', priority: 0.9 };
        }
        return item;
      },
    }),
  ],
});
