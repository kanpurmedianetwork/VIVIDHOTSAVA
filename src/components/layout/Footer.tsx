import { Instagram, Facebook, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#020202] pt-20 pb-10 overflow-hidden border-t border-tech-border">
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-space text-white tracking-widest uppercase">
              VIVIDHOTSAVA <span className="text-tech-cyan glitch-text">_</span> YOUTH FEST
            </h2>
            <p className="text-gray-400 font-mono text-sm leading-relaxed">
              &gt; &quot;Celebrating Every Hue of Youth&quot;
            </p>
            <p className="text-sm text-gray-500 font-mono">
              India&apos;s vibrant national youth festival bringing together culture, innovation, art, sports and creativity.
            </p>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <h3 className="text-base font-mono uppercase tracking-widest text-tech-cyan">Contact_Us</h3>
            <ul className="space-y-4 text-sm text-gray-400 font-mono">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-tech-cyan mt-1 flex-shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all" size={18} />
                <span>Chhatrapati Shahu Ji Maharaj University,<br />Kalyanpur, Kanpur, Uttar Pradesh 208024</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-tech-cyan flex-shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all" size={18} />
                <a href="mailto:contact@vividhotsava.in" className="hover:text-tech-cyan hover:underline transition-colors">contact@vividhotsava.in</a>
              </li>
            </ul>
          </div>

          {/* Socials Col */}
          <div className="space-y-6">
             <h3 className="text-base font-mono uppercase tracking-widest text-tech-cyan">Follow_The_Vibe</h3>
             <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-none bg-transparent flex items-center justify-center border border-tech-border text-gray-400 hover:bg-tech-cyan hover:text-[#020202] hover:border-tech-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-none bg-transparent flex items-center justify-center border border-tech-border text-gray-400 hover:bg-tech-cyan hover:text-[#020202] hover:border-tech-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-none bg-transparent flex items-center justify-center border border-tech-border text-gray-400 hover:bg-tech-cyan hover:text-[#020202] hover:border-tech-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300">
                  <Twitter size={20} />
                </a>
             </div>
          </div>
        </div>

        {/* Closing Line & Copyright */}
        <div className="pt-8 border-t border-tech-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 font-mono uppercase tracking-wider">
            © {new Date().getFullYear()} Vividhotsava, CSJMU Kanpur. All rights reserved.
          </p>
          <p className="font-mono text-sm tracking-widest text-tech-cyan glitch-text">
            SEE_YOU_AT_VIVIDHOTSAVA
          </p>
        </div>
      </div>
    </footer>
  );
}
