import React, { useState } from 'react';
import { SectionHeading, Button } from '../components/ui';

export default function Schedule({ user, classes, onBook, bookings }) {
  const [activeDay, setActiveDay] = useState('Mon');
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const filteredClasses = classes.filter(c => c.day === activeDay);
  const isBooked = (classId) => bookings && bookings.includes(classId);

  return (
    <section className="pt-32 pb-24 min-h-screen relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading title="Daily Grind" subtitle="Commit to the process." />
        
        <div className="flex overflow-x-auto pb-6 gap-3 mb-12 border-b border-zinc-800 custom-scrollbar">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all whitespace-nowrap rounded-xl border ${
                activeDay === day 
                  ? 'bg-[#03c04a] text-black border-[#03c04a] shadow-[0_0_20px_rgba(3,192,74,0.4)]' 
                  : 'bg-zinc-900/40 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-500 backdrop-blur-md'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredClasses.length > 0 ? filteredClasses.map((cls) => (
            <div key={cls.id} className="group glass-panel rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 border border-white/5 hover:border-[#03c04a] shadow-lg hover:shadow-[0_0_30px_rgba(3,192,74,0.15)] relative overflow-hidden">
              {isBooked(cls.id) && (
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#03c04a]"></div>
              )}
              <div className="flex items-center gap-8 w-full md:w-auto z-10">
                <div className="text-left min-w-[120px] bg-black/40 p-4 rounded-xl border border-white/10">
                  <span className="block text-3xl font-black text-white italic">{cls.time}</span>
                  <span className="text-xs text-[#03c04a] font-mono mt-1 block font-bold">45 MIN SESSION</span>
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white uppercase italic mb-2 group-hover:text-[#03c04a] transition-colors">{cls.name}</h4>
                  <p className="text-zinc-300 text-sm font-mono uppercase bg-black/30 px-3 py-1 rounded inline-block">
                    Coach {cls.trainer}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end z-10">
                <div className="text-right hidden md:block">
                  <div className="text-sm font-bold text-zinc-300 uppercase tracking-widest bg-black/30 px-4 py-2 rounded-lg">
                    {cls.booked} / {cls.slots} SPOTS
                  </div>
                </div>
                {user?.role === 'admin' ? (
                   <span className="text-xs text-[#03c04a] border border-[#03c04a] px-4 py-2 rounded-lg bg-[#03c04a]/10 font-bold uppercase tracking-widest">Admin View</span>
                ) : (
                  <Button 
                    variant={isBooked(cls.id) ? 'outline' : 'primary'} 
                    className={isBooked(cls.id) ? '!border-zinc-700 !text-zinc-400 !bg-zinc-900/50' : ''}
                    onClick={() => !isBooked(cls.id) && onBook(cls.id)}
                    disabled={isBooked(cls.id) || cls.booked >= cls.slots}
                  >
                    {isBooked(cls.id) ? 'Booked' : (cls.booked >= cls.slots ? 'Full' : 'Book Now')}
                  </Button>
                )}
              </div>
            </div>
          )) : (
             <div className="text-center py-24 glass-panel rounded-3xl border border-white/5">
                <span className="text-6xl mb-4 block">🧘‍♂️</span>
                <h3 className="text-2xl font-black text-white uppercase italic mb-2">Rest Day</h3>
                <p className="text-zinc-400 font-mono uppercase tracking-widest">Recover and rebuild.</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
}
