import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: 'AI & Full-Stack Developer',
      organization: 'Independent & Open Source Projects',
      period: '2025 - Present',
      description: 'Developing standardized medical imaging systems (Articula AI), citizen hazard mapping apps (Aapdalens), and telemetry validation libraries (JalDrishti).'
    },
    {
      role: 'Participant & Researcher',
      organization: 'MBMC IdeaX & Academic Initiatives',
      period: '2026',
      description: 'Competed with team Runtime Terror building intelligent regional solutions and participating in applied data science training workshops.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 border-b border-neutral-800 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">
          // EXPERIENCE
        </h1>
        <p className="text-neutral-400 text-lg">
          Professional background and project engineering milestones.
        </p>
      </div>

      <div className="space-y-8 border-l border-neutral-800 pl-6 ml-2">
        {experiences.map((exp, idx) => (
          <div key={idx} className="space-y-2 relative">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white border-4 border-black"></div>
            <span className="text-xs font-mono text-neutral-500">{exp.period}</span>
            <h2 className="text-xl font-bold text-white font-mono">{exp.role}</h2>
            <div className="text-sm text-neutral-400 font-medium">{exp.organization}</div>
            <p className="text-neutral-300 text-sm font-light leading-relaxed pt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
