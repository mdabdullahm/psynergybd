"use client";

import { motion } from "framer-motion";
import { Search, ChevronRight, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BlogHero = () => {
  const categories = ["Depression", "Anxiety", "Self-Care", "Therapy", "Mental Wellness"];

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 bg-white overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4"></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-primary font-bold">Blogs & Resources</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-widest mb-6">
              <BookOpen size={16} />
              PsynergyBD Journal
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight">
              Insights for a <br />
              <span className="text-blue-600 font-medium italic">Healthier Mind</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              Explore our latest articles, expert advice, and research-backed resources to help you navigate your mental health journey.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mb-8">
              <input 
                type="text" 
                placeholder="Search articles (e.g. Anxiety tips)..."
                className="w-full px-6 py-4 pl-14 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>

            {/* Popular Categories */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Popular:</span>
              {categories.map((cat, i) => (
                <button 
                  key={i}
                  className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Element */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-gray-50 shadow-2xl aspect-[4/3] lg:aspect-square"
            >
              <Image 
                src="https://i.ibb.co.com/zHfZKBDc/young-attractive-woman-cozy-red-sweater-is-reading-book-while-sitting-home-sofa-with-cup-drink.jpg" // Replace with ImgBB link
                alt="Reading and Mental Wellness"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 z-20 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-primary font-bold leading-none">New Articles</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase mt-1">Weekly Updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;