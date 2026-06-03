"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  Brain, 
  Zap, 
  MessageCircle, 
  Baby, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const BlogCategories = () => {
  const categories = [
    { name: "Self Care", count: 12, icon: Heart, color: "text-pink-500", bg: "bg-pink-50" },
    { name: "Depression", count: 8, icon: Brain, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Anxiety", count: 15, icon: Zap, color: "text-orange-500", bg: "bg-orange-50" },
    { name: "Psychotherapy", count: 10, icon: MessageCircle, color: "text-purple-600", bg: "bg-purple-50" },
    { name: "Child Health", count: 6, icon: Baby, color: "text-green-600", bg: "bg-green-50" },
    { name: "Meditation", count: 9, icon: Sparkles, color: "text-cyan-600", bg: "bg-cyan-50" },
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Browse by Topic</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Explore Our <span className="text-blue-600">Categories</span>
            </h2>
            <p className="text-gray-500 text-sm">
              Select a category to find specialized articles and resources tailored to your interests.
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:text-blue-600 transition-colors group">
            View All Categories
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link 
                  href={`/blogs/category/${cat.name.toLowerCase()}`}
                  className="group flex flex-col items-center p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
                >
                  {/* Icon Box */}
                  <div className={`w-16 h-16 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={30} />
                  </div>
                  
                  <h3 className="font-bold text-primary text-sm mb-1 group-hover:text-blue-600 transition-colors text-center">
                    {cat.name}
                  </h3>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                    {cat.count} Articles
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BlogCategories;