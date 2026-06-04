"use client";

import { motion } from "framer-motion";
import { Search, ChevronRight, HelpCircle, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface FAQHeroProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

const FAQHero = ({ searchQuery, setSearchQuery }: FAQHeroProps) => {
  return (
    <section className="relative pt-10 pb-20 lg:pt-14 lg:pb-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-bold">Frequently Asked Questions</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest mb-6">
              <HelpCircle size={16} />
              Support Center
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight">
              How Can We <br />
              <span className="text-blue-600 font-medium italic">Help You?</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              Search our help center or browse our most common questions regarding appointments, treatments, and confidentiality.
            </p>

            {/* Functional Search Bar */}
            <div className="relative max-w-lg mb-10 group">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers (e.g. 'Online Booking')..."
                className="w-full px-6 py-5 pl-14 rounded-[2rem] border border-gray-200 focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all shadow-sm"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={22} />
            </div>

            <div className="flex flex-wrap gap-6 text-gray-500 text-xs font-bold uppercase tracking-widest">
               <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-green-500" />
                  Verified Answers
               </div>
               <div className="flex items-center gap-2">
                  <MessageSquare size={18} className="text-blue-500" />
                  Expert Guidance
               </div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-primary shadow-2xl aspect-[4/5] lg:aspect-square"
            >
              <Image 
                src="https://i.ibb.co.com/ccRj1GzP/mature-man-feeling-concerned-while-talking-his-doctor-who-is-showing-him-medical-test-results-digita.jpg" 
                alt="Patient support"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg">
                <HelpCircle size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Quick Help</p>
                <p className="text-lg font-black text-primary">24/7 Knowledge Base</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQHero;