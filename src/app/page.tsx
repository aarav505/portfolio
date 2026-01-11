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
  // Frameworks & Libraries
  { name: "Next.js", icon: <Globe size={20} />, category: "Framework" },
  { name: "React", icon: <Code2 size={20} />, category: "Library" },

  // Languages
  { name: "JavaScript", icon: <FileCode size={20} />, category: "Language" },
  { name: "Python", icon: <Terminal size={20} />, category: "Language" },
  { name: "HTML", icon: <Code2 size={20} />, category: "Language" },
  { name: "CSS", icon: <Wind size={20} />, category: "Language" },

  // Styling
  { name: "Tailwind CSS", icon: <Wind size={20} />, category: "Styling" },

  // Backend & APIs
  { name: "Flask", icon: <Cpu size={20} />, category: "Backend" },
  { name: "Node.js", icon: <Cpu size={20} />, category: "Backend" },
  { name: "Express.js", icon: <Cpu size={20} />, category: "Backend" },

  // Databases & BaaS
  { name: "PostgreSQL", icon: <Database size={20} />, category: "Database" },
  { name: "Firebase", icon: <Database size={20} />, category: "BaaS" },
];


const projects = [
  {
  title: "DSFL",
  description: "Doon School Fantasy League is a fantasy game similar to Dream11 and Fantasy Premier League but for school interhouse competitions. Students can create their own fantasy team, picking top players from different houses. At the end of each day, users' team are credited with points based on their performance in the matches played. The site served around 520+ users which consisted of students and teachers.",
  images: ["/dsfl/1.png", "/dsfl/2.png","/dsfl/3.jpg","/dsfl/4.png"], // Replace with your screenshots
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
    // Now an array of images for the gallery
    images: [
      "/rupee/1.png", 
      "/rupee/2.png", 
      "/rupee/3.png",
      "/rupee/4.png"
    ],
    tags: ["NextJS", "Web3Forms"],
    links: [
      { label: "Website", href: "https://www.rupeeready.in", icon: "website" },
      { label: "Source", href: "https://github.com/aarav505/rupee_ready_vl", icon: "source" },

    ],
  },

  {
    title: "MedLink",
    description: "Built in 2 days, a working hackathon prototype built for individuals, pharmacists, and medical professionals to manage surplus medicines. The platform allows users to list excess medicines or purchase them at discounted prices. The project won 2nd place at the BSAI Opportunity Summit 2025 Hackathon Challenge.",
    // Now an array of images for the gallery
    images: [
      "/med/1.png", 
      "/med/2.png", 
      "/med/3.png",
      "/med/4.png"
    ],
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
    links: [

      { label: "Source", href: "https://github.com/aarav505/MedLink", icon: "source" },

    ],
    
  },

  {
    title: "Grandslam Portal",
    description: "Serves as the official portal for the Grandslam, a school media power house which covers everything sports. The portal serves multiple purposes which include player rankings in individual sports, published articles and inter-house statistical insights. The portal has been used actively with over 700 unique users during major sporting events.",
    // Now an array of images for the gallery
    images: [
      "/portal/1.png", 
      "/portal/2.png", 
    ],
    tags: ["NextJS", "TailwindCSS"],
    links: [
      { label: "Website", href: "https://grandslam-portal.vercel.app/", icon: "website" },
      { label: "Source", href: "https://github.com/aarav505/grandslam_portal", icon: "source" },

    ],
  },

  {
    title: "DS90 Founders App",
    description: "Significantly contributed to the development of the DS90 Founders mobile web application, built to manage visitor logistics during The Doon School’s 90th Founders Day celebrations. I primarily worked on the food scheduling and ordering system, which enabled advance ordering and reduced on-ground queues across 30+ food stalls. The platform also provided campus landmark information and automated event reminders, and successfully served 650+ users during the event.",
    // Now an array of images for the gallery
    images: [
      "/chand/1.png", 
      "/chand/2.png", 
      "/chand/3.png",
      "/chand/4.png",
      "/chand/5.png",
      "/chand/6.png"
    ],
    tags: ["NextJS", "TailwindCSS", "Firebase"],
    links: [
      { label: "Website", href: "https://chandbagh.doonschool.com", icon: "website" },
      { label: "Source", href: "https://github.com/fitbyshubham/chandbagh-90", icon: "source" },
      
    ],
  },
  // ... other projects
];


export default function Home() {
  // State for the copy email button
  const [copied, setCopied] = useState(false);
  const email = "aarav.85.2027@doonschool.com"; // <--- CHANGE THIS TO YOUR ACTUAL EMAIL

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
            <button onClick={() => window.location.href = "#projects"} className="px-6 py-2.5 bg-zinc-900 dark:bg-white dark:text-black text-white rounded-xl font-medium hover:opacity-90 transition shadow-lg flex items-center gap-2 group">
              View Projects
              </button>

            {/* Social Icons Group */}
            <div className="flex items-center gap-2">
              
              {/* GitHub */}
              <a 
                href="https://github.com/aarav505" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all hover:scale-110"
                title="GitHub"
              >
                <Github size={20} className="text-zinc-600 dark:text-zinc-400" />
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/aarav-anand-210593370/" 
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
      <section id="projects" className=" px-6 md:px-auto max-w-7xl mx-50 z-10 relative">
        <h2 className="text-2xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-12">
          my projects.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>


      <section id="skills" className="py-20 md:px-auto max-w-7xl mx-50 z-10 relative">
      {/* Matches the "my projects." heading style */}
      <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-12">
        my tech.
      </h2>

      {/* Grid of simplistic cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
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