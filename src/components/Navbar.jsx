'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll logic to hide/show toggle


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
        
     
    </>
  );
}