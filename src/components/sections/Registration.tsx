"use client"
import { Send, User, Building2, Ticket, Mail, Phone } from 'lucide-react';

export default function Registration() {
  return (
    <section id="register" className="relative py-32 w-full bg-brand-purple-900 border-t border-white/5 overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] -translate-y-1/2 -translate-x-1/2 bg-brand-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] -translate-y-1/2 translate-x-1/2 bg-brand-purple-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Text Content */}
        <div>
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-brand-orange-500/30 text-brand-orange-400 font-medium text-sm tracking-widest mb-8 shadow-neon">
             <Ticket size={16} />
             <span>REGISTRATION OPEN</span>
           </div>

           <h2 className="text-5xl md:text-6xl font-space font-bold text-white mb-6 text-glow leading-tight">
             Secure Your Spot in the <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-500 to-brand-gold-400">
               Youth Universe
             </span>
           </h2>

           <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10">
             Join thousands of students from across India for a three-day celebration of talent, creativity, and innovation at Vividhotsava.
           </p>

           <div className="space-y-6">
              <div className="flex items-center gap-4 glass-panel p-4 md:w-3/4">
                 <div className="w-12 h-12 rounded-full bg-brand-orange-500/20 flex items-center justify-center border border-brand-orange-500/30">
                    <span className="text-brand-orange-500 font-bold text-xl">01</span>
                 </div>
                 <div>
                    <h4 className="text-white font-bold">Fill the Form</h4>
                    <p className="text-sm text-gray-400">Provide your basic details and university</p>
                 </div>
              </div>

              <div className="flex items-center gap-4 glass-panel p-4 md:w-3/4 ml-4 md:ml-8">
                 <div className="w-12 h-12 rounded-full bg-brand-purple-600/30 flex items-center justify-center border border-brand-purple-600/50">
                    <span className="text-brand-purple-400 font-bold text-xl">02</span>
                 </div>
                 <div>
                    <h4 className="text-white font-bold">Select Events</h4>
                    <p className="text-sm text-gray-400">Choose from 50+ diverse competitions</p>
                 </div>
              </div>

              <div className="flex items-center gap-4 glass-panel p-4 md:w-3/4 ml-8 md:ml-16">
                 <div className="w-12 h-12 rounded-full bg-brand-gold-400/20 flex items-center justify-center border border-brand-gold-400/30">
                    <span className="text-brand-gold-400 font-bold text-xl">03</span>
                 </div>
                 <div>
                    <h4 className="text-white font-bold">Get Your Pass</h4>
                    <p className="text-sm text-gray-400">Receive your digital festival ID instantly</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Right: Registration Form */}
        <div className="relative group perspective-1000">
          <div className="absolute inset-0 bg-brand-orange-500/20 rounded-3xl blur-[80px] group-hover:bg-brand-orange-500/30 transition-colors duration-700 pointer-events-none" />
          
          <div className="relative z-10 glass-panel bg-brand-purple-900/80 p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transform-gpu hover:scale-[1.02] hover:rotate-y-2 hover:-rotate-x-2 transition-transform duration-500 ease-out">
            
            <h3 className="text-2xl font-space font-bold text-white mb-8 border-b border-white/10 pb-4">
              Registration Form
            </h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               
               {/* Name Input */}
               <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                 </div>
                 <input 
                   type="text" 
                   placeholder="Full Name" 
                   className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:border-transparent text-white placeholder-gray-500 transition-all font-light"
                   required
                 />
               </div>

               {/* University Input */}
               <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Building2 size={18} />
                 </div>
                 <input 
                   type="text" 
                   placeholder="University / College Name" 
                   className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:border-transparent text-white placeholder-gray-500 transition-all font-light"
                   required
                 />
               </div>

               {/* Email & Phone */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="relative">
                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Mail size={18} />
                   </div>
                   <input 
                     type="email" 
                     placeholder="Email Address" 
                     className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:border-transparent text-white placeholder-gray-500 transition-all font-light"
                     required
                   />
                 </div>
                 <div className="relative">
                   <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Phone size={18} />
                   </div>
                   <input 
                     type="tel" 
                     placeholder="Phone Number" 
                     className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:border-transparent text-white placeholder-gray-500 transition-all font-light"
                     required
                   />
                 </div>
               </div>

               {/* Event Category Select */}
               <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <Ticket size={18} />
                 </div>
                 <select 
                   className="w-full pl-12 pr-4 py-4 bg-[#231439] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:border-transparent text-white transition-all font-light appearance-none cursor-pointer"
                   required
                   defaultValue=""
                 >
                    <option value="" disabled hidden>Primary Event Category</option>
                    <option value="cultural">Cultural</option>
                    <option value="tech">Technology</option>
                    <option value="sports">Sports</option>
                    <option value="literary">Literary</option>
                    <option value="business">Business</option>
                    <option value="fashion">Fashion</option>
                 </select>
               </div>

               {/* Submit Button */}
               <button 
                 type="submit"
                 className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-brand-orange-500 to-brand-gold-400 text-brand-purple-900 font-bold text-lg hover:shadow-neon hover:scale-[1.02] transition-all duration-300 flex justify-center items-center gap-2 group"
               >
                  Join Vividhotsava
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
               
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
