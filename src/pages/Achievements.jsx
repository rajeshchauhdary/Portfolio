import React from 'react';
import { Award, Trophy } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'MBMC IdeaX 2026 Innovation Event',
      role: 'Team Runtime Terror Member',
      description: 'Participated in the innovation competition organized by Madan Bhandari Memorial College, building intelligent prototype solutions.'
    },
    {
      title: 'Arithmatrix Virtual Internship Program (AVIP 2026)',
      role: 'Data Science Intern',
      description: 'Completed specialized applied data science and predictive modeling assignments.'
    },
    {
      title: 'Open Source & AI R&D',
      role: 'Creator & Maintainer',
      description: 'Engineered specialized tools like Articula AI, Aapdalens, and JalDrishti for automated geospatial and medical domain research.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 border-b border-neutral-800 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">
          // ACHIEVEMENTS
        </h1>
        <p className="text-neutral-400 text-lg">
          Competitions, hackathons, and key milestones.
        </p>
      </div>

      <div className="space-y-6">
        {achievements.map((item, idx) => (
          <div key={idx} className="border border-neutral-800 bg-neutral-900/40 p-6 space-y-3 hover:border-neutral-700 transition-colors">
            <div className="flex items-center space-x-2 text-neutral-400 font-mono text-xs">
              <Trophy className="w-4 h-4 text-white" />
              <span>{item.role}</span>
            </div>
            <h2 className="text-xl font-bold text-white font-mono">{item.title}</h2>
            <p className="text-neutral-300 text-sm font-light leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
