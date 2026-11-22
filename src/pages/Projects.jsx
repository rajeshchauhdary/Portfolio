import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ArrowUpRight, Pin, Search, X } from 'lucide-react';

function formatTitle(name = '') {
  return name.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
}

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [query, setQuery] = useState('');

  const topCategories = useMemo(() => {
    const counts = new Map();
    for (const p of projectsData) {
      if (!p.category) continue;
      counts.set(p.category, (counts.get(p.category) || 0) + 1);
    }
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([cat]) => cat);
  }, []);

  const filters = ['All', 'Pinned', ...topCategories];

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projectsData.filter((p) => {
      const matchesFilter =
        selectedFilter === 'All' ||
        (selectedFilter === 'Pinned' && p.pinned) ||
        p.category === selectedFilter;

      if (!matchesFilter) return false;
      if (!q) return true;

      const haystack = [
        p.name,
        p.category,
        p.shortDesc,
        ...(p.tags || []),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [selectedFilter, query]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-7">
        <div className="space-y-3">
          <span className="inline-block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
            PROJECTS
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
            Selected work &amp; systems.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Machine learning pipelines, RAG systems, and practical apps synced from GitHub.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#0C0C0A] px-4 py-2.5 text-xs font-mono text-neutral-300 shrink-0 self-start sm:self-auto">
          <span className="text-[#FACC15] font-semibold">{projectsData.length}</span> synced repositories
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
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

        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search project or stack..."
              className="w-full rounded-xl border border-white/10 bg-[#0C0C0A] pl-9 pr-8 py-2 text-xs font-mono text-[#F8F7F2] placeholder:text-neutral-500 focus:outline-none focus:border-[#FACC15]/60"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="text-neutral-500 hover:text-[#F8F7F2] absolute right-2.5 top-1/2 -translate-y-1/2"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <span className="text-xs font-mono text-neutral-400 shrink-0">
            Showing {filteredProjects.length}
          </span>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-10 text-center space-y-3">
          <p className="text-neutral-300 font-serif text-xl">No matching projects found.</p>
          <p className="text-sm text-neutral-400">
            Try clearing your search or switching back to All.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedFilter('All');
              setQuery('');
            }}
            className="mt-2 inline-flex items-center rounded-xl bg-[#FACC15] text-[#080807] font-mono text-xs font-semibold px-4 py-2"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredProjects.map((proj, index) => {
            const num = String(index + 1).padStart(2, '0');
            const tags = (proj.tags || []).slice(0, 6);
            return (
              <article
                key={proj.id}
                className="group h-full flex flex-col rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-7 space-y-5 hover:border-[#FACC15]/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 text-xs font-mono">
                    <span className="text-[#FACC15]">{num}</span>
                    <span className="text-neutral-600">/</span>
                    <span className="text-neutral-400 uppercase tracking-[0.16em]">
                      {proj.category || 'Project'}
                    </span>
                  </div>

                  {proj.pinned && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-2.5 py-0.5 text-[11px] font-mono text-[#FACC15]">
                      <Pin className="w-3 h-3" />
                      Pinned
                    </span>
                  )}
                </div>

                <div className="space-y-2 flex-1">
                  <Link to={`/projects/${proj.id}`} className="block">
                    <h2 className="text-xl sm:text-2xl font-serif text-[#F8F7F2] group-hover:text-[#FACC15] transition-colors">
                      {formatTitle(proj.name)}
                    </h2>
                  </Link>
                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                    {proj.shortDesc}
                  </p>
                </div>

                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-lg border border-white/10 bg-[#080807] px-2.5 py-1 text-xs font-mono text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

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
      )}
    </div>
  );
}
