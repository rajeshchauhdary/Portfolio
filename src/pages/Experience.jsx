import React from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket,
  Trophy,
  Wrench,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const journeyItems = [
  {
    number: '01',
    period: '2025 — Present',
    badge: 'Hands-On Building',
    title: 'Independent AI & Software Builder',
    subtitle: 'Self-Driven Projects & Open Source',
    icon: Wrench,
    description:
      'I look for everyday problems and build working tools to solve them—from machine learning models and RAG search apps to full-stack web platforms.',
    points: [
      'Turn raw ideas and datasets into complete, usable web applications',
      'Focus on clean interfaces, clear logic, and practical value over demos',
      'Maintain and document public repositories on GitHub',
    ],
  },
  {
    number: '02',
    period: '2026',
    badge: 'Competitions & Events',
    title: 'Kaggle Competitor & Hackathon Participant',
    subtitle: 'Kaggle · MBMC IdeaX 2026 (Team Runtime Terror)',
    icon: Trophy,
    description:
      'I actively take part in Kaggle competitions and innovation challenges to sharpen my data skills, learn from stronger baselines, and build under deadlines.',
    points: [
      'Practice feature engineering, model evaluation, and error analysis on Kaggle',
      'Built and pitched civic problem-solving ideas with team Runtime Terror',
      'Learn how to communicate technical solutions clearly to others',
    ],
  },
  {
    number: '03',
    period: 'Ongoing',
    badge: 'Bridging the Gap',
    title: 'Preparing for Production Engineering',
    subtitle: 'Testing, Security & Team Workflows',
    icon: Rocket,
    description:
      'While I do not have formal full-time industry experience yet, I treat every personal project like real production software so I am ready on day one.',
    points: [
      'Write automated tests (Pytest), CI checks, and structured error handling',
      'Practice safe API design, input validation, and clean Git workflows',
      'Eager to join a real engineering team and learn production systems firsthand',
    ],
  },
];

export default function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-10">
      <div className="space-y-3 border-b border-white/10 pb-8">
        <span className="inline-block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
          EXPERIENCE &amp; JOURNEY
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
          No corporate title yet—just real work.
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          I am currently seeking my first industry role or internship. To close the gap before stepping into a production team, I spend my time solving real problems through projects, competing on Kaggle, and practicing clean engineering habits.
        </p>
      </div>

      <div className="rounded-2xl border border-[#FACC15]/30 bg-[#0C0C0A] p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="space-y-1.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FACC15] uppercase tracking-[0.18em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Actively Seeking Internships &amp; Entry-Level Roles</span>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Eager to learn how production-level teams design, deploy, and scale real systems—and ready to contribute with Python, Machine Learning, RAG, and full-stack web development.
          </p>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#080807] font-medium px-5 py-2.5 text-xs sm:text-sm transition-colors shrink-0"
        >
          <span>Let&apos;s connect</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {journeyItems.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.number}
              className="h-full flex flex-col rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-7 space-y-5 hover:border-[#FACC15]/40 transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-[#FACC15]">{item.number}</span>
                  <span className="text-neutral-600">/</span>
                  <span className="text-neutral-400">{item.period}</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#080807] p-2 text-[#FACC15]">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="inline-block rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-2.5 py-0.5 text-[11px] font-mono text-[#FACC15]">
                  {item.badge}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif text-[#F8F7F2] pt-1">
                  {item.title}
                </h2>
                <p className="text-xs font-mono text-neutral-400">
                  {item.subtitle}
                </p>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {item.description}
              </p>

              <ul className="pt-4 border-t border-white/10 space-y-2.5 text-xs sm:text-sm text-neutral-400 flex-1">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
