import { Instagram, Facebook, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-brand-purple-900 pt-20 pb-10 overflow-hidden border-t border-white/10">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-brand-orange-500/10 blur-[100px] rounded-full point-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-500 to-brand-gold-400">
              VIVIDHOTSAVA &ndash; Youth Fest
            </h2>
            <p className="text-gray-400 italic font-light">
              &quot;Celebrating Every Hue of Youth&quot;
            </p>
            <p className="text-sm text-gray-500">
              India&apos;s vibrant national youth festival bringing together culture, innovation, art, sports and creativity.
            </p>
          </div>

          {/* Contact Col */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-orange-500 mt-1 flex-shrink-0" size={18} />
                <span>Chhatrapati Shahu Ji Maharaj University,<br />Kalyanpur, Kanpur, Uttar Pradesh 208024</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-orange-500 flex-shrink-0" size={18} />
                <a href="mailto:contact@vividhotsava.in" className="hover:text-brand-orange-400 transition-colors">contact@vividhotsava.in</a>
              </li>
            </ul>
          </div>

          {/* Socials Col */}
          <div className="space-y-6">
             <h3 className="text-xl font-semibold text-white">Follow the Vibe</h3>
             <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-brand-orange-500 hover:border-brand-orange-500 hover:text-brand-purple-900 transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-brand-orange-500 hover:border-brand-orange-500 hover:text-brand-purple-900 transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-brand-orange-500 hover:border-brand-orange-500 hover:text-brand-purple-900 transition-all duration-300">
                  <Twitter size={20} />
                </a>
             </div>
          </div>
        </div>

        {/* Closing Line & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Vividhotsava, CSJMU Kanpur. All rights reserved.
          </p>
          <p className="font-space text-sm tracking-widest text-brand-gold-400 text-glow">
            SEE YOU AT VIVIDHOTSAVA
          </p>
        </div>
      </div>
    </footer>
  );
}
