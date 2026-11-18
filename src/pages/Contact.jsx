import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="space-y-4 border-b border-neutral-800 pb-8">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-mono">
          // CONTACT
        </h1>
        <p className="text-neutral-400 text-lg">
          Get in touch for collaborations, AI research, or engineering inquiries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6 font-mono text-sm">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-neutral-400 mt-0.5" />
            <div>
              <span className="text-neutral-500 block text-xs">Location</span>
              <span className="text-white">Satdobato, Lalitpur, Nepal</span>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-neutral-400 mt-0.5" />
            <div>
              <span className="text-neutral-500 block text-xs">Profiles</span>
              <div className="space-y-1 pt-1">
                <a href="https://www.linkedin.com/in/rajesh-chaudhary-9a6242273/" target="_blank" rel="noopener noreferrer" className="block text-neutral-300 hover:text-white underline">LinkedIn</a>
                <a href="https://github.com/rajeshchaudhary" target="_blank" rel="noopener noreferrer" className="block text-neutral-300 hover:text-white underline">GitHub</a>
                <a href="https://www.kaggle.com/rajeshchaudhary45" target="_blank" rel="noopener noreferrer" className="block text-neutral-300 hover:text-white underline">Kaggle</a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 border border-neutral-800 bg-neutral-900/40 p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-white mx-auto" />
              <h2 className="text-xl font-bold text-white font-mono">Message Received</h2>
              <p className="text-neutral-400 text-sm font-light">Thank you for reaching out. I will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-white font-mono text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-white font-mono text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">Message</label>
                <textarea
                  rows="4"
                  required
                  className="w-full bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-white font-mono text-sm"
                  placeholder="Your inquiry or project details..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-medium py-3 px-6 hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2 font-mono text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
