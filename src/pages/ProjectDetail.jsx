import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  CheckCircle2,
  BookOpen,
  Layers,
  Cpu,
} from 'lucide-react';

function cleanText(str = '') {
  return str
    .replace(/â€“/g, '–')
    .replace(/â€”/g, '—')
    .replace(/Â·/g, '·')
    .replace(/â€™/g, "'");
}

function parseReadmeSections(md) {
  if (!md) return [];
  const cleaned = md
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g, '')
    .trim();

  const lines = cleaned.split(/\r?\n/);
  const sections = [];
  let current = { title: 'Repository Details', blocks: [] };
  let inCode = false;
  let codeLines = [];

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (line.trim().startsWith('```')) {
      if (!inCode) {
        inCode = true;
        codeLines = [];
      } else {
        inCode = false;
        if (codeLines.length > 0) {
          current.blocks.push({ type: 'code', content: codeLines.join('\n') });
        }
      }
      continue;
    }

    if (inCode) {
      codeLines.push(rawLine);
      continue;
    }

    const h1 = line.match(/^#\s+(.+)/);
    if (h1 && sections.length === 0 && current.blocks.length === 0) {
      continue;
    }

    const heading = line.match(/^#{2,3}\s+(.+)/);
    if (heading) {
      if (current.blocks.length > 0) sections.push(current);
      current = {
        title: heading[1].replace(/[*_`#]/g, '').trim(),
        blocks: [],
      };
      continue;
    }

    const trimmed = line.trim();
    if (!trimmed || /^[-*_]{3,}$/.test(trimmed) || /^<[^>]+>$/.test(trimmed)) {
      continue;
    }

    const bullet = trimmed.match(/^[-*+]\s+(.+)/);
    if (bullet) {
      const text = bullet[1]
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/`([^`]+)`/g, '$1');
      current.blocks.push({ type: 'bullet', content: text });
      continue;
    }

    const para = trimmed
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1');
    current.blocks.push({ type: 'paragraph', content: para });
  }

  if (current.blocks.length > 0) sections.push(current);
  return sections.slice(0, 6);
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);
  const [readmeSections, setReadmeSections] = useState([]);
  const [loadingReadme, setLoadingReadme] = useState(false);

  useEffect(() => {
    if (!project?.github) return;
    const repoPath = project.github.replace('https://github.com/', '').replace(/\/$/, '');
    let cancelled = false;

    async function fetchReadme() {
      setLoadingReadme(true);
      for (const branch of ['main', 'master']) {
        try {
          const res = await fetch(
            `https://raw.githubusercontent.com/${repoPath}/${branch}/README.md`
          );
          if (res.ok) {
            const text = await res.text();
            if (!cancelled) {
              setReadmeSections(parseReadmeSections(text));
              setLoadingReadme(false);
            }
            return;
          }
        } catch {
          // try next branch
        }
      }
      if (!cancelled) {
        setReadmeSections([]);
        setLoadingReadme(false);
      }
    }

    fetchReadme();
    return () => {
      cancelled = true;
    };
  }, [project]);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="text-3xl font-serif text-[#F8F7F2]">Project Not Found</h1>
        <p className="text-neutral-400 text-sm">
          The requested repository does not exist in the portfolio index.
        </p>
        <Link className="inline-flex items-center gap-2 rounded-xl bg-[#FACC15] text-[#080807] px-6 py-2.5 text-sm font-medium hover:bg-[#FDE047] transition-colors" to="/projects">
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
      <div>
        <Link className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#FACC15] font-mono text-xs uppercase tracking-[0.16em] mb-8 transition-colors" to="/projects">
          <ArrowLeft className="w-4 h-4"/>
          <span>Back to Work</span>
        </Link>

        <div className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-7 sm:p-9 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-[#FACC15] uppercase tracking-[0.2em]">
              {cleanText(project.category)}
            </span>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-[#FACC15] transition-colors"
            >
              <span>{project.github.replace('https://', '')}</span>
              <ArrowUpRight className="w-4 h-4"/>
            </a>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
            {project.name}
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            {cleanText(project.shortDesc)}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-lg border border-white/10 bg-[#080807] px-3 py-1 text-xs font-mono text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#080807] px-5 py-2.5 text-sm font-medium transition-colors"
            >
              <Code2 className="w-4 h-4"/>
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-4 h-4"/>
            </a>
          </div>
        </div>
      </div>

      <section className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-7 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FACC15]">
          <Layers className="w-4 h-4"/>
          <span>PROJECT OVERVIEW</span>
        </div>
        <p className="text-neutral-300 text-base leading-relaxed whitespace-pre-line">
          {cleanText(project.fullDesc)}
        </p>
      </section>

      {project.highlights?.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FACC15]">
            <Cpu className="w-4 h-4"/>
            <span>KEY ARCHITECTURE &amp; FEATURES</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0C0C0A] p-5 hover:border-[#FACC15]/40 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5"/>
                <span className="text-sm leading-relaxed text-neutral-300">
                  {cleanText(item)}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {(loadingReadme || readmeSections.length > 0) && (
        <section className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-7 sm:p-8 space-y-6">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FACC15]">
              <BookOpen className="w-4 h-4"/>
              <span>README DOCUMENTATION</span>
            </div>
            <span className="text-[11px] font-mono text-neutral-500">
              Synced from GitHub README.md
            </span>
          </div>

          {loadingReadme ? (
            <p className="text-sm font-mono text-neutral-500">
              Loading repository README details...
            </p>
          ) : (
            <div className="space-y-6">
              {readmeSections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <h3 className="text-lg font-medium text-[#F8F7F2]">{sec.title}</h3>
                  <div className="space-y-2.5">
                    {sec.blocks.slice(0, 8).map((blk, bIdx) => {
                      if (blk.type === 'code') {
                        return (
                          <pre
                            key={bIdx}
                            className="rounded-xl border border-white/10 bg-[#080807] p-4 text-xs font-mono text-neutral-300 overflow-x-auto"
                          >
                            <code>{blk.content}</code>
                          </pre>
                        );
                      }
                      if (blk.type === 'bullet') {
                        return (
                          <div
                            key={bIdx}
                            className="flex items-start gap-2.5 text-sm text-neutral-300 leading-relaxed"
                          >
                            <span className="text-[#FACC15] mt-1">•</span>
                            <span>{blk.content}</span>
                          </div>
                        );
                      }
                      return (
                        <p key={bIdx} className="text-sm text-neutral-400 leading-relaxed">
                          {blk.content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      <div className="pt-2 flex items-center justify-between border-t border-white/10">
        <Link className="text-xs font-mono uppercase tracking-[0.16em] text-neutral-400 hover:text-[#F8F7F2] transition-colors" to="/projects">`n          &larr; All Projects
        </Link>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#080807] px-6 py-3 text-sm font-medium transition-colors"
        >
          <Code2 className="w-4 h-4"/>
          <span>GitHub Repository</span>
          <ArrowUpRight className="w-4 h-4"/>
        </a>
      </div>
    </div>
  );
}

