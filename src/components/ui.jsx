import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', disabled = false }) => {
  const baseStyle = "px-8 py-3.5 font-semibold tracking-wide text-sm transition-all duration-200 flex items-center justify-center gap-2 rounded-md shadow-sm";
  const variants = {
    primary: `bg-[#10b981] text-neutral-900 hover:bg-[#059669] disabled:opacity-50 disabled:cursor-not-allowed`,
    outline: `border border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-neutral-900 disabled:opacity-50`,
    ghost: "text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800",
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const SectionHeading = ({ title, subtitle, center = true }) => (
  <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
      {title}<span className="text-[#10b981]">.</span>
    </h2>
    {subtitle && (
      <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);
