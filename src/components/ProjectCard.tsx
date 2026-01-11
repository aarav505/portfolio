'use client'

import React, { useState } from "react";
import { Github, Globe } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ProjectProps {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  links: { label: string; href: string; icon?: string }[];
}

const ProjectCard = ({ title, description, images, tags, links }: ProjectProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="group bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-4 md:p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 flex flex-col h-full">
        
        {/* Clickable Image Container */}
        <div 
          onClick={() => setOpen(true)}
          className="relative aspect-video rounded-xl overflow-hidden mb-4 md:mb-6 border border-zinc-200 dark:border-zinc-800 cursor-zoom-in"
        >
          <img 
            src={images[0]} 
            alt={title} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs">
            View Gallery
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">{title}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed text-xs md:text-sm flex-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.map((tech) => (
              <span key={tech} className="px-2 py-0.5 bg-zinc-200/50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md text-[10px] md:text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <a key={idx} href={link.href} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-zinc-100 text-black rounded-lg text-xs font-bold shadow-sm hover:opacity-80 transition">
                {link.icon === "website" ? <Globe size={14} /> : <Github size={14} />}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img }))}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
      />
    </>
  );
};

export default ProjectCard;