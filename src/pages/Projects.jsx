import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ArrowUpRight, Pin } from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = useMemo(() => {
    const categories = Array.from(
      new Set(projectsData.map((p) => p.category).filter(Boolean))
    );
    return ['All', 'Pinned', ...categories];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return projectsData;
    if (selectedFilter === 'Pinned') return projectsData.filter((p) => p.pinned);
    return projectsData.filter((p) => p.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div className="space-y-3">
          <span className="inline-block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
            PROJECTS
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
            Selected work &amp; systems.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Machine learning pipelines, RAG systems, and full-stack applications synced from GitHub.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const active = selectedFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-xl px-3.5 py-2 text-xs font-mono transition-colors ${
                  active
                    ? 'bg-[#FACC15] text-[#080807] font-semibold'
                    : 'border border-white/10 bg-[#0C0C0A] text-neutral-300 hover:border-[#FACC15]/50 hover:text-[#F8F7F2]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {filteredProjects.map((proj, index) => {
          const num = String(index + 1).padStart(2, '0');
          return (
            <article
              key={proj.id}
              className="group h-full flex flex-col rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-8 space-y-5 hover:border-[#FACC15]/50 transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-xs font-mono">
                  <span className="text-[#FACC15]">{num}</span>
                  <span className="text-neutral-600">/</span>
                  <span className="text-neutral-400 uppercase tracking-[0.16em]">
                    {proj.category}
                  </span>
                </div>

                {proj.pinned && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-2.5 py-0.5 text-[11px] font-mono text-[#FACC15]">
                    <Pin className="w-3 h-3" />
                    Pinned
                  </span>
                )}
              </div>

              <div className="space-y-2.5 flex-1">
                <Link to={`/projects/${proj.id}`} className="block">
                  <h2 className="text-xl sm:text-2xl font-serif text-[#F8F7F2] group-hover:text-[#FACC15] transition-colors">
                    {proj.name}
                  </h2>
                </Link>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  {proj.shortDesc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-lg border border-white/10 bg-[#080807] px-2.5 py-1 text-xs font-mono text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4 text-xs sm:text-sm font-mono">
                <Link
                  to={`/projects/${proj.id}`}
                  className="inline-flex items-center gap-1.5 font-medium text-[#FACC15] hover:text-[#FDE047] transition-colors"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-neutral-400 hover:text-[#F8F7F2] transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
