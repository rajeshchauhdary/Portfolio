import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
  AlertCircle,
} from 'lucide-react';

const EMAIL = 'rajeshchaaudhary74@gmail.com';

const socialLinks = [
  {
    label: 'LinkedIn',
    handle: 'rajesh-chaudhary-9a6242273',
    href: 'https://www.linkedin.com/in/rajesh-chaudhary-9a6242273/',
  },
  {
    label: 'GitHub',
    handle: 'rajeshchauhdary',
    href: 'https://github.com/rajeshchauhdary',
  },
  {
    label: 'Kaggle',
    handle: 'rajeshchaudhary45',
    href: 'https://www.kaggle.com/rajeshchaudhary45',
  },
  {
    label: 'X (Twitter)',
    handle: '@rajesh354422558',
    href: 'https://x.com/rajesh354422558',
  },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio Inquiry from ${name}`,
          _replyto: email,
          _template: 'table',
        }),
      });

      const data = await res.json();
      if (res.ok && (data.success === 'true' || data.success === true)) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-10">
      <div className="space-y-3 border-b border-white/10 pb-8">
        <span className="inline-block text-xs font-mono text-[#FACC15] uppercase tracking-[0.22em]">
          CONTACT
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif tracking-tight text-[#F8F7F2]">
          Let&apos;s connect.
        </h1>
        <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Reach out for internships, junior engineering roles, AI/data collaborations, or project inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 space-y-5">
          <div className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 space-y-4 hover:border-[#FACC15]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#FACC15] uppercase tracking-[0.2em]">
                DIRECT GMAIL
              </span>
              <Mail className="w-4 h-4 text-[#FACC15]" />
            </div>

            <div className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-[#080807] px-3.5 py-2.5">
              <span className="text-xs sm:text-sm font-mono text-[#F8F7F2] truncate">
                {EMAIL}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-[#0C0C0A] hover:border-[#FACC15]/50 px-2.5 py-1 text-xs font-mono text-neutral-300 hover:text-[#FACC15] transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#FACC15]" />
                    <span className="text-[#FACC15]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
              <span>Satdobato, Lalitpur, Nepal</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 space-y-3 hover:border-[#FACC15]/40 transition-colors">
            <span className="block text-xs font-mono text-[#FACC15] uppercase tracking-[0.2em]">
              SOCIALS &amp; PROFILES
            </span>

            <div className="divide-y divide-white/10">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 first:pt-1 last:pb-0 flex items-center justify-between gap-3 group"
                >
                  <div>
                    <p className="text-sm font-medium text-[#F8F7F2] group-hover:text-[#FACC15] transition-colors">
                      {item.label}
                    </p>
                    <p className="text-xs font-mono text-neutral-400">
                      {item.handle}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#FACC15] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#0C0C0A] p-6 sm:p-8">
          {status === 'success' ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl border border-[#FACC15]/30 bg-[#FACC15]/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-[#FACC15]" />
              </div>
              <h2 className="text-2xl font-serif text-[#F8F7F2]">
                Message sent to Rajesh
              </h2>
              <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                Your message has been delivered directly to <span className="text-[#F8F7F2] font-mono">{EMAIL}</span>. I&apos;ll reply as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#080807] hover:border-[#FACC15]/50 px-4 py-2 text-xs font-mono text-neutral-300 hover:text-[#FACC15] transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#FACC15] uppercase tracking-[0.2em]">
                  SEND A DIRECT MESSAGE
                </span>
                <p className="text-xs text-neutral-400">
                  Delivered straight to my inbox—no external mail client needed.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl bg-[#080807] border border-white/10 px-4 py-3 text-[#F8F7F2] placeholder:text-neutral-600 focus:outline-none focus:border-[#FACC15] text-sm transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl bg-[#080807] border border-white/10 px-4 py-3 text-[#F8F7F2] placeholder:text-neutral-600 focus:outline-none focus:border-[#FACC15] text-sm transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                  Message
                </label>
                <textarea
                  rows="5"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl bg-[#080807] border border-white/10 px-4 py-3 text-[#F8F7F2] placeholder:text-neutral-600 focus:outline-none focus:border-[#FACC15] text-sm transition-colors"
                  placeholder="Tell me about the role, project, or question..."
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>
                    Could not send right now. Please try again or copy {EMAIL} directly.
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-xl bg-[#FACC15] hover:bg-[#FDE047] disabled:opacity-60 text-[#080807] font-semibold py-3.5 px-6 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}