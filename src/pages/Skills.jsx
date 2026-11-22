import React from 'react';
import { Cpu, Terminal, Layers, Cloud } from 'lucide-react';

const skillCategories = [
  {
    number: '01',
    title: 'Languages & Core',
    subtitle: 'Foundational languages for data pipelines, APIs, and systems.',
    icon: Terminal,
    skills: ['Python', 'SQL', 'TypeScript', 'JavaScript', 'C', 'Go', 'Dart'],
  },
  {
    number: '02',
    title: 'AI, ML & Data Science',
    subtitle: 'Modeling, computer vision, retrieval pipelines, and local LLM workflows.',
    icon: Cpu,
    skills: [
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'PyTorch',
      'OpenCV',
      'MediaPipe',
      'LLMs & RAG',
      'Agentic AI',
      'Ollama',
      'Feature Engineering',
    ],
  },
  {
    number: '03',
    title: 'Web, App & Databases',
    subtitle: 'Full-stack interfaces, REST backends, and structured storage.',
    icon: Layers,
    skills: [
      'React',
      'Next.js',
      'FastAPI',
      'Django',
      'Flutter',
      'Tailwind CSS',
      'PostgreSQL',
      'MongoDB',
      'Redis',
    ],
  },
  {
    number: '04',
    title: 'Cloud, Security & DevOps',
    subtitle: 'Containerization, automated testing, and reliable deployment workflows.',
    icon: Cloud,
    skills: [
      'AWS Cloud',
      'Docker',
      'Git & GitHub Actions',
      'Pytest',
      'Linux / WSL',
      'VS Code',
      'PowerShell',
    ],
  },
];

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-10">
      <div className="space-y-3 border-b border-white/10 pb-8">
        <span className="inline-block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
          SKILLS &amp; STACK
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
          Tools, languages &amp; frameworks.
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          The technologies I rely on to explore data, train models, and ship tested applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.number}
              className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#FACC15]/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#FACC15]">
                  <span>{cat.number}</span>
                  <div className="rounded-xl border border-white/10 bg-[#080807] p-2 text-[#FACC15]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif text-[#F8F7F2]">
                  {cat.title}
                </h2>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-[#080807] px-3 py-1.5 text-xs font-mono text-neutral-300 hover:border-[#FACC15]/40 hover:text-[#F8F7F2] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
