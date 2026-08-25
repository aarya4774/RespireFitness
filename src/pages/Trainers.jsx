import React from 'react';
import { SectionHeading } from '../components/ui';
import { MOCK_TRAINERS } from '../lib/data';

export default function Trainers() {
  return (
    <section className="pt-32 pb-24 min-h-screen relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="Coaches" subtitle="Expert guidance. Local legends." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_TRAINERS.map((trainer) => (
            <div key={trainer.id} className="group relative h-[500px] overflow-hidden bg-zinc-800 cursor-pointer rounded-3xl glass-panel border border-white/10 hover:border-[#03c04a] shadow-2xl hover:shadow-[0_0_40px_rgba(3,192,74,0.3)] transition-all duration-500">
              <img 
                src={trainer.img} 
                alt={trainer.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl font-black text-white uppercase italic mb-2">{trainer.name}</h3>
                <p className="text-black bg-[#03c04a] inline-block px-4 py-1 font-mono text-sm font-bold tracking-widest uppercase mb-4 rounded shadow-lg">
                  {trainer.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
