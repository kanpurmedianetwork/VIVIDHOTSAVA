"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Team', href: '#team' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-tech-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
             <div className="relative w-12 h-12">
                <Image src="/vividhotsava-logo.svg" alt="Vividhotsava Logo" fill className="object-contain group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all" />
             </div>
             <span className="text-2xl font-bold text-white tracking-widest font-space group-hover:text-tech-cyan transition-colors">
               VIVIDHOTSAVA
             </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-400 hover:text-tech-cyan hover:glitch-text transition-all font-mono text-sm tracking-widest uppercase relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-[-4px] after:left-0 after:bg-tech-cyan hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#register"
              className="px-6 py-2 bg-transparent border border-tech-cyan text-tech-cyan font-mono uppercase tracking-widest text-sm hover:bg-tech-cyan hover:text-black hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Register_Now</span>
              <div className="absolute inset-0 bg-tech-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-tech-cyan hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-[#050505]/95 backdrop-blur-xl border-b border-tech-border transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-mono uppercase tracking-widest text-gray-400 hover:text-tech-cyan hover:bg-white/5"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#register"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center px-6 py-3 mt-4 border border-tech-cyan text-tech-cyan font-mono uppercase tracking-widest bg-tech-cyan/10"
          >
            Register_Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
