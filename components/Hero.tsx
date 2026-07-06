"use client";

import React, { useState, useEffect } from 'react';
import { Play, Check, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-slate-900 overflow-hidden flex flex-col">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          // Mom and baby image
          src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2670&auto=format&fit=crop"
          alt="Mother holding newborn baby"
          className="w-full h-full object-cover object-center lg:object-[center_30%]"
        />
        
        {/* Gradient Overlays */}
        {/* Main strong blue gradient from left - Extended width for wider text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#1e3a8a]/95 to-transparent w-full md:w-[85%] lg:w-[75%] mix-blend-multiply opacity-90"></div>
        
        {/* Secondary gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-32">
        <div className="max-w-8xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* Text Content */}
          <div className={`lg:col-span-9 flex flex-col justify-center transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight tracking-tight mb-8 lg:mb-10">
              Your journey to <br className="hidden md:block" /> <span className="text-white/90">parenthood starts here.</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start max-w-3xl">
              <div className="flex-shrink-0 pt-2 hidden md:block">
                 <span className="text-sm font-medium text-blue-200 uppercase tracking-wider border-b border-blue-200/50 pb-1">MOM Fertility</span>
              </div>
              
              <div className="flex flex-col gap-8 md:gap-10">
                <p className="text-lg text-blue-100/80 leading-relaxed font-light max-w-xl">
                  We specialize in making dreams come true. With world-class technology and compassionate care, we are dedicated to helping you build the family you've always wanted.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 pt-2">
                  <button className="bg-blue-500 hover:bg-blue-400 text-white text-base font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(59,130,246,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 border border-blue-400/20 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>Free Consultation</span>
                  </button>

                  <div className="flex items-center gap-4 group cursor-pointer w-fit">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                      <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-white ml-1" />
                    </div>
                    <span className="text-white font-medium text-base md:text-lg tracking-wide group-hover:translate-x-1 transition-transform">Success Stories</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          {/* Empty column for spacing/balance */}
          <div className="lg:col-span-3 hidden lg:block"></div>

        </div>

        {/* Floating Badge */}
        <div className={`absolute top-28 right-6 md:right-12 lg:right-20 glass-badge p-3 pr-5 rounded-full flex items-center gap-3 animate-fade-in-up delay-700 shadow-xl transition-all duration-1000 hidden md:flex ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <img key={i} src={`https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=200&auto=format&fit=crop&random=${i}`} alt="Baby" className="w-8 h-8 rounded-full border border-white object-cover" />
              ))}
          </div>
          <div>
            <div className="flex items-center gap-1">
                <span className="text-slate-900 font-bold text-sm">12,000+</span>
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />
                </div>
            </div>
            <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wide">Babies Born</p>
          </div>
        </div>

      </div>

      {/* Bottom Glass Panel - Stats */}
      <div className={`absolute bottom-0 right-0 w-full lg:w-[65%] xl:w-[60%] z-20 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="glass-panel rounded-tl-[3rem] p-5 md:p-8 lg:p-10 border-l border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            
            <StatItem 
              value="25+" 
              label="years of experience" 
              delay="delay-[400ms]"
            />
            <StatItem 
              value="75%" 
              label="IVF success rate" 
              delay="delay-[500ms]"
            />
             <StatItem 
              value="12k+" 
              label="families created" 
              delay="delay-[600ms]"
            />
             <StatItem 
              value="15+" 
              label="fertility specialists" 
              delay="delay-[700ms]"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
    value: string;
    label: string;
    delay: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay }) => {
    return (
        <div className={`flex flex-col gap-1`}>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">{value}</h3>
            <p className="text-blue-100/70 text-[10px] md:text-xs font-medium leading-tight max-w-[100px] md:max-w-[120px]">{label}</p>
        </div>
    )
}

export default Hero;