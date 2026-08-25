import React from 'react';
import { ArrowUpRight, MoveRight, Play, Dumbbell, Flame, HeartPulse, Quote, Star } from 'lucide-react';
import { Button } from '../components/ui';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const Hero = ({ onJoinClick }) => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-zinc-950">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" alt="Gym" className="w-full h-full object-cover filter grayscale contrast-125 opacity-40" />
    </div>
    
    <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full"
      >
        <motion.div variants={itemVariants} className="flex justify-center flex-row items-center gap-6 mb-8">
           <span className="inline-block w-16 h-[4px] bg-[#03c04a]"></span>
           <span className="text-[#03c04a] font-mono text-sm font-black tracking-[0.4em] uppercase">Forging Elite Fitness</span>
           <span className="inline-block w-16 h-[4px] bg-[#03c04a]"></span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl lg:text-[11rem] font-oswald font-black text-white uppercase tracking-tighter mb-8 leading-[0.8] drop-shadow-[4px_4px_0_rgba(3,192,74,1)]">
          Train With <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">Purpose</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-semibold tracking-wide leading-relaxed bg-black/50 p-4 border-l-4 border-[#03c04a]">
          The largest, most advanced fitness network in Sangli. 
          Anchored by <strong className="text-[#03c04a] font-black">13,500 sqft</strong> of pure power and dedication across two premium locations.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/locations">
              <Button className="group w-full sm:w-auto px-12 py-5 text-lg">
                Explore Facilities <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
          </Link>
          <Link to="/schedule">
              <Button variant="outline" className="group w-full sm:w-auto px-12 py-5 text-lg">
                <Play fill="currentColor" size={18} className="mr-2 group-hover:scale-110 transition-transform" /> View Schedule
              </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const FeaturesStrip = () => (
  <div className="bg-[#03c04a] overflow-hidden py-4 border-y-4 border-black relative z-20">
    <div className="whitespace-nowrap flex animate-marquee">
      {[1,2,3,4,5,6,7,8,9,10].map(i => (
        <span key={i} className="text-black font-oswald font-black uppercase text-3xl mx-12 flex items-center gap-6 tracking-tight">
           VISHRAMBAG <span className="w-3 h-3 bg-black"></span> VIJAYNAGAR <span className="w-3 h-3 bg-black"></span> 13,500 SQFT
        </span>
      ))}
    </div>
  </div>
);

const programs = [
  {
    title: "Strength & Conditioning",
    desc: "Build raw power and endurance with our elite strength programs.",
    icon: Dumbbell,
    color: "from-[#03c04a] to-emerald-900",
  },
  {
    title: "High Intensity (HIIT)",
    desc: "Burn maximum calories in minimum time with our heart-pumping HIIT.",
    icon: Flame,
    color: "from-orange-500 to-red-800",
  },
  {
    title: "Cardio Mastery",
    desc: "Elevate your cardiovascular health with state-of-the-art equipment.",
    icon: HeartPulse,
    color: "from-blue-500 to-indigo-900",
  }
];

const ProgramsPreview = () => (
  <section className="py-24 relative z-10 mx-6">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-oswald font-black uppercase tracking-tighter text-white mb-4"
        >
          Elite <span className="text-[#03c04a]">Programs</span>
        </motion.h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-semibold tracking-wide uppercase">Push your limits with our scientifically formulated training.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((prog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="glass-panel p-10 group relative"
          >
            <prog.icon className="w-16 h-16 text-[#03c04a] mb-8 group-hover:scale-110 transition-transform origin-left" />
            <h3 className="text-3xl font-oswald font-black text-white mb-4 uppercase tracking-tight">{prog.title}</h3>
            <p className="text-zinc-400 mb-8 font-medium">{prog.desc}</p>
            <Link to="/programs" className="inline-flex items-center text-sm font-black tracking-widest uppercase text-white group-hover:text-[#03c04a] transition-colors">
              Explore Program <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const StatsSection = () => (
   <section className="py-16 relative z-10 border-y border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {[
            { value: "13.5k", label: "Sqft Area" },
            { value: "50+", label: "Expert Trainers" },
            { value: "2", label: "Premium Locations" },
            { value: "24/7", label: "Access" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-2">{stat.value}</div>
              <div className="text-[#03c04a] font-mono text-xs md:text-sm tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
   </section>
);

const Testimonials = () => (
  <section className="py-24 relative z-10 mx-6">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-[#03c04a] font-mono text-sm font-black tracking-widest uppercase mb-2 block border-l-4 border-[#03c04a] pl-3">Word on the street</span>
          <h2 className="text-5xl md:text-7xl font-oswald font-black uppercase tracking-tighter text-white">
            Member <span className="text-zinc-500">Stories</span>
          </h2>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: "Rahul D.", text: "The vibe here is unmatched. Switching to Respire was the best decision for my fitness journey." },
          { name: "Priya S.", text: "State of the art machinery and trainers who actually care. The Sangli fitness scene finally has a champion." }
        ].map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="glass-panel p-10 relative group"
          >
            <Quote className="absolute -top-6 -right-6 w-24 h-24 text-zinc-800 rotate-12 group-hover:text-[#03c04a] group-hover:-rotate-12 transition-all duration-300" />
            <div className="flex text-[#03c04a] mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-2xl font-oswald text-white uppercase tracking-tight mb-10 relative z-10 leading-tight">"{testimonial.text}"</p>
            <div className="flex items-center gap-4 relative z-10 border-t border-zinc-800 pt-6 mt-auto">
              <div className="w-14 h-14 bg-[#03c04a] flex items-center justify-center font-black text-black text-xl">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider">{testimonial.name}</h4>
                <span className="text-xs text-[#03c04a] font-mono uppercase tracking-widest">Elite Member</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home({ onJoinClick }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <Hero onJoinClick={onJoinClick} />
      <FeaturesStrip />
      <StatsSection />
      <ProgramsPreview />
      <Testimonials />
      
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-32 relative z-10 mx-6"
      >
        <div className="container mx-auto px-6">
            <div className="bg-[#03c04a] p-16 border-4 border-white text-center max-w-5xl mx-auto shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] relative overflow-hidden">
                <h2 className="text-5xl md:text-8xl font-oswald font-black uppercase tracking-tighter text-black mb-6 relative z-10 leading-none">
                    Join The <span className="text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Movement</span>
                </h2>
                <p className="text-black mb-12 max-w-2xl mx-auto text-xl font-bold tracking-wide leading-relaxed relative z-10">
                    Connect with 500+ elite members, track your streaks, and climb the leaderboard. Everything you need to fuel your fitness journey.
                </p>
                <div className="relative z-10">
                    <Link to="/community">
                        <Button className="mx-auto px-12 py-5 bg-black text-[#03c04a] border-black hover:bg-zinc-900 hover:text-white shadow-[8px_8px_0_rgba(255,255,255,1)] hover:shadow-[10px_10px_0_rgba(255,255,255,1)]">
                          Enter Community Hub <MoveRight size={24} className="ml-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
      </motion.section>
    </motion.div>
  )
}
