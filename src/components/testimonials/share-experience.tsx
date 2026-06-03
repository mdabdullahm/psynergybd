"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send, Heart, Smile, MessageCircle } from "lucide-react";

const ShareExperience = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm">
          <div className="grid lg:grid-cols-5 items-stretch">
            
            {/* Left Side: Encouragement Content (2/5) */}
            <div className="lg:col-span-2 bg-primary p-10 md:p-16 text-white flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                <Heart className="text-red-400 fill-red-400" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Story Can <br /> <span className="text-blue-300 font-medium italic">Help Others</span>
              </h2>
              <p className="text-blue-100/70 text-lg leading-relaxed mb-8">
                Sharing your mental health journey is a powerful way to inspire others who are currently struggling. Your words of hope can make a real difference.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-medium text-blue-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  100% Confidential processing
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-blue-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                  Inspire the PsynergyBD community
                </div>
              </div>
            </div>

            {/* Right Side: The Form (3/5) */}
            <div className="lg:col-span-3 p-10 md:p-16 bg-white">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                      <Smile size={16} /> Your Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                  {/* Occupation Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1 flex items-center gap-2">
                      <MessageCircle size={16} /> Your Occupation
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Teacher, Artist" 
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Star Rating Section */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-primary ml-1">Rate Your Experience</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        className="transition-all active:scale-90"
                      >
                        <Star 
                          size={32} 
                          className={`${
                            star <= (hover || rating) 
                            ? "fill-yellow-400 text-yellow-400" 
                            : "text-gray-200"
                          } transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Testimonial Textarea */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Your Story</label>
                  <textarea 
                    rows={5} 
                    placeholder="Tell us about your recovery journey..." 
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-blue-900/20 transition-all"
                >
                  Submit Your Story
                  <Send size={20} />
                </motion.button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareExperience;