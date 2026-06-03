"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Sparkles } from "lucide-react";

const FeaturedArticle = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-blue-600"></div>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
            Editor&apos;s Choice
          </span>
        </div>

        {/* Featured Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
        >
          <div className="grid lg:grid-cols-2">
            
            {/* Image Side */}
            <div className="relative h-[300px] lg:h-[500px] overflow-hidden">
              <Image
                src="https://i.ibb.co.com/kgRhyK06/attractive-middle-aged-housewife-retirement-siting-modern-armchair-stylish-living-room-interior-smil.jpg" // Replace with your ImgBB link
                alt="Featured Mental Health Article"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                  <Sparkles size={12} />
                  Trending
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-blue-600" />
                  June 03, 2024
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-blue-600" />
                  8 Min Read
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                How to Maintain Mental <br />
                Stability in a Fast-Paced World
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-10 line-clamp-3">
                In today&apos;s hyper-connected and demanding environment, emotional burnout is more common than ever. Discover 10 research-backed strategies used by our senior psychiatrists to help you build mental resilience and find your inner peace.
              </p>

              {/* Author & Button */}
              <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary leading-none">Dr. Sarah Johnson</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Senior Psychiatrist</p>
                  </div>
                </div>

                <Link 
                  href="/blogs/mental-stability"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-900/30 transition-all active:scale-95 group/btn"
                >
                  Read Full Article
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArticle;