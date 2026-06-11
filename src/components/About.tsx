import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Sparkles, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const cards = [
    {
      icon: <Code2 className="text-accentIndigo" size={24} />,
      title: 'Frontend Development',
      desc: 'Translating design files into pixel-perfect, clean, and semantic frontend code.'
    },
    {
      icon: <Sparkles className="text-accentPurple" size={24} />,
      title: 'UI/UX Philosophy',
      desc: 'Focusing on user flow, structural hierarchy, and responsive design systems.'
    },
    {
      icon: <Award className="text-accentCyan" size={24} />,
      title: 'Premium Quality',
      desc: 'Applying modern micro-interactions, layout spacing, and visual aesthetics.'
    },
    {
      icon: <BookOpen className="text-teal-600" size={24} />,
      title: 'Growth Mindset',
      desc: 'Constantly learning cutting-edge practices, AI-assisted workflows, and tooling.'
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accentIndigo mb-2">About Me</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            My Passion & Purpose
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accentIndigo to-accentPurple mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual IDE Mockup Card (Light Mode Editor) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient backing glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accentIndigo to-accentPurple opacity-5 blur-xl pointer-events-none" />
            
            {/* The IDE Window (Clean Light Theme) */}
            <div className="relative rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-xl overflow-hidden font-mono text-sm leading-relaxed text-slate-700">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/60 bg-slate-50">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">swayam.json</span>
                <div className="w-10" />
              </div>

              {/* Window Content */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-xs md:text-sm">
                  <code>
                    <span className="text-accentPurple">{"{"}</span>
                    {'\n  '}
                    <span className="text-accentIndigo">"name"</span>: <span className="text-teal-600">"Swayam Rajwanshi"</span>,
                    {'\n  '}
                    <span className="text-accentIndigo">"role"</span>: <span className="text-teal-600">"Frontend Developer"</span>,
                    {'\n  '}
                    <span className="text-accentIndigo">"location"</span>: <span className="text-teal-600">"Solan, HP, India"</span>,
                    {'\n  '}
                    <span className="text-accentIndigo">"passion"</span>: <span className="text-teal-600">"Crafting premium web interfaces"</span>,
                    {'\n  '}
                    <span className="text-accentIndigo">"skills"</span>: <span className="text-accentPurple">{"["}</span>
                    {'\n    '}
                    <span className="text-teal-600">"React"</span>, <span className="text-teal-600">"TailwindCSS"</span>,
                    {'\n    '}
                    <span className="text-teal-600">"Framer Motion"</span>, <span className="text-teal-600">"UI/UX Design"</span>
                    {'\n  '}
                    <span className="text-accentPurple">{"]"}</span>,
                    {'\n  '}
                    <span className="text-accentIndigo">"love"</span>: <span className="text-accentPurple">{"["}</span>
                    {'\n    '}
                    <span className="text-teal-600">"Clean Code"</span>, <span className="text-teal-600">"Modern Aesthetics"</span>,
                    {'\n    '}
                    <span className="text-teal-600">"Responsive Layouts"</span>
                    {'\n  '}
                    <span className="text-accentPurple">{"]"}</span>
                    {'\n'}
                    <span className="text-accentPurple">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Biography */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-850 mb-6">
              Engineering interfaces that blend visual beauty with engineering excellence.
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              My path in frontend development is fueled by a deep-seated interest in bridging the gap between functional logic and visual design. I believe that a digital product should not only work flawlessly under the hood but should also present a captivating, intuitive, and accessible interface to the end user.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether building custom layouts, managing responsive grids, or adding micro-interactions, I focus on spacing, typography, and code structure. I view every project as a canvas to refine my capabilities and deliver SaaS-level refinement.
            </p>

            {/* Core Cards Grid (Clean white light mode) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((c, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-slate-200/60 bg-white/60 backdrop-blur-md hover:border-slate-300 hover:bg-white transition-all shadow-sm hover:shadow-md"
                >
                  <div className="mb-3">{c.icon}</div>
                  <h4 className="text-slate-800 font-bold mb-1">{c.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
