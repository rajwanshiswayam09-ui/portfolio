import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Eye, Layers } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';

import inventoryImg from '../assets/inventory.png';
import interiorImg from '../assets/interior.png';
import travelImg from '../assets/travel.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
  demoUrl: string;
  githubUrl: string;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Digital Shopkeeper Inventory Management System',
      description: 'A modern inventory management solution that helps shopkeepers efficiently manage stock, products, and inventory records through an intuitive dashboard.',
      image: inventoryImg,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      highlights: ['Dashboard Design', 'Inventory Tracking', 'Product Management', 'Responsive Layout'],
      demoUrl: 'https://dsims-live.vercel.app/',
      githubUrl: 'https://github.com/rajwanshiswayam09-ui/dsims'
    },
    {
      id: 2,
      title: 'Interior Designer Website',
      description: 'A modern and elegant interior design company website showcasing services, portfolio projects, client testimonials, and premium brand presentation.',
      image: interiorImg,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      highlights: ['Premium UI Design', 'Luxury Brand Aesthetic', 'Responsive Experience', 'Interactive Galleries'],
      demoUrl: 'https://decor-tqh5.vercel.app/',
      githubUrl: 'https://github.com/rajwanshiswayam09-ui/decor'
    },
    {
      id: 3,
      title: 'Travel & Tourism Website',
      description: 'A visually engaging travel website designed to showcase destinations, travel packages, and booking experiences with an intuitive user journey.',
      image: travelImg,
      technologies: ['React', 'Tailwind css', 'JavaScript'],
      highlights: ['Destination Showcase', 'Interactive Layouts', 'Mobile-First Design', 'User-Centered Navigation'],
      demoUrl: 'https://guru-henna-psi.vercel.app/',
      githubUrl: 'https://github.com/rajwanshiswayam09-ui/guru'
    }
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accentIndigo mb-2">My Work</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accentIndigo to-accentPurple mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-slate-200/60 bg-white overflow-hidden transition-all hover:border-slate-300 hover:shadow-xl flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden aspect-video border-b border-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 hover:bg-white/30 hover:scale-105 transition-all">
                    <Eye size={20} />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase bg-accentIndigo/10 text-accentIndigo border border-accentIndigo/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase bg-slate-100 text-slate-500 border border-slate-200">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-accentIndigo transition-colors line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Buttons (Hover Action Links) */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-accentIndigo inline-flex items-center space-x-1 group-hover:underline">
                    <span>View Details</span>
                    <Eye size={12} />
                  </span>
                  
                  <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-500 hover:text-slate-900 bg-slate-50 border border-slate-200/60 hover:bg-slate-100 transition-all"
                      title="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.demoUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Demo mode: Link points to ' + project.title);
                      }}
                      className="p-2 rounded-xl text-slate-500 hover:text-slate-900 bg-slate-50 border border-slate-200/60 hover:bg-slate-100 transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Details Modal (Refined Light Mode Overlay) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 md:p-8 bg-slate-950/40 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white text-left shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all shadow-sm"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Area (Left 7 Cols) */}
                <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-slate-100 relative aspect-video lg:aspect-auto lg:h-[500px]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Area (Right 5 Cols) */}
                <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between lg:h-[500px] overflow-y-auto">
                  <div>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase bg-accentIndigo/10 text-accentIndigo border border-accentIndigo/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4 leading-snug">
                      {selectedProject.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center space-x-1.5">
                        <Layers size={14} className="text-accentIndigo" />
                        <span>Key Focus Areas</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {selectedProject.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accentIndigo" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-600 hover:text-slate-900 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all"
                    >
                      <Github size={16} />
                      <span>Code Repository</span>
                    </a>
                    
                    <a
                      href={selectedProject.demoUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Demo mode: Link points to ' + selectedProject.title);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-accentIndigo to-accentPurple hover:from-accentIndigo/90 hover:to-accentPurple/90 shadow-md shadow-accentIndigo/10 transition-all"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
