"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // স্ক্রল পজিশন চেক করার ফাংশন
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // পেজের একদম উপরে যাওয়ার ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-2xl shadow-blue-900/40 hover:bg-blue-600 transition-all active:scale-90 group border border-white/10"
          aria-label="Scroll to top"
        >
          <ChevronUp 
            size={24} 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
          />
          
          {/* রিপল ইফেক্ট (ঐচ্ছিক) */}
          <span className="absolute inset-0 rounded-2xl bg-white/20 animate-ping opacity-0 group-hover:opacity-100"></span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;