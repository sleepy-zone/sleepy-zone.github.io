# Sleepy Zone

[sleepyzone.online](https://sleepyzone.online) 的源码。一个只放两样东西的个人站：**短想法**和**做过的项目**。长文已归档，不再更新。

用 [Astro](https://astro.build) 写，静态输出，没有前端框架运行时，也没有统计脚本。

## 本地开发

需要 Node >= 22.23.4（推荐 24）和 pnpm。

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build
pnpm preview
```

> 如果本机默认 `node` 低于 22.23.4，Astro 7 会拒绝运行。用 `node -v` 确认，必要时切换到 Node 24。

## 内容

### 想法

一条想法一个文件，没有标题，建议 300 字以内：

```md
---
date: 2025-06-07T22:28:00+08:00
tags: [agent]
project: dsh-wechat-md   # 可选，关联项目
link: https://...        # 可选
image: /img/thoughts/cline.webp   # 可选，一张配图
imageAlt: Cline 官网首页           # 配图的 alt
imageCaption: 配图说明（可选）      # 显示在图下方
---

看完了 Cline 源码，Agent 最终都落到了 prompt 组装和工具的调用上。
```

文件名决定 URL：`src/content/thoughts/2025-06-07-cline.md` → `/thoughts/2025-06-07-cline/`。同一天多条用 `-2`、`-3`。

快速新建：

```bash
pnpm thought "今天想到的一句话"
```

然后 `git add -A && git commit -m "thought: ..." && git push`，合并到 `main` 后约 40 秒上线。

几条约定：

- **文件名就是 URL**：`2025-06-07-cline.md` → `/thoughts/2025-06-07-cline/`。发布后不要改文件名，否则旧链接会 404。
- 同一天第二条用 `-2`、`-3`，脚本会自动处理；手动建文件时注意别重名。
- `tags` 会自动生成 `/thoughts/tag/<tag>/` 页面，中文标签也可以。
- 配图放到 `public/img/`，frontmatter 写 `image: /img/xxx.webp`；也可以在正文里用 Markdown 图片。
- 超过 300 字就不太适合想法流了，建议拆成两条，或者告诉我加回长文类型。

### 项目

所有项目入口集中在 `src/data/projects.yml`，一条一个项目：

```yaml
- slug: fabritor
  name: fabritor
  desc: 基于 fabric.js 的开源创意图片编辑器
  image: /img/projects/fabritor.webp
  imageAlt: fabritor 编辑器界面
  group: product              # product | library | lab
  status: active              # active | paused | archived | new | experiment
  stack: [fabric.js, React]
  site: https://fabritor.surge.sh/
  repo: https://github.com/sleepy-zone/fabritor-web
  stars: 1201
  featured: true
  order: 1
```

新增一个项目：

1. 在 `projects.yml` 对应分组下追加一条，字段照抄上面的例子。
2. `group` 只能是 `product` / `library` / `lab`；`status` 只能是 `active` / `paused` / `archived` / `new` / `experiment`。
3. `site` 和 `repo` 至少填一个；都空时整行链接是 `#`。
4. 想在首页露出就设 `featured: true`，用 `order` 排顺序；首页只取前 6 个。
5. `stars` 先填 0 或当前值即可。部署时 Actions 会自动跑 `pnpm stars` 刷新，本地也可以手动跑：

```bash
pnpm stars   # 有 GITHUB_TOKEN 更好；失败会保留旧值
```

Star 数由 `src/data/stars.json` 覆盖，YAML 里的值是兜底。

### 图片

- 项目封面放 `public/img/projects/`，建议 **3:2、480×300 的 WebP**；目录行会显示成 96×60 的缩略图。
- 想法配图放 `public/img/thoughts/`，建议 **宽 1200 的 WebP**；正文里会显示为 700px 宽的大图。
- 两个 YAML / frontmatter 字段都支持 `image` + `imageAlt`，想法额外支持 `imageCaption`。
- 没有截图的项目可以用一张纸色标题卡（现有 5 个项目就是这样），保持和站内一致的观感。
- 图片不会在构建时自动压缩，建议先转 WebP 再提交；批量下载/压缩可参考 `scripts/legacy/localize-images.py`。

### 归档

37 篇 2024–2025 年的长文在 `src/content/archive/`，保留旧 URL `/blog/<slug>/`。**不要改 frontmatter 里的 `slug`**，会断链。

### 发布检查

```bash
PATH=/usr/local/bin:$PATH pnpm dev     # 本地看一眼
git add -A
git commit -m "thought: ..."           # 或 "project: ..."
git push
```

内容改动会出现在哪里：

| 改动 | 影响 |
| --- | --- |
| 新增想法 | 首页「最近在想」、`/thoughts/`、RSS、sitemap、对应标签页 |
| 修改想法正文 | 列表与详情同步；URL 不变 |
| 重命名想法文件 | URL 变化，旧链接 404 |
| 新增项目 | `/projects/` 对应分组；`featured` 可能进首页 |
| 修改项目状态/链接 | 目录行即时更新；URL 不变 |
| 归档文章 | 不参与新内容，保持原 URL |

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
├─ components/     TopBar / Footer / StatusCard / ThoughtItem / ProjectCard / TagFilters
├─ content/
│  ├─ thoughts/    短想法
│  └─ archive/     旧文
├─ data/           projects.yml、stars.json、站点文案
├─ layouts/        BaseLayout
├─ lib/            日期、项目、想法的读取与格式化
├─ pages/          首页、想法、项目、关于、归档、RSS、404
└─ styles/         global.css（与 char-db-cn 一致的主题 token + 全站样式）
```

设计说明与原型在仓库外的 `sleepy-zone-redesign/`（评审用，不参与构建）。
