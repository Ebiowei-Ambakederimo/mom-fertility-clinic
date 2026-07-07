"use client";

import React from 'react';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

const CTA: React.FC = () => {
  const scrollToBooking = (e: React.MouseEvent) => {
    const element = document.getElementById('booking');
    if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden bg-linear-to-br from-blue-400 to-blue-600 shadow-2xl shadow-blue-500/30">
        
        {/* Background Decorative Molecule Pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
           <svg viewBox="0 0 400 400" className="w-full h-full text-white fill-current">
              <path d="M350,200 L325,243 L275,243 L250,200 L275,157 L325,157 Z M350,200" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M275,243 L250,286 L200,286 L175,243" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M250,114 L275,157" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M175,157 L200,114 L250,114" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M250,200 L200,200" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="350" cy="200" r="4" fill="currentColor" />
              <circle cx="325" cy="243" r="4" fill="currentColor" />
              <circle cx="275" cy="243" r="4" fill="currentColor" />
              <circle cx="250" cy="200" r="4" fill="currentColor" />
           </svg>
        </div>

        <div className="flex flex-col md:flex-row items-center relative z-10">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 lg:w-5/12 pt-10 md:pt-0 flex justify-center md:justify-start md:pl-10 lg:pl-16">
            <div className="relative w-64 md:w-80 lg:w-96 aspect-3/4 md:aspect-auto md:h-100">
              <div className="relative w-full h-full rounded-t-full md:rounded-none overflow-hidden drop-shadow-2xl mask-image-bottom" style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1536768138133-722f4728d447?q=80&w=1000&auto=format&fit=crop"
                  alt="Smiling Doctor"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top md:object-center"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 lg:w-7/12 p-8 md:p-12 text-center md:text-left text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Start <br />
              <span className="text-blue-100">Your Family?</span>
            </h2>
            
            <p className="text-blue-50 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0 font-medium opacity-90">
              Take the first step towards parenthood. Schedule a consultation with our fertility experts today.
            </p>

            <a
              href="#booking"
              onClick={scrollToBooking}
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto md:mx-0 w-fit"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;