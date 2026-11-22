import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { Certifications } from './pages/Certifications';
import Achievements from './pages/Achievements';
import GithubActivity from './pages/GithubActivity';
import Contact from './pages/Contact';


function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const html = document.documentElement;
    const prevBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    if (hash) {
      const id = hash.replace(/^#/, '');
      let tries = 0;
      const jump = () => {
        const el = document.getElementById(id) || document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
          window.scrollBy(0, -88);
          html.style.scrollBehavior = prevBehavior || '';
          return;
        }
        tries += 1;
        if (tries < 40) {
          setTimeout(jump, 25);
        } else {
          html.style.scrollBehavior = prevBehavior || '';
        }
      };
      setTimeout(jump, 0);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    html.style.scrollBehavior = prevBehavior || '';
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#080807] text-[#F8F7F2] flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/github-activity" element={<GithubActivity />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<div className="p-24 text-center font-mono text-xl text-neutral-400">404 | Page Under Construction</div>} />
          </Routes>
        </main>
        <footer className="px-4 sm:px-6 pb-8 pt-2">
          <div className="max-w-6xl mx-auto border-t border-neutral-800/90 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-neutral-500">
            <span>© {new Date().getFullYear()} RAJESH CHAUDHARY</span>
            <span title="This site uses zero cookies, zero ad trackers, and strict HTTPS security headers.">ZERO COOKIES · HTTPS HARDENED</span>
            <span>SATDOBATO, LALITPUR, NEPAL</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}



