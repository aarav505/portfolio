'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll logic to hide/show toggle
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) { 
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true);  // Scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <nav className="relative w-full z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-4xl font-bold tracking-tighter dark:text-white">
              aarav anand
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-2xl font-light dark:text-white hover:opacity-70 transition-opacity">
              home
            </Link>
            <Link href="#projects" className="text-2xl font-light dark:text-white hover:opacity-70 transition-opacity">
              projects
            </Link>
            <Link href="#skills" className="text-2xl font-light dark:text-white hover:opacity-70 transition-opacity">
              skills
            </Link>
          </div>
        </div>
      </nav>

      {/* Floating Mode Toggle with Scroll Animation */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-15 left-15 z-[100]"
          >
            <div className="p-1 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-2xl hover:scale-110 transition-transform active:scale-95">
              <ModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}