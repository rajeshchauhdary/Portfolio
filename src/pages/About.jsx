import React from 'react';
import {
  MapPin,
  GraduationCap,
  Cpu,
  ArrowUpRight,
  Github,
  Linkedin,
  Trophy,
  Twitter,
  Sparkles,
} from 'lucide-react';

const profiles = [
  {
    name: 'GitHub',
    handle: '@rajeshchaudhary',
    href: 'https://github.com/rajeshchaudhary',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    handle: 'Rajesh Chaudhary',
    href: 'https://www.linkedin.com/in/rajesh-chaudhary-9a6242273/',
    icon: Linkedin,
  },
  {
    name: 'Kaggle',
    handle: '@rajeshchaudhary45',
    href: 'https://www.kaggle.com/rajeshchaudhary45',
    icon: Trophy,
  },
  {
    name: 'X (Twitter)',
    handle: '@rajesh354422558',
    href: 'https://x.com/rajesh354422558',
    icon: Twitter,
  },
];

const quickFacts = [
  {
    label: 'Location',
    value: 'Satdobato, Lalitpur, Nepal',
    icon: MapPin,
  },
  {
    label: 'Education',
    value: 'BSc CSIT — Running Final Year',
    icon: GraduationCap,
  },
  {
    label: 'Core Focus',
    value: 'Data Science, ML, RAG & Agentic AI',
    icon: Cpu,
  },
  {
    label: 'Approach',
    value: 'Systems over hype, tested in practice',
    icon: Sparkles,
  },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-10">
      <div className="space-y-3 border-b border-white/10 pb-8">
        <span className="inline-block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
          ABOUT
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
          Background &amp; engineering philosophy.
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Building practical machine learning pipelines, retrieval systems, and reliable full-stack applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-8 space-y-5 text-neutral-300 text-base leading-relaxed">
            <p>
              I am <span className="text-[#F8F7F2] font-medium">Rajesh Chaudhary</span>, a final-year{' '}
              <span className="text-[#F8F7F2] font-medium">
                Bachelor of Science in Computer Science and Information Technology (BSc CSIT)
              </span>{' '}
              student based in Lalitpur, Nepal[cite: 13].
            </p>

            <p>
              My work centers on{' '}
              <span className="text-[#F8F7F2] font-medium">
                Data Science, Machine Learning, Natural Language Processing, and Retrieval-Augmented Generation (RAG)
              </span>
              . Rather than treating models as isolated notebooks, I focus on turning raw data into end-to-end systems—combining feature engineering, evaluation pipelines, and clean web interfaces.
            </p>

            <p>
              Across Python, TypeScript, React, FastAPI, and Docker, I prioritize reproducible workflows, automated testing, and measurable performance over unnecessary complexity.
            </p>
          </div>

          <div className="space-y-3.5">
            <span className="block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
              PROFILES &amp; LINKS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {profiles.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0C0C0A] p-4 hover:border-[#FACC15]/50 transition-colors"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="rounded-xl border border-white/10 bg-[#080807] p-2.5 text-[#FACC15] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-[#F8F7F2] group-hover:text-[#FACC15] transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs font-mono text-neutral-400 truncate">
                          {item.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#FACC15] shrink-0 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-7 space-y-5">
          <span className="block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
            QUICK FACTS
          </span>

          <div className="space-y-4">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#080807] p-4"
                >
                  <Icon className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-400">
                      {fact.label}
                    </div>
                    <div className="text-sm font-medium text-[#F8F7F2]">
                      {fact.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}
