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
      // 归档博客保留可访问，但不放进 sitemap；提交首页、项目、工具及详情页。
      filter: (page) => {
        const path = new URL(page).pathname;
        return (
          path === '/' ||
          path === '/projects/' ||
          path.startsWith('/projects/') ||
          path === '/tools/' ||
          path.startsWith('/tools/')
        );
      },
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === '/') {
          return { ...item, lastmod: buildDate, changefreq: 'daily', priority: 1.0 };
        }
        if (path === '/projects/' || path === '/tools/') {
          return { ...item, lastmod: buildDate, changefreq: 'weekly', priority: 0.9 };
        }
        if (path.startsWith('/projects/') || path.startsWith('/tools/')) {
          return { ...item, lastmod: buildDate, changefreq: 'monthly', priority: 0.8 };
        }
        return item;
      },
    }),
  ],
});
