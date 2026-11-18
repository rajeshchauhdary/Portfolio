import React from 'react';
import { Terminal, Code, Cpu, MapPin, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 border-b border-neutral-800 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">
          // ABOUT.ME
        </h1>
        <p className="text-neutral-400 text-lg">
          Background, academic focus, and engineering philosophy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6 text-neutral-300 leading-relaxed font-light">
          <p>
            I am <strong className="text-white font-medium">Rajesh Chaudhary</strong>, currently in the final year of my Bachelor of Science in Computer Science and Information Technology (<strong className="text-white font-medium">BSc CSIT</strong>) degree program in Nepal.
          </p>
          <p>
            My core technical focus centers around <strong className="text-white font-medium">Data Science, Artificial Intelligence, Machine Learning, and Deep Learning</strong>. I build intelligent web systems, data verification pipelines, and retrieval-augmented generation (RAG) applications.
          </p>
          <p>
            I operate within a rigorous development environment using Python, TypeScript, React, Docker, and AWS cloud architecture, emphasizing clean code, robust testing, and efficient automated workflows.
          </p>
        </div>

        <div className="border border-neutral-800 bg-neutral-900/50 p-6 space-y-4 font-mono text-sm">
          <div className="text-xs text-neutral-500 uppercase tracking-wider">Quick Facts</div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-neutral-400 mt-0.5" />
              <div>
                <span className="text-neutral-500 block text-xs">Location</span>
                <span className="text-white">Lalitpur, Nepal</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <GraduationCap className="w-4 h-4 text-neutral-400 mt-0.5" />
              <div>
                <span className="text-neutral-500 block text-xs">Education</span>
                <span className="text-white">BSc CSIT (Final Year)</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Cpu className="w-4 h-4 text-neutral-400 mt-0.5" />
              <div>
                <span className="text-neutral-500 block text-xs">Primary Domain</span>
                <span className="text-white">AI / ML & Full-Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
