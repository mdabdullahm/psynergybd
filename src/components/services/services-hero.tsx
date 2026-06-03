"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Sparkles, Activity } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-white overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-bold">Services</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6">
              <Sparkles size={16} />
              Professional & Evidence-Based Care
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight">
              Comprehensive <br />
              <span className="text-blue-600 font-medium italic">Mental Health</span> Services
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              From psychiatric evaluations to personalized therapy sessions, we offer a wide range of mental health solutions designed to help you regain your inner balance.
            </p>

            {/* Service Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-green-500 shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <span className="font-bold text-primary text-sm uppercase">Secure & Private</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-500 shadow-sm">
                  <Activity size={20} />
                </div>
                <span className="font-bold text-primary text-sm uppercase">24/7 Support</span>
              </div>
            </div>

            <Link
              href="/appointments"
              className="inline-block bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-900/20 transition-all active:scale-95"
            >
              Book Consultation Now
            </Link>
          </motion.div>

          {/* Right Visual Element */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-gray-50 shadow-2xl"
            >
              <Image 
                src="https://i.ibb.co.com/ycDKCV21/frustrated-adult-attending-therapy-session-with-male-counselor-laying-sofa-talking-about-psychologic.jpg" // Replace with your actual ImgBB link
                alt="Psychological Therapy Session"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>
            
            {/* Floating Info Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-10 z-20 bg-white p-5 rounded-2xl shadow-xl border border-gray-50 flex flex-col items-center gap-1 animate-bounce-slow">
              <p className="text-3xl font-extrabold text-primary">25+</p>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest text-center">Specialized <br />Treatments</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;