import fs from 'node:fs';
import path from 'node:path';

const timeZone = 'Asia/Shanghai';
const formatter = new Intl.DateTimeFormat('en-CA', {
  timeZone,
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
const timestamp = `${date}T${parts.hour === '24' ? '00' : parts.hour}:${parts.minute}:00+08:00`;
const dir = path.join(process.cwd(), 'src/content/thoughts');

fs.mkdirSync(dir, { recursive: true });

let id = date;
let index = 2;
while (fs.existsSync(path.join(dir, `${id}.md`))) {
  id = `${date}-${index++}`;
}

const text = process.argv.slice(2).join(' ').trim() || '在这里写点什么。';
const file = path.join(dir, `${id}.md`);
const content = `---
date: ${timestamp}
tags: []
---

${text}
`;

fs.writeFileSync(file, content, 'utf8');
console.log(`created ${path.relative(process.cwd(), file)}`);
console.log('next: 写内容 → git add -A && git commit -m "thought: ..." && git push');
