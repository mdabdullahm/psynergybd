"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, CalendarCheck, ShieldCheck, Heart } from "lucide-react";

const AppointmentHero = () => {
  return (
    <section className="relative pt-10 pb-20 lg:pt-14 lg:pb-32 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[5%] left-[-5%] w-[350px] h-[350px] bg-blue-100/40 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-bold">Book Appointment</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest mb-6">
              <CalendarCheck size={16} />
              Easy Online Booking
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight">
              Take the First Step to a <br />
              <span className="text-blue-600">Better You</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              Schedule your professional consultation with our expert psychiatrists and psychologists. We provide a safe, confidential, and non-judgmental space for your healing.
            </p>

            {/* Trust Indicators */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-green-500 shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-tight">100% Confidential</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-red-500 shadow-sm">
                  <Heart size={20} />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-tight">Compassionate Care</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm italic">
              * Average response time for online booking is under 2 hours.
            </p>
          </motion.div>

          {/* Right Visual Element */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-gray-50 shadow-2xl aspect-[4/5]"
            >
              <Image 
                src="https://i.ibb.co.com/KjxJKtWn/candid-shot-casually-dressed-professional-woman-psychotherapist-her-fifties-touching-her-young-male.jpg" // Replace with ImgBB link
                alt="Mental Health Consultation"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            {/* Floating Status Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-10 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 animate-pulse-slow">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
              <div>
                <p className="text-primary font-bold">Specialists Available</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Book Your Slot Now</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentHero;