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
image: /img/...          # 可选，最多一张
---

看完了 Cline 源码，Agent 最终都落到了 prompt 组装和工具的调用上。
```

文件名决定 URL：`src/content/thoughts/2025-06-07-cline.md` → `/thoughts/2025-06-07-cline/`。同一天多条用 `-2`、`-3`。

快速新建：

```bash
pnpm thought "今天想到的一句话"
```

然后 `git add -A && git commit -m "thought: ..." && git push`，约 40 秒后上线。

### 项目

所有项目入口集中在 `src/data/projects.yml`，一条一个项目：

```yaml
- slug: fabritor
  name: fabritor
  desc: 基于 fabric.js 的开源创意图片编辑器
  group: product              # product | library | lab
  status: active              # active | paused | archived | new | experiment
  stack: [fabric.js, React]
  site: https://fabritor.surge.sh/
  repo: https://github.com/sleepy-zone/fabritor-web
  stars: 1201
  featured: true
  order: 1
```

Star 数由 `src/data/stars.json` 覆盖，构建前可手动刷新：

```bash
pnpm stars   # 需要 GITHUB_TOKEN 时可提高限额；失败会保留旧值
```

### 归档

37 篇 2024–2025 年的长文在 `src/content/archive/`，保留旧 URL `/blog/<slug>/`。**不要改 frontmatter 里的 `slug`**，会断链。

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
├─ components/     TopBar / Footer / MoonDial / ThoughtItem / ProjectRow / TagFilters
├─ content/
│  ├─ thoughts/    短想法
│  └─ archive/     旧文
├─ data/           projects.yml、stars.json、站点文案
├─ layouts/        BaseLayout
├─ lib/            日期、项目、想法的读取与格式化
├─ pages/          首页、想法、项目、关于、归档、RSS、404
└─ styles/         global.css（纸本主题 token + 全站样式）
```

设计说明与原型在仓库外的 `sleepy-zone-redesign/`（评审用，不参与构建）。
