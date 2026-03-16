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

// Reusable Flip Card Component
function TeamCard({ member }: { member: typeof leadership[0] }) {
  return (
    <div className="group perspective-1000 h-[400px] w-full">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-glass rounded-2xl">
        
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden glass-panel border border-white/10">
          <div className="relative h-2/3 w-full bg-brand-purple-800">
             {/* Fallback image placeholder since we don't have real images yet */}
             <div className="absolute inset-0 bg-gradient-to-b from-brand-orange-500/20 to-brand-purple-900/80 mix-blend-overlay z-10" />
             <Image 
               src={member.image} 
               alt={member.name}
               fill
               className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
             />
          </div>
          <div className="h-1/3 p-6 flex flex-col justify-center items-center text-center bg-brand-purple-900/90">
             <h3 className="text-xl font-bold font-space text-white">{member.name}</h3>
             <p className="text-brand-orange-400 text-sm font-medium tracking-wide uppercase mt-1">{member.role}</p>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 h-full w-full rounded-2xl backface-hidden [transform:rotateY(180deg)] glass-panel border border-brand-orange-500/30 bg-brand-purple-800/90 flex flex-col items-center justify-center p-8 text-center">
            
            <div className="w-20 h-20 rounded-full border-2 border-brand-orange-500 mb-6 overflow-hidden relative">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>

            <h3 className="text-2xl font-bold font-space text-white mb-2">{member.name}</h3>
            <p className="text-brand-orange-400 font-medium mb-4">{member.role}</p>
            <p className="text-gray-300 text-sm mb-8 italic">{member.dept}</p>

            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange-500 hover:text-brand-purple-900 transition-colors">
                 <Linkedin size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange-500 hover:text-brand-purple-900 transition-colors">
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
    <section id="team" className="relative py-32 w-full bg-brand-purple-900 border-t border-white/5">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-brand-orange-500 uppercase mb-4">
            Source of Inspiration & Patrons
          </h2>
          <h3 className="text-4xl md:text-5xl font-space font-bold text-white mb-6">
            Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-500 to-brand-gold-400">Team</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-orange-500 to-brand-gold-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {leadership.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-brand-orange-500 uppercase mb-4">
            The Visionaries
          </h2>
          <h3 className="text-4xl md:text-5xl font-space font-bold text-white mb-6">
            Festival <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-500 to-brand-gold-400">Coordinators</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-orange-500 to-brand-gold-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coordinators.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}
