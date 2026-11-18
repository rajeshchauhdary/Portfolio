import React from 'react';
import { GitBranch, GitCommit, GitPullRequest, Terminal } from 'lucide-react';

export default function GithubActivity() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 border-b border-neutral-800 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">
          // GITHUB_ACTIVITY
        </h1>
        <p className="text-neutral-400 text-lg">
          Repository metrics, commit workflows, and open-source contributions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono">
        <div className="border border-neutral-800 bg-neutral-900/40 p-6 space-y-2">
          <span className="text-xs text-neutral-500 uppercase tracking-wider">GitHub Profile</span>
          <a href="https://github.com/rajeshchaudhary" target="_blank" rel="noopener noreferrer" className="block text-white font-bold hover:underline truncate">
            @rajeshchaudhary
          </a>
        </div>
        <div className="border border-neutral-800 bg-neutral-900/40 p-6 space-y-2">
          <span className="text-xs text-neutral-500 uppercase tracking-wider">Primary Focus</span>
          <div className="text-white font-bold">Python, TS & React</div>
        </div>
        <div className="border border-neutral-800 bg-neutral-900/40 p-6 space-y-2">
          <span className="text-xs text-neutral-500 uppercase tracking-wider">Automation</span>
          <div className="text-white font-bold">Ollama & Actions</div>
        </div>
      </div>

      <div className="border border-neutral-800 bg-neutral-900/40 p-8 space-y-4 text-center font-mono">
        <Terminal className="w-8 h-8 text-neutral-400 mx-auto" />
        <h2 className="text-lg font-bold text-white">Automated Repository Sync</h2>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light">
          My portfolio projects are dynamically synchronized via GitHub REST API and local Ollama inference runners, ensuring up-to-date repository insights.
        </p>
      </div>
    </div>
  );
}
