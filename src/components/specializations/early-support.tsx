"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, TrendingUp, HeartPulse, ArrowRight } from "lucide-react";
import Link from "next/link";

const EarlySupport = () => {
  const benefits = [
    {
      title: "Faster Recovery",
      desc: "Early intervention significantly reduces the duration and severity of mental health symptoms.",
      icon: Clock,
    },
    {
      title: "Prevention",
      desc: "Prevents mild issues from developing into chronic or more complex psychological conditions.",
      icon: ShieldCheck,
    },
    {
      title: "Better Outcomes",
      desc: "Statistics show that seeking help early leads to much higher success rates in long-term therapy.",
      icon: TrendingUp,
    },
    {
      title: "Quality of Life",
      desc: "Maintain your relationships, career, and physical health by addressing concerns early.",
      icon: HeartPulse,
    },
  ];

  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
              Timely Intervention
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Why Early Support <br /> 
              <span className="text-blue-300 font-medium italic">Really Matters</span>
            </h2>
            <p className="text-blue-100/80 text-lg leading-relaxed mb-10 max-w-xl">
              Waiting for symptoms to just go away often makes recovery harder. Proactive mental health care is the most effective way to reclaim your happiness and stability.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointments"
                className="bg-white text-primary px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-3 shadow-xl active:scale-95"
              >
                Start Your Recovery
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-blue-100/60 text-sm leading-relaxed">
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

export default EarlySupport;