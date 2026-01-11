'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Github, Linkedin, FileText, Globe, FileCode, Terminal, Database, Cpu, Wind, Code2 } from "lucide-react";
import { GridPattern } from "../components/grid-pattern"
import { cn } from "@/lib/utils"
import Navbar from "../components/Navbar"
import ProjectCard  from "../components/ProjectCard";

const techStack = [
  { name: "Next.js", icon: <Globe size={20} />, category: "Framework" },
  { name: "React", icon: <Code2 size={20} />, category: "Library" },
  { name: "JavaScript", icon: <FileCode size={20} />, category: "Language" },
  { name: "Python", icon: <Terminal size={20} />, category: "Language" },
  { name: "HTML", icon: <Code2 size={20} />, category: "Language" },
  { name: "CSS", icon: <Wind size={20} />, category: "Language" },
  { name: "Tailwind CSS", icon: <Wind size={20} />, category: "Styling" },
  { name: "Flask", icon: <Cpu size={20} />, category: "Backend" },
  { name: "Node.js", icon: <Cpu size={20} />, category: "Backend" },
  { name: "Express.js", icon: <Cpu size={20} />, category: "Backend" },
  { name: "PostgreSQL", icon: <Database size={20} />, category: "Database" },
  { name: "Firebase", icon: <Database size={20} />, category: "BaaS" },
];

const projects = [
  // ... (Keep your projects array as it is)
  {
    title: "DSFL",
    description: "Doon School Fantasy League is a fantasy game similar to Dream11 and Fantasy Premier League but for school interhouse competitions. Students can create their own fantasy team, picking top players from different houses. At the end of each day, users' team are credited with points based on their performance in the matches played. The site served around 520+ users which consisted of students and teachers.",
    images: ["/dsfl/1.png", "/dsfl/2.png","/dsfl/3.jpg","/dsfl/4.png"],
    tags: ["React", "TailwindCSS", "Python", "Flask", "PostgreSQL"],
    links: [
      { label: "Website", href: "https://www.dsfl.app", icon: "website" },
      { label: "Source", href: "https://github.com/aarav11anand/dsfl-backend", icon: "source" },
      { label: "Source (UI)", href: "https://github.com/aarav11anand/dsfl-frontend", icon: "source" },
    ],
  },
  {
    title: "Rupee Ready",
    description: "A website for an initiative dedicated to spreading financial literacy among underprivileged students, featuring a form for donor engagement and data collection.",
    images: ["/rupee/1.png", "/rupee/2.png", "/rupee/3.png", "/rupee/4.png"],
    tags: ["NextJS", "Web3Forms"],
    links: [
      { label: "Website", href: "https://www.rupeeready.in", icon: "website" },
      { label: "Source", href: "https://github.com/aarav505/rupee_ready_vl", icon: "source" },
    ],
  },
  {
    title: "MedLink",
    description: "Built in 2 days, a working hackathon prototype built for individuals, pharmacists, and medical professionals to manage surplus medicines. The platform allows users to list excess medicines or purchase them at discounted prices. The project won 2nd place at the BSAI Opportunity Summit 2025 Hackathon Challenge.",
    images: ["/med/1.png", "/med/2.png", "/med/3.png", "/med/4.png"],
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    links: [
      { label: "Source", href: "https://github.com/aarav505/MedLink", icon: "source" },
    ],
  },
  {
    title: "Grandslam Portal",
    description: "Serves as the official portal for the Grandslam, a school media power house which covers everything sports. The portal serves multiple purposes which include player rankings in individual sports, published articles and inter-house statistical insights. The portal has been used actively with over 700 unique users during major sporting events.",
    images: ["/portal/1.png", "/portal/2.png"],
    tags: ["NextJS", "TailwindCSS"],
    links: [
      { label: "Website", href: "https://grandslam-portal.vercel.app/", icon: "website" },
      { label: "Source", href: "https://github.com/aarav505/grandslam_portal", icon: "source" },
    ],
  },
  {
    title: "DS90 Founders App",
    description: "Significantly contributed to the development of the DS90 Founders mobile web application, built to manage visitor logistics during The Doon School’s 90th Founders Day celebrations. I primarily worked on the food scheduling and ordering system, which enabled advance ordering and reduced on-ground queues across 30+ food stalls. The platform also provided campus landmark information and automated event reminders, and successfully served 650+ users during the event.",
    images: ["/chand/1.png", "/chand/2.png", "/chand/3.png", "/chand/4.png", "/chand/5.png", "/chand/6.png"],
    tags: ["NextJS", "TailwindCSS", "Firebase"],
    links: [
      { label: "Website", href: "https://chandbagh.doonschool.com", icon: "website" },
      { label: "Source", href: "https://github.com/fitbyshubham/chandbagh-90", icon: "source" },
    ],
  },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const email = "aarav.85.2027@doonschool.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-background relative flex flex-col items-center overflow-x-hidden">
        
        <GridPattern
          width={80}
          height={80}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white_0%,white_30%,transparent_100%)]",
            "fixed inset-0 z-0"
          )}
        />

        {/* 1. Adjusted Navbar Container */}
        <div className="w-full fixed top-0 z-50">
          <Navbar />
        </div>

        {/* 2. Optimized Hero Section */}
        <main id="home" className="relative flex-1 min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-6 pt-24 md:pt-32 z-10 w-full max-w-7xl mx-auto">
          
          {/* Profile Image - Moved up on mobile */}
          <div className="shrink-0">
            <div className=" -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-15"></div>
            <img 
              src="/profile.jpeg" 
              alt="Aarav Anand" 
              className="relative w-36 h-36 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-xl" 
            />
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-5">
            
            {/* 3. Reordered: Status Blobs below Image */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">
                <span className="w-1.5 h-1.5 mr-2 rounded-full bg-blue-500 animate-pulse"></span>
                Available for work
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                Dehradun 🇮🇳
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                17yo
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-[1.1]">
                Hey, I'm Aarav
              </h1>
              <p className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed mx-auto md:mx-0">
                A high school junior & <span className="text-zinc-900 dark:text-zinc-100 font-medium">freelance developer</span> who loves to build things for the web.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <button onClick={() => window.location.href = "#projects"} className="px-5 py-2.5 bg-zinc-900 dark:bg-white dark:text-black text-white rounded-xl font-semibold text-sm hover:scale-[1.02] transition shadow-lg">
                View Projects
              </button>

              <div className="flex items-center gap-2">
                <a href="https://github.com/aarav505" target="_blank" className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100 transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100 transition-colors">
                  <Linkedin size={18} className="text-blue-600" />
                </a>
                <div className="relative">
                  <AnimatePresence>
                    {copied && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded shadow-xl whitespace-nowrap">
                        Copied!
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button onClick={copyEmail} className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50">
                    {copied ? <Check size={18} className="text-green-500" /> : <Mail size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <section id="projects" className="w-full px-6 md:px-12 max-w-7xl mt-13 mx-auto z-10 relative py-16">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-8 md:mb-12">
            my projects.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <section id="skills" className="w-full px-6 md:px-12 max-w-7xl mx-auto py-16 z-10 relative">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-8 md:mb-12">
            my tech.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 transition-all shadow-sm">
                <div className="p-2 rounded-xl bg-white dark:bg-zinc-800 shadow-sm shrink-0">
                  {tech.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs md:text-sm font-bold truncate">
                    {tech.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500 truncate">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 py-8 px-6 text-center z-10">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Aarav Anand. Built with Next.js & Tailwind.
          </p>
        </footer>
      </div>
    </motion.div>
  )
}