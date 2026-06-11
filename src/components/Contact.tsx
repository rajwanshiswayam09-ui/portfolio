import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call for a premium UX
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        
        {/* Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accentIndigo mb-2">Get In Touch</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Collaborate
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-accentIndigo to-accentPurple mt-4" />
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Connect Details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Recruiter-Quick Connections
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              I am open to discussions about frontend roles, web projects, and team collaborations. Feel free to reach out via direct channels or send a message using the form.
            </p>

            {/* Email Card */}
            <div className="group p-5 rounded-2xl border border-slate-200/60 bg-white shadow-sm flex items-center space-x-4 hover:border-slate-300 transition-all">
              <div className="p-3.5 rounded-xl bg-accentIndigo/10 text-accentIndigo">
                <Mail size={20} />
              </div>
              <div className="flex-grow">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Email Me</span>
                <a 
                  href="mailto:rajwanshiswayam@gmail.com" 
                  className="text-slate-800 hover:text-accentIndigo font-semibold text-sm md:text-base break-all transition-colors"
                >
                  rajwanshiswayam@gmail.com
                </a>
              </div>
              <a 
                href="mailto:rajwanshiswayam@gmail.com"
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-650 border border-slate-200 hover:bg-slate-200 hover:text-slate-900 transition-all hidden sm:block"
              >
                Send
              </a>
            </div>

            {/* Call Card */}
            <div className="group p-5 rounded-2xl border border-slate-200/60 bg-white shadow-sm flex items-center space-x-4 hover:border-slate-300 transition-all">
              <div className="p-3.5 rounded-xl bg-accentPurple/10 text-accentPurple">
                <Phone size={20} />
              </div>
              <div className="flex-grow">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Call Me</span>
                <a 
                  href="tel:+919816188083" 
                  className="text-slate-800 hover:text-accentPurple font-semibold text-sm md:text-base transition-colors"
                >
                  +91 98161 88083
                </a>
              </div>
              <a 
                href="tel:+919816188083"
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-650 border border-slate-200 hover:bg-slate-200 hover:text-slate-900 transition-all hidden sm:block"
              >
                Call
              </a>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl border border-slate-200/60 bg-white shadow-sm flex items-center space-x-4">
              <div className="p-3.5 rounded-xl bg-accentCyan/10 text-accentCyan">
                <MapPin size={20} />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Location</span>
                <span className="text-slate-700 font-semibold text-sm md:text-base">
                  Solan, Himachal Pradesh, India
                </span>
              </div>
            </div>

            {/* Social Accounts Row */}
            <div className="pt-6 border-t border-slate-200/60 flex items-center space-x-4">
              <span className="text-xs text-slate-450 font-bold uppercase tracking-widest mr-2">Profiles</span>
              
              <a
                href="https://github.com/rajwanshiswayam09-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-350 transition-all hover:scale-105 shadow-sm"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/swayam-rajwanshi-b835b5348/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-350 transition-all hover:scale-105 shadow-sm"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>

          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-3xl border border-slate-200/80 bg-white shadow-md relative overflow-hidden">
              
              {/* Submission states overlay */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-white/95 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', delay: 0.1 }}
                      className="p-4 rounded-full bg-emerald-100 text-emerald-600 mb-4 border border-emerald-200"
                    >
                      <CheckCircle2 size={40} />
                    </motion.div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h4>
                    <p className="text-sm text-slate-600 max-w-sm leading-relaxed mb-6">
                      Thank you for reaching out. Your details were captured, and I will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 border border-slate-200 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Send a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder=""
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accentIndigo focus:ring-1 focus:ring-accentIndigo focus:bg-white transition-all text-sm"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder=""
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accentIndigo focus:ring-1 focus:ring-accentIndigo focus:bg-white transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accentIndigo focus:ring-1 focus:ring-accentIndigo focus:bg-white transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Your Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-accentIndigo focus:ring-1 focus:ring-accentIndigo focus:bg-white transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-accentIndigo to-accentPurple hover:from-accentIndigo/90 hover:to-accentPurple/90 shadow-xl shadow-accentIndigo/10 hover:shadow-accentIndigo/20 transition-all flex items-center justify-center space-x-2 text-sm disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
