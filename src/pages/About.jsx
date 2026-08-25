import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, HeartPulse, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/ui';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function About() {
  return (
    <section className="pt-32 pb-24 min-h-screen relative z-10 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#03c04a]/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#03c04a]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto text-center mb-20">
          <motion.div variants={fadeUp}>
             <SectionHeading title="Who We Are" subtitle="More than just a gym. We are a mindset." />
          </motion.div>

          <motion.div variants={fadeUp} className="glass-panel p-10 md:p-16 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#03c04a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <p className="text-zinc-300 text-xl leading-relaxed mb-8 relative z-10 font-light">
              Founded in Sangli in 2018, <strong className="text-white">Respire Fitness</strong> started with a singular vision: to bring world-class training infrastructure outside of metro cities. We believed that raw determination shouldn't be limited by geographical boundaries.
            </p>
            <p className="text-zinc-300 text-xl leading-relaxed relative z-10 font-light">
              Today, with over <strong className="text-[#03c04a] font-black">13,500 sqft</strong> of pure training space, we stand as a testament to the community's sheer willpower. We forge athletes, rebuild confidence, and redefine what it means to be fit. 
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Core Value Cards */}
          {[
            { icon: Trophy, title: "Excellence", desc: "World-class equipment and elite-level coaching right here." },
            { icon: Target, title: "Discipline", desc: "We provide the environment; you bring the consistency." },
            { icon: HeartPulse, title: "Community", desc: "A family of 500+ athletes pushing each other to the limit." },
            { icon: Sparkles, title: "Innovation", desc: "Constantly evolving spaces and cutting-edge programs." }
          ].map((val, idx) => (
            <motion.div key={idx} variants={fadeUp} className="glass-card p-10 rounded-3xl border border-white/5 hover:border-[#03c04a]/40 shadow-lg relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
               <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                 <val.icon size={120} className="text-[#03c04a]" />
               </div>
               <val.icon size={40} className="text-[#03c04a] mb-6 relative z-10 drop-shadow-[0_0_10px_rgba(3,192,74,0.5)]" />
               <h3 className="text-2xl font-black text-white uppercase italic mb-3 relative z-10">{val.title}</h3>
               <p className="text-zinc-400 text-sm leading-relaxed relative z-10">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
