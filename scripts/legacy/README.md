# 一次性迁移脚本

2026-11 从旧 Docusaurus 站点迁移到 Astro 时使用，仅作审计参考。

- `migrate-archive.mjs`：把旧 `blog/` 下的 37 篇 Markdown 转成 `src/content/archive/`，补全日期、保留 slug、去掉公众号尾巴。源目录 `blog/` 已在迁移后删除。
- `archive-map.json`：旧 slug → 日期 / 标题 / 源文件的映射，用于核对 37 个旧 URL。
- `localize-images.py`：把归档文章里的外链图片下载、压缩成 WebP 并替换为本地路径。依赖 Pillow；一次性使用。

这些脚本不参与构建。
