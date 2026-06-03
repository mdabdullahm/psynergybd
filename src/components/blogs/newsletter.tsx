"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Bell, ShieldCheck, Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-primary rounded-[1.5rem] p-10 md:p-20 text-center overflow-hidden shadow-2xl shadow-blue-900/40"
        >
          {/* Decorative Background Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-white/10 text-blue-300 mb-8 border border-white/10">
              <Bell size={40} className="animate-bounce-slow" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Stay Updated with <br /> <span className="text-blue-300 font-medium italic">Mental Wellness</span>
            </h2>
            
            <p className="text-blue-100/70 text-lg mb-12">
              Join 5,000+ subscribers and receive our latest expert articles, mental health tips, and professional resources directly in your inbox every week.
            </p>

            {/* Subscription Form */}
            {!isSubscribed ? (
              <form 
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <div className="relative flex-grow">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-300" size={20} />
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl"
                >
                  Subscribe
                  <Send size={20} />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500/50 p-6 rounded-2xl text-green-300 font-bold flex items-center justify-center gap-3"
              >
                <ShieldCheck size={24} />
                Thank you! You&apos;ve successfully subscribed.
              </motion.div>
            )}

            {/* Trust Note */}
            <div className="mt-10 flex items-center justify-center gap-2 text-blue-200/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              <ShieldCheck size={14} />
              We respect your privacy. Unsubscribe anytime.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;