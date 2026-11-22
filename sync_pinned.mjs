import fs from 'node:fs';
import path from 'node:path';

const USERNAME = 'rajeshchauhdary';
const DATA_PATH = path.resolve('src/data/projectsData.js');
const USE_OLLAMA = process.argv.includes('--ollama');

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function getPinnedRepos(username) {
  const res = await fetch('https://github.com/' + username, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  if (!res.ok) throw new Error(`GitHub returned ${res.status}`);
  const html = await res.text();
  const pinnedSection = html.split('js-pinned-items-reorder-container')[1] || html;
  const matches = [...pinnedSection.matchAll(/<span class="repo"[^>]*>\s*([^<\s]+)\s*<\/span>/g)];
  return [...new Set(matches.map((m) => m[1].trim()))];
}

async function getAllPublicRepos(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      Accept: 'application/vnd.github+json',
    },
  });
  if (!res.ok) return [];
  const repos = await res.json();
  return Array.isArray(repos)
    ? repos.filter((r) => !r.fork && r.name.toLowerCase() !== username.toLowerCase() && r.name.toLowerCase() !== 'portfolio')
    : [];
}

async function fetchReadme(repoFullName, defaultBranch = 'main') {
  const branches = [...new Set([defaultBranch, 'main', 'master'])];
  for (const branch of branches) {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/${repoFullName}/${branch}/README.md`);
      if (res.ok) return await res.text();
    } catch {}
  }
  return '';
}

async function enrichWithOllama(project, readme) {
  const sourceText = readme || project.shortDesc || project.name;
  const prompt = `Analyze this GitHub repository README and return ONLY valid JSON with keys:
"category" (short 2-3 word domain label like "AI & ML", "RAG & Agents", "Data Science", "Computer Vision", or "Full-Stack Web"),
"shortDesc" (1 crisp plain-English sentence, max 130 chars),
"fullDesc" (2 clear paragraphs separated by \\n\\n covering the problem, technical pipeline/architecture, and practical outcome),
"highlights" (array of 4 to 6 concrete technical bullet strings),
"tags" (array of 3 to 6 key technologies/libraries mentioned in the README).

Repo: ${project.name}
GitHub Description: ${project.shortDesc || 'N/A'}
README:
${sourceText.slice(0, 4500)}`;

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
      category: parsed.category || project.category || 'AI & Software',
      shortDesc: parsed.shortDesc || project.shortDesc,
      fullDesc: parsed.fullDesc || project.fullDesc,
      highlights:
        Array.isArray(parsed.highlights) && parsed.highlights.length > 0
          ? parsed.highlights
          : project.highlights,
      tags:
        Array.isArray(parsed.tags) && parsed.tags.length > 0
          ? parsed.tags
          : project.tags,
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

  const existingByRepo = new Map();
  for (const p of projects) {
    const repoKey = (p.github || '').split('/').pop()?.toLowerCase() || p.id.toLowerCase();
    existingByRepo.set(repoKey, p);
  }

  const publicRepos = await getAllPublicRepos(USERNAME);
  const newlyAddedRepos = new Set();

  for (const repo of publicRepos) {
    const repoKey = repo.name.toLowerCase();
    if (!existingByRepo.has(repoKey)) {
      const readme = await fetchReadme(repo.full_name, repo.default_branch);
      if (!readme && !repo.description) continue;

      let newEntry = {
        id: slugify(repo.name),
        name: repo.name,
        category: repo.language ? `${repo.language} Project` : 'AI & Software',
        shortDesc: repo.description || `End-to-end software and data repository for ${repo.name}.`,
        fullDesc:
          repo.description ||
          `${repo.name} is an open-source repository built to solve practical problems with clean architecture and reproducible workflows.`,
        highlights: [
          'Modular, reproducible codebase hosted on GitHub',
          repo.language ? `Built primarily with ${repo.language}` : 'Clean project structure and documentation',
        ],
        tags: [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 6),
        github: repo.html_url,
        pinned: false,
      };

      console.log(`New GitHub repo detected: ${repo.name}`);
      newEntry = await enrichWithOllama(newEntry, readme);
      projects.push(newEntry);
      existingByRepo.set(repoKey, newEntry);
      newlyAddedRepos.add(repoKey);
    }
  }

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
    console.log('Enriching pinned & newly detected repositories with local Ollama (llama3.2:3b)...');
    for (let i = 0; i < projects.length; i++) {
      const repoKey = (projects[i].github || '').split('/').pop()?.toLowerCase() || projects[i].id.toLowerCase();
      if (!projects[i].pinned && !newlyAddedRepos.has(repoKey)) continue;
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
