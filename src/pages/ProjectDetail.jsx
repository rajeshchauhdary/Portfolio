import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ArrowLeft, ExternalLink, Code2, CheckCircle2, FolderGit2 } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6 font-mono">
        <h1 className="text-2xl font-bold text-white">Project Not Found</h1>
        <p className="text-neutral-400">The requested project repository does not exist in the index.</p>
        <Link to="/projects" className="inline-block bg-white text-black px-6 py-2.5 text-sm font-medium">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div>
        <Link to="/projects" className="inline-flex items-center space-x-2 text-neutral-400 hover:text-white font-mono text-xs mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        <div className="space-y-4 border-b border-neutral-800 pb-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{project.category}</span>
            <FolderGit2 className="w-6 h-6 text-neutral-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">{project.name}</h1>
          <p className="text-neutral-400 text-lg font-light">{project.shortDesc}</p>
        </div>
      </div>

      <div className="space-y-8 font-light text-neutral-300">
        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500">// Project Overview</h2>
          <p className="text-base leading-relaxed">{project.fullDesc}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500">// Key Architecture & Features</h2>
          <div className="space-y-3">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-neutral-900/40 border border-neutral-800 p-4">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-500">// Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-black border border-neutral-800 text-white text-xs font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6 pt-6 border-t border-neutral-800 font-mono text-sm">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 font-medium hover:bg-neutral-200 transition-colors">
            <Code2 className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 border border-neutral-700 text-white px-6 py-3 hover:border-white transition-colors">
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
