import fs from 'node:fs';
import path from 'node:path';

const USERNAME = 'rajeshchauhdary';
const DATA_PATH = path.resolve('src/data/projectsData.js');
const USE_OLLAMA = process.argv.includes('--ollama');

async function getPinnedRepos(username) {
  const res = await fetch(`[https://github.com/$](https://github.com/$){username}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  if (!res.ok) throw new Error(`GitHub returned ${res.status}`);
  const html = await res.text();
  const pinnedSection = html.split('js-pinned-items-reorder-container')[1] || html;
  const matches = [...pinnedSection.matchAll(/<span class="repo"[^>]*>\s*([^<\s]+)\s*<\/span>/g)];
  return [...new Set(matches.map((m) => m[1].trim()))];
}

async function fetchReadme(repoFullName) {
  for (const branch of ['main', 'master']) {
    try {
      const res = await fetch(`[https://raw.githubusercontent.com/$](https://raw.githubusercontent.com/$){repoFullName}/${branch}/README.md`);
      if (res.ok) return await res.text();
    } catch {}
  }
  return '';
}

async function enrichWithOllama(project, readme) {
  if (!readme) return project;
  const prompt = `Analyze this GitHub repository README and return ONLY valid JSON with keys:
"shortDesc" (1 crisp sentence, max 130 chars),
"fullDesc" (2 detailed paragraphs separated by \\n\\n covering problem, technical pipeline/models, and key results),
"highlights" (array of 4 to 6 concrete technical bullet strings),
"tags" (array of 3 to 6 key technologies/libraries mentioned in the README).

Repo: ${project.name}
README:
${readme.slice(0, 4500)}`;

  try {
    const res = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3.2:3b',
        prompt,
        format: 'json',
        stream: false,
      }),
    });
    if (!res.ok) return project;
    const data = await res.json();
    const parsed = JSON.parse(data.response);
    return {
      ...project,
      shortDesc: parsed.shortDesc || project.shortDesc,
      fullDesc: parsed.fullDesc || project.fullDesc,
      highlights: Array.isArray(parsed.highlights) && parsed.highlights.length > 0 ? parsed.highlights : project.highlights,
      tags: Array.isArray(parsed.tags) && parsed.tags.length > 0 ? parsed.tags : project.tags,
    };
  } catch {
    return project;
  }
}

async function main() {
  const raw = fs.readFileSync(DATA_PATH, 'utf8');
  const jsonMatch = raw.match(/export const projectsData = (\[[\s\S]*\]);?/);
  if (!jsonMatch) throw new Error('Could not parse projectsData.js');
  let projects = JSON.parse(jsonMatch[1]);

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

  if (USE_OLLAMA) {
    console.log('Enriching pinned repositories with local Ollama (llama3.2:3b)...');
    for (let i = 0; i < projects.length; i++) {
      if (!projects[i].pinned) continue;
      const repoFullName = (projects[i].github || '').replace('https://github.com/', '');
      const readme = await fetchReadme(repoFullName);
      projects[i] = await enrichWithOllama(projects[i], readme);
      console.log(`Enriched: ${projects[i].name}`);
    }
  }

  fs.writeFileSync(DATA_PATH, `export const projectsData = ${JSON.stringify(projects, null, 2)};\n`, 'utf8');
  console.log('Updated src/data/projectsData.js');
}

main();

