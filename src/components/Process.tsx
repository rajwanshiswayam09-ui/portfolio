import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, GitFork, Layout, Palette, Code2, ShieldCheck, Globe 
} from 'lucide-react';

interface TimelineStep {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const Process: React.FC = () => {
  const steps: TimelineStep[] = [
    {
      number: '01',
      title: 'Research & Discovery',
      desc: 'Analyzing client goals, gathering references, auditing competitor products, and outlining a strategic roadmap.',
      icon: <Search size={18} />
    },
    {
      number: '02',
      title: 'User Flow Planning',
      desc: 'Mapping user journeys, establishing structural architectures, and defining critical interactive paths.',
      icon: <GitFork size={18} />
    },
    {
      number: '03',
      title: 'Wireframing in Figma',
      desc: 'Creating low-fidelity layout plans, planning space grids, and outlining content hierarchy structures.',
      icon: <Layout size={18} />
    },
    {
      number: '04',
      title: 'UI Design',
      desc: 'Designing custom typography, harmonizing color systems, and building responsive screens in high fidelity.',
      icon: <Palette size={18} />
    },
    {
      number: '05',
      title: 'Frontend Development',
      desc: 'Translating designs into clean, modular React files, implementing Tailwind utilities, and configuring hooks.',
      icon: <Code2 size={18} />
    },
    {
      number: '06',
      title: 'Testing & Optimization',
      desc: 'Reviewing accessibility, adjusting layouts for screen limits, auditing loading scores, and refactoring.',
      icon: <ShieldCheck size={18} />
    },
    {
      number: '07',
      title: 'Deployment',
      desc: 'Publishing production builds, configuring server routes, CDN distribution, and automated CI/CD pipelines.',
      icon: <Globe size={18} />
    }
  ];

  return (
    <section id="process" className="relative py-24 overflow-hidden bg-slate-50/50 border-y border-slate-200/40">
      <div className="max-w-6xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Heading */}
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accentIndigo mb-2">Workflow</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Development Process
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accentIndigo to-accentPurple mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central bar (light slate line) */}
          <div className="absolute left-[30px] md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-[2px] bg-slate-200" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Empty Spacer Column (for md+) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Circle Indicator Icon */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="relative z-10 flex items-center justify-center w-[60px] h-[60px] rounded-full border border-slate-200 bg-white text-accentIndigo shadow-md shadow-slate-100 ml-[0px] md:mx-auto"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Card Content Column */}
                  <motion.div
                    initial={{ 
                      opacity: 0, 
                      x: isEven ? -40 : 40,
                      y: 10
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full md:w-1/2 pl-[80px] md:pl-0 md:px-12 mt-4 md:mt-0"
                  >
                    <div className="p-6 md:p-8 rounded-2xl border border-slate-200/80 bg-white hover:bg-slate-50/30 hover:border-slate-300 transition-all shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-accentIndigo uppercase tracking-widest">
                          Step {step.number}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-805 mb-2">
                        {step.title}
                      </h3>
                      
                      <p className="text-slate-550 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
