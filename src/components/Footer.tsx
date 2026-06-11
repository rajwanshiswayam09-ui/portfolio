import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 z-10 relative">
        
        {/* Attribution */}
        <div className="text-center sm:text-left">
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            &copy; {currentYear} Swayam Rajwanshi. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 font-bold tracking-wide mt-1">
            Designed & Developed by Swayam Rajwanshi
          </p>
        </div>

        {/* Quick Back-to-Top Links */}
        <div className="flex items-center space-x-6 text-xs font-bold text-slate-400 tracking-wider uppercase">
          <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="hover:text-accentIndigo transition-colors">
            Home
          </a>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <a href="#projects" onClick={(e) => handleScrollTo(e, '#projects')} className="hover:text-accentIndigo transition-colors">
            Projects
          </a>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-accentIndigo transition-colors">
            Contact
          </a>
        </div>

        {/* Social Anchors */}
        <div className="flex items-center space-x-2">
          <a
            href="https://github.com/SwayamRajwanshi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 transition-all border border-slate-200"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/swayam-rajwanshi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 transition-all border border-slate-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:rajwanshiswayam@gmail.com"
            className="p-2.5 rounded-xl text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 transition-all border border-slate-200"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
};
