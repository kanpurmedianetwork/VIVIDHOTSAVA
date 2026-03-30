"use client"
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#000000]">
      
      {/* 3D Perspective Grid Background */}
      <div className="absolute inset-0 perspective-[1000px] pointer-events-none z-0 overflow-hidden flex items-end justify-center">
         <div className="absolute w-[200vw] h-[100vh] bottom-[-20vh] rotate-x-[75deg] transform-origin-bottom">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,240,255,0.1)_2px,transparent_2px)] bg-[size:50px_50px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_80%)] animate-[grid-move_20s_linear_infinite]" />
         </div>
      </div>

      {/* Cyberpunk Scanning Line */}
      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-tech-cyan/20 to-transparent opacity-50 blur-sm animate-[scanline_8s_linear_infinite] pointer-events-none z-10" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-tech-cyan/5 blur-[100px] rounded-[100%] pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center mt-32 md:mt-24">
        
        {/* Top Badges (CSJMU & NAAC) - Sleek Outline Style */}
        <div className="flex items-center gap-6 mb-10">
           <div className="px-5 py-2 border border-tech-border flex items-center gap-3 bg-black/50 backdrop-blur-md rounded-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-tech-magenta animate-pulse shadow-[0_0_8px_rgba(255,0,85,1)]" />
             <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">CSJMU</span>
           </div>
           
           <div className="px-5 py-2 border border-tech-border flex items-center gap-3 bg-black/50 backdrop-blur-md rounded-sm">
             <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan animate-pulse shadow-[0_0_8px_rgba(0,240,255,1)]" />
             <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">NAAC A++</span>
           </div>
        </div>

        {/* Vividhotsava Logo SVG */}
        <div className="relative w-[280px] sm:w-[450px] md:w-[650px] h-[140px] sm:h-[220px] md:h-[280px] mb-8">
           {/* Sharp backlight behind logo */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[40%] bg-tech-cyan/10 blur-[40px] rounded-full pointer-events-none" />
           
           <Image 
             src="/vividhotsava-logo.svg" 
             alt="Vividhotsava Logo" 
             fill 
             className="object-contain drop-shadow-[0_0_20px_rgba(0,240,255,0.4)] relative z-10 transition-transform duration-700 hover:scale-105"
             priority
           />
        </div>

        {/* Minimalist Tagline */}
        <div className="flex items-center gap-4 mb-16">
           <div className="h-[1px] w-12 bg-tech-border" />
           <p className="text-sm md:text-md text-gray-300 font-mono tracking-[0.4em] uppercase drop-shadow-lg text-center">
             Celebrating Every Hue of Youth
           </p>
           <div className="h-[1px] w-12 bg-tech-border" />
        </div>

        {/* Explore Button */}
        <div className="z-30">
          <Link 
            href="#events"
            className="px-8 py-4 bg-tech-cyan/10 border border-tech-cyan text-tech-cyan font-mono uppercase tracking-[0.2em] hover:bg-tech-cyan hover:text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 relative group overflow-hidden block backdrop-blur-sm"
          >
            <span className="relative z-10 flex items-center gap-3">
              INITIALIZE_SYSTEM 
              <span className="text-[10px] group-hover:animate-ping">▶</span>
            </span>
            <div className="absolute inset-0 bg-tech-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0 ease-out" />
          </Link>
        </div>
      </div>

      {/* Subtle Data Particles / Plus Signs */}
      <div className="absolute top-[20%] left-[10%] text-tech-cyan opacity-30 font-mono text-[10px] pointer-events-none">01001011</div>
      <div className="absolute top-[60%] right-[10%] text-tech-magenta opacity-30 font-mono text-[10px] pointer-events-none">SYS.ACTV</div>
      <div className="absolute bottom-[20%] left-[20%] text-tech-lime opacity-30 font-mono text-[10px] pointer-events-none">NODE_26</div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes scanline {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}} />

    </section>
  );
}
