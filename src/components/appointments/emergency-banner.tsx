"use client";

import { motion } from "framer-motion";
import { PhoneCall, AlertTriangle, LifeBuoy } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#0D0B61] p-8 md:p-12 shadow-2xl shadow-red-900/20"
        >
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Side: Content */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                <AlertTriangle size={36} className="animate-pulse" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-3">
                  In Case of Crisis?
                  <span className="hidden md:inline-block w-12 h-0.5 bg-red-500/50"></span>
                </h2>
                <p className="text-blue-100/70 max-w-md">
                  If you or someone you know is in immediate danger or experiencing a mental health emergency, please contact our 24/7 crisis line.
                </p>
              </div>
            </div>

            {/* Right Side: Emergency Number */}
            <div className="flex flex-col items-center lg:items-end gap-4 w-full lg:w-auto">
              <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col items-center md:flex-row gap-6 w-full lg:w-auto">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400 mb-1">
                    Emergency Helpline
                  </span>
                  <a 
                    href="tel:+8801234567890" 
                    className="text-3xl md:text-4xl font-black text-white hover:text-red-400 transition-colors"
                  >
                    +880 1234 567 890
                  </a>
                </div>
                <div className="h-12 w-px bg-white/10 hidden md:block"></div>
                <div className="flex items-center gap-3 bg-red-500 text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-red-900/40">
                  <LifeBuoy size={20} className="animate-spin" />
                  Available 24/7
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-blue-200/50 text-[10px] font-bold uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Confidential & Immediate Support
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyBanner;