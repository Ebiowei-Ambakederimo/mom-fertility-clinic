import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "Nigeria’s Fastest Growing IVF Centre",
    "High Success Rates",
    "Affordable Options",
    "Expert Team"
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      {/* Background Decorative Shape */}
      <div className="absolute top-0 right-0 w-[90%] md:w-[60%] h-[70%] md:h-full bg-blue-50 rounded-bl-[4rem] md:rounded-bl-[12rem] z-0 translate-x-10 -translate-y-10 md:translate-x-0 md:translate-y-0 pointer-events-none"></div>

      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <span className="text-blue-500 font-bold tracking-wider text-sm uppercase">Who we are</span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-[1.2] tracking-tight">
              About Us
            </h2>
            
            <div className="flex flex-col gap-6 text-slate-500 text-base md:text-lg leading-relaxed font-normal">
              <p>
                At MOM Fertility Clinic, we are committed to turning your dreams of parenthood into reality. With state-of-the-art technology and personalized care, our clinic is transforming lives across Nigeria.
              </p>
              <p>
                With a team of compassionate experts and state-of-the-art technology, we are dedicated to providing comprehensive fertility solutions tailored to your unique needs. Our mission is to support and guide you on your journey towards parenthood, offering a range of advanced treatments and personalized care that combine medical expertise with a warm and nurturing environment.
              </p>
            </div>

            {/* Feature List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" strokeWidth={2.5} />
                        <span className="text-slate-800 font-bold text-sm md:text-base">{feature}</span>
                    </li>
                ))}
            </ul>
          </div>

          {/* Right Column: Image */}
          <div className="relative order-1 lg:order-2">
             {/* Image container */}
             <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100/50 aspect-4/3 lg:aspect-auto h-full min-h-100">
                <Image
                  src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop"
                  alt="Fertility specialist consulting with patients"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;