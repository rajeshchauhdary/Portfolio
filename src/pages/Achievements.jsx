import React from 'react';
import { GraduationCap, Award, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    issuer: 'AWS Training & Certification · Credly Badge',
    period: 'Sept 2026',
    title: 'AWS Academy Cloud Foundations',
    details:
      'Completed coursework, assessments, and hands-on labs covering IAM, VPC networking, EC2, S3, EBS, RDS, DynamoDB, Auto Scaling, and Elastic Load Balancing.',
    icon: ShieldCheck,
  },
  {
    issuer: 'Mindrisers Consortium Pvt. Ltd.',
    period: 'July — Aug 2026',
    title: 'Data Science Certification',
    details:
      'Completed certification and practical tasks; course curriculum covered Data Science, Machine Learning, Artificial Intelligence, and Deep Learning.',
    icon: Award,
  },
  {
    issuer: 'AWS Skill Builder',
    period: 'Sept 2026',
    title: 'Foundations of Prompt Engineering',
    details:
      'Studied structured prompt anatomy, XML delimiters, and output constraints for reliable LLM responses.',
    icon: Award,
  },
  {
    issuer: 'Kathmandu Metropolitan City',
    period: '2026',
    title: '3-Month Technical Training',
    details:
      'Completed a 3-month technical training course.',
    icon: Award,
  },
];

export function Achievements() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-10">
      <div className="space-y-3 border-b border-white/10 pb-8">
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

      <section className="space-y-4">
        <span className="block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
          EDUCATION
        </span>

        <div className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-8 space-y-3 hover:border-[#FACC15]/40 transition-colors">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-block rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 px-3 py-0.5 text-xs font-mono text-[#FACC15]">
              Running Final Year · Lalitpur, Nepal
            </span>
            <div className="rounded-xl border border-white/10 bg-[#080807] p-2 text-[#FACC15]">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-serif text-[#F8F7F2]">
            Bachelor of Science in Computer Science and Information Technology (BSc CSIT)
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-3xl">
            Studying core computer science fundamentals, algorithms, database systems, and software engineering while building practical data science and AI systems.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <span className="block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
          CERTIFICATIONS &amp; TRAINING ({certifications.length})
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <article
                key={cert.title}
                className="h-full flex flex-col rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 space-y-3 hover:border-[#FACC15]/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  <span className="text-[#FACC15]">{cert.issuer}</span>
                  <span className="text-neutral-400 shrink-0">{cert.period}</span>
                </div>

                <div className="flex items-start justify-between gap-3 pt-1">
                  <h2 className="text-lg sm:text-xl font-serif text-[#F8F7F2]">
                    {cert.title}
                  </h2>
                  <Icon className="w-4 h-4 text-[#FACC15] shrink-0 mt-1" />
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed flex-1">
                  {cert.details}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Achievements;
