"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Resources = () => {
  const articles = [
    {
      title: "Understanding Anxiety: Signs and Management",
      desc: "Anxiety can be overwhelming, but understanding its triggers is the first step toward recovery.",
      image: "https://i.ibb.co/6P0qLzS/article-1.jpg", // Replace with ImgBB link
      category: "Mental Health",
      readTime: "5 min read",
      href: "/blogs/anxiety-management"
    },
    {
      title: "10 Daily Habits for a Positive Mindset",
      desc: "Small changes in your daily routine can lead to significant improvements in your emotional well-being.",
      image: "https://i.ibb.co/LhY0mS7/article-2.jpg", // Replace with ImgBB link
      category: "Self Care",
      readTime: "4 min read",
      href: "/blogs/positive-mindset"
    },
    {
      title: "The Role of Therapy in Personal Growth",
      desc: "Therapy isn't just for crises. Learn how professional counseling can help you grow as a person.",
      image: "https://i.ibb.co/Vv9XvYh/article-3.jpg", // Replace with ImgBB link
      category: "Therapy",
      readTime: "6 min read",
      href: "/blogs/therapy-benefits"
    },
  ];

  return (
    <section className="py-10 bg-gray-50/30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Resources</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Insights & Mental Health <br /> <span className="text-blue-600">Resources</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Stay informed with our latest articles, guides, and tips on maintaining better mental and emotional health.
            </p>
          </div>
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-600 transition-colors group"
          >
            See All Articles
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {item.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={14} />
                    Article
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 leading-tight hover:text-blue-600 transition-colors">
                  <Link href={item.href}>{item.title}</Link>
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                <Link 
                  href={item.href}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm group"
                >
                  Read Full Article
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Resources;