import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  PanelLeftClose,
  PanelLeftOpen,
  Home,
  User,
  Code2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Trophy,
  Award,
  Activity,
  Mail,
} from 'lucide-react';

export default function Navbar({ isCollapsed, setIsCollapsed }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Skills', path: '/skills', icon: Code2 },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Education', path: '/education', icon: GraduationCap },
    { name: 'Achievements', path: '/achievements', icon: Trophy },
    { name: 'Certifications', path: '/certifications', icon: Award },
    { name: 'Activity', path: '/github-activity', icon: Activity },
    { name: 'Contact', path: '/contact', icon: Mail },
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
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? 'text-white bg-neutral-900' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Desktop Collapsible Left Sidebar */}
      <aside
        className={`hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 border-r border-neutral-800 bg-black py-5 transition-all duration-300 ${
          isCollapsed ? 'lg:w-16 px-2.5 items-center' : 'lg:w-56 px-4'
        }`}
      >
        {/* Top Row: Logo + Open/Close Toggle */}
        <div className={`flex items-center mb-7 w-full ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
          {!isCollapsed && (
            <Link to="/" className="inline-flex items-center text-white select-none">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto shrink-0 object-contain" />
            </Link>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? 'Open sidebar' : 'Close sidebar'}
            aria-label={isCollapsed ? 'Open sidebar' : 'Close sidebar'}
            className="p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
          >
            {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-1.5 text-sm font-medium w-full">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                title={isCollapsed ? link.name : undefined}
                className={`flex items-center rounded-md transition-colors duration-200 ${
                  isCollapsed ? 'justify-center p-2.5' : 'gap-3 px-3 py-2'
                } ${
                  isActive
                    ? isCollapsed
                      ? 'text-white bg-neutral-900'
                      : 'text-white bg-neutral-900 border-l-2 border-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!isCollapsed && <span>{link.name}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}