import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Code2, FolderGit2, ArrowRight } from 'lucide-react';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 border-b border-neutral-800 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">
          // FEATURED_PROJECTS
        </h1>
        <p className="text-neutral-400 text-lg">
          Selected software engineering and AI systems built and maintained.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((proj) => (
          <div key={proj.id} className="border border-neutral-800 bg-neutral-900/40 p-6 flex flex-col justify-between space-y-6 hover:border-neutral-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{proj.category}</span>
                <FolderGit2 className="w-5 h-5 text-neutral-400" />
              </div>
              <h2 className="text-xl font-bold text-white font-mono">{proj.name}</h2>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">{proj.shortDesc}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 bg-black border border-neutral-800 text-neutral-300 text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-800/60 font-mono text-xs">
              <Link to={/projects/} className="inline-flex items-center space-x-1.5 text-white hover:underline">
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center space-x-4">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-neutral-400 hover:text-white transition-colors">
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
