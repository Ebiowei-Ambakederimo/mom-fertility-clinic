import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the success rate of IVF at MOM Fertility?",
      answer: "Our success rates are among the highest in the region, consistently exceeding national averages. Success depends on various factors including age and diagnosis, but our cumulative pregnancy rate for women under 35 is over 75%."
    },
    {
      question: "How much does a typical IVF cycle cost?",
      answer: "Costs vary depending on the specific treatment plan and medication required. We offer transparent pricing packages and financial counseling to help you understand all costs upfront. We also partner with several financing providers."
    },
    {
      question: "Do you offer gender selection?",
      answer: "Yes, we offer gender selection for family balancing through Preimplantation Genetic Testing (PGT-A), which also screens embryos for chromosomal abnormalities to ensure a healthy pregnancy."
    },
    {
      question: "Is there an age limit for fertility treatment?",
      answer: "We evaluate every patient individually. generally, we treat women with their own eggs up to age 45, and women using donor eggs up to age 50-55, pending a health clearance."
    },
    {
      question: "How long does the IVF process take?",
      answer: "One full cycle of IVF typically takes about 3 to 4 weeks from the start of ovarian stimulation to the pregnancy test. However, preparation and testing beforehand may take a few weeks."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-slate-50 overflow-hidden">
       {/* Background Decorative Blob */}
       <div className="absolute bottom-0 left-[-20%] w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl mix-blend-multiply pointer-events-none opacity-50"></div>

       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left Column: Title */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 mb-12 lg:mb-0">
              <span className="text-blue-500 font-bold tracking-wider text-sm uppercase block mb-3">
                Questions
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Frequently Asked
              </h2>
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-8 flex flex-col gap-4">
               {faqs.map((faq, index) => {
                 const isOpen = openIndex === index;
                 return (
                   <div 
                     key={index}
                     onClick={() => toggleFAQ(index)}
                     className={`
                        bg-white rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden border
                        ${isOpen 
                          ? 'shadow-xl shadow-blue-500/10 border-blue-100' 
                          : 'shadow-sm border-transparent hover:border-blue-50 hover:shadow-md'
                        }
                     `}
                   >
                     <div className="p-6 md:p-8 flex justify-between items-center gap-4">
                        <h3 className={`text-lg md:text-xl font-semibold pr-8 transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-slate-800'}`}>
                          {faq.question}
                        </h3>
                        <div className={`
                          w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0
                          ${isOpen ? 'bg-blue-600 rotate-180' : 'bg-slate-100 text-slate-500'}
                        `}>
                          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-slate-500'}`} />
                        </div>
                     </div>
                     
                     <div 
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                     >
                        <div className="overflow-hidden">
                           <div className="px-6 md:px-8 pb-8 pt-0">
                              <p className="text-slate-500 leading-relaxed text-sm md:text-base border-t border-slate-100 pt-6">
                                {faq.answer}
                              </p>
                           </div>
                        </div>
                     </div>
                   </div>
                 );
               })}
            </div>

         </div>
       </div>
    </section>
  );
};

export default FAQ;