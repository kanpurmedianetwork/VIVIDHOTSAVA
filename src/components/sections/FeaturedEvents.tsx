"use client"
import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const events = [
  { id: 1, title: 'Beat & Mudra', category: 'Group Dance', tag: 'Cultural', color: 'bg-tech-magenta', text: 'text-tech-magenta', border: 'border-tech-magenta', shadow: 'shadow-[0_0_15px_rgba(255,0,85,0.4)]' },
  { id: 2, title: 'Sur Sangam', category: 'Classical Singing', tag: 'Music', color: 'bg-tech-cyan', text: 'text-tech-cyan', border: 'border-tech-cyan', shadow: 'shadow-[0_0_15px_rgba(0,240,255,0.4)]' },
  { id: 3, title: 'Swar Lahari', category: 'Solo Singing', tag: 'Music', color: 'bg-tech-lime', text: 'text-tech-lime', border: 'border-tech-lime', shadow: 'shadow-[0_0_15px_rgba(57,255,20,0.4)]' },
  { id: 4, title: 'Sound Clash', category: 'Band Competition', tag: 'Music', color: 'bg-tech-cyan', text: 'text-tech-cyan', border: 'border-tech-cyan', shadow: 'shadow-[0_0_15px_rgba(0,240,255,0.4)]' },
  { id: 5, title: 'Sustainable Stride', category: 'Eco Fashion Walk', tag: 'Fashion', color: 'bg-tech-magenta', text: 'text-tech-magenta', border: 'border-tech-magenta', shadow: 'shadow-[0_0_15px_rgba(255,0,85,0.4)]' },
  { id: 6, title: 'Riwaayat Royale', category: 'Duo Walk', tag: 'Fashion', color: 'bg-tech-magenta', text: 'text-tech-magenta', border: 'border-tech-magenta', shadow: 'shadow-[0_0_15px_rgba(255,0,85,0.4)]' },
  { id: 7, title: 'Traditional Yoga', category: 'Classical Asanas', tag: 'Yoga', color: 'bg-tech-lime', text: 'text-tech-lime', border: 'border-tech-lime', shadow: 'shadow-[0_0_15px_rgba(57,255,20,0.4)]' },
  { id: 8, title: 'Rhythmic Yoga', category: 'Musical Asanas', tag: 'Yoga', color: 'bg-tech-cyan', text: 'text-tech-cyan', border: 'border-tech-cyan', shadow: 'shadow-[0_0_15px_rgba(0,240,255,0.4)]' },
  { id: 9, title: 'Pratidhvani', category: 'Mahabharata Monologue', tag: 'Literary', color: 'bg-tech-magenta', text: 'text-tech-magenta', border: 'border-tech-magenta', shadow: 'shadow-[0_0_15px_rgba(255,0,85,0.4)]' },
  { id: 10, title: 'Karwaan', category: 'Poetry Slam', tag: 'Literary', color: 'bg-tech-cyan', text: 'text-tech-cyan', border: 'border-tech-cyan', shadow: 'shadow-[0_0_15px_rgba(0,240,255,0.4)]' },
  { id: 11, title: 'Madmix Market', category: 'Startup Challenge', tag: 'Business', color: 'bg-tech-lime', text: 'text-tech-lime', border: 'border-tech-lime', shadow: 'shadow-[0_0_15px_rgba(57,255,20,0.4)]' },
  { id: 12, title: 'Biz Quiz', category: 'Business IQ', tag: 'Business', color: 'bg-tech-cyan', text: 'text-tech-cyan', border: 'border-tech-cyan', shadow: 'shadow-[0_0_15px_rgba(0,240,255,0.4)]' },
  { id: 13, title: 'Robo Exhibition', category: 'Robotics Showcase', tag: 'Technology', color: 'bg-tech-cyan', text: 'text-tech-cyan', border: 'border-tech-cyan', shadow: 'shadow-[0_0_15px_rgba(0,240,255,0.4)]' },
  { id: 14, title: 'AlgoWars', category: 'Competitive Coding', tag: 'Technology', color: 'bg-tech-magenta', text: 'text-tech-magenta', border: 'border-tech-magenta', shadow: 'shadow-[0_0_15px_rgba(255,0,85,0.4)]' },
  { id: 15, title: 'Swimming Race', category: 'Timed Swimming', tag: 'Sports', color: 'bg-tech-cyan', text: 'text-tech-cyan', border: 'border-tech-cyan', shadow: 'shadow-[0_0_15px_rgba(0,240,255,0.4)]' },
  { id: 16, title: 'Relay Race', category: 'Team Baton Race', tag: 'Sports', color: 'bg-tech-lime', text: 'text-tech-lime', border: 'border-tech-lime', shadow: 'shadow-[0_0_15px_rgba(57,255,20,0.4)]' },
  { id: 17, title: 'Spray Paint Art', category: 'Graffiti & Canvas', tag: 'Arts', color: 'bg-tech-magenta', text: 'text-tech-magenta', border: 'border-tech-magenta', shadow: 'shadow-[0_0_15px_rgba(255,0,85,0.4)]' },
  { id: 18, title: 'T-Shirt Painting', category: 'Themed Apparel Art', tag: 'Arts', color: 'bg-tech-cyan', text: 'text-tech-cyan', border: 'border-tech-cyan', shadow: 'shadow-[0_0_15px_rgba(0,240,255,0.4)]' },
];

