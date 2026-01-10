import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  return (
    <nav className="relative w-full">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-4xl font-bold tracking-tighter dark:text-white">
            aarav anand
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/experience" 
            className="text-2xl font-light dark:text-white hover:opacity-70 transition-opacity"
          >
            experience
          </Link>
          <Link 
            href="/projects" 
            className="text-2xl font-light dark:text-white hover:opacity-70 transition-opacity"
          >
            projects
          </Link>
          <Link 
            href="/about" 
            className="text-2xl font-light dark:text-white hover:opacity-70 transition-opacity"
          >
            about
          </Link>
          <ModeToggle />
        </div>
        
      </div>
    </nav>
  );
}