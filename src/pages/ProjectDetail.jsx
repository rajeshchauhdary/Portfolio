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
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#FACC15] font-mono text-xs uppercase tracking-[0.16em] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work</span>
        </Link>

        <div className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-7 sm:p-9 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-[#FACC15] uppercase tracking-[0.2em]">
              {cleanText(project.category)}
            </span>
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
              <Code2 className="w-4 h-4" />
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <section className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-7 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FACC15]">
          <Layers className="w-4 h-4" />
          <span>PROJECT OVERVIEW</span>
        </div>
        <p className="text-neutral-300 text-base leading-relaxed whitespace-pre-line">
          {cleanText(project.fullDesc)}
        </p>
      </section>

      {project.highlights?.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FACC15]">
            <Cpu className="w-4 h-4" />
            <span>KEY ARCHITECTURE &amp; FEATURES</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0C0C0A] p-5 hover:border-[#FACC15]/40 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-neutral-300">
                  {cleanText(item)}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
