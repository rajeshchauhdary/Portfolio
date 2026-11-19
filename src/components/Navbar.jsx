import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Activity', path: '/github-activity' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <header className="lg:hidden sticky top-0 z-50 border-b border-neutral-800 bg-black/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 h-16">
          <Link to="/" className="inline-flex items-center text-white select-none">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto shrink-0 object-contain" />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-b border-neutral-800 bg-black px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'text-white bg-neutral-900' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Desktop Vertical Left Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-56 lg:z-40 border-r border-neutral-800 bg-black px-5 py-6">
        <Link to="/" className="inline-flex items-center text-white select-none mb-8">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto shrink-0 object-contain" />
        </Link>

        <nav className="flex flex-col space-y-1.5 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? 'text-white bg-neutral-900 border-l-2 border-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}