import fs from 'node:fs';
import path from 'node:path';

const USERNAME = 'rajeshchauhdary';
const DATA_PATH = path.resolve('src/data/projectsData.js');

async function getPinnedRepos(username) {
  const res = await fetch(`https://github.com/${username}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  if (!res.ok) throw new Error(`GitHub returned ${res.status}`);
  const html = await res.text();
  const pinnedSection = html.split('js-pinned-items-reorder-container')[1] || html;
  const matches = [...pinnedSection.matchAll(/<span class="repo"[^>]*>\s*([^<\s]+)\s*<\/span>/g)];
  return [...new Set(matches.map((m) => m[1].trim()))];
}

async function main() {
  const raw = fs.readFileSync(DATA_PATH, 'utf8');
  const jsonMatch = raw.match(/export const projectsData = (\[[\s\S]*\]);?/);
  if (!jsonMatch) throw new Error('Could not parse projectsData.js');
  const projects = JSON.parse(jsonMatch[1]);

  const pinnedNames = await getPinnedRepos(USERNAME);
  if (pinnedNames.length > 0) {
    console.log('Detected pinned GitHub repos:', pinnedNames.join(', '));
    const lowerPinned = pinnedNames.map((n) => n.toLowerCase());
    for (const p of projects) {
      const repoName = (p.github || '').split('/').pop()?.toLowerCase() || p.id.toLowerCase();
      const idx = lowerPinned.indexOf(repoName);
      p.pinned = idx !== -1;
      p.pinnedOrder = idx !== -1 ? idx : 999;
    }
    projects.sort((a, b) => (a.pinnedOrder ?? 999) - (b.pinnedOrder ?? 999));
    for (const p of projects) delete p.pinnedOrder;
  }

  fs.writeFileSync(DATA_PATH, `export const projectsData = ${JSON.stringify(projects, null, 2)};\n`, 'utf8');
  console.log('Updated src/data/projectsData.js');
}

main();
