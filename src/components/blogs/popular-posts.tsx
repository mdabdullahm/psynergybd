"use client";

import { motion } from "framer-motion";
import { TrendingUp, Eye, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PopularPosts = () => {
  const trending = [
    {
      rank: "01",
      title: "10 Proven Ways to Reduce Daily Anxiety Naturally",
      views: "12K",
      time: "5 min",
      image: "https://i.ibb.co.com/GQ16CCQK/unpleased-with-closed-eyes-young-girl-covered-head-with-notebook-sitting-floor-coffee-table-living-r.jpg"
    },
    {
      rank: "02",
      title: "Understanding the Connection Between Diet and Mood",
      views: "8.5K",
      time: "7 min",
      image: "https://i.ibb.co.com/tp0DPVLr/portrait-woman-checking-grocery-list-looking-vegetables-holding-notebook-reading-recipe-while.jpg"
    },
    {
      rank: "03",
      title: "Why Meditation is Essential for Modern Professionals",
      views: "6.2K",
      time: "4 min",
      image: "https://i.ibb.co.com/LzmWVw3S/young-woman-with-laptop-window-summer-morning.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50/30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-2xl bg-primary text-white shadow-lg">
            <TrendingUp size={24} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary italic">Trending Now</h2>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Most Read Articles This Week</p>
          </div>
        </div>

        {/* Popular List Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {trending.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex items-center gap-6 p-4 rounded-[2rem] bg-white border border-transparent hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              {/* Ranking Number */}
              <div className="shrink-0">
                <span className="text-4xl md:text-5xl font-black text-gray-100 group-hover:text-blue-50 transition-colors">
                  {post.rank}
                </span>
              </div>

              {/* Thumbnail (Small) */}
              <div className="relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden shadow-sm">
                <Image 
                   src={post.image} 
                   alt={post.title} 
                   fill 
                   className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                   <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                      <Eye size={12} className="text-blue-500" />
                      {post.views}
                   </div>
                   <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                      <Clock size={12} className="text-blue-500" />
                      {post.time}
                   </div>
                </div>
                <h3 className="text-sm md:text-base font-bold text-primary leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                  <Link href="/blogs/trending-article">
                    {post.title}
                  </Link>
                </h3>
              </div>

              {/* Quick Action */}
              <div className="absolute right-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                 <ArrowRight size={20} className="text-blue-600" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularPosts;