import React from 'react';
import { ArrowUpRight, MoveRight, Play, Dumbbell, Flame, HeartPulse, Quote, Star } from 'lucide-react';
import { Button, SectionHeading } from '../components/ui';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Hero = ({ onJoinClick }) => (
  <section className="relative min-h-screen flex items-center pt-20">
    <div className="container mx-auto px-6 relative z-10 flex flex-col items-start justify-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
          <span className="inline-block w-12 h-px bg-[#10b981]"></span>
          <span className="text-[#10b981] text-sm font-semibold tracking-widest uppercase">Welcome to the Elite</span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-[1.1]">
          Train With <br />
          <span className="text-[#10b981]">Purpose.</span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          The largest, most advanced fitness network in Sangli.
          Anchored by <strong className="text-white font-semibold">13,500 sqft</strong> of pure power and dedication across two premium locations.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
          <Link to="/locations">
            <Button className="w-full sm:w-auto px-10 py-4">
              Explore Facilities <ArrowUpRight size={18} />
            </Button>
          </Link>
          <Link to="/schedule">
            <Button variant="outline" className="w-full sm:w-auto px-10 py-4">
              <Play size={16} className="mr-2" /> View Schedule
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const FeaturesStrip = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="bg-[#171717] border-y border-[#262626] py-8"
  >
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex-1">
          <h4 className="text-white font-semibold text-lg mb-1">Two Premium Locations</h4>
          <p className="text-neutral-400 text-sm">Vishrambag & Vijaynagar</p>
        </div>
        <div className="hidden md:block w-px h-12 bg-[#262626]"></div>
        <div className="flex-1 text-center">
          <h4 className="text-white font-semibold text-lg mb-1">13,500+ Sqft</h4>
          <p className="text-neutral-400 text-sm">Of Pure Training Space</p>
        </div>
        <div className="hidden md:block w-px h-12 bg-[#262626]"></div>
        <div className="flex-1 md:text-right">
          <h4 className="text-white font-semibold text-lg mb-1">Elite Trainers</h4>
          <p className="text-neutral-400 text-sm">Expert Guidance</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const programs = [
  {
    title: "Yoga & Meditation",
    desc: "Build raw power and endurance with our elite strength programs.",
    icon: Dumbbell,
  },
  {
    title: "Functional Training",
    desc: "Burn maximum calories in minimum time with our heart-pumping HIIT.",
    icon: Flame,
  },
  {
    title: "HYROX (Upcoming)",
    desc: "Elevate your cardiovascular health with state-of-the-art equipment.",
    icon: HeartPulse,
  }
];

const ProgramsPreview = () => (
  <section className="py-24 bg-[#0a0a0a] overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <SectionHeading
          title="Elite Programs"
          subtitle="Push your limits with our scientifically formulated training programs designed for maximum results."
        />
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {programs.map((prog, idx) => (
          <motion.div
            variants={fadeInUp}
            key={idx}
            className="clean-card p-8 rounded-xl group relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
          >
            <prog.icon className="w-10 h-10 text-[#10b981] mb-6 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-3">{prog.title}</h3>
            <p className="text-neutral-400 mb-8 leading-relaxed">{prog.desc}</p>
            <Link to="/programs" className="inline-flex items-center text-sm font-semibold text-[#10b981] hover:text-white transition-colors">
              Explore Program <MoveRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-20 bg-[#171717] border-y border-[#262626]">
    <div className="container mx-auto px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
      >
        {[
          { value: "13.5k", label: "Sqft Area" },
          { value: "50+", label: "Expert Trainers" },
          { value: "2", label: "Premium Locations" },
          { value: "24/7", label: "Access" },
        ].map((stat, idx) => (
          <motion.div variants={fadeInUp} key={idx}>
            <div className="text-4xl md:text-6xl font-bold text-white mb-3">{stat.value}</div>
            <div className="text-[#10b981] text-sm font-semibold tracking-wider uppercase">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-[#0a0a0a] overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <SectionHeading
          title="Member Stories"
          subtitle="Hear from the athletes who have transformed their lives with us."
          center={false}
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {[
          { name: "Rahul D.", text: "The vibe here is unmatched. Switching to Respire was the best decision for my fitness journey." },
          { name: "Priya S.", text: "State of the art machinery and trainers who actually care. The Sangli fitness scene finally has a champion." }
        ].map((testimonial, idx) => (
          <motion.div
            variants={fadeInUp}
            key={idx}
            className="clean-card p-10 rounded-xl relative"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-[#262626]" />
            <div className="flex text-[#10b981] mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed relative z-10">"{testimonial.text}"</p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center font-bold text-white">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-white">{testimonial.name}</h4>
                <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Elite Member</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default function Home({ onJoinClick }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero onJoinClick={onJoinClick} />
      <FeaturesStrip />
      <StatsSection />
      <ProgramsPreview />
      <Testimonials />

      <section className="py-32 bg-[#171717] border-t border-[#262626] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join The <span className="text-[#10b981]">Movement</span>
            </h2>
            <p className="text-neutral-400 mb-10 text-lg leading-relaxed">
              Connect with 500+ elite members, track your streaks, and climb the leaderboard. Everything you need to fuel your fitness journey.
            </p>
            <Link to="/community">
              <Button className="mx-auto px-10 py-4">
                Enter Community Hub <MoveRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

