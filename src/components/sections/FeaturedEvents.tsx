"use client"
import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const events = [
  { id: 1, title: 'Beat & Mudra', category: 'Group Dance', tag: 'Cultural', color: 'bg-pink-500' },
  { id: 2, title: 'Sur Sangam', category: 'Classical Singing', tag: 'Music', color: 'bg-brand-orange-500' },
  { id: 3, title: 'Swar Lahari', category: 'Solo Singing', tag: 'Music', color: 'bg-brand-gold-400' },
  { id: 4, title: 'Sound Clash', category: 'Band Competition', tag: 'Music', color: 'bg-brand-purple-600' },
  { id: 5, title: 'Sustainable Stride', category: 'Eco Fashion Walk', tag: 'Fashion', color: 'bg-emerald-500' },
  { id: 6, title: 'Riwaayat Royale', category: 'Duo Walk', tag: 'Fashion', color: 'bg-rose-500' },
  { id: 7, title: 'Traditional Yoga', category: 'Classical Asanas', tag: 'Yoga', color: 'bg-teal-500' },
  { id: 8, title: 'Rhythmic Yoga', category: 'Musical Asanas', tag: 'Yoga', color: 'bg-cyan-500' },
  { id: 9, title: 'Pratidhvani', category: 'Mahabharata Monologue', tag: 'Literary', color: 'bg-indigo-500' },
  { id: 10, title: 'Karwaan', category: 'Poetry Slam', tag: 'Literary', color: 'bg-violet-500' },
  { id: 11, title: 'Madmix Market', category: 'Startup Challenge', tag: 'Business', color: 'bg-amber-500' },
  { id: 12, title: 'Biz Quiz', category: 'Business IQ', tag: 'Business', color: 'bg-yellow-500' },
  { id: 13, title: 'Robo Exhibition', category: 'Robotics Showcase', tag: 'Technology', color: 'bg-blue-500' },
  { id: 14, title: 'AlgoWars', category: 'Competitive Coding', tag: 'Technology', color: 'bg-sky-500' },
  { id: 15, title: 'Swimming Race', category: 'Timed Swimming', tag: 'Sports', color: 'bg-blue-400' },
  { id: 16, title: 'Relay Race', category: 'Team Baton Race', tag: 'Sports', color: 'bg-red-500' },
  { id: 17, title: 'Spray Paint Art', category: 'Graffiti & Canvas', tag: 'Arts', color: 'bg-fuchsia-500' },
  { id: 18, title: 'T-Shirt Painting', category: 'Themed Apparel Art', tag: 'Arts', color: 'bg-purple-500' },
];

function TiltCard({ event }: { event: typeof events[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Map mouse position to rotation (-15 to 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center [-0.5, 0.5]
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset to center on leave
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
      className="relative h-[380px] w-full rounded-2xl cursor-pointer group"
    >
      {/* Glow Effect behind the card */}
      <div className="absolute inset-0 bg-brand-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-z-[-20px]" />
      
      {/* Background Panel */}
      <div className="absolute inset-0 glass-panel border border-white/10 bg-brand-purple-800/80 overflow-hidden rounded-2xl shadow-glass [transform-style:preserve-3d]">
         
         {/* Decorative internal blob */}
         <div className={`absolute -top-10 -right-10 w-40 h-40 ${event.color} rounded-full blur-[60px] opacity-30 group-hover:opacity-60 transition-opacity duration-300`} />
         
         {/* Content container - translated forward for 3D depth */}
         <div className="relative h-full p-8 flex flex-col justify-between" style={{ transform: "translateZ(50px)" }}>
            
            <div className="flex justify-between items-start">
               <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full group-hover:border-brand-orange-500 transition-colors">
                 {event.tag}
               </span>
               <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange-500 group-hover:text-brand-purple-900 transition-colors pointer-events-none">
                 <ArrowUpRight size={20} className="text-white group-hover:text-brand-purple-900" />
               </div>
            </div>

            <div>
               <p className="text-brand-orange-400 font-medium mb-2 text-sm uppercase tracking-widest">{event.category}</p>
               <h3 className="text-3xl font-space font-bold text-white group-hover:text-glow transition-all">{event.title}</h3>
            </div>

         </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedEvents() {
  return (
    <section id="events" className="relative py-32 w-full bg-brand-purple-900 border-t border-white/5 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-orange-500/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
             <h2 className="text-sm font-bold tracking-[0.2em] text-brand-orange-500 uppercase mb-4">
               The Highlights
             </h2>
             <h3 className="text-4xl md:text-5xl font-space font-bold text-white text-glow">
               Featured <span className="text-brand-orange-400">Events</span>
             </h3>
          </div>
          <p className="text-gray-400 max-w-md font-light">
             From exhilarating group dances to brain-teasing coding wars, explore the pinnacle of youth talent taking center stage.
          </p>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]">
          {events.map((event) => (
            <TiltCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-16 text-center">
           <button className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 border border-brand-orange-500/50 text-white font-bold transition-all duration-300 group">
              View All 50+ Events
              <ArrowUpRight className="inline-block ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
           </button>
        </div>

      </div>
    </section>
  );
}
