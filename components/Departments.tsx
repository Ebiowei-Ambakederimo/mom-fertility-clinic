import React from 'react';
import { Microscope, TestTube2, User, Dna, Activity, Users } from 'lucide-react';

const Departments: React.FC = () => {
  const departments = [
    {
      title: 'IVF (In Vitro Fertilization)',
      description: 'Advanced assisted reproductive technology to help fertilization and embryo development.',
      icon: <TestTube2 className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
      isActive: true
    },
    {
      title: 'IUI (Intrauterine Insemination)',
      description: 'A less invasive fertility treatment that places sperm directly into the uterus.',
      icon: <Activity className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
      isActive: false
    },
    {
      title: 'Egg Freezing',
      description: 'Preserve your fertility for the future with our state-of-the-art cryopreservation.',
      icon: <Microscope className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
      isActive: false
    },
    {
      title: 'Male Infertility',
      description: 'Comprehensive diagnosis and treatment options specifically for male reproductive health.',
      icon: <User className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
      isActive: false
    },
    {
      title: 'Genetic Testing',
      description: 'Preimplantation genetic testing (PGT) to ensure the health of your future baby.',
      icon: <Dna className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
      isActive: false
    },
    {
      title: 'Donor & Surrogacy',
      description: 'Supportive programs for third-party reproduction including egg donation and surrogacy.',
      icon: <Users className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />,
      isActive: false
    }
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-blue-500 font-bold tracking-wider text-sm uppercase block mb-3">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Fertility Treatments
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {departments.map((dept, index) => (
            <div 
              key={index}
              className={`
                group relative p-8 md:p-10 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col gap-6
                ${dept.isActive 
                  ? 'bg-blue-500 border-blue-500 text-white shadow-xl shadow-blue-500/20 transform scale-[1.02]' 
                  : 'bg-white border-slate-200 text-slate-800 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1'
                }
              `}
            >
              <div className="flex items-center gap-6">
                {/* Icon Container */}
                <div className={`
                  flex-shrink-0 transition-colors duration-300
                  ${dept.isActive ? 'text-white' : 'text-slate-500 group-hover:text-blue-500'}
                `}>
                  {dept.icon}
                </div>

                {/* Title */}
                <h3 className={`
                  text-lg md:text-xl font-semibold leading-tight
                  ${dept.isActive ? 'text-white' : 'text-slate-700 group-hover:text-slate-900'}
                `}>
                  {dept.title}
                </h3>
              </div>

              <p className={`text-sm leading-relaxed ${dept.isActive ? 'text-blue-50' : 'text-slate-500'}`}>
                {dept.description}
              </p>

              {/* Decorative Corner for Active Card */}
              {dept.isActive && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-[4rem] rounded-tr-2xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Departments;