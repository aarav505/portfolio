'use client'

import React, { useState } from "react";
import { Github, Globe } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ProjectProps {
  title: string;
  description: string;
  images: string[]; // Changed from 'image' to an array 'images'
  tags: string[];
  links: { label: string; href: string; icon?: string }[];
}

const ProjectCard = ({ title, description, images, tags, links }: ProjectProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="group bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm flex flex-col h-full">
        
        {/* Clickable Image Container */}
        <div 
          onClick={() => setOpen(true)}
          className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-zinc-200 dark:border-zinc-800 cursor-zoom-in group/img"
        >
          <img 
            src={images[0]} 
            alt={title} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
          />
          {/* Overlay hint */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium">
            Click to expand
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">{title}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed text-sm">{description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-zinc-200/50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {links.map((link, idx) => (
            <a key={idx} href={link.href} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-100 text-black rounded-lg text-sm font-bold shadow-sm hover:opacity-80 transition">
              {link.icon === "website" ? <Globe size={16} /> : <Github size={16} />}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Lightbox Gallery */}
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