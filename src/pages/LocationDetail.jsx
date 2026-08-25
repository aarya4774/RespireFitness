import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Dumbbell, AlignLeft, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui';

const locData = {
    vishrambag: {
        id: 'vishrambag',
        title: 'Respire Max',
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80',
        sqft: '11,500',
        address: 'R-City Mall 7th Floor, Vishrambag, Sangli',
        hours: '05:30 AM - 09:30 PM',
        phone: '+91 98900 12341',
        description: 'Our flagship 11,500 sqft facility is designed to cater to elite athletes and serious fitness enthusiasts. Equipped with the latest hammer-strength machines, 3 Olympic lifting platforms, and a massive 2000 sqft indoor turf.',
        features: ['Olympic Platforms', 'Cardio Deck', 'Indoor Turf', 'Sauna', 'Cafe']
    },
    vijaynagar: {
        id: 'vijaynagar',
        title: 'Respire Vijaynagar',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
        sqft: '2,000',
        address: 'Krishna Heights, Vijaynagar, Sangli',
        hours: '05:00 AM - 10:00 PM',
        phone: '+91 98900 12342',
        description: 'A focused, high-intensity gym tailored for intimate group classes, functional fitness, and personalized 1-on-1 coaching. Perfect for CrossFit enthusiasts and high-intensity interval training.',
        features: ['Functional Rig', 'Rogue Barbells', 'Prowler Sleds', 'Assault Bikes', 'Recovery Area']
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function LocationDetail() {
    const { id } = useParams();
    const branch = locData[id];

    if (!branch) {
        return <Navigate to="/locations" replace />;
    }

    return (
        <div className="pt-32 pb-24 min-h-screen relative z-10 px-6">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="container mx-auto max-w-6xl"
            >
                <motion.div variants={fadeUp} className="mb-8">
                    <Link to="/locations" className="text-zinc-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:text-[#03c04a] transition-colors w-max bg-black/40 px-4 py-2 rounded-lg border border-white/5">
                        <ArrowLeft size={16} /> Back to Locations
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Image & Title Side */}
                    <motion.div variants={fadeUp} className="space-y-8">
                        <div className="relative rounded-[2.5rem] overflow-hidden glass-panel border border-white/10 shadow-[0_0_50px_rgba(3,192,74,0.15)] aspect-[4/5] md:aspect-square lg:aspect-auto h-full min-h-[500px]">
                            <img src={branch.image} alt={branch.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-10">
                                <div className="text-[#03c04a] font-mono font-bold tracking-widest uppercase bg-[#03c04a]/10 backdrop-blur-md px-4 py-2 rounded-lg inline-block text-xs border border-[#03c04a]/30 mb-6 drop-shadow-md">
                                    {branch.sqft} SQFT FACILITY
                                </div>
                                <h1 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter drop-shadow-2xl">
                                    {branch.title}
                                </h1>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Details Side */}
                    <motion.div variants={fadeUp} className="space-y-8 flex flex-col justify-center">
                        <div className="glass-panel p-10 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden group hover:border-[#03c04a]/30 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#03c04a]/10 rounded-full blur-[80px]"></div>
                            <h3 className="text-2xl font-black text-white uppercase italic mb-6 flex items-center gap-3 relative z-10">
                                <AlignLeft className="text-[#03c04a]" /> The Space
                            </h3>
                            <p className="text-zinc-300 text-lg leading-relaxed font-light relative z-10">
                                {branch.description}
                            </p>
                        </div>

                        <div className="glass-card p-10 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-[#03c04a]/30 transition-colors">
                            <h3 className="text-2xl font-black text-white uppercase italic mb-6 flex items-center gap-3 relative z-10">
                                <Dumbbell className="text-[#03c04a]" /> Key Features
                            </h3>
                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                {branch.features.map((feat, i) => (
                                    <div key={i} className="bg-black/30 p-4 border border-white/5 rounded-xl text-zinc-300 font-bold uppercase tracking-wider text-xs">
                                        {feat}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-[#03c04a]/20 shadow-[0_0_30px_rgba(3,192,74,0.1)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#03c04a]/10 rounded-full blur-[80px]"></div>

                            <div className="space-y-6 relative z-10">
                                <div className="flex gap-4">
                                    <div className="bg-[#03c04a]/20 p-3 rounded-full h-max"><MapPin size={20} className="text-[#03c04a]" /></div>
                                    <div>
                                        <h5 className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Address</h5>
                                        <p className="text-white text-sm leading-relaxed">{branch.address}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-[#03c04a]/20 p-3 rounded-full h-max"><Clock size={20} className="text-[#03c04a]" /></div>
                                    <div>
                                        <h5 className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Operating Hours</h5>
                                        <p className="text-white text-sm leading-relaxed">{branch.hours}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-[#03c04a]/20 p-3 rounded-full h-max"><Phone size={20} className="text-[#03c04a]" /></div>
                                    <div>
                                        <h5 className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-2">Contact</h5>
                                        <p className="text-white text-sm leading-relaxed">{branch.phone}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 relative z-10">
                                <Button className="w-full">Get Directions</Button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </div>
    );
}
