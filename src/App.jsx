import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
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

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col relative">
        <Navbar />
        <main className="flex-grow lg:pl-56">
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
        <AIAssistant />
        <footer className="lg:pl-56 border-t border-neutral-800 py-6 text-center text-xs font-mono text-neutral-500">
          © {new Date().getFullYear()} Rajesh Chaudhary. Built with React & Tailwind.
        </footer>
      </div>
    </Router>
  );
}