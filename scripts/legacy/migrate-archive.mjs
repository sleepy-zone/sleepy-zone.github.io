import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, 'blog');
const TARGET = path.join(ROOT, 'src/content/archive');
const MAP_FILE = path.join(ROOT, 'scripts/archive-map.json');

fs.rmSync(TARGET, { recursive: true, force: true });
fs.mkdirSync(TARGET, { recursive: true });

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return /\.mdx?$/.test(entry.name) ? [full] : [];
  });
}

const usedIds = new Set();
const map = [];
const warnings = [];

for (const file of walk(SOURCE)) {
  const rel = path.relative(SOURCE, file);
  if (rel.startsWith('__')) continue;

  const raw = fs.readFileSync(file, 'utf8');
  const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  let data = {};
  if (frontmatter) {
    try {
      data = parse(frontmatter[1]) ?? {};
    } catch (error) {
      warnings.push(`${rel}: frontmatter parse failed: ${error.message}`);
    }
  }
  let body = frontmatter ? raw.slice(frontmatter[0].length) : raw;

  const base = rel.endsWith('index.md')
    ? path.basename(path.dirname(rel))
    : path.basename(rel, path.extname(rel));

  const dateMatch = base.match(/^(\d{4}-\d{2}-\d{2})/);
  const date = dateMatch?.[1];
  if (!date) warnings.push(`${rel}: no date prefix`);

  const slug =
    typeof data.slug === 'string' && data.slug.trim()
      ? data.slug.trim()
      : base.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  const title = typeof data.title === 'string' && data.title.trim() ? data.title.trim() : '无标题';

  const tags = Array.isArray(data.tags)
    ? data.tags.map(String)
    : data.tags
      ? [String(data.tags)]
      : [];

  // 1. 去掉文末的公众号关注区块（纯展示性 CTA，旧站点模板残留）
  body = body.replace(/\n*<div align="center">[\s\S]*?<\/div>\s*$/i, (block) =>
    block.includes('公众号') ? '' : block,
  );

  // 2. 去掉 CTA 留下的分隔线
  body = body.replace(/\n*-{3,}\s*$/, '').trim();

  // 3. Docusaurus/MDX 的 JSX 内联样式转成普通 HTML
  body = body.replace(
    /style=\{\{\s*width:\s*(['"]?)([^'"}]+)\1\s*\}\}/g,
    'style="width:$2"',
  );

  if (body.includes('{{')) warnings.push(`${rel}: JSX expression left in body`);
  if (!body.trim()) warnings.push(`${rel}: empty body`);

  // 4. 输出文件：日期 + slug（去掉 .md 后缀），冲突时加序号
  const slugBase = slug.replace(/\.md$/i, '');
  let id = date && slugBase.startsWith(date) ? slugBase : `${date ?? '0000-00-00'}-${slugBase}`;
  id = id.replace(/[^\w\u4e00-\u9fff.-]+/g, '-').replace(/-+/g, '-');
  let unique = id;
  let index = 2;
  while (usedIds.has(unique)) unique = `${id}-${index++}`;
  usedIds.add(unique);

  const front = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `slug: ${JSON.stringify(slug)}`,
    `date: ${JSON.stringify(date ?? '1970-01-01')}`,
    `tags: ${JSON.stringify(tags)}`,
    'legacy: true',
    '---',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(TARGET, `${unique}.md`), `${front}\n${body}\n`, 'utf8');
  map.push({ slug, date, title, source: rel, file: `${unique}.md` });
}

map.sort((a, b) => (a.date < b.date ? 1 : -1));
fs.writeFileSync(MAP_FILE, `${JSON.stringify(map, null, 2)}\n`, 'utf8');

console.log(`migrated ${map.length} posts -> ${path.relative(ROOT, TARGET)}`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const warning of warnings) console.log(`- ${warning}`);
}
