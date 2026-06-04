"use client";

import { motion } from "framer-motion";
import { 
  HeartHandshake, 
  ShieldCheck, 
  UserCheck, 
  Sparkles, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const WhyReachOut = () => {
  const reasons = [
    {
      title: "Non-Judgmental Space",
      desc: "We provide a safe haven where you can express your thoughts and feelings without fear of being judged.",
      icon: HeartHandshake,
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      title: "Strict Confidentiality",
      desc: "Your privacy is our utmost priority. All conversations and records are 100% secure and private.",
      icon: ShieldCheck,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Expert Guidance",
      desc: "Connect with board-certified psychiatrists who use evidence-based methods for your recovery.",
      icon: UserCheck,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Holistic Healing",
      desc: "We focus on long-term wellness by addressing the root causes of mental health challenges.",
      icon: Sparkles,
      color: "text-teal-600",
      bg: "bg-teal-50"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Emotional Connect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">You Are Not Alone</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Compassionate Care at <br /> 
                <span className="text-blue-600 font-medium italic">Every Step of Your Way</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Taking the first step toward mental wellness can feel overwhelming. We are here to make that process easier, supportive, and completely transparent. Reach out because your mental health matters as much as your physical health.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100">
               <p className="text-primary font-bold text-lg italic mb-4">
                 Recovery is a journey, not a destination. Let us walk this path with you.
               </p>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-black text-xs">
                    SJ
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary leading-none">Dr. Sarah Johnson</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Founder, PsynergyBD</p>
                  </div>
               </div>
            </div>

            <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-600 transition-all group"
            >
              Learn more about our philosophy
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right Side: Practical Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyReachOut;