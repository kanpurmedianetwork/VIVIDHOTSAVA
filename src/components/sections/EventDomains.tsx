import { Music, Camera, Activity, BookOpen, Briefcase, Cpu, Trophy, Paintbrush } from 'lucide-react';

const domains = [
  { id: 'cultural', name: 'Cultural', icon: Music, desc: 'Dance, music, and dramatic performances', hoverClass: 'hover:border-tech-magenta hover:shadow-[0_0_15px_rgba(255,0,85,0.3)]', iconColor: 'text-tech-magenta' },
  { id: 'fashion', name: 'Fashion', icon: Camera, desc: 'Trendsetting styles and runway walks', hoverClass: 'hover:border-tech-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]', iconColor: 'text-tech-cyan' },
  { id: 'yoga', name: 'Yoga', icon: Activity, desc: 'Mindfulness and physical wellness', hoverClass: 'hover:border-tech-lime hover:shadow-[0_0_15px_rgba(57,255,20,0.3)]', iconColor: 'text-tech-lime' },
  { id: 'literary', name: 'Literary', icon: BookOpen, desc: 'Debates, poetry, and intellectual discourse', hoverClass: 'hover:border-tech-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]', iconColor: 'text-tech-cyan' },
  { id: 'business', name: 'Business', icon: Briefcase, desc: 'Entrepreneurship and corporate strategy', hoverClass: 'hover:border-tech-magenta hover:shadow-[0_0_15px_rgba(255,0,85,0.3)]', iconColor: 'text-tech-magenta' },
  { id: 'technology', name: 'Technology', icon: Cpu, desc: 'Coding, robotics, and innovation', hoverClass: 'hover:border-tech-lime hover:shadow-[0_0_15px_rgba(57,255,20,0.3)]', iconColor: 'text-tech-lime' },
  { id: 'sports', name: 'Sports', icon: Trophy, desc: 'Athletics, competitive games and tournaments', hoverClass: 'hover:border-tech-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]', iconColor: 'text-tech-cyan' },
  { id: 'arts', name: 'Arts', icon: Paintbrush, desc: 'Fine arts, digital painting and sketching', hoverClass: 'hover:border-tech-magenta hover:shadow-[0_0_15px_rgba(255,0,85,0.3)]', iconColor: 'text-tech-magenta' },
];

export default function EventDomains() {
  return (
    <section id="domains" className="relative py-24 w-full bg-[#020202] border-t border-tech-border">
      
      {/* Background glow lines */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] text-tech-cyan uppercase mb-4">
            &gt; DOMAINS_OF_COMPETITION
          </h2>
          <h3 className="text-4xl md:text-5xl font-space font-bold text-white mb-6 uppercase tracking-tight">
            Festival <span className="text-gray-600">Categories</span>
          </h3>
          <p className="text-gray-400 font-mono text-sm">
            {`// Access the eight distinct universes of creativity and talent at Vividhotsava.`}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon;

            return (
              <div 
                key={domain.id}
                className={`group relative h-48 bg-tech-panel border border-tech-border rounded-lg p-6 flex flex-col items-start justify-between cursor-pointer transition-all duration-300 ${domain.hoverClass}`}
              >
                {/* Top Section with Icon and Name */}
                <div className="w-full flex justify-between items-start">
                  <div className={`p-2 rounded bg-[#050505] border border-tech-border group-hover:border-current transition-colors duration-300 ${domain.iconColor}`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-mono text-tech-border group-hover:text-tech-cyan transition-colors">
                    [{domain.id.toUpperCase()}]
                  </span>
                </div>
                
                {/* Bottom Section */}
                <div>
                  <h3 className="text-xl font-bold font-space text-gray-200 group-hover:text-white mb-2 uppercase tracking-wide">
                    {domain.name}
                  </h3>
                  
                  <p className="text-xs font-mono text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    &gt; {domain.desc}
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
