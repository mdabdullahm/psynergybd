"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircleHeart, Star, Users } from "lucide-react";

const TestimonialHero = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 bg-white overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100/30 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-bold">Testimonials</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest mb-6">
              <MessageCircleHeart size={16} />
              Voices of Recovery
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight">
              Words of Hope <br />
              <span className="text-blue-600 font-medium italic">& Healing</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              Discover how PsynergyBD has helped individuals reclaim their mental peace and emotional well-being through professional psychiatric care and compassionate therapy.
            </p>

            {/* Quick Trust Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                   {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-primary font-black text-xl leading-none">4.9/5.0</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">Average Rating</p>
              </div>
              <div className="w-px h-12 bg-gray-100 hidden sm:block"></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                   <Users size={20} />
                   <p className="text-primary font-black text-xl leading-none">5000+</p>
                </div>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">Happy Patients</p>
              </div>
            </div>

            <Link
              href="/appointments"
              className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-900/30 transition-all active:scale-95 inline-block"
            >
              Share Your Story
            </Link>
          </motion.div>

          {/* Right Visual Element */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-gray-50 shadow-2xl aspect-square"
            >
              <Image 
                src="https://i.ibb.co.com/pvPtfYQT/unhappy-male-patient-listening-psychologist-counselor-advice.jpg" // Replace with ImgBB link
                alt="Patient Recovery and Peace"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            {/* Floating Message Card */}
            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:flex flex-col gap-3 max-w-[200px] animate-bounce-slow">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-inner">
                <Star size={20} className="fill-blue-600" />
              </div>
              <p className="text-xs text-gray-500 font-medium italic">
                Finding help here was the best decision for my mental health.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialHero;