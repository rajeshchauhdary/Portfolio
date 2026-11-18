import React from 'react';

export function Certifications() {
  const certs = [
    { name: 'AWS Academy Cloud Foundations', issuer: 'AWS Training & Certification' },
    { name: 'Data Science Certification', issuer: 'Mindrisers Institute' },
    { name: 'Generative AI Workshop', issuer: 'TechAxis' },
    { name: 'Kaggle Machine Learning Competitions', issuer: 'Kaggle' },
    { name: '3-Month Technical Training', issuer: 'Kathmandu Metropolitan City' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 border-b border-neutral-800 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">
          // CERTIFICATIONS
        </h1>
        <p className="text-neutral-400 text-lg">
          Verified professional certificates and specialized workshops.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certs.map((cert, idx) => (
          <div key={idx} className="border border-neutral-800 bg-neutral-900/40 p-6 space-y-2 hover:border-neutral-700 transition-colors">
            <span className="text-xs font-mono text-neutral-500">{cert.issuer}</span>
            <h2 className="text-lg font-bold text-white font-mono">{cert.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
