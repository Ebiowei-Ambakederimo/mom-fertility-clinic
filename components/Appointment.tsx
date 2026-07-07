import React from 'react';
import { Calendar, Clock, ChevronDown, MoveRight, Stethoscope, Heart, Plus, Building2, Pill } from 'lucide-react';

const Appointment: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-sky-50/50 overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply opacity-60"></div>
       </div>

       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
             {/* Left Column: Image */}
             <div className="relative hidden lg:block h-full min-h-[600px]">
                <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform -rotate-3 scale-95 origin-bottom-left opacity-50"></div>
                <div className="relative z-10 h-full rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10">
                   <img
                      src="https://images.unsplash.com/photo-1590611936733-5323338debe2?q=80&w=900&auto=format&fit=crop"
                      alt="Fertility Doctor"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                   />
                </div>
             </div>

             {/* Right Column: Form */}
             <div className="w-full">
                <div className="mb-10">
                   <span className="text-blue-500 font-bold tracking-wider text-sm uppercase block mb-2">Start Your Journey</span>
                   <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Book a Consultation</h2>
                </div>

                <form className="flex flex-col gap-5">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                         <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wide">Name</label>
                         <input type="text" placeholder="Jane Doe" className="w-full bg-transparent border border-slate-300 rounded-xl px-5 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" />
                      </div>
                      <div className="flex flex-col gap-2">
                         <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wide">Phone Number</label>
                         <input type="tel" placeholder="(123) 456 - 789" className="w-full bg-transparent border border-slate-300 rounded-xl px-5 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" />
                      </div>
                   </div>

                   <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wide">Email Address</label>
                      <input type="email" placeholder="jane@example.com" className="w-full bg-transparent border border-slate-300 rounded-xl px-5 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                         <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wide">Interest</label>
                         <div className="relative">
                            <select className="w-full bg-transparent border border-slate-300 rounded-xl px-5 py-4 text-slate-800 appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer font-medium">
                               <option>IVF Information</option>
                               <option>Egg Freezing</option>
                               <option>Infertility Testing</option>
                               <option>Second Opinion</option>
                            </select>
                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                         </div>
                      </div>
                      <div className="flex flex-col gap-2">
                         <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wide">Location</label>
                         <div className="relative">
                            <select className="w-full bg-transparent border border-slate-300 rounded-xl px-5 py-4 text-slate-800 appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer font-medium">
                               <option>New York Clinic</option>
                               <option>Los Angeles Clinic</option>
                               <option>Virtual Consultation</option>
                            </select>
                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                         <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wide">Preferred Date</label>
                         <div className="relative">
                            <input type="text" placeholder="Select date" className="w-full bg-transparent border border-slate-300 rounded-xl px-5 py-4 pl-12 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" />
                            <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                         </div>
                      </div>
                      <div className="flex flex-col gap-2">
                         <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wide">Preferred Time</label>
                         <div className="relative">
                            <input type="text" placeholder="Morning / Afternoon" className="w-full bg-transparent border border-slate-300 rounded-xl px-5 py-4 pl-12 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium" />
                            <Clock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                         </div>
                      </div>
                   </div>

                   <div className="pt-6">
                      <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-10 py-4 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 w-fit">
                         <span>Request Appointment</span>
                         <MoveRight className="w-5 h-5" />
                      </button>
                   </div>
                </form>
             </div>
          </div>

          {/* Logos Section - Updated to generic medical trust indicators */}
          <div className="border-t border-slate-200 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                
                <div className="flex items-center gap-3 justify-center group cursor-pointer hover:opacity-100 transition-opacity">
                    <div className="relative w-10 h-10 border-2 border-slate-400 rounded-full flex items-center justify-center group-hover:border-blue-500 transition-colors">
                        <Stethoscope className="w-6 h-6 text-slate-500 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-700 group-hover:text-slate-900 text-lg leading-none tracking-tight">ASRM</span>
                        <span className="text-[9px] text-slate-400 tracking-widest uppercase mt-0.5">MEMBER</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 justify-center group cursor-pointer hover:opacity-100 transition-opacity">
                    <div className="relative">
                       <Heart className="w-10 h-10 text-slate-400 fill-slate-200 group-hover:text-blue-500 group-hover:fill-blue-50 transition-colors" />
                       <Plus className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white" strokeWidth={4} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-700 group-hover:text-slate-900 text-lg leading-none tracking-tight">HealthSafe</span>
                        <span className="text-[9px] text-slate-400 tracking-widest uppercase mt-0.5">CERTIFIED</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 justify-center group cursor-pointer hover:opacity-100 transition-opacity">
                   <div className="relative">
                        <Stethoscope className="w-10 h-10 text-slate-400 group-hover:text-blue-500 transition-colors transform -scale-x-100" />
                        <Heart className="absolute bottom-0 right-0 w-4 h-4 text-slate-400 fill-slate-400 group-hover:text-blue-500 group-hover:fill-blue-500 transition-colors" />
                   </div>
                   <div className="flex flex-col">
                        <span className="font-bold text-slate-700 group-hover:text-slate-900 text-lg leading-none tracking-tight">TopDoc</span>
                        <span className="text-[9px] text-slate-400 tracking-widest uppercase mt-0.5">AWARD 2024</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 justify-center group cursor-pointer hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 border-2 border-slate-400 group-hover:border-blue-500 rounded-lg flex items-center justify-center transition-colors">
                        <Building2 className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-700 group-hover:text-slate-900 text-lg leading-none tracking-tight">SART</span>
                        <span className="text-[9px] text-slate-400 tracking-widest uppercase mt-0.5">REGISTERED</span>
                    </div>
                </div>

                <div className="flex items-center gap-3 justify-center group cursor-pointer hover:opacity-100 transition-opacity col-span-2 md:col-span-1">
                    <div className="w-10 h-10 border-2 border-slate-400 group-hover:border-blue-500 rounded-tr-[1.2rem] rounded-bl-[1.2rem] flex items-center justify-center transition-colors">
                        <Pill className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors rotate-45" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-700 group-hover:text-slate-900 text-lg leading-none tracking-tight">FDA</span>
                        <span className="text-[9px] text-slate-400 tracking-widest uppercase mt-0.5">APPROVED LAB</span>
                    </div>
                </div>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-16">
                <button className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-100"></button>
                <button className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors"></button>
                <button className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-colors"></button>
            </div>
          </div>
       </div>
    </section>
  )
}

export default Appointment;