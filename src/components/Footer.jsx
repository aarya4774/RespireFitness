import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export const Footer = () => (
  <footer className="glass-panel py-20 border-t border-zinc-900/50 relative z-10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-6 text-white hover:text-[#03c04a] transition-colors">Respire<span className="text-[#03c04a]">.</span></h3>
          <p className="text-zinc-300 text-sm leading-relaxed max-w-sm">
            Sangli's largest and most advanced fitness network. 
            We are dedicated to building a stronger community through discipline and iron.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-[#03c04a] text-xs">Locations</h4>
          <ul className="space-y-4 text-zinc-300 text-sm">
            <li className="flex flex-col gap-1 hover:translate-x-2 transition-transform">
                <strong className="text-white uppercase italic">Vijaynagar Branch</strong>
                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#03c04a]" /> Sangli-Miraj Road, Opp. Factory</span>
            </li>
            <li className="flex flex-col gap-1 mt-4 hover:translate-x-2 transition-transform">
                <strong className="text-white uppercase italic">Vishrambag Branch</strong>
                <span className="flex items-center gap-2"><MapPin size={14} className="text-[#03c04a]"/> Near Walchand College</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-[#03c04a] text-xs">Connect</h4>
          <ul className="space-y-4 text-zinc-300 text-sm">
            <li className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={14} className="text-[#03c04a]" /> +91 98900 12345</li>
            <li className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={14} className="text-[#03c04a]" /> contact@respire.in</li>
            <li className="flex gap-4 mt-4">
               <div className="p-2 border border-zinc-800 rounded-full hover:bg-[#03c04a] hover:border-[#03c04a] hover:text-black transition-all cursor-pointer">
                   <Instagram size={20} />
               </div>
               <div className="p-2 border border-zinc-800 rounded-full hover:bg-[#03c04a] hover:border-[#03c04a] hover:text-black transition-all cursor-pointer">
                   <Facebook size={20} />
               </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-xs font-mono uppercase tracking-widest">
        <span>© {new Date().getFullYear()} Respire Fitness India.</span>
        <span className="mt-2 md:mt-0 text-[#03c04a]">Made in Sangli</span>
      </div>
    </div>
  </footer>
);
