"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, Users, Star } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative pt-14 pb-24 lg:pt-20 lg:pb-32 bg-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Right Side: Doctor Image (Mobile-এ নিচে যাবে, Desktop-এ ডান পাশে) */}
          <div className="relative order-2 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-primary-50 shadow-2xl"
            >
              <Image 
                src="https://i.ibb.co.com/XfpfLPwL/close-up-senior-person-while-learning.jpg" // Replace with your actual ImgBB link
                alt="Dr. Sarah Johnson - Senior Psychiatrist"
                width={600}
                height={750}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </motion.div>
            
            {/* Experience Floating Card */}
            <div className="absolute -bottom-10 -left-6 md:left-0 z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">12+</p>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Years Exp.</p>
                </div>
              </div>
            </div>

            {/* Rating Floating Card */}
            <div className="absolute top-10 -right-4 z-20 bg-white px-5 py-3 rounded-2xl shadow-lg border border-gray-50 flex items-center gap-2">
              <Star className="fill-yellow-400 text-yellow-400" size={18} />
              <span className="font-bold text-primary">4.9/5.0</span>
              <span className="text-gray-400 text-xs">Rating</span>
            </div>
          </div>

          {/* Left Side: Content */}
          <div className="order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
                Meet Your Doctor
              </h4>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight">
                Hi, I&apos;m <br />
                <span className="text-blue-600">Dr. Sarah Johnson</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
                Dedicated to providing compassionate and evidence-based mental health care. I believe in a holistic approach to restore your inner peace and emotional balance.
              </p>

              {/* Quick Info Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary">Education</h5>
                    <p className="text-gray-500 text-sm">MD in Clinical Psychiatry, Harvard Medical School</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                    <Users size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary">Patients Helped</h5>
                    <p className="text-gray-500 text-sm">Successfully treated 5000+ individuals worldwide</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="border-2 border-primary hover:border-white text-primary hover:text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary transition-all">
                  Book a Consultation
                </button>
                <button className="border-2 border-primary hover:border-white text-primary hover:text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary transition-all">
                  View Qualifications
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;