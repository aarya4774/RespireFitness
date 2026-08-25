import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { SectionHeading } from '../components/ui';
import { Link } from 'react-router-dom';

export default function Locations() {
  return (
    <section className="pt-32 pb-24 min-h-screen relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="Two Locations" subtitle="One commitment to your fitness." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link to="/locations/vishrambag" className="group relative h-[400px] rounded-3xl overflow-hidden glass-panel border border-[#03c04a]/20 hover:border-[#03c04a] hover:shadow-[0_0_30px_rgba(3,192,74,0.3)] transition-all block">
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80" alt="Vishrambag" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-black text-white uppercase italic mb-2 group-hover:text-[#03c04a] transition-colors">Vishrambag</h3>
              <p className="text-zinc-300 mb-4">The Super Gym. 11,500 Sqft of unparalleled fitness infrastructure. Click to view detailed info.</p>
              <div className="flex gap-4 text-sm text-[#03c04a] font-mono font-bold bg-black/40 p-3 rounded-lg backdrop-blur-md w-max">
                <span className="flex items-center gap-2"><MapPin size={16} /> Near College Corner</span>
                <span className="flex items-center gap-2"><Clock size={16} /> 05:30 AM - 09:30 PM</span>
              </div>
            </div>
          </Link>

          <Link to="/locations/vijaynagar" className="group relative h-[400px] rounded-3xl overflow-hidden glass-panel border border-[#03c04a]/20 hover:border-[#03c04a] hover:shadow-[0_0_30px_rgba(3,192,74,0.3)] transition-all block">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" alt="Vijaynagar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-black text-white uppercase italic mb-2 group-hover:text-[#03c04a] transition-colors">Vijaynagar</h3>
              <p className="text-zinc-300 mb-4">The Boutique Studio. 2,000 Sqft of focused training space. Click to view detailed info.</p>
              <div className="flex gap-4 text-sm text-[#03c04a] font-mono font-bold bg-black/40 p-3 rounded-lg backdrop-blur-md w-max">
                <span className="flex items-center gap-2"><MapPin size={16} /> Sangli-Miraj Road</span>
                <span className="flex items-center gap-2"><Clock size={16} /> 05:00 AM - 10:00 PM</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
