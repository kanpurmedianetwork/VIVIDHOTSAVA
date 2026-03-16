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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-purple-900/80 backdrop-blur-md shadow-glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
             <div className="relative w-12 h-12">
                <Image src="/vividhotsava logo.svg" alt="Vividhotsava Logo" fill className="object-contain drop-shadow-neon" />
             </div>
             <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-orange-500 to-brand-gold-400 tracking-wider">
               VIVIDHOTSAVA
             </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-300 hover:text-white hover:text-glow transition-all font-medium text-sm tracking-widest uppercase"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#register"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-orange-500 to-brand-gold-400 text-brand-purple-900 font-bold hover:shadow-neon hover:scale-105 transition-all duration-300"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-brand-purple-900/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#register"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center px-6 py-3 mt-4 rounded-xl bg-gradient-to-r from-brand-orange-500 to-brand-gold-400 text-brand-purple-900 font-bold"
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
