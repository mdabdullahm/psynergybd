"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const SuccessStories = () => {
  const stories = [
    {
      name: "Alex Thompson",
      role: "Software Engineer",
      image: "https://i.ibb.co.com/5ghmVRsX/curly-man-with-crossed-arms.jpg",
      story: "The counseling sessions at PsynergyBD helped me navigate through severe burnout. I've regained my focus and feel more balanced than ever.",
      rating: 5,
    },
    {
      name: "Jessica Miller",
      role: "Graduate Student",
      image: "https://i.ibb.co.com/DPDnGxrp/woman-red-jacket-using-tablet.jpg",
      story: "I struggled with social anxiety for years. The personalized approach here made me feel safe and supported. Truly a life-changing experience.",
      rating: 5,
    },
    {
      name: "David Rahaman",
      role: "Business Owner",
      image: "https://i.ibb.co.com/0pZ1ZpmK/serious-young-caucasian-superhero-man-optical-glasses-wearing-suit-with-red-cloak-stands-sideways-wi.jpg",
      story: "The psychiatrists here are incredibly professional. Their evidence-based treatment for my depression has given me a second chance at life.",
      rating: 5,
    },
    {
      name: "Sophia Lee",
      role: "Creative Director",
      image: "https://i.ibb.co.com/TxKvfpp6/woman-with-camera-backpack.jpg",
      story: "Finding a therapist who actually listens is hard. PsynergyBD provided me with tools that I use every day to manage my bipolar disorder.",
      rating: 5,
    },
    {
      name: "Mark Stevens",
      role: "Athlete",
      image: "https://i.ibb.co.com/zW88611F/portrait-young-handsome-man-with-curly-hair.jpg",
      story: "Mental health is just as important as physical health. The team here helped me recover from performance anxiety and trauma.",
      rating: 5,
    },
  ];

  // লুপটি নির্বিঘ্ন (Seamless) করার জন্য লিস্টটি ডাবল করা হয়েছে
  const duplicatedStories = [...stories, ...stories];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Testimonials</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Real Stories of <span className="text-blue-600">Recovery</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Hear directly from our patients about their journey toward mental wellness and how PsynergyBD supported them.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"], // অর্ধেক পর্যন্ত গেলে আবার শুরু হবে, ফলে লুপটি বোঝা যাবে না
          }}
          transition={{
            duration: 30, // কত দ্রুত চলবে (বেশি দিলে স্লো হবে)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedStories.map((item, index) => (
            <div 
              key={index} 
              className="inline-block w-[350px] md:w-[450px] p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed mb-8 text-lg whitespace-normal">
                {item.story}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-primary">{item.name}</h4>
                  <p className="text-blue-600 text-xs font-semibold">{item.role}</p>
                </div>
                <Quote size={24} className="ml-auto text-gray-200" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays (দুই পাশে হালকা শ্যাডো যাতে কার্ডগুলো স্মুথলি ঢোকে/বের হয়) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default SuccessStories;