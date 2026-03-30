"use client"
import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

const leadership = [
  { id: 1, role: 'Hon\'ble Chancellor & Governor, UP', name: 'Smt. Anandiben Patel', dept: 'Source of Inspiration', image: 'https://i.pravatar.cc/300?img=5' },
  { id: 2, role: 'Hon\'ble Vice Chancellor', name: 'Prof. Vinay Kumar Pathak', dept: 'Patron-in-Chief', image: 'https://i.pravatar.cc/300?img=11' },
  { id: 3, role: 'Pro Vice Chancellor', name: 'Prof. Sudhir Kumar Awasthi', dept: 'Patron', image: 'https://i.pravatar.cc/300?img=12' },
  { id: 4, role: 'Registrar', name: 'Dr. Rakesh Kumar Mishra', dept: 'Co-Patron', image: 'https://i.pravatar.cc/300?img=13' },
];

const coordinators = [
  { id: 5, role: 'Organising Secretary', name: 'Avni Yadav', dept: '+91 79851 24020', image: 'https://i.pravatar.cc/300?img=1' },
  { id: 6, role: 'Organising Secretary', name: 'Divyansh Mishra', dept: '+91 79833 90593', image: 'https://i.pravatar.cc/300?img=2' },
  { id: 7, role: 'Administrative Division', name: 'Prashant Tiwari', dept: '+91 83188 74954', image: 'https://i.pravatar.cc/300?img=3' },
  { id: 8, role: 'Head of Management', name: 'Samridhi Singh', dept: '+91 84680 26071', image: 'https://i.pravatar.cc/300?img=4' },
];

function TeamCard({ member, colorClass }: { member: typeof leadership[0], colorClass: string }) {
  return (
    <div className="group perspective-1000 h-[380px] w-full">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-sm">
        
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden rounded-sm overflow-hidden tech-panel border border-tech-border">
          <div className="relative h-2/3 w-full bg-[#050505]">
             {/* Monochrome tint on image */}
             <div className={`absolute inset-0 bg-blend-multiply opacity-80 mix-blend-color z-10 ${colorClass}`} />
             <Image 
               src={member.image} 
               alt={member.name}
               fill
               className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
             />
             {/* Tech scanline effect */}
             <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] z-20 pointer-events-none opacity-50" />
          </div>
          <div className="h-1/3 p-5 flex flex-col justify-center items-start text-left bg-tech-panel border-t border-tech-border">
             <h3 className="text-xl font-bold font-space text-gray-200 uppercase tracking-wide">{member.name}</h3>
             <p className="text-tech-cyan text-xs font-mono tracking-widest uppercase mt-2">&gt; {member.role}</p>
          </div>
        </div>

        {/* Back of Card */}
        <div className={`absolute inset-0 h-full w-full rounded-sm backface-hidden [transform:rotateY(180deg)] bg-[#0a0a0c] border border-tech-cyan flex flex-col items-center justify-center p-8 text-center shadow-[0_0_20px_rgba(0,240,255,0.1)]`}>
            
            <div className="w-20 h-20 rounded-none border border-tech-cyan mb-6 overflow-hidden relative p-1">
              <Image src={member.image} alt={member.name} fill className="object-cover grayscale" />
            </div>

            <h3 className="text-2xl font-bold font-space text-white mb-2 uppercase">{member.name}</h3>
            <p className="text-tech-cyan font-mono text-xs mb-4 uppercase tracking-widest">{member.role}</p>
            <p className="text-gray-400 font-mono text-xs mb-8">[{member.dept}]</p>

            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-sm bg-transparent flex items-center justify-center border border-tech-border text-gray-400 hover:bg-tech-cyan hover:text-black hover:border-tech-cyan transition-colors">
                 <Linkedin size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-sm bg-transparent flex items-center justify-center border border-tech-border text-gray-400 hover:bg-tech-cyan hover:text-black hover:border-tech-cyan transition-colors">
                 <Mail size={18} />
               </a>
            </div>

        </div>

      </div>
    </div>
  );
}

export default function OrganizingTeam() {
  return (
    <section id="team" className="relative py-32 w-full bg-[#020202] border-t border-tech-border">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Leadership Grid */}
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] text-tech-magenta uppercase mb-4 animate-pulse">
            &gt; SYSTEM_ADMINS
          </h2>
          <h3 className="text-4xl md:text-5xl font-space font-bold text-white mb-6 uppercase tracking-tight">
            Leadership <span className="text-tech-magenta glitch-text">Team</span>
          </h3>
          <div className="w-24 h-1 bg-tech-magenta" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {leadership.map((member) => (
            <TeamCard key={member.id} member={member} colorClass="bg-tech-magenta" />
          ))}
        </div>

        {/* Coordinators Grid */}
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-[0.2em] text-tech-cyan uppercase mb-4 animate-pulse">
            &gt; NETWORK_OPERATORS
          </h2>
          <h3 className="text-4xl md:text-5xl font-space font-bold text-white mb-6 uppercase tracking-tight">
            Festival <span className="text-tech-cyan glitch-text">Coordinators</span>
          </h3>
          <div className="w-24 h-1 bg-tech-cyan" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coordinators.map((member) => (
            <TeamCard key={member.id} member={member} colorClass="bg-tech-cyan" />
          ))}
        </div>

      </div>
    </section>
  );
}
