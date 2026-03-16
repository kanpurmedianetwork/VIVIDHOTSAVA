"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Floating content card animation on scroll
      gsap.fromTo(cardRef.current, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1, // Smooth scrub effect
          }
        }
      );

      // Parallax background elements
      gsap.to(bgRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative py-32 w-full overflow-hidden bg-brand-purple-900 border-t border-white/5">
      
      {/* Decorative Background Elements */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-brand-orange-500/20 opacity-50 max-md:hidden" />
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full border border-brand-purple-600/30 opacity-50 max-md:hidden" />
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-sm font-bold tracking-[0.2em] text-brand-orange-500 uppercase mb-4 animate-pulse">
               About The Festival
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-orange-500 to-transparent rounded-full mb-8" />
        </div>

        <div className="flex justify-center">
          <div 
            ref={cardRef}
            className="w-full max-w-4xl p-8 md:p-12 glass-panel hover:bg-white-[0.03] transition-colors duration-500 border border-white/10 shadow-[0_0_40px_rgba(74,43,142,0.4)] relative group overflow-hidden"
          >
            {/* Glowing orb behind content on hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange-500/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-space font-bold mb-6 text-white text-glow">
                 Where Creativity <br className="hidden md:block" />
                 <span className="text-brand-orange-400">Floats Freely</span>
              </h3>
              
              <div className="space-y-6 text-gray-300 font-light text-lg md:text-xl leading-relaxed">
                <p>
                  <strong className="text-white font-medium">Vividhotsava</strong> is a national youth festival organized by Chhatrapati Shahu Ji Maharaj University, Kanpur, a premier landmark of higher education in Uttar Pradesh named after the great social reformer Chhatrapati Shahu Ji Maharaj.
                </p>
                <p>
                  The festival promotes collaboration, artistic expression, and intellectual engagement across multiple domains. It serves as a dynamic platform where the energy of youth coalesces into a spectacular display of cultural diversity and technical prowess, all set within an immersive, futuristic space.
                </p>

                {/* University Accolades */}
                <div className="bg-brand-purple-900/50 rounded-xl p-6 border border-brand-orange-500/20 mt-8 space-y-4 shadow-glass">
                   <h4 className="text-xl font-space text-brand-orange-400 font-bold mb-4 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-brand-orange-500 animate-pulse" />
                     About CSJM University
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                     <ul className="space-y-2">
                       <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold-400 mt-2" /> <strong>NAAC A++ Accreditation</strong> (2023)</li>
                       <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold-400 mt-2" /> <strong>UGC Category-I</strong> status</li>
                       <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold-400 mt-2" /> Technology-driven, ICT-enabled campus</li>
                     </ul>
                     <ul className="space-y-2">
                       <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold-400 mt-2" /> <strong>QS Asia Ranking 2026:</strong> 901-950</li>
                       <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold-400 mt-2" /> <strong>QS World Sustainability:</strong> 1251-1300</li>
                       <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold-400 mt-2" /> <strong>THE Science Rankings:</strong> Global 501-600</li>
                     </ul>
                   </div>
                </div>
              </div>

              {/* Stats showcase */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                 <div className="text-center">
                    <span className="block text-3xl font-space font-bold text-brand-gold-400">8+</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider">Domains</span>
                 </div>
                 <div className="text-center">
                    <span className="block text-3xl font-space font-bold text-brand-gold-400">50+</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider">Events</span>
                 </div>
                 <div className="text-center">
                    <span className="block text-3xl font-space font-bold text-brand-gold-400">3</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider">Days</span>
                 </div>
                 <div className="text-center">
                    <span className="block text-3xl font-space font-bold text-brand-gold-400">10k+</span>
                    <span className="text-sm text-gray-400 uppercase tracking-wider">Youths</span>
                 </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
