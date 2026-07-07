import React from 'react';
import { Baby, MapPin, Phone, Mail, Globe, MessageCircle, Send, AtSign } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full mt-32">
      {/* Newsletter Card - Floating Overlap */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-6 md:px-12 lg:px-20 z-20">
        <div className="bg-white rounded-4xl p-8 md:p-12 lg:p-16 shadow-2xl shadow-blue-900/10 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Join Our <br/>
              <span className="text-slate-800">Community</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base max-w-md mx-auto lg:mx-0">
              Subscribe for the latest fertility news, success stories, and expert advice.
            </p>
          </div>

          {/* Form */}
          <div className="flex-1 w-full max-w-lg">
             <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-slate-400 ml-4 uppercase tracking-wider">Your Email</label>
                <div className="relative group">
                   <input 
                      type="email" 
                      placeholder="example@email.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-full py-4 pl-6 pr-40 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium"
                   />
                   <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 md:px-8 font-bold transition-all duration-300 shadow-lg shadow-blue-600/20 flex items-center gap-2">
                      <span>Submit</span>
                      <Send className="w-4 h-4" />
                   </button>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-blue-600 pt-48 pb-12 md:pb-20 px-6 md:px-12 lg:px-20 text-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 border-b border-blue-500/30 pb-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Baby className="w-8 h-8 text-white" strokeWidth={2.5} />
                <span className="text-2xl font-bold tracking-tight text-white">MOM Fertility</span>
              </div>
              
              <p className="text-blue-100 font-medium text-sm leading-relaxed max-w-xs">
                MOM Fertility Clinic & IVF Center
              </p>

              <div className="flex flex-col gap-4 mt-2">
                 <div className="flex items-start gap-3 text-blue-100/80 hover:text-white transition-colors cursor-pointer group">
                    <div className="w-6 h-6 rounded-full bg-blue-500/50 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
                       <MapPin className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">123 Hope Avenue, New York, NY 10001</span>
                 </div>
                 <div className="flex items-center gap-3 text-blue-100/80 hover:text-white transition-colors cursor-pointer group">
                    <div className="w-6 h-6 rounded-full bg-blue-500/50 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
                       <Phone className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">(888) 123-BABY</span>
                 </div>
                 <div className="flex items-center gap-3 text-blue-100/80 hover:text-white transition-colors cursor-pointer group">
                    <div className="w-6 h-6 rounded-full bg-blue-500/50 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
                       <Mail className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm font-medium">care@momfertility.com</span>
                 </div>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="lg:col-span-3 lg:pl-8">
              <ul className="flex flex-col gap-4">
                 <li><a href="#" className="text-blue-100/70 hover:text-white font-medium text-sm transition-colors">About Us</a></li>
                 <li><a href="#" className="text-blue-100/70 hover:text-white font-medium text-sm transition-colors">Our Doctors</a></li>
                 <li><a href="#" className="text-blue-100/70 hover:text-white font-medium text-sm transition-colors">Treatments</a></li>
                 <li><a href="#" className="text-blue-100/70 hover:text-white font-medium text-sm transition-colors">Success Rates</a></li>
                 <li><a href="#" className="text-blue-100/70 hover:text-white font-medium text-sm transition-colors">Financial Guide</a></li>
              </ul>
            </div>

             {/* Links Column 2 */}
             <div className="lg:col-span-3">
              <ul className="flex flex-col gap-4">
                 <li><a href="#" className="text-blue-100/70 hover:text-white font-medium text-sm transition-colors">Patient Portal</a></li>
                 <li><a href="#" className="text-blue-100/70 hover:text-white font-medium text-sm transition-colors">Fertility Blog</a></li>
                 <li><a href="#" className="text-blue-100/70 hover:text-white font-medium text-sm transition-colors">Contact Us</a></li>
                 <li><a href="#" className="text-blue-100/70 hover:text-white font-medium text-sm transition-colors">FAQs</a></li>
              </ul>
            </div>

             {/* Links Column 3 */}
             <div className="lg:col-span-2 flex flex-col gap-8">
               <ul className="flex flex-col gap-4">
                  <li><a href="#" className="text-blue-100/70 hover:text-white font-medium text-sm transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-blue-100/70 hover:text-white font-medium text-sm transition-colors">Terms of Service</a></li>
               </ul>

               <div className="flex flex-col gap-4">
                  <span className="text-sm font-bold text-white tracking-wide">Follow Us</span>
                  <div className="flex items-center gap-3">
                     <a href="#" className="w-8 h-8 rounded-full bg-blue-500/30 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all duration-300">
                        <Globe className="w-4 h-4" />
                     </a>
                     <a href="#" className="w-8 h-8 rounded-full bg-blue-500/30 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all duration-300">
                        <MessageCircle className="w-4 h-4" />
                     </a>
                     <a href="#" className="w-8 h-8 rounded-full bg-blue-500/30 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all duration-300">
                        <AtSign className="w-4 h-4" />
                     </a>
                     <a href="#" className="w-8 h-8 rounded-full bg-blue-500/30 hover:bg-white hover:text-blue-600 flex items-center justify-center transition-all duration-300">
                        <Send className="w-4 h-4" />
                     </a>
                  </div>
               </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="text-center">
             <p className="text-blue-200/60 text-xs font-medium tracking-wide">Copyright © 2024 MOM Fertility Clinic. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;