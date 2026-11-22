import React from 'react';
import {
  MapPin,
  GraduationCap,
  Cpu,
  ArrowUpRight,
  Trophy,
  ShieldCheck,
} from 'lucide-react';

function GitHubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const profiles = [
  {
    name: 'GitHub',
    handle: '@rajeshchauhdary',
    href: 'https://github.com/rajeshchauhdary',
    icon: GitHubIcon,
  },
  {
    name: 'LinkedIn',
    handle: 'Rajesh Chaudhary',
    href: 'https://www.linkedin.com/in/rajesh-chaudhary-9a6242273/',
    icon: LinkedInIcon,
  },
  {
    name: 'Kaggle',
    handle: '@rajeshchaudhary45',
    href: 'https://www.kaggle.com/rajeshchaudhary45',
    icon: Trophy,
  },
  {
    name: 'X (Twitter)',
    handle: '@rajesh354422558',
    href: 'https://x.com/rajesh354422558',
    icon: XIcon,
  },
];

const quickFacts = [
  {
    label: 'Location',
    value: 'Satdobato, Lalitpur, Nepal',
    icon: MapPin,
  },
  {
    label: 'Education',
    value: 'BSc CSIT — Running Final Year',
    icon: GraduationCap,
  },
  {
    label: 'Core Focus',
    value: 'Data Science, ML, RAG & Agentic AI',
    icon: Cpu,
  },
  {
    label: 'How I Build',
    value: 'Vibe coding speed + strict security & tests',
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-8">
      <div className="space-y-3 border-b border-white/10 pb-8">
        <span className="inline-block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
          ABOUT
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
          Builder at heart. Practical by habit.
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Turning raw data and AI ideas into fast, secure, and usable software.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-8 space-y-4 text-neutral-300 text-base leading-relaxed">
          <span className="block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em] pb-1">
            WHO I AM
          </span>
          <p>
            Hi, I&apos;m <span className="text-[#F8F7F2] font-medium">Rajesh Chaudhary</span>—a final-year{' '}
            <span className="text-[#F8F7F2] font-medium">BSc CSIT</span> student in Lalitpur, Nepal. I enjoy taking a messy real-world problem, exploring the data, and shipping a clean product people can actually use.
          </p>

          <p>
            My main focus is <span className="text-[#F8F7F2] font-medium">Data Science, Machine Learning, and AI apps</span> (including RAG search and smart agents). I also actively sharpen my modeling skills in <span className="text-[#F8F7F2] font-medium">Kaggle competitions and hackathons</span>—and instead of leaving models stuck inside notebooks, I ship them as full web apps with Python, TypeScript, React, and FastAPI.
          </p>

          <p>
            I love modern <span className="text-[#F8F7F2] font-medium">vibe coding</span> with AI tools to move fast and test ideas quickly—while keeping a sharp eye on <span className="text-[#F8F7F2] font-medium">security, input validation, and automated tests</span> so every build stays safe, clean, and reliable in production.
          </p>
        </div>

        <aside className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-8 flex flex-col justify-between space-y-5">
          <span className="block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
            AT A GLANCE
          </span>

          <div className="space-y-3.5">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div
                  key={fact.label}
                  className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-[#080807] p-3.5"
                >
                  <Icon className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-400">
                      {fact.label}
                    </div>
                    <div className="text-sm font-medium text-[#F8F7F2]">
                      {fact.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </div>

      <section className="space-y-3.5 pt-2">
        <span className="block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
          FIND ME ONLINE
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0C0C0A] p-4 hover:border-[#FACC15]/50 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="rounded-xl border border-white/10 bg-[#080807] p-2.5 text-[#FACC15] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-[#F8F7F2] group-hover:text-[#FACC15] transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs font-mono text-neutral-400 truncate">
                      {item.handle}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#FACC15] shrink-0 transition-colors" />
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
