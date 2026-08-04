'use client';

import { motion } from "framer-motion";
import { ModeToggle } from "@/components/ModeToggle";

export function FloatingToggle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-10 right-10 z-50"
    >
      <div className="p-1 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-2xl hover:scale-110 transition-transform active:scale-95">
        <ModeToggle />
      </div>
    </motion.div>
  );
}