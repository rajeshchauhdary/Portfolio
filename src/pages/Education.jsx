import React from 'react';

export function Education() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 border-b border-neutral-800 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">
          // EDUCATION
        </h1>
        <p className="text-neutral-400 text-lg">
          Academic foundation and degree program.
        </p>
      </div>

      <div className="border border-neutral-800 bg-neutral-900/40 p-8 space-y-4">
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Running Final Year</span>
        <h2 className="text-2xl font-bold text-white font-mono">Bachelor of Science in Computer Science and Information Technology (BSc CSIT)</h2>
        <p className="text-neutral-400 text-sm font-light leading-relaxed">
          Focusing on core computer science algorithms, database systems, software engineering principles, artificial intelligence, and advanced data structures in Nepal.
        </p>
      </div>
    </div>
  );
}
