import fs from 'node:fs';
import { parse } from 'yaml';

const PROJECTS_FILE = 'src/data/projects.yml';
const STARS_FILE = 'src/data/stars.json';

const projects = parse(fs.readFileSync(PROJECTS_FILE, 'utf8')) ?? [];
const current = fs.existsSync(STARS_FILE)
  ? JSON.parse(fs.readFileSync(STARS_FILE, 'utf8'))
  : {};
const token = process.env.GITHUB_TOKEN;
const next = { ...current };

for (const project of projects) {
  const match = project.repo?.match(/github\.com\/([^/]+)\/([^/#?]+)/);
  if (!match) continue;

  try {
    const response = await fetch(`https://api.github.com/repos/${match[1]}/${match[2]}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    next[project.slug] = data.stargazers_count ?? next[project.slug] ?? 0;
    console.log(`${project.slug}: ${next[project.slug]}`);
  } catch (error) {
    console.warn(`skip ${project.slug}: ${error.message}`);
  }
}

// 按项目顺序写回，保持 diff 稳定
const ordered = {};
for (const project of projects) {
  if (typeof next[project.slug] === 'number') ordered[project.slug] = next[project.slug];
}

fs.writeFileSync(STARS_FILE, `${JSON.stringify(ordered, null, 2)}\n`, 'utf8');
console.log(`updated ${STARS_FILE}`);
