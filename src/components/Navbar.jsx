import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Credentials', to: '/achievements' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4 pb-2 bg-[#080807]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-[#080807]/95 px-4 sm:px-7 py-3 sm:py-3.5 flex items-center justify-between gap-3">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-lg sm:text-2xl font-serif tracking-tight text-[#F8F7F2] hover:text-[#FACC15] transition-colors shrink-0"
        >
          Rajesh Chaudhary
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm text-neutral-300">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-[#F8F7F2] whitespace-nowrap ${
                  isActive ? 'text-[#F8F7F2] font-medium' : 'text-neutral-300'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href="/Rajesh_Chaudhary_CV.pdf"
            download="Rajesh_Chaudhary_CV.pdf"
            className="inline-flex items-center gap-1 font-medium text-[#FACC15] hover:text-[#FDE047] transition-colors whitespace-nowrap"
          >
            <span>Resume</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#080807] font-medium px-4 py-2 text-xs sm:text-sm transition-colors whitespace-nowrap"
          >
            <span>Let&apos;s connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="lg:hidden min-h-[42px] min-w-[42px] inline-flex items-center justify-center rounded-xl border border-white/15 p-2 text-neutral-200 hover:text-[#FACC15] hover:border-[#FACC15]/50 transition-colors shrink-0"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 rounded-2xl border border-white/10 bg-[#0C0C0A] px-4 sm:px-5 py-4 space-y-3">
          <div className="flex flex-col space-y-1 text-sm">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 px-2 rounded-lg transition-colors ${
                    isActive
                      ? 'text-[#FACC15] bg-[#FACC15]/10 font-medium'
                      : 'text-neutral-300 hover:text-[#F8F7F2] hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <a
              href="/Rajesh_Chaudhary_CV.pdf"
              download="Rajesh_Chaudhary_CV.pdf"
              onClick={() => setOpen(false)}
              className="min-h-[42px] inline-flex items-center gap-1.5 px-2 text-sm font-medium text-[#FACC15] hover:text-[#FDE047]"
            >
              <span>Resume</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="min-h-[42px] inline-flex items-center gap-1.5 rounded-xl bg-[#FACC15] hover:bg-[#FDE047] text-[#080807] font-semibold px-4 py-2 text-xs transition-colors"
            >
              <span>Let&apos;s connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}