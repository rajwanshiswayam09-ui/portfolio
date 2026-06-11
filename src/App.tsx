import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    // Disable body scroll when loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          >
            {/* Typographic Name (No logo square icon) */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Swayam Rajwanshi
            </motion.h1>

            {/* Pulsing indicator line (slate track in light mode) */}
            <div className="w-48 h-[2px] bg-slate-100 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%', width: '100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute h-full bg-gradient-to-r from-accentIndigo to-accentPurple"
              />
            </div>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.3 }}
              className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-4"
            >
              Portfolio Loading
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative text-slate-700 min-h-screen bg-bgDark">
        {/* Scroll Progress */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accentIndigo to-accentPurple origin-left z-50"
          style={{ scaleX }}
        />

        {/* Ambient Effects */}
        <BackgroundEffect />

        {/* Portfolio Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Process />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
