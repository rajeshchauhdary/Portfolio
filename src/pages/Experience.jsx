import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Wrench, Users, ArrowUpRight } from 'lucide-react';

const kaggleCompetitions = [
  {
    title: 'Google — The Gemma 4 Developer Agent Competition',
    track: 'Featured · Agentic AI',
    status: 'Active',
    summary: 'Building and testing autonomous coding agent workflows on real software engineering tasks.',
  },
  {
    title: 'Google — The Gemma 4 Developer Agent Paper Track',
    track: 'Featured · Research Track',
    status: 'Active',
    summary: 'Exploring structured evaluation and system design for agentic software engineering.',
  },
  {
    title: 'Solar Filament Segmentation Challenge 2026',
    track: 'Computer Vision · GONG H-Alpha',
    status: 'Rank 857 / 1,458',
    summary: 'Automated segmentation of solar filaments from astronomical observation imagery.',
  },
  {
    title: 'RSNA Knee Abnormality Detection',
    track: 'Research · Medical Imaging',
    status: 'Rank 5,236 / 6,299',
    summary: 'Detecting knee abnormalities from multimodal clinical imaging data.',
  },
];

const practicalWork = [
  {
    label: 'Hackathon · 2026',
    title: 'MBMC IdeaX 2026 — Team Runtime Terror',
    description:
      'Collaborated in a team innovation challenge, pitching practical software solutions for local civic problems.',
    icon: Users,
  },
  {
    label: 'Self-Driven Projects · Ongoing',
    title: 'Building Tools for Real Everyday Problems',
    description:
      'Instead of waiting for a job title, I build end-to-end apps, RAG pipelines, and data tools with clean code, tests, and validation.',
    icon: Wrench,
  },
];

export function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div className="space-y-3 max-w-2xl">
          <span className="inline-block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
            EXPERIENCE &amp; COMPETITIONS
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
            Learning by building &amp; competing.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            I don&apos;t have formal corporate work experience yet. I&apos;m eager to learn how production engineering teams work—and I close that gap by solving real problems through projects and competing on Kaggle.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#080807] font-medium px-4 py-2.5 text-xs sm:text-sm transition-colors self-start lg:self-auto shrink-0"
        >
          <span>Open to internships &amp; junior roles</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
            KAGGLE COMPETITIONS (4)
          </span>
          <a
            href="https://www.kaggle.com/rajeshchaudhary45"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-neutral-400 hover:text-[#FACC15] transition-colors"
          >
            <span>Kaggle Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {kaggleCompetitions.map((comp) => (
            <div
              key={comp.title}
              className="h-full flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 space-y-4 hover:border-[#FACC15]/40 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-mono text-neutral-400">
                    {comp.track}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-2.5 py-0.5 text-[11px] font-mono text-[#FACC15] shrink-0">
                    <Trophy className="w-3 h-3" />
                    {comp.status}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-serif text-[#F8F7F2]">
                  {comp.title}
                </h2>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {comp.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <span className="block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
          EVENTS &amp; PRACTICE
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {practicalWork.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="h-full rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 space-y-3 hover:border-[#FACC15]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#FACC15]">
                    {item.label}
                  </span>
                  <Icon className="w-4 h-4 text-[#FACC15]" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-[#F8F7F2]">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Experience;
