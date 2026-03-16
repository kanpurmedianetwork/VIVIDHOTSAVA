"use client"
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#2b1055] to-[#1b083b]">
      
      {/* Background Pattern - subtle repeating shapes */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Large 26 watermark */}
      <div className="absolute top-1/4 -right-10 text-[#ffffff] opacity-5 text-[50vw] font-black font-sans pointer-events-none select-none leading-none z-0 tracking-tighter mix-blend-overlay">
        26
      </div>

      {/* Top Orange Clouds Overlay (Abstract shapes) */}
      <div className="absolute top-[-5%] left-0 right-0 h-[250px] z-10 overflow-hidden flex justify-center pointer-events-none opacity-80">
         <div className="absolute top-[-80px] left-[5%] w-[400px] h-[300px] bg-brand-orange-500 rounded-full blur-[90px]" />
         <div className="absolute top-[-100px] left-[40%] w-[500px] h-[400px] bg-brand-orange-400 rounded-full blur-[120px]" />
         <div className="absolute top-[-80px] right-[5%] w-[400px] h-[300px] bg-[#fb4d3d] rounded-full blur-[90px]" />
      </div>

      {/* Abstract performer shadow on the left */}
      <div className="absolute bottom-0 left-[5%] w-[40vw] h-[80%] bg-[url('https://images.unsplash.com/photo-1516280440502-6cddc48c96ae?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity z-0" style={{ maskImage: 'linear-gradient(to top, transparent, black 10%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to top, transparent, black 10%, black 80%, transparent)' }} />

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Top Badges (CSJMU & NAAC) */}
        <div className="flex items-center gap-6 mb-8 mt-12 md:mt-0">
           {/* Placeholder for CSJMU Logo */}
           <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-1 shadow-xl relative overflow-hidden">
             <div className="absolute inset-0 border-[3px] border-red-800 rounded-full m-1" />
             <span className="text-[10px] font-bold text-red-800 text-center uppercase leading-tight relative z-10">
                CSJMU
             </span>
           </div>
           {/* NAAC A++ Badge */}
           <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#ffd700] to-[#d4af37] border-2 border-[#b8860b] flex flex-col items-center justify-center p-1 shadow-[0_0_20px_rgba(255,215,0,0.6)] relative overflow-hidden">
             <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/30 rounded-t-full" />
             <span className="text-[9px] font-bold text-[#800000] uppercase leading-none tracking-wider mb-0.5 relative z-10">NAAC</span>
             <span className="text-xl font-black text-black leading-none drop-shadow-sm relative z-10">A++</span>
           </div>
        </div>

        {/* Vividhotsava Logo SVG */}
        <div className="relative w-[300px] sm:w-[500px] md:w-[750px] h-[150px] sm:h-[250px] md:h-[320px] mb-2 mt-4">
           {/* Intense glow behind logo */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/20 blur-[80px] rounded-full pointer-events-none" />
           <Image 
             src="/vividhotsava-logo.svg" 
             alt="Vividhotsava Logo" 
             fill 
             className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] relative z-10"
             priority
           />
        </div>

        {/* Yellow Youth Fest text (mimicking the brush font) */}
        <h2 className="text-4xl md:text-6xl font-black italic text-[#ffcc00] mb-8 drop-shadow-[0_5px_5px_rgba(0,0,0,0.9)] tracking-widest transform -rotate-3 uppercase">
          YOUTH FEST
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white font-medium tracking-wide drop-shadow-lg z-20">
          Celebrating Every Hue of Youth
        </p>

        {/* Explore Button */}
        <div className="mt-12 z-30">
          <Link 
            href="#events"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-orange-500 to-brand-gold-400 text-[#1b083b] font-black text-lg shadow-[0_0_30px_rgba(255,107,53,0.5)] hover:shadow-[0_0_40px_rgba(255,107,53,0.8)] hover:scale-110 transition-all duration-300"
          >
            Explore Events
          </Link>
        </div>
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-[30%] left-[20%] text-brand-gold-400 opacity-80 text-5xl animate-pulse pointer-events-none drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">✦</div>
      <div className="absolute top-[40%] right-[25%] text-brand-gold-400 opacity-90 text-3xl animate-pulse delay-300 pointer-events-none drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">✦</div>
      <div className="absolute bottom-[40%] left-[15%] text-brand-gold-400 opacity-80 text-6xl animate-pulse delay-700 pointer-events-none drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">✦</div>

      {/* Bottom Crowd Silhouette */}
      <div className="absolute bottom-[-5%] left-0 right-0 h-[150px] sm:h-[200px] md:h-[250px] w-full z-30 opacity-90 pointer-events-none mix-blend-screen">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full text-brand-orange-500 fill-current opacity-90 relative top-10">
            {/* Extremely jagged shapes to emulate cheering crowd */}
            <path d="M0,100 L0,70 Q5,40 10,75 T20,60 T30,85 T40,40 T50,80 T60,55 T70,80 T80,35 T90,70 T100,50 L100,100 Z" fill="url(#crowdGrad)" transform="scale(10, 1)"/>
            <defs>
              <linearGradient id="crowdGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#ff007f', stopOpacity:1}} />
                <stop offset="30%" style={{stopColor:'#ff8c5a', stopOpacity:1}} />
                <stop offset="70%" style={{stopColor:'#9d4edd', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#ff6b35', stopOpacity:1}} />
              </linearGradient>
            </defs>
         </svg>
      </div>

    </section>
  );
}
