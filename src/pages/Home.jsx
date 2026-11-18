import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Cpu, Database } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs font-mono text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span>BSc CSIT Final Year Student & AI Developer</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
          Engineering Intelligent Systems & Data Pipelines.
        </h1>

        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
          Hi, I'm <strong className="text-white font-medium">Rajesh Chaudhary</strong> based in Lalitpur, Nepal. I specialize in Artificial Intelligence, Machine Learning, Full-Stack Development, and RAG architectures.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-none font-medium text-sm hover:bg-neutral-200 transition-colors"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 border border-neutral-700 text-white px-6 py-3 rounded-none font-medium text-sm hover:border-white transition-colors"
          >
            <span>Get in Touch</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
