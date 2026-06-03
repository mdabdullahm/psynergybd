"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const LatestArticles = () => {
  const blogPosts = [
    {
      title: "Common Signs of Social Anxiety You Shouldn't Ignore",
      excerpt: "Social anxiety is more than just shyness. Learn how to identify the subtle signs and when to seek professional help.",
      image: "https://i.ibb.co.com/DXXbvmM/low-angle-sad-boy-being-bullied-stairs.jpg", // Replace with ImgBB link
      date: "May 28, 2024",
      readTime: "6 min read",
      category: "Anxiety",
      author: "Dr. Sarah Johnson"
    },
    {
      title: "How Mindfulness Changes Your Brain Structure",
      excerpt: "Scientific research shows that regular meditation can actually rewire your brain for better emotional regulation.",
      image: "https://i.ibb.co.com/ynGTV4Nm/young-pretty-caucasian-woman-sitting-armchair-designed-living-room-looking-doing-money-gesture.jpg",
      date: "May 25, 2024",
      readTime: "5 min read",
      category: "Self Care",
      author: "Dr. Michael Chen"
    },
    {
      title: "Supporting a Loved One Through Depression",
      excerpt: "It can be difficult to know what to say. Here is a guide on how to provide effective and compassionate support.",
      image: "https://i.ibb.co.com/HLGH2QCN/mother-consoling-her-sad-daughter.jpg",
      date: "May 22, 2024",
      readTime: "8 min read",
      category: "Depression",
      author: "Dr. Emily Williams"
    },
    {
      title: "The Impact of Sleep on Your Mental Health",
      excerpt: "Poor sleep and mental health issues often go hand in hand. Discover how to improve your sleep hygiene today.",
      image: "https://i.ibb.co.com/1t47Rqb6/medium-shot-woman-covering-her-ears-with-pillow.jpg",
      date: "May 18, 2024",
      readTime: "4 min read",
      category: "Wellness",
      author: "Dr. Robert Wilson"
    },
    {
      title: "Postpartum Depression: You are Not Alone",
      excerpt: "A deep dive into the challenges of motherhood and finding the right support during the postpartum period.",
      image: "https://i.ibb.co.com/dsmCRZLj/young-worried-mother-comforting-her-crying-baby-home.jpg",
      date: "May 15, 2024",
      readTime: "7 min read",
      category: "Motherhood",
      author: "Dr. Sarah Johnson"
    },
    {
      title: "Work-Life Balance for Mental Stability",
      excerpt: "Strategies to prevent professional burnout and maintain a healthy boundary between work and personal life.",
      image: "https://i.ibb.co.com/pHCtn6G/young-beautiful-businesswoman-meditating-table-workplace-office.jpg",
      date: "May 10, 2024",
      readTime: "5 min read",
      category: "Self Care",
      author: "Dr. Michael Chen"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Fresh Perspectives</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Latest from <span className="text-blue-600">Our Journal</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest psychological insights and mental health news from our specialized doctors.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500"
            >
              {/* Image Side */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Meta */}
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-blue-600" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-blue-600" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                  <Link href="/blogs/article-slug">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer Info */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                        <User size={14} />
                      </div>
                      <span className="text-xs font-bold text-primary">{post.author}</span>
                   </div>
                   <Link 
                    href="/blogs/article-slug" 
                    className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all"
                   >
                     <ArrowRight size={18} />
                   </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all active:scale-95 shadow-md">
            Load More Articles
          </button>
        </div>

      </div>
    </section>
  );
};

export default LatestArticles;