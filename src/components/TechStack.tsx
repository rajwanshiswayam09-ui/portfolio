import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Palette, GitBranch, Sparkles, Brain, Cpu, 
  Layers, Layout, Eye, Compass, Accessibility, Grid, Type, CheckCircle2 
} from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export const TechStack: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      items: [
        { name: 'HTML5', icon: <Code2 size={20} />, color: 'group-hover:text-orange-500' },
        { name: 'CSS3', icon: <Layers size={20} />, color: 'group-hover:text-blue-500' },
        { name: 'JavaScript', icon: <Cpu size={20} />, color: 'group-hover:text-yellow-600' },
        { name: 'React', icon: <Code2 size={20} />, color: 'group-hover:text-cyan-600' },
        { name: 'Tailwind CSS', icon: <Grid size={20} />, color: 'group-hover:text-teal-600' },
        { name: 'Framer Motion', icon: <Sparkles size={20} />, color: 'group-hover:text-pink-600' },
      ],
    },
    {
      title: 'Backend & Design',
      items: [
        { name: 'Node.js', icon: <Server size={20} />, color: 'group-hover:text-emerald-600' },
        { name: 'Figma', icon: <Palette size={20} />, color: 'group-hover:text-purple-600' },
        { name: 'UI/UX Design', icon: <Layout size={20} />, color: 'group-hover:text-rose-600' },
      ],
    },
    {
      title: 'Tools & Workflows',
      items: [
        { name: 'Git', icon: <GitBranch size={20} />, color: 'group-hover:text-orange-600' },
        { name: 'GitHub', icon: <Github size={20} />, color: 'group-hover:text-slate-900' },
        { name: 'Cursor AI', icon: <Sparkles size={20} />, color: 'group-hover:text-indigo-600' },
        { name: 'ChatGPT', icon: <Brain size={20} />, color: 'group-hover:text-teal-600' },
        { name: 'Gemini AI', icon: <Cpu size={20} />, color: 'group-hover:text-indigo-600' },
      ],
    },
  ];

  const uiUxSkills = [
    { name: 'Wireframing', icon: <Layout size={16} /> },
    { name: 'User Interface Design', icon: <Palette size={16} /> },
    { name: 'User Experience Design', icon: <Brain size={16} /> },
    { name: 'Design Systems', icon: <Grid size={16} /> },
    { name: 'Visual Hierarchy', icon: <Eye size={16} /> },
    { name: 'Responsive Design', icon: <Compass size={16} /> },
    { name: 'Typography', icon: <Type size={16} /> },
    { name: 'Color Theory', icon: <Palette size={16} /> },
    { name: 'User Flows', icon: <CheckCircle2 size={16} /> },
    { name: 'Accessibility (a11y)', icon: <Accessibility size={16} /> },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-slate-50/50 border-y border-slate-200/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accentIndigo mb-2">Capabilities</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tech Stack & Expert Skills
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accentIndigo to-accentPurple mt-4" />
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Tech Stack Categories */}
          <div className="lg:col-span-7 space-y-10">
            {categories.map((cat, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                  {cat.title}
                </h3>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {cat.items.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="group flex items-center space-x-3 p-4 rounded-xl border border-slate-200/60 bg-white shadow-sm transition-all hover:bg-slate-50/30 hover:border-slate-350 hover:shadow-md cursor-default"
                    >
                      <div className={`text-slate-400 transition-colors duration-300 ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-950 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right Side: UI/UX Framework Skills */}
          <div className="lg:col-span-5">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
              UI/UX & Frontend Skills
            </h3>
            
            <div className="p-6 md:p-8 rounded-2xl border border-slate-250 bg-white shadow-md relative overflow-hidden h-fit">
              {/* Backing glows (softer) */}
              <div className="absolute top-[-20%] right-[-20%] w-[150px] h-[150px] rounded-full bg-accentPurple/5 blur-[40px] pointer-events-none" />
              <div className="absolute bottom-[-20%] left-[-20%] w-[150px] h-[150px] rounded-full bg-accentCyan/5 blur-[40px] pointer-events-none" />

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Understanding structural user interaction is key to a digital product's success. I implement design principles that maintain clean structures, clear reading paths, and complete access compliance.
              </p>

              <div className="flex flex-wrap gap-2.5">
                {uiUxSkills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 hover:text-accentIndigo hover:border-accentIndigo/30 hover:bg-slate-100 transition-all cursor-default"
                  >
                    <div className="text-accentIndigo">{skill.icon}</div>
                    <span className="font-semibold">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
