import React, { useState } from 'react';
import { GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

const educationFocus = [
  'Data Structures & Algorithms',
  'Database Management Systems (ADBMS)',
  'Artificial Intelligence',
  'Software Engineering',
  'Computer Networks & OS',
];

const certifications = [
  {
    number: '01',
    category: 'Cloud & AI',
    issuer: 'AWS Training & Certification',
    badge: 'Credly Digital Badge',
    period: 'Sept 2026',
    title: 'AWS Academy Cloud Foundations',
    details:
      'Completed coursework, assessments, and hands-on cloud labs covering core infrastructure, identity management, networking, storage, and scalable compute.',
    topics: ['IAM', 'VPC', 'EC2', 'S3 & EBS', 'RDS & DynamoDB', 'Auto Scaling'],
    icon: ShieldCheck,
  },
  {
    number: '02',
    category: 'Data & Software',
    issuer: 'Mindrisers Consortium Pvt. Ltd.',
    badge: 'Certified',
    period: 'July — Aug 2026',
    title: 'Data Science Certification',
    details:
      'Completed certification and practical assessments covering end-to-end data analysis, supervised and unsupervised machine learning, and neural network fundamentals.',
    topics: ['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Deep Learning'],
    icon: Award,
  },
  {
    number: '03',
    category: 'Cloud & AI',
    issuer: 'AWS Skill Builder',
    badge: 'Course Completed',
    period: 'Sept 2026',
    title: 'Foundations of Prompt Engineering',
    details:
      'Studied structured prompt design, delimiter usage, few-shot conditioning, and output constraints for reliable LLM behavior.',
    topics: ['Prompt Anatomy', 'XML Delimiters', 'Output Constraints', 'LLM Workflows'],
    icon: Award,
  },
  {
    number: '04',
    category: 'Data & Software',
    issuer: 'Kathmandu Metropolitan City',
    badge: '3-Month Program',
    period: '2026',
    title: '3-Month Technical Training',
    details:
      'Completed a structured 3-month technical training program focused on practical computing, software tools, and applied problem-solving.',
    topics: ['Applied Computing', 'Software Tools', 'Practical Training'],
    icon: Award,
  },
];

export function Achievements() {
  const [filter, setFilter] = useState('All');

  const visibleCerts =
    filter === 'All'
      ? certifications
      : certifications.filter((c) => c.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-8">
        <div className="space-y-3">
          <span className="inline-block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
            CREDENTIALS
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
            Education &amp; certifications.
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Academic degree program and completed cloud, data, and technical training credentials.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-[#0C0C0A] px-4 py-2.5 text-xs font-mono text-neutral-300 shrink-0 self-start sm:self-auto">
          <span className="text-[#FACC15] font-semibold">BSc CSIT</span> · {certifications.length} Credentials
        </div>
      </div>

      <section className="space-y-4">
        <span className="block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
          EDUCATION
        </span>

        <div className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-8 space-y-5 hover:border-[#FACC15]/40 transition-colors">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-3 py-1 text-xs font-mono text-[#FACC15]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Running Final Year
              </span>
              <span className="text-xs font-mono text-neutral-400">
                Lalitpur, Nepal
              </span>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#080807] p-2.5 text-[#FACC15]">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-3xl font-serif text-[#F8F7F2]">
              Bachelor of Science in Computer Science and Information Technology (BSc CSIT)
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl">
              Building a strong foundation in algorithms, database systems, software engineering, and artificial intelligence alongside hands-on machine learning and full-stack projects.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-2">
            {educationFocus.map((subject) => (
              <span
                key={subject}
                className="rounded-lg border border-white/10 bg-[#080807] px-3 py-1 text-xs font-mono text-neutral-300"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
            CERTIFICATIONS &amp; TRAINING ({visibleCerts.length})
          </span>

          <div className="flex flex-wrap gap-2">
            {['All', 'Cloud & AI', 'Data & Software'].map((tab) => {
              const active = filter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilter(tab)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-mono transition-colors ${
                    active
                      ? 'bg-[#FACC15] text-[#080807] font-semibold'
                      : 'border border-white/10 bg-[#0C0C0A] text-neutral-300 hover:border-[#FACC15]/50 hover:text-[#F8F7F2]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {visibleCerts.map((cert) => {
            const Icon = cert.icon;
            return (
              <article
                key={cert.title}
                className="h-full flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-7 space-y-5 hover:border-[#FACC15]/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-[#FACC15]">{cert.number}</span>
                      <span className="text-neutral-600">/</span>
                      <span className="text-neutral-400">{cert.period}</span>
                    </div>

                    <span className="inline-flex items-center gap-1 rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-2.5 py-0.5 text-[11px] font-mono text-[#FACC15]">
                      <Icon className="w-3 h-3" />
                      {cert.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-mono text-neutral-400">
                      {cert.issuer}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#F8F7F2]">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {cert.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-lg border border-white/10 bg-[#080807] px-2.5 py-1 text-xs font-mono text-neutral-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Achievements;