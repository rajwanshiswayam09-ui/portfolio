import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

const SUBTITLES = [
  'Frontend Developer',
  'Web Developer',
  'UI/UX Focused Developer'
];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % SUBTITLES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10">
        
        {/* Intro Tag (Clean light border) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-accentIndigo mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-accentIndigo animate-ping" />
          <span>Available for Frontend Roles</span>
        </motion.div>

        {/* Large Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-extrabold text-slate-900 tracking-tight leading-none mb-6"
        >
          Swayam Rajwanshi
        </motion.h1>

        {/* Animated Subtitle Container */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-xl md:text-3xl font-bold bg-gradient-to-r from-accentIndigo via-accentPurple to-indigo-600 bg-clip-text text-transparent"
            >
              {SUBTITLES[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Professional Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed mb-12"
        >
          I build modern, responsive, and user-focused web experiences by combining frontend development with strong UI/UX principles. My goal is to create interfaces that are not only visually appealing but also intuitive and performant.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScrollTo('#projects')}
            className="flex items-center justify-center space-x-2 px-8 py-4 w-full sm:w-auto text-sm font-bold text-white bg-gradient-to-r from-accentIndigo to-accentPurple hover:from-accentIndigo/90 hover:to-accentPurple/90 rounded-2xl shadow-xl shadow-accentIndigo/10 hover:shadow-accentIndigo/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
          >
            <span>View Projects</span>
            <ArrowRight size={16} className="transform transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => handleScrollTo('#contact')}
            className="flex items-center justify-center space-x-2 px-8 py-4 w-full sm:w-auto text-sm font-bold text-slate-800 bg-white border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 rounded-2xl shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Mail size={16} className="text-slate-500" />
            <span>Contact Me</span>
          </button>

          <a
           href="/resume.pdf"
           download="Swayam-Rajwanshi-Resume.pdf"
           className="flex items-center justify-center space-x-2 px-8 py-4 w-full sm:w-auto text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors hover:bg-slate-100 rounded-2xl border border-transparent"
            >
            <Download size={16} className="text-slate-500" />
            <span>Resume</span>
         </a>
        </motion.div>
      </div>

      {/* Floating scroll prompt */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity">
        <div className="w-[24px] h-[40px] rounded-full border-2 border-slate-400 flex justify-center p-1.5">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
            className="w-[6px] h-[6px] rounded-full bg-slate-600"
          />
        </div>
        <span className="text-[10px] text-slate-500 tracking-widest uppercase mt-2 font-bold">Scroll</span>
      </div>
    </section>
  );
};
