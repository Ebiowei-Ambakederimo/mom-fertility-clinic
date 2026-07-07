import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "After 3 years of trying and two failed IUIs elsewhere, we came to MOM Fertility. The team was so supportive and the IVF treatment was a success on the first try. We are now holding our beautiful baby boy!",
      author: "Sarah & Mark",
      location: "Happy Parents",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      rating: 5
    },
    {
      id: 2,
      quote: "We cannot thank the doctors at MOM Fertility enough. Their expertise in genetic testing gave us the confidence we needed. The staff made us feel like family throughout the entire process.",
      author: "Emily Thompson",
      location: "New Mother",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      rating: 5
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-linear-to-br from-sky-50 via-blue-50 to-white">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-150 h-150 bg-sky-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold tracking-wider text-sm uppercase block mb-3">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Making Dreams <br /> Come True
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-500 hover:shadow-lg transition-all duration-300 border border-slate-100">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((item) => (
            <div key={item.id} className="flex flex-col gap-8">
              {/* White Card */}
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-50 h-full flex flex-col justify-between relative group hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <Quote className="w-10 h-10 md:w-12 md:h-12 text-blue-200 mb-6 stroke-1 fill-transparent" />
                  <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
                    &quot;{item.quote}&quot;
                  </p>
                </div>
                
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < item.rating ? 'fill-blue-500 text-blue-500' : 'text-slate-200'}`} 
                    />
                  ))}
                </div>
              </div>

              {/* User Profile (Outside Card) */}
              <div className="flex items-center gap-4 px-2">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm md:text-base">
                    {item.author}
                  </h4>
                  <p className="text-slate-400 text-xs md:text-sm font-medium">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;