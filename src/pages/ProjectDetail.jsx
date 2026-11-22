import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  CheckCircle2,
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

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center space-y-6">
        <h1 className="text-3xl font-serif text-[#F8F7F2]">Project Not Found</h1>
        <p className="text-neutral-400 text-sm">
          The requested repository does not exist in the portfolio index.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-xl bg-[#FACC15] text-[#080807] px-6 py-2.5 text-sm font-medium hover:bg-[#FDE047] transition-colors"
        >
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-8">
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#FACC15] font-mono text-xs uppercase tracking-[0.18em] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work</span>
        </Link>

        <div className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <span className="inline-block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
              {cleanText(project.category)}
            </span>

            <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
              {project.name}
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              {cleanText(project.shortDesc)}
            </p>
          </div>

          <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#080807] px-5 py-2.5 text-sm font-medium transition-colors shrink-0"
            >
              <Code2 className="w-4 h-4" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <section className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-8 space-y-3.5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-[#FACC15]">
          <Layers className="w-4 h-4" />
          <span>PROJECT OVERVIEW</span>
        </div>
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed whitespace-pre-line max-w-4xl">
          {cleanText(project.fullDesc)}
        </p>
      </section>

      {project.highlights?.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-[#FACC15]">
            <Cpu className="w-4 h-4" />
            <span>KEY ARCHITECTURE &amp; FEATURES</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-5 hover:border-[#FACC15]/40 transition-colors space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#FACC15]">
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <p className="text-sm leading-relaxed text-neutral-300">
                  {cleanText(item)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