function TiltCard({ event }: { event: typeof events[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[340px] w-full rounded-sm cursor-pointer group"
    >
      {/* Background Panel (Pitch Black) */}
      <div className={`absolute inset-0 bg-[#0a0a0c] border border-tech-border group-hover:${event.border} group-hover:${event.shadow} transition-all duration-300 overflow-hidden rounded-sm [transform-style:preserve-3d]`}>
         
         {/* Decorative grid pattern inside card */}
         <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
         
         {/* Tech-accent box representing system processes */}
         <div className={`absolute -right-10 -bottom-10 w-32 h-32 ${event.color} opacity-10 group-hover:opacity-20 blur-2xl transition-all duration-500`} />
         
         <div className="relative h-full p-8 flex flex-col justify-between" style={{ transform: "translateZ(40px)" }}>
            
            <div className="flex justify-between items-start">
               <span className={`px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-[#020202] ${event.color}`}>
                 [{event.tag}]
               </span>
               <div className={`flex items-center justify-center pointer-events-none transition-colors ${event.text} group-hover:drop-shadow-[0_0_8px_currentColor] opacity-50 group-hover:opacity-100`}>
                 <ArrowUpRight size={20} />
               </div>
            </div>

            <div>
               <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-2 border-l-2 border-tech-border pl-2 group-hover:border-current group-hover:text-gray-300 transition-colors">
                 {event.category}
               </p>
               <h3 className="text-2xl font-space font-bold text-white uppercase tracking-wide group-hover:glitch-text transition-all">
                 {event.title}
               </h3>
            </div>

         </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedEvents() {
  return (
    <section id="events" className="relative py-32 w-full bg-[#020202] border-t border-tech-border overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-tech-border pb-8">
          <div>
             <h2 className="text-sm font-mono tracking-[0.2em] text-tech-cyan uppercase mb-4 animate-pulse">
               &gt; HIGHLIGHT_REEL
             </h2>
             <h3 className="text-4xl md:text-5xl font-space font-bold text-white uppercase tracking-tight">
               Featured <span className="text-tech-cyan glitch-text">Events</span>
             </h3>
          </div>
          <p className="text-gray-400 font-mono text-sm max-w-md">
             // Explore the pinnacle of youth talent entering the primary stage matrix.
          </p>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
          {events.map((event) => (
            <TiltCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-20 text-center">
           <button className="px-8 py-3 bg-transparent border border-tech-cyan text-tech-cyan font-mono uppercase tracking-widest hover:bg-tech-cyan hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300 group">
              View_All_Events
              <ArrowUpRight className="inline-block ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
           </button>
        </div>

      </div>
    </section>
  );
}
