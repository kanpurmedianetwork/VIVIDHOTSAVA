"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Code, Palette, Trophy, Mic2, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const floatingItems = [
  { icon: Rocket, size: 60, top: '10%', left: '15%', delay: '0s', color: 'text-brand-orange-500', bg: 'bg-brand-orange-500/20', speed: 2 },
  { icon: Palette, size: 40, top: '60%', left: '10%', delay: '1s', color: 'text-brand-gold-400', bg: 'bg-brand-gold-400/20', speed: 3 },
  { icon: Mic2, size: 50, top: '20%', left: '75%', delay: '2s', color: 'text-pink-500', bg: 'bg-pink-500/20', speed: 1.5 },
  { icon: Trophy, size: 70, top: '70%', left: '80%', delay: '1.5s', color: 'text-cyan-400', bg: 'bg-cyan-400/20', speed: 2.5 },
  { icon: Code, size: 45, top: '40%', left: '45%', delay: '0.5s', color: 'text-emerald-400', bg: 'bg-emerald-400/20', speed: 1 },
  { icon: Lightbulb, size: 55, top: '80%', left: '40%', delay: '2.5s', color: 'text-brand-orange-400', bg: 'bg-brand-orange-400/20', speed: 3.5 },
];

export default function YouthEnergy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Parallax scrolling for the floating items
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.parallax-item');
      
      items.forEach((item, i) => {
        const speed = floatingItems[i].speed;
        
        gsap.to(item, {
          y: () => -50 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-48 w-full bg-brand-purple-900 overflow-hidden border-t border-white/5">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-brand-orange-500/10 via-brand-purple-600/10 to-brand-gold-400/10 blur-[100px] transform -skew-y-6 pointer-events-none" />

      {/* Scattered Floating Elements */}
      {floatingItems.map((item, i) => {
        const Icon = item.icon;
        return (
          <div 
            key={i}
            className={`parallax-item absolute hidden md:flex items-center justify-center rounded-2xl p-4 glass-panel border border-white/10 shadow-glass animate-float-slow z-0`}
            style={{ 
              top: item.top, 
              left: item.left,
              animationDelay: item.delay,
            }}
          >
            <div className={`absolute inset-0 ${item.bg} blur-xl rounded-2xl group-hover:scale-150 transition-transform duration-500`} />
            <Icon size={item.size} className={`${item.color} drop-shadow-neon relative z-10`} />
          </div>
        );
      })}

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-space font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-500 to-brand-gold-400 mb-8 animate-pulse text-glow">
          Infinite Energy.<br />Zero Gravity.
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12">
          Experience a universe where ideas collide, creativity transcends boundaries, and the spirit of youth defies gravity.
        </p>

        {/* Decorative central orb */}
        <div className="mx-auto w-32 h-32 rounded-full glass-panel border border-white/20 flex items-center justify-center animate-spin [animation-duration:10s]">
           <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-brand-orange-500 to-brand-purple-600 blur-sm opacity-50" />
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWdvbiBwb2ludHM9IjEyIDIgMTUuMDkgOC4yNiAyMiA5LjI3IDE3IDE0LjE0IDE4LjE4IDIxIDEyIDE3Ljc3IDUuODIgMjEgNyAxNC4xNCAyIDkuMjcgOC45MSA4LjI2IDEyIDIiLz48L3N2Zz4=')] bg-center bg-no-repeat bg-[length:40px_40px] opacity-70" />
        </div>
      </div>
      
    </section>
  );
}
