"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Sharp reveal animation for bento panels
      gsap.fromTo(".bento-item", 
        { y: 50, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          }
        }
      );
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative py-32 w-full bg-[#020202] border-t border-tech-border overflow-hidden">
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
            <h2 className="text-sm font-mono tracking-[0.2em] text-tech-cyan uppercase mb-4 animate-pulse">
               &gt; SYSTEM_INFO
            </h2>
            <h3 className="text-4xl md:text-5xl font-space font-bold text-white mb-6 uppercase tracking-tight">
               About <span className="text-tech-cyan">Vividhotsava</span>
            </h3>
            <div className="w-24 h-1 bg-tech-cyan" />
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Description Panel (Spans 2 columns) */}
          <div className="bento-item tech-panel tech-panel-hover p-8 md:p-12 md:col-span-2 relative overflow-hidden group">
            {/* Decorative circuit line */}
            <div className="absolute top-0 right-0 w-32 h-[1px] bg-tech-cyan transform origin-right group-hover:scale-x-150 transition-transform duration-500" />
            <div className="absolute top-0 right-0 w-[1px] h-32 bg-tech-cyan transform origin-top group-hover:scale-y-150 transition-transform duration-500" />

            <h4 className="text-2xl md:text-4xl font-space font-bold mb-6 text-white uppercase">
               Where Creativity <br className="hidden md:block" />
               <span className="text-gray-500">Meets Technology</span>
            </h4>
            
            <div className="space-y-6 text-gray-400 font-mono text-sm md:text-base leading-relaxed">
              <p>
                <strong className="text-tech-cyan font-bold">VIVIDHOTSAVA</strong> is the flagship national youth festival organized by Chhatrapati Shahu Ji Maharaj University, Kanpur, a premier landmark of higher education in Uttar Pradesh named after the great social reformer Chhatrapati Shahu Ji Maharaj.
              </p>
              <p>
                The festival promotes collaboration, artistic expression, and intellectual engagement across multiple domains. It serves as a dynamic platform where the energy of youth coalesces into a spectacular display of cultural diversity and technical prowess.
              </p>
            </div>
          </div>

          {/* Stats Panel (1 column) */}
          <div className="bento-item tech-panel tech-panel-hover p-8 flex flex-col justify-center relative overflow-hidden">
             
             {/* Background glow burst on hover */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-tech-cyan/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

             <h4 className="font-mono text-sm text-gray-500 border-b border-tech-border pb-4 mb-6 uppercase tracking-widest">
               {`// Metrics`}
             </h4>

             <div className="grid grid-cols-2 gap-y-8 gap-x-4">
               <div>
                  <span className="block text-4xl font-space font-bold text-white mb-1">8<span className="text-tech-cyan">+</span></span>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Domains</span>
               </div>
               <div>
                  <span className="block text-4xl font-space font-bold text-white mb-1">50<span className="text-tech-cyan">+</span></span>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Events</span>
               </div>
               <div>
                  <span className="block text-4xl font-space font-bold text-white mb-1">3</span>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Days</span>
               </div>
               <div>
                  <span className="block text-4xl font-space font-bold text-white mb-1">10<span className="text-tech-cyan">k+</span></span>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Youths</span>
               </div>
             </div>
          </div>

          {/* University Accolades (Spans 3 columns) */}
          <div className="bento-item tech-panel tech-panel-hover p-8 md:col-span-3">
             <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                
                <div className="md:w-1/3">
                   <h4 className="text-xl font-mono text-white uppercase tracking-widest mb-2 flex items-center gap-3">
                     <span className="w-2 h-2 bg-tech-magenta animate-pulse" />
                     CSJM University
                   </h4>
                   <p className="text-gray-500 font-mono text-sm">Academic Excellence & Infrastructure Data</p>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <ul className="space-y-3 font-mono text-sm text-gray-400">
                     <li className="flex items-center gap-3"><span className="text-tech-cyan">&gt;</span> NAAC A++ Accreditation (2023)</li>
                     <li className="flex items-center gap-3"><span className="text-tech-cyan">&gt;</span> UGC Category-I status</li>
                     <li className="flex items-center gap-3"><span className="text-tech-cyan">&gt;</span> Technology-driven ICT campus</li>
                   </ul>
                   <ul className="space-y-3 font-mono text-sm text-gray-400">
                     <li className="flex items-center gap-3"><span className="text-tech-magenta">&gt;</span> QS Asia Ranking 2026: 901-950</li>
                     <li className="flex items-center gap-3"><span className="text-tech-magenta">&gt;</span> QS World Sustainability: 1251-1300</li>
                     <li className="flex items-center gap-3"><span className="text-tech-magenta">&gt;</span> THE Science Rankings: Global 501-600</li>
                   </ul>
                </div>

             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
