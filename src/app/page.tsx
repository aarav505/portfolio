'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Github, Linkedin, FileText, ExternalLink, Globe } from "lucide-react";
import { GridPattern } from "../components/grid-pattern"
import { cn } from "@/lib/utils"
import Navbar from "../components/Navbar"
import ProjectCard  from "../components/ProjectCard";

import { 
  FileCode, 
  Terminal, 
  Database, 
  Layers, 
  Cpu,  
  Wind,
  Code2
} from "lucide-react";

const techStack = [
  { name: "Next.js", icon: <Globe size={20} />, category: "Framework" },
  { name: "TypeScript", icon: <FileCode size={20} />, category: "Language" },
  { name: "Tailwind", icon: <Wind size={20} />, category: "Styling" },
  { name: "Python", icon: <Terminal size={20} />, category: "Backend" },
  { name: "PostgreSQL", icon: <Database size={20} />, category: "Database" },
  { name: "FastAPI", icon: <Cpu size={20} />, category: "API" },
  { name: "React", icon: <Code2 size={20} />, category: "Library" },
  { name: "Docker", icon: <Layers size={20} />, category: "DevOps" },
];

const projects = [
  {
  title: "DSFL",
  description: "A full-stack platform for school interhouse contests. Students can draft custom teams and track performance with daily point credits based on live match results.",
  images: ["/dsfl-hero.png", "/dsfl-dashboard.png"], // Replace with your screenshots
  tags: ["Next.js", "FastAPI", "PostgreSQL", "TailwindCSS"],
  links: [
    { label: "Website", href: "https://dsfl.yourlink.com", icon: "website" },
    { label: "Source", href: "https://github.com/yourusername/dsfl", icon: "source" }
  ],
},

  {
    title: "Rupee Ready",
    description: "Generate winning combinations and analyze lottery trends.",
    // Now an array of images for the gallery
    images: [
      "/project1-main.png", 
      "/project1-mobile.png", 
      "/project1-dashboard.png"
    ],
    tags: ["NextJS", "PostgreSQL"],
    links: [
      { label: "Website", href: "#", icon: "website" },
      { label: "Source", href: "#", icon: "source" },

    ],
  },

  {
    title: "MedLink",
    description: "Generate winning combinations and analyze lottery trends.",
    // Now an array of images for the gallery
    images: [
      "/project1-main.png", 
      "/project1-mobile.png", 
      "/project1-dashboard.png"
    ],
    tags: ["NextJS", "PostgreSQL"],
    links: [

      { label: "Source", href: "#", icon: "source" },

    ],
    
  },

  {
    title: "Grandslam Portal",
    description: "Generate winning combinations and analyze lottery trends.",
    // Now an array of images for the gallery
    images: [
      "/project1-main.png", 
      "/project1-mobile.png", 
      "/project1-dashboard.png"
    ],
    tags: ["NextJS", "PostgreSQL"],
    links: [
      { label: "Website", href: "#", icon: "website" },
      { label: "Source", href: "#", icon: "source" },

    ],
  },

  {
    title: "DS90 Founders App",
    description: "Generate winning combinations and analyze lottery trends.",
    // Now an array of images for the gallery
    images: [
      "/project1-main.png", 
      "/project1-mobile.png", 
      "/project1-dashboard.png"
    ],
    tags: ["NextJS", "PostgreSQL"],
    links: [
      { label: "Website", href: "#", icon: "website" },
      { label: "Source", href: "#", icon: "source" },
      { label: "Source (UI)", href: "#", icon: "source" },
    ],
  },
  // ... other projects
];


export default function Home() {
  // State for the copy email button
  const [copied, setCopied] = useState(false);
  const email = "aarav@example.com"; // <--- CHANGE THIS TO YOUR ACTUAL EMAIL

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
  initial={{ opacity: 0, y: 0 }}
  animate={{ opacity: 1, y: 5 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
 
    <div className="bg-background  relative flex flex-col items-center overflow-hidden">
      
      {/* 1. Background Layer */}
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white_0%,white_40%,transparent_100%)]",
          "fixed inset-0 z-0"
        )}
      />

      {/* 2. Navbar */}
      <div className="w-full z-20">
        <Navbar />
      </div>

      {/* 3. Main Content */}
      <main id="home" className="flex-1 min-h-screen flex flex-col md:flex-row items-top pt-42 justify-center gap-12 px-6 md:px-20 z-10 w-full max-w-7xl mx-auto ">
  
        {/* Profile Image with subtle glow */}
        <div className="">
          <div className=" -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img 
            src="/profile.jpeg" 
            alt="Aarav Anand" 
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-2xl" 
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          
          {/* Status Blobs Row */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">
              <span className="w-2 h-2 mr-2 rounded-full bg-blue-500 animate-pulse"></span>
              Available for work
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700">
              Based in Dehradun 🇮🇳
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700">
              17yo
            </span>
          </div>

          {/* Main Headline */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white">
              Hey, I'm Aarav
            </h1>
            <p className="mt-4 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
              A high school junior & <span className="text-zinc-900 dark:text-zinc-100 font-medium">freelance developer</span> who loves to build. Scroll to see why age is just a variable.
            </p>
          </div>

          {/* Action Buttons & Socials */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            
            {/* View Projects Button */}
            <button className="px-6 py-2.5 bg-zinc-900 dark:bg-white dark:text-black text-white rounded-xl font-medium hover:opacity-90 transition shadow-lg flex items-center gap-2 group">
              View Projects
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Social Icons Group */}
            <div className="flex items-center gap-2">
              
              {/* GitHub */}
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all hover:scale-110"
                title="GitHub"
              >
                <Github size={20} className="text-zinc-600 dark:text-zinc-400" />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin size={20} className="text-blue-600 dark:text-blue-400" />
              </a>

              {/* Resume */}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all hover:scale-110"
                title="Resume"
              >
                <FileText size={20} className="text-zinc-600 dark:text-zinc-400" />
              </a>

              {/* Email Copy Icon Button */}
              <div className="relative group">
                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-md shadow-lg whitespace-nowrap z-50"
                    >
                      Email Copied!
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:bg-blue-50/30 dark:hover:bg-blue-900/20 transition-all hover:scale-110"
                  title="Copy Email"
                >
                  {copied ? (
                    <Check size={20} className="text-green-500" />
                  ) : (
                    <Mail size={20} className="text-zinc-600 dark:text-zinc-400" />
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>
      {/*Projects Section */}
      <section id="projects" className=" px-6 md:px-auto max-w-7xl mx-auto z-10 relative">
        <h2 className="text-2xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-12">
          my projects.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>


      <section id="skills" className="py-20 px-6 md:px-20 max-w-7xl mx-auto z-10 relative">
      {/* Matches the "my projects." heading style */}
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-12">
        my tech.
      </h2>

      {/* Grid of simplistic cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {techStack.map((tech) => (
          <div 
            key={tech.name}
            className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm"
          >
            {/* Minimal Icon Box */}
            <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors shadow-sm">
              {tech.icon}
            </div>

            <div className="flex flex-col">
              <span className="text-sm md:text-base font-bold text-zinc-900 dark:text-white leading-tight">
                {tech.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-500 dark:text-zinc-500 mt-0.5">
                {tech.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* 4. Footer Section */}
      <section className="w-full border-t border-zinc-200 dark:border-zinc-800 py-6 flex items-center justify-center z-10">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Aarav Anand. All rights reserved. Portfolio Site. Build with Next JS and Tailwind.
        </p>
      </section>

      {/* Shimmer Animation Keyframes */}
      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>

</motion.div>
  )
}