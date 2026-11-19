# Sleepy Zone

[sleepyzone.online](https://sleepyzone.online) 的源码。一个项目与 AI 绘图资源站：首页是项目入口，下面是常用工具推荐；长文归档保留在 `/blog/`。

用 [Astro](https://astro.build) 写，静态输出，没有前端框架运行时，只加了 Clarity 埋点。

## 本地开发

需要 Node >= 22.23.4（推荐 24）和 pnpm。

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build
pnpm preview
```

> 如果本机默认 `node` 低于 22.23.4，Astro 7 会拒绝运行。用 `node -v` 确认，必要时切换到 Node 24。

## 项目

所有项目入口集中在 `src/data/projects.yml`，一条一个项目：

```yaml
- slug: ai-ref-library-cn
  name: ai-ref-library-cn
  desc: AI 绘图素材库中文版：脸 / 姿势 / 服装
  image: https://.../cover.png       # 也可以用 /img/projects/xxx.webp
  imageAlt: AI 作图素材库界面
  group: library                     # product | library
  status: active                     # active | paused | archived | new | experiment
  stack: [JavaScript]
  site: https://sleepyzone.online/ai-ref-library-cn/
  repo: https://github.com/sleepy-zone/ai-ref-library-cn
  stars: 768
  freeDownload: true                 # 卡片显示「资源可免费打包下载」
  resourceNote: "3 个库 · 4,345 项"   # 卡片上的数据行
  featured: true                     # 是否进首页
  order: 2                           # 组内排序
```

### 新增 / 修改项目

1. 在 `projects.yml` 里追加或修改一条，字段照上面的例子。
2. `group` 只能是 `product` / `library`；`status` 见注释。
3. `site` 和 `repo` 至少填一个；都空时链接是 `#`。
4. 想让首页出现就设 `featured: true`，首页最多取 6 个；资源库会排在工具前面。
5. `freeDownload: true` 时卡片会多一行 `↓ 资源可免费打包下载`；不提供打包的项目不要开。
6. `resourceNote` 写卡片上的数量，例如 `"373 标签 · 29 分类 / 12 配方"`。
7. `stars` 先填 0 或当前值。部署时 Actions 会自动跑 `pnpm sync-stars` 刷新；本地也可以：

```bash
pnpm sync-stars   # 有 GITHUB_TOKEN 更好；失败会保留旧值
```

Star 数由 `src/data/stars.json` 覆盖，YAML 里的值是兜底。

## 好用的工具推荐

首页 02 区块由 `src/data/affiliates.yml` 维护：

```yaml
- id: quark-pan
  title: 夸克网盘
  desc: 大文件下载与备份，素材包直接转存
  image: https://.../cover.webp       # 可选，卡片封面（16:9 最好看）
  imageAlt: 夸克网盘界面
  url: https://pan.quark.cn/          # 换成带返佣参数的链接
  tag: 资源下载
  mark: 盘                           # 左侧小方块里的字
  sponsored: false                   # true → 显示「推广」+ 佣金披露
  enabled: true                      # false → 不显示
  order: 1
```

- `sponsored: false` 显示小标签「推荐」，区块说明是「以下是我在用的工具，点进去是官网。」
- 换成真实 affiliate 链接后把 `sponsored` 改成 `true`：卡片显示「推广」，区块显示「我可能获得佣金，价格不变」，链接自动加 `rel="sponsored nofollow noopener"`。
- 最多放 3 个；没有链接的占位项直接 `enabled: false`，不要放 `#`。
- 当前三条（夸克网盘 / OpenRouter / Namecheap）是示例，都是官网链接，处于「推荐」态。

## 图片

- 项目封面建议 **3:2、768×512 的 WebP**，放 `public/img/projects/`；卡片会按 480×300 的比例裁切。
- 没有截图的项目可以生成一张纸色标题卡，保持和站内一致的观感。
- 图片不会在构建时自动压缩，建议先转 WebP 再提交；批量处理可参考 `scripts/legacy/localize-images.py`。

## 归档

37 篇 2024–2025 年的长文在 `src/content/archive/`，保留旧 URL `/blog/<slug>/`。**不要改 frontmatter 里的 `slug`**，会断链。

## 发布检查

```bash
PATH=/usr/local/bin:$PATH pnpm dev
git add -A
git commit -m "project: ..."      # 或 "copy: ..."
git push
```

内容改动会出现在哪里：

| 改动 | 影响 |
| --- | --- |
| 新增项目 | `/projects/` 对应分组；`featured` 可能进首页 |
| 修改项目状态/链接 | 卡片即时更新；URL 不变 |
| 修改 `freeDownload` | 卡片显示 / 隐藏「资源可免费打包下载」 |
| 修改工具推荐 | 首页 02 区块；`sponsored` 控制「推荐 / 推广」 |
| 归档文章 | 不参与新内容，保持原 URL |

## 埋点

和 `char-db-cn` 共用同一个 Clarity 项目（`r1wmvdsf4a`），报表里按 URL 过滤即可区分站点。

- 只在 `sleepyzone.online` / `*.sleepy-zone.github.io` 加载 Clarity；本地开发只写 `window.__trackLog`，不上报。
- 业务事件统一走 `window.track(name, params)`，同时写入 Clarity 的 `event` 和 `lib / type / value / label / ...` 标签。
- 已埋事件：`nav_click`、`cta_click`、`project_click`（带 `free`）、`tool_click`、`archive_open`、`contact_click`、`outbound_click`。
- 调试：控制台执行 `window.__trackDebug = true` 后刷新；`window.__trackLog` 始终保留最近 200 条。
- 新增可点击元素时，加 `data-track="event_name"` 和 `data-track-id / label / type / value` 即可，不用写额外的 JS。

## SEO

- 页面标题、描述、canonical、OG/Twitter 卡片统一在 `src/layouts/BaseLayout.astro`。
- 结构化数据在 `src/lib/seo.ts`：Person / Organization / WebSite / WebPage；首页和项目页是 ItemList，文章是 BlogPosting + BreadcrumbList。
- 新增项目会自动进入项目页 ItemList；新增归档文章会自动进入归档 ItemList 和 BlogPosting。
- 社交卡片：`public/og.png`（1200×630）；品牌 logo：`public/logo-512.png`。
- `sitemap-index.xml` 和 `robots.txt` 已配置；上线后到 Google Search Console / Bing Webmaster 提交 sitemap。
- 19 个归档旧 URL 里的 `.md` 已去掉，旧地址会重定向到干净 URL；不要在新文章里使用带 `.md` 的 slug。

## 部署

推送到 `main` 后，GitHub Actions（`.github/workflows/deploy.yml`）会：

1. `pnpm install --frozen-lockfile`
2. 刷新 GitHub star（失败不阻断）
3. `pnpm build`
4. 把 `dist/` 发布到 `gh-pages` 分支

站点走自定义域名 `sleepyzone.online`，`public/CNAME` 与 `public/.nojekyll` 必须保留（后者保证 `_astro/` 资源不被 Jekyll 忽略）。

## 结构

```
src/
├─ components/     TopBar / Footer / ProjectCard / AffiliateCard
├─ content/
│  └─ archive/     旧文
├─ data/           projects.yml、affiliates.yml、stars.json、站点文案
├─ layouts/        BaseLayout
├─ lib/            项目、工具推荐、日期、文本
├─ pages/          首页、项目、归档、404
└─ styles/         global.css（与 char-db-cn 一致的主题 token + 全站样式）
```

设计说明与原型在仓库外的 `sleepy-zone-redesign/`（评审用，不参与构建）。
