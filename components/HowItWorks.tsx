import React from 'react';
import { CalendarCheck, TestTube, FileText, Activity, Baby } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Initial Consultation',
      description: 'Meet with our specialists to discuss your history and goals. We perform a comprehensive fertility evaluation for both partners.',
      icon: <CalendarCheck className="w-6 h-6" />,
      active: false
    },
    {
      id: '02',
      title: 'Diagnostic Testing',
      description: 'We conduct specific tests such as blood work, ultrasound, and semen analysis to identify any underlying barriers to conception.',
      icon: <FileText className="w-6 h-6" />,
      active: false
    },
    {
      id: '03',
      title: 'Personalized Plan',
      description: 'Based on your results, we design a tailored treatment protocol (IVF, IUI, etc.) best suited to help you conceive.',
      icon: <TestTube className="w-6 h-6" />,
      active: true
    },
    {
      id: '04',
      title: 'Treatment Cycle',
      description: 'Begin your treatment cycle under close monitoring. This includes stimulation, egg retrieval, fertilization, and embryo transfer.',
      icon: <Activity className="w-6 h-6" />,
      active: false
    },
    {
      id: '05',
      title: 'Pregnancy Test',
      description: 'Two weeks after the procedure, we perform a blood test to confirm pregnancy and celebrate the start of your journey!',
      icon: <Baby className="w-6 h-6" />,
      active: false
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
       {/* Background Decorative Blob */}
       <div className="absolute top-1/2 left-[-10%] w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-3xl mix-blend-multiply pointer-events-none -translate-y-1/2 opacity-70"></div>
       
       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center mb-20 md:mb-32">
             <span className="text-blue-500 font-bold tracking-wider text-sm uppercase block mb-3">Process</span>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">Your Path to Parenthood</h2>
          </div>

          <div className="relative">
             {/* Desktop Center Line */}
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block"></div>
             
             {/* Mobile Line (Left side) */}
             <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 md:hidden"></div>

             <div className="flex flex-col gap-12 md:gap-0">
                {steps.map((step, index) => {
                   const isEven = (index + 1) % 2 === 0;
                   return (
                     <div key={step.id} className={`flex flex-col md:flex-row items-start md:items-center relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Content Side */}
                        <div className={`flex-1 w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pl-16 lg:pl-24 text-left md:text-right' : 'md:pr-16 lg:pr-24 text-left'}`}>
                           <div className={`flex flex-col gap-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                              <div className={`flex items-baseline gap-4 ${isEven ? 'flex-row md:flex-row-reverse' : 'flex-row'}`}>
                                 <span className="text-4xl md:text-5xl font-bold text-slate-100 select-none">
                                    {step.id}
                                 </span>
                                 <h3 className={`text-xl md:text-2xl font-bold ${step.active ? 'text-blue-600' : 'text-slate-900'}`}>
                                    {step.title}
                                 </h3>
                              </div>
                              <p className="text-slate-500 leading-relaxed text-sm md:text-base max-w-md">
                                 {step.description}
                              </p>
                           </div>
                        </div>

                        {/* Center Icon */}
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                           <div className={`
                              w-12 h-12 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300 z-10
                              ${step.active 
                                 ? 'bg-blue-600 border-blue-100 shadow-[0_0_0_8px_rgba(59,130,246,0.1)]' 
                                 : 'bg-blue-50 border-white'
                              }
                           `}>
                              <div className={step.active ? 'text-white' : 'text-blue-200'}>
                                 {step.icon}
                              </div>
                           </div>
                        </div>

                        {/* Empty Space for alignment */}
                        <div className="flex-1 hidden md:block"></div>
                     </div>
                   );
                })}
             </div>
          </div>
       </div>
    </section>
  );
};

export default HowItWorks;