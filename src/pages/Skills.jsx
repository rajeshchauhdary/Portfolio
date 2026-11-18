import React from 'react';
import { Cpu, Terminal, Database, Cloud, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages & Core',
      icon: <Terminal className="w-5 h-5 text-white" />,
      skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'C', 'Go', 'Dart']
    },
    {
      title: 'AI, ML & Data Science',
      icon: <Cpu className="w-5 h-5 text-white" />,
      skills: ['PyTorch', 'OpenCV', 'MediaPipe', 'Pandas', 'NumPy', 'LLMs & RAG', 'Scikit-Learn']
    },
    {
      title: 'Frontend & Backend',
      icon: <Database className="w-5 h-5 text-white" />,
      skills: ['React', 'Next.js', 'Django', 'Flutter', 'Tailwind CSS', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Cloud, DevOps & Tools',
      icon: <Cloud className="w-5 h-5 text-white" />,
      skills: ['AWS Cloud Services', 'Docker', 'Git & GitHub', 'VS Code', 'WSL', 'PowerShell']
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 border-b border-neutral-800 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">
          // SKILLS_&_STACK
        </h1>
        <p className="text-neutral-400 text-lg">
          Technical proficiencies, frameworks, and tools utilized in development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="border border-neutral-800 bg-neutral-900/40 p-6 space-y-6 hover:border-neutral-700 transition-colors">
            <div className="flex items-center space-x-3">
              {cat.icon}
              <h2 className="text-lg font-mono font-semibold text-white">{cat.title}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 bg-black border border-neutral-800 text-neutral-300 text-xs font-mono tracking-wide"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
