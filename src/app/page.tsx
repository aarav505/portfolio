import { GridPattern } from "../components/grid-pattern"
import { cn } from "@/lib/utils"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    // Change flex items-center to flex-col
    <div className="bg-background min-h-screen relative flex flex-col items-center overflow-hidden">
      
      {/* 1. Background Layer */}
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white_0%,white_40%,transparent_100%)]",
          "fixed inset-0 z-0" // Ensures it stays behind everything
        )}
      />

      {/* 2. Navbar - Ensure it has a higher z-index */}
      <div className="w-full z-10">
        <Navbar />
      </div>

      {/* 3. Main Content - Centered in the remaining space */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 z-10 w-full max-w-7xl mx-auto">
  
  {/* Profile Image with subtle glow */}
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
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

    {/* Action Button (Optional) */}
    <div className="flex gap-4">
      <button className="px-6 py-2 bg-zinc-900 dark:bg-white dark:text-black text-white rounded-lg font-medium hover:opacity-90 transition">
        View Projects
      </button>
      <button className="px-6 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">
        Contact Me
      </button>
    </div>

  </div>
</main>


      
    </div>
  )
}
