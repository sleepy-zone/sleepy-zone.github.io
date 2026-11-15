import fs from 'node:fs';
import path from 'node:path';

const issueBody = process.env.ISSUE_BODY ?? '';
const issueNumber = process.env.ISSUE_NUMBER ?? '';
const dir = path.join(process.cwd(), 'src/content/thoughts');

function clean(value) {
  return (value || '').replace(/_No response_/g, '').trim();
}

function section(heading, stops) {
  const stop = stops.length
    ? `(?=\\n###\\s*(?:${stops.join('|')})\\s*\\n|$)`
    : '(?=$)';
  const re = new RegExp(`###\\s*${heading}\\s*\\n([\\s\\S]*?)${stop}`);
  const match = issueBody.match(re);
  return match ? clean(match[1]) : '';
}

const content = section('想法', ['标签', '关联项目 slug']);
if (!content) {
  console.error('Issue 里没有找到「想法」内容');
  process.exit(1);
}

const tags = section('标签', ['关联项目 slug'])
  .split(/[,，、\s]+/)
  .map((tag) => tag.replace(/^#+/, '').trim())
  .filter(Boolean)
  .slice(0, 3);

const project = section('关联项目 slug', []).split(/\s+/)[0] ?? '';

const formatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});
const parts = Object.fromEntries(
  formatter
    .formatToParts(new Date())
    .filter((part) => part.type !== 'literal')
    .map((part) => [part.type, part.value]),
);
const date = `${parts.year}-${parts.month}-${parts.day}`;
const hour = parts.hour === '24' ? '00' : parts.hour;
const timestamp = `${date}T${hour}:${parts.minute}:00+08:00`;

fs.mkdirSync(dir, { recursive: true });
let id = date;
let suffix = 2;
while (fs.existsSync(path.join(dir, `${id}.md`))) {
  id = `${date}-${suffix++}`;
}

const frontmatter = [
  '---',
  `date: ${JSON.stringify(timestamp)}`,
  `tags: ${JSON.stringify(tags)}`,
  ...(project ? [`project: ${JSON.stringify(project)}`] : []),
  '---',
  '',
  content,
  '',
].join('\n');

const relativePath = `src/content/thoughts/${id}.md`;
fs.writeFileSync(path.join(process.cwd(), relativePath), frontmatter, 'utf8');
console.log(`created ${relativePath}${issueNumber ? ` from issue #${issueNumber}` : ''}`);

if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(
    process.env.GITHUB_OUTPUT,
    `id=${id}\npath=${relativePath}\nurl=https://sleepyzone.online/thoughts/${id}/\n`,
  );
}
