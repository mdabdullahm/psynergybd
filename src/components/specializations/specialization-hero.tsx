"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Target, ShieldCheck, Award } from "lucide-react";

const SpecializationHero = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-bold">Specializations</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest mb-6">
              <Target size={16} />
              Focused Expertise
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight">
              Expert Care for <br />
              <span className="text-blue-600">Specific Minds</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              Our clinic specializes in diagnosing and treating complex mental health conditions. We provide targeted therapies for every unique psychological challenge.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-sm font-bold text-gray-700">Certified Care</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Award size={18} />
                </div>
                <span className="text-sm font-bold text-gray-700">Top Rated Experts</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointments"
                className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-900/30 transition-all active:scale-95"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-gray-50 shadow-2xl aspect-[4/5] lg:aspect-square"
            >
              <Image 
                src="https://i.ibb.co.com/r2c0QpMb/blonde-doctor-holding-female-patient-hand.jpg" // Replace with ImgBB link
                alt="Mental Health Specialization"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <Target size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Success Rate</p>
                <p className="text-xl font-black text-primary">95% Effective</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecializationHero;