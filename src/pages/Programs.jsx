import React from 'react';
import { SectionHeading } from '../components/ui';
import { MOCK_PROGRAMS } from '../lib/data';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Programs() {
  return (
    <section className={`pt-32 pb-24 min-h-screen relative z-10 block`}>
      <div className="container mx-auto px-6">
        <SectionHeading title="Disciplines" subtitle="We don't just exercise. We train." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PROGRAMS.map((prog) => (
            <div key={prog.id} className="group glass-panel rounded-3xl p-10 hover:bg-zinc-900/60 border border-white/10 hover:border-[#03c04a] transition-all relative overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(3,192,74,0.2)]">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                 <prog.icon size={150} className="text-[#03c04a]" />
              </div>
              <prog.icon size={48} className="text-zinc-500 mb-6 group-hover:text-[#03c04a] transition-colors relative z-10" />
              <h3 className="text-2xl font-black text-white mb-3 uppercase italic relative z-10">{prog.title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 relative z-10">{prog.desc}</p>
              
              <Link to="/schedule" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#03c04a] opacity-80 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all relative z-10">
                Join Session <MoveRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
