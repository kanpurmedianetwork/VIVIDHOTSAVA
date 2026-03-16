import { Music, Camera, Activity, BookOpen, Briefcase, Cpu, Trophy, Paintbrush } from 'lucide-react';

const domains = [
  { id: 'cultural', name: 'Cultural', icon: Music, desc: 'Dance, music, and dramatic performances', color: 'from-pink-500 to-rose-500' },
  { id: 'fashion', name: 'Fashion', icon: Camera, desc: 'Trendsetting styles and runway walks', color: 'from-fuchsia-500 to-purple-600' },
  { id: 'yoga', name: 'Yoga', icon: Activity, desc: 'Mindfulness and physical wellness', color: 'from-emerald-400 to-teal-500' },
  { id: 'literary', name: 'Literary', icon: BookOpen, desc: 'Debates, poetry, and intellectual discourse', color: 'from-blue-400 to-indigo-500' },
  { id: 'business', name: 'Business', icon: Briefcase, desc: 'Entrepreneurship and corporate strategy', color: 'from-amber-400 to-orange-500' },
  { id: 'technology', name: 'Technology', icon: Cpu, desc: 'Coding, robotics, and innovation', color: 'from-cyan-400 to-blue-500' },
  { id: 'sports', name: 'Sports', icon: Trophy, desc: 'Athletics, competitive games and tournaments', color: 'from-red-500 to-orange-600' },
  { id: 'arts', name: 'Arts', icon: Paintbrush, desc: 'Fine arts, digital painting and sketching', color: 'from-violet-500 to-purple-600' },
];

export default function EventDomains() {
  return (
    <section id="domains" className="relative py-24 w-full bg-brand-purple-900 border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4 text-white">
            Festival <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-500 to-brand-gold-400">Domains</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Dive into eight distinct universes of creativity and talent at Vividhotsava.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            // Calculate a slight delay for staggered floating animation
            const floatDelay = `${index * 0.2}s`;

            return (
              <div 
                key={domain.id}
                className="group relative h-64 rounded-2xl p-[1px] overflow-hidden cursor-pointer"
                style={{ animation: `levitate 4s ease-in-out infinite ${floatDelay}` }}
              >
                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Inner Card Content */}
                <div className="relative h-full w-full bg-brand-purple-800 rounded-[15px] p-6 flex flex-col items-center justify-center text-center transition-transform duration-500 z-10 group-hover:bg-brand-purple-900/90 group-hover:scale-[0.98]">
                  
                  {/* Glowing Icon Container */}
                  <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10 shadow-glass group-hover:bg-gradient-to-br ${domain.color} transition-all duration-500`}>
                    <Icon size={28} className="text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-space text-white mb-2 group-hover:text-glow transition-all duration-300">
                    {domain.name}
                  </h3>
                  
                  <p className="text-sm text-gray-400 font-light group-hover:text-gray-200 transition-colors duration-300">
                    {domain.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
