"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const FeaturedTestimonials = () => {
  const reviews = [
    {
      name: "Daniel Aris",
      role: "Corporate Executive",
      image: "https://i.ibb.co.com/dsFjGdNK/man-leaning-lamp-post-standing.jpg",
      rating: 5,
      story: "I was struggling with severe executive burnout and anxiety for over a year. The specialized care at PsynergyBD didn't just treat my symptoms; it gave me the tools to manage my stress and lead a balanced life again.",
      tag: "Burnout Recovery"
    },
    {
      name: "Sophia Rahman",
      role: "Freelance Artist",
      image: "https://i.ibb.co.com/dwm91pw7/fashion-girl-walking-summer-city.jpg",
      rating: 5,
      story: "Finding the right therapist is life-changing. My journey with social anxiety was lonely until I met the specialists here. They provided a non-judgmental space where I finally felt heard and understood.",
      tag: "Anxiety Care"
    },
    {
      name: "James Wilson",
      role: "University Professor",
      image: "https://i.ibb.co.com/VcZyn3Xs/elegant-old-man-sunny-autumn-park.jpg",
      rating: 5,
      story: "The psychiatric consultation was very thorough. They took the time to explain my diagnosis and the evidence-based treatment plan. I highly recommend them to anyone seeking professional mental health support.",
      tag: "Clinical Support"
    },
    {
      name: "Maria Garcia",
      role: "Mother & Entrepreneur",
      image: "https://i.ibb.co.com/QFb4QG0F/5546636.jpg",
      rating: 5,
      story: "Postpartum depression is a dark place to be. PsynergyBD offered me a lifeline. Their compassionate approach and constant support helped me navigate motherhood while reclaiming my own identity.",
      tag: "Postpartum Care"
    },
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Community Impact</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              Real People. <br /> <span className="text-blue-600 font-medium italic">Transformative Results.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-2xl shadow-sm border border-gray-100">
             <CheckCircle2 className="text-green-500" size={20} />
             <span className="text-primary font-bold text-sm">Verified Patient Stories</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 relative border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-10 right-10 text-blue-50">
                 <Quote size={80} strokeWidth={4} />
              </div>

              <div className="relative z-10">
                {/* Tag */}
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-md mb-6">
                  {item.tag}
                </span>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Story */}
                <p className="text-gray-600 text-lg leading-relaxed mb-10 italic">
                  {item.story}
                </p>

                {/* Patient Profile */}
                <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-tight">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedTestimonials;