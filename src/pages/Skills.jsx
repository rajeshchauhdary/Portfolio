import React, { useState } from 'react';
import {
  Cpu,
  Terminal,
  Layers,
  Cloud,
  Sparkles,
  ScanEye,
  ShieldCheck,
  Database,
  Workflow,
} from 'lucide-react';

const skillGroups = [
  {
    number: '01',
    filter: 'Core & Web',
    title: 'Core Languages',
    subtitle: 'Primary languages for data analysis, backend services, and web apps.',
    icon: Terminal,
    skills: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'C'],
  },
  {
    number: '02',
    filter: 'AI & Data',
    title: 'Data Science & Machine Learning',
    subtitle: 'Exploratory analysis, feature pipelines, classical ML, and deep learning models.',
    icon: Cpu,
    skills: [
      'Pandas',
      'NumPy',
      'Scikit-Learn',
      'PyTorch',
      'Feature Engineering',
      'EDA & Statistics',
      'Plotly',
      'Seaborn',
    ],
  },
  {
    number: '03',
    filter: 'AI & Data',
    title: 'LLMs, RAG & Agentic AI',
    subtitle: 'Retrieval-augmented generation, hybrid search, local models, and evaluation loops.',
    icon: Sparkles,
    skills: [
      'RAG Pipelines',
      'Hybrid Search',
      'Agentic Workflows',
      'Ollama (Local LLMs)',
      'Embeddings & Reranking',
      'Prompt Engineering',
      'LLM Evaluation',
    ],
  },
  {
    number: '04',
    filter: 'AI & Data',
    title: 'Computer Vision & 3D Imaging',
    subtitle: 'Real-time vision tracking, medical imaging segmentation, and surface reconstruction.',
    icon: ScanEye,
    skills: [
      'OpenCV',
      'MediaPipe',
      'Image Segmentation',
      '3D Reconstruction',
      'Spatial Geometry',
    ],
  },
  {
    number: '05',
    filter: 'Core & Web',
    title: 'Web & Databases',
    subtitle: 'Responsive interfaces, fast REST APIs, and relational or document storage.',
    icon: Layers,
    skills: [
      'React',
      'Next.js',
      'FastAPI',
      'Django',
      'Tailwind CSS',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    number: '06',
    filter: 'Cloud & Security',
    title: 'Cloud, Security & DevOps',
    subtitle: 'Containerized deployments, CI automation, security checks, and automated test suites.',
    icon: Cloud,
    skills: [
      'AWS Cloud',
      'Docker',
      'Git & GitHub Actions',
      'Pytest',
      'Input Validation & Security',
      'AI-Assisted Vibe Coding',
      'Linux / WSL',
    ],
  },
];

const pillars = [
  {
    label: '01 · DATA & AI',
    title: 'From Raw Data to Evaluated Models',
    description:
      'Clean datasets, engineer meaningful features, and validate models with clear metrics before wrapping them into usable tools.',
    icon: Database,
  },
  {
    label: '02 · SPEED + STRUCTURE',
    title: 'Fast Vibe Coding, Clean Architecture',
    description:
      'Use modern AI coding workflows to prototype quickly while keeping modular code, clear APIs, and readable interfaces.',
    icon: Workflow,
  },
  {
    label: '03 · RELIABILITY',
    title: 'Security & Testing Built In',
    description:
      'Protect endpoints with strict schema validation, safe environment handling, and automated Pytest & CI checks.',
    icon: ShieldCheck,
  },
];

const filters = ['All', 'AI & Data', 'Core & Web', 'Cloud & Security'];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleGroups =
    activeFilter === 'All'
      ? skillGroups
      : skillGroups.filter((group) => group.filter === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div className="space-y-3">
          <span className="inline-block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
            SKILLS &amp; STACK
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
            Tools, languages &amp; frameworks.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Everything I use across data science, AI pipelines, full-stack apps, and secure deployments.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const active = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        {visibleGroups.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.number}
              className="h-full flex flex-col rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 space-y-4 hover:border-[#FACC15]/40 transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#FACC15]">
                <span>{cat.number}</span>
                <div className="rounded-xl border border-white/10 bg-[#080807] p-2 text-[#FACC15]">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h2 className="text-lg sm:text-xl font-serif text-[#F8F7F2]">
                  {cat.title}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>

              <div className="pt-3.5 border-t border-white/10 flex flex-wrap content-start gap-2 flex-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-[#080807] px-2.5 py-1 text-xs font-mono text-neutral-300 hover:border-[#FACC15]/40 hover:text-[#F8F7F2] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <section className="space-y-4 pt-2">
        <span className="block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
          ENGINEERING WORKFLOW
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.label}
                className="h-full flex flex-col rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#FACC15] uppercase tracking-[0.18em]">
                    {pillar.label}
                  </span>
                  <Icon className="w-4 h-4 text-[#FACC15]" />
                </div>
                <h3 className="text-lg font-serif text-[#F8F7F2]">{pillar.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
