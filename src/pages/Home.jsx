import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const localPortraits = import.meta.glob('../assets/portrait.local.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});
const portraitImg = Object.values(localPortraits)[0] || null;

export default function Home() {
  const pillars = [
    {
      num: '01',
      title: 'Applied AI & Vision',
      desc: `Orthopedic imaging, 3D bone mesh reconstruction, and landmark geometry \u2014 focused on turning raw scans into structured outputs.`,
    },
    {
      num: '02',
      title: 'RAG & Data Systems',
      desc: 'Hybrid retrieval pipelines with BM25, vector search, cross-encoder reranking, semantic caching, and verification checks.',
    },
    {
      num: '03',
      title: 'Full-Stack & Web',
      desc: 'Clean interfaces, geospatial tools, and backend services built with React, Next.js, TypeScript, Python, FastAPI, and Go.',
    },
  ];

  const [livePinnedNames, setLivePinnedNames] = useState(null);

  useEffect(() => {
    fetch('/api/pinned')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.pinned?.length > 0) {
          setLivePinnedNames(data.pinned.map((n) => n.toLowerCase()));
        }
      })
      .catch(() => {});
  }, []);

  let activeProjects;
  if (livePinnedNames && livePinnedNames.length > 0) {
    activeProjects = livePinnedNames
      .map((repoLower) =>
        projectsData.find((p) => {
          const repoName = (p.github || '').split('/').pop()?.toLowerCase() || p.id.toLowerCase();
          return repoName === repoLower;
        })
      )
      .filter(Boolean);
  } else {
    const pinnedList = projectsData.filter((p) => p.pinned);
    activeProjects = pinnedList.length > 0 ? pinnedList : projectsData.slice(0, 6);
  }

  const featuredProjects = activeProjects.map((p, idx) => ({
    num: String(idx + 1).padStart(2, '0'),
    title: p.name,
    category: p.category,
    summary: p.shortDesc,
    link: `/projects/${p.id}`,
  }));

  return (
    <div className="">
      <section className="snap-start relative min-h-[calc(100vh-5.5rem)] scroll-mt-24 flex items-center overflow-hidden">
        {portraitImg && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-6 bottom-0 right-0 lg:right-[4%] w-full lg:w-[44%] z-0"
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 72% 78% at 55% 48%, #000 55%, rgba(0,0,0,0.45) 78%, transparent 100%), linear-gradient(to right, transparent 0%, #000 18%, #000 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 85%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
              maskImage:
                'radial-gradient(ellipse 72% 78% at 55% 48%, #000 55%, rgba(0,0,0,0.45) 78%, transparent 100%), linear-gradient(to right, transparent 0%, #000 18%, #000 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 10%, #000 85%, transparent 100%)',
              maskComposite: 'intersect',
            }}
          >
            <img
              src={portraitImg}
              alt=""
              className="w-full h-full object-contain object-center mix-blend-lighten select-none"
            />
          </div>
        )}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-14 py-12 sm:py-16">
          <div className="max-w-3xl space-y-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#FACC15]/30 bg-[#11110F]/90 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#FACC15]">
              <span className="h-2 w-2 rounded-full bg-[#FACC15]" />
              <span>BSC CSIT 8TH SEMESTER STUDENT</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] leading-[0.96] tracking-tight text-[#F8F7F2]">
              Rajesh{' '}
              <span className="text-[#FACC15]">Chaudhary</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-200 max-w-xl leading-relaxed font-normal">
              I explore AI, machine learning, and data science by working with data, investigating ideas, and experimenting with new approaches. I believe in learning by building, turning experiments into practical systems, continuously refining my work, and applying engineering to solve real-world problems.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-5">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[#FACC15] text-[#080807] px-7 py-3.5 text-sm sm:text-base font-semibold hover:bg-[#FDE047] transition-colors shadow-lg shadow-[#FACC15]/15"
              >
                <span>Explore my work</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.25]" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-[#11110F]/80 text-[#F8F7F2] px-6 py-3.5 text-sm sm:text-base font-medium hover:border-[#FACC15] hover:text-[#FACC15] transition-colors"
              >
                <span>More about me</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Capabilities */}
              <section
        id="perspective"
        className="snap-start scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16"
      >
        <div className="mb-8">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-[#FACC15] mb-3">
            PERSPECTIVE
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
            More than one lens.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-7 hover:border-[#FACC15]/50 transition-colors">
            <span className="block text-xs font-mono text-[#FACC15] mb-4">01</span>
            <h3 className="text-xl font-medium text-[#F8F7F2] mb-3">
              Data Science &amp; ML
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              End-to-end data analysis, automated feature engineering, cross-validated
              predictive modeling, and data quality pipelines built for real-world decisions.
            </p>
          </div>

          <div className="rounded-2xl border border-[#FACC15]/40 bg-[#0C0C0A] p-7 hover:border-[#FACC15] transition-colors">
            <span className="block text-xs font-mono text-[#FACC15] mb-4">02</span>
            <h3 className="text-xl font-medium text-[#F8F7F2] mb-3">
              AI, LLMs &amp; RAG Systems
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Hybrid retrieval pipelines with BM25, vector search, cross-encoder reranking,
              semantic caching, and automated evaluation suites for reliable AI workflows.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-7 hover:border-[#FACC15]/50 transition-colors">
            <span className="block text-xs font-mono text-[#FACC15] mb-4">03</span>
            <h3 className="text-xl font-medium text-[#F8F7F2] mb-3">
              Applied AI &amp; Engineering
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Medical imaging 3D surface reconstruction, geospatial mapping tools, and
              production-ready APIs built with Python, FastAPI, React, and TypeScript.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-[#0C0C0A]/70 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500">
            CORE DOMAINS
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              'Data Science',
              'Machine Learning',
              'AI & LLMs',
              'RAG Pipelines',
              'Computer Vision',
              'Python & React',
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-[#080807] px-3 py-1 text-xs font-mono text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

        {/* Selected Work */}
        <section id="selected-work" className="snap-start scroll-mt-24 min-h-[calc(100vh-10.5rem)] flex flex-col justify-center py-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#FACC15] mb-3">
                FEATURED WORK
              </p>
              <h2 className="text-4xl sm:text-5xl text-[#F8F7F2] tracking-tight">
                Projects &amp; systems.
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FACC15] hover:text-[#FDE047] transition-colors"
            >
              <span>All projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.num}
                to={project.link}
                className="group rounded-2xl border border-white/10 bg-[#11110F] p-6 flex flex-col justify-between gap-4 hover:border-[#FACC15]/50 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#FACC15]">{project.num}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FACC15] transition-colors shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-[#F8F7F2] group-hover:text-[#FACC15] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">{project.category}</p>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
}













