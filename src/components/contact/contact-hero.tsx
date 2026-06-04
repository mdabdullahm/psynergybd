"use client";

import { motion } from "framer-motion";
import { ChevronRight, Phone, Mail, MessageSquare, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="relative pt-10 pb-20 lg:pt-14 lg:pb-32 bg-white overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100/30 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-bold">Contact Us</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest mb-6">
              <MessageSquare size={16} />
              We Are Here for You
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight">
              Let’s Start a <br />
              <span className="text-blue-600 font-medium italic">Conversation</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              Your journey to mental wellness begins with a single step. Reach out to us today for expert psychiatric care, counseling, or any inquiries you may have.
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Call Us</p>
                  <p className="font-bold text-primary">+880 1234 567 890</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Email Us</p>
                  <p className="font-bold text-primary">support@psynergybd.com</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Our support team is currently online
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-primary shadow-2xl aspect-square lg:aspect-[4/3]"
            >
              <Image 
                src="https://i.ibb.co.com/DDHbmPxt/young-people-talking-senior-business-leader.jpg" // Replace with actual ImgBB link
                alt="Psychological Support Team"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            {/* Floating Info Badge */}
            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Response Time</p>
                <p className="text-lg font-black text-primary">Under 2 Hours</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;