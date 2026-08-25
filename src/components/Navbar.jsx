import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from './ui';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ onAuthClick, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Locations', path: '/locations' },
    { name: 'Programs', path: '/programs' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <nav className="fixed w-full z-[100] top-0 pt-6 px-6 transition-all duration-300 pointer-events-none">
      <div className="container mx-auto flex justify-center pointer-events-auto">
        
        {/* Floating Pill Navbar */}
        <div className={`transition-all duration-500 rounded-full flex items-center justify-between px-6 py-4 w-full max-w-6xl
            ${scrolled 
              ? 'glass-panel border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.8)]' 
              : 'bg-black/20 border border-white/5 backdrop-blur-sm'
            }`}
        >
          <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase italic tracking-tighter text-white flex items-center gap-3 group hover:text-[#03c04a] transition-colors">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#029e3c] to-[#03c04a] skew-x-[-12deg] shadow-[0_0_15px_rgba(3,192,74,0.5)] group-hover:shadow-[0_0_25px_rgba(3,192,74,0.8)] transition-all"></div>
            <span className="hidden sm:inline">Respire</span>
          </Link>

          {/* Desktop Nav Links (Centered) */}
          <div className="hidden lg:flex items-center gap-8 mx-auto absolute left-1/2 -translate-x-1/2">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-xs font-black uppercase tracking-[0.2em] transition-colors relative py-2 ${isActive ? 'text-[#03c04a]' : 'text-zinc-300 hover:text-white'}`}
                >
                  {link.name}
                  {isActive && (
                      <motion.div 
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#03c04a] shadow-[0_0_10px_rgba(3,192,74,0.6)]"
                      />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Profile / Login */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4 bg-black/40 pl-4 pr-1 py-1 rounded-full border border-white/10 group hover:border-[#03c04a] transition-colors cursor-pointer" onClick={() => window.location.href = '/dashboard'}>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{user.name.split(' ')[0]}</span>
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#03c04a]">
                      <img src={user.avatar} alt="User" className="w-full h-full object-cover" />
                  </div>
              </div>
            ) : (
              <button 
                  onClick={onAuthClick} 
                  className="text-[10px] font-black bg-[#03c04a] text-black px-6 py-3 rounded-full shadow-[0_0_15px_rgba(3,192,74,0.3)] uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105"
              >
                  Member Login
              </button>
            )}
          </div>

          {/* Mobile Toggle Button */}
          <button className="lg:hidden text-white bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors" onClick={() => setIsOpen(true)}>
             <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Sliding Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.5 }}
            className="fixed inset-0 bg-zinc-950 z-[200] flex flex-col p-8 pointer-events-auto"
          >
            <div className="flex justify-between items-center mb-16 border-b border-white/5 pb-8">
               <Link to="/" onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase italic tracking-tighter text-white flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#03c04a] skew-x-[-12deg] shadow-[0_0_15px_rgba(3,192,74,0.5)]"></div>
                  Respire
               </Link>
               <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white p-2 rounded-full bg-white/5">
                  <X size={24} />
               </button>
            </div>

            <div className="flex flex-col gap-8 flex-grow">
              {navLinks.map((link, idx) => (
                <motion.div 
                 initial={{ opacity: 0, x: 50 }} 
                 animate={{ opacity: 1, x: 0 }} 
                 transition={{ delay: 0.1 * idx }}
                 key={link.name}
                >
                    <Link to={link.path} onClick={() => setIsOpen(false)} className="text-4xl font-black text-zinc-300 hover:text-[#03c04a] uppercase italic transition-colors">
                    {link.name}
                    </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/10">
               {user ? (
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="flex items-center gap-4 bg-black/40 p-4 rounded-2xl border border-white/10 w-full group">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#03c04a]">
                        <img src={user.avatar} alt="User" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                        <div className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Your Profile</div>
                        <div className="text-white font-bold">{user.name}</div>
                    </div>
                </Link>
              ) : (
                <Button onClick={() => { setIsOpen(false); onAuthClick(); }} className="w-full py-6 text-sm">
                  Member Login
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
