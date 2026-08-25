import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', disabled = false }) => {
  const baseStyle = "px-8 py-4 font-bold tracking-wider uppercase text-sm transition-all duration-300 flex items-center justify-center gap-2 group rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(3,192,74,0.3)] active:translate-y-1 active:translate-x-1 active:shadow-none border border-zinc-800";
  const variants = {
    primary: `bg-[#03c04a] text-black hover:bg-[#029e3c] border-[#03c04a] disabled:opacity-50 disabled:cursor-not-allowed`,
    outline: `bg-zinc-950 border-2 border-[#03c04a] text-[#03c04a] hover:bg-[#03c04a] hover:text-black disabled:opacity-50`,
    ghost: "text-zinc-400 hover:text-white hover:bg-zinc-900 border-transparent hover:border-zinc-800",
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const SectionHeading = ({ title, subtitle, center = true }) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="text-5xl md:text-7xl font-oswald font-black uppercase tracking-tighter text-white mb-6 animate-reveal">
      {title}<span className="text-[#03c04a]">.</span>
    </h2>
    {subtitle && (
      <p className="text-zinc-300 max-w-2xl mx-auto text-lg font-light border-l-4 border-[#03c04a] pl-4 md:border-none md:pl-0">
        {subtitle}
      </p>
    )}
  </div>
);
