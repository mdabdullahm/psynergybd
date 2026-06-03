"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Moon, 
  Users, 
  Dumbbell, 
  Smartphone,
  ShieldCheck
} from "lucide-react";

const MentalHealthTips = () => {
  const tips = [
    {
      title: "Practice Mindfulness",
      desc: "Spend 10 minutes daily on deep breathing or meditation to stay grounded.",
      icon: Sparkles,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Prioritize Sleep",
      desc: "Ensure 7-9 hours of restful sleep to allow your brain to recover and reset.",
      icon: Moon,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Stay Connected",
      desc: "Talk to a friend or family member regularly to feel emotionally supported.",
      icon: Users,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Regular Exercise",
      desc: "Physical activity releases endorphins, which act as natural mood lifters.",
      icon: Dumbbell,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Unplug Regularly",
      desc: "Reduce screen time, especially before bed, to lower stress and digital anxiety.",
      icon: Smartphone,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Set Boundaries",
      desc: "Learn to say no to things that drain your mental energy and cause burnout.",
      icon: ShieldCheck,
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-primary text-white overflow-hidden relative">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-blue-300 font-bold uppercase tracking-widest text-sm mb-3">Daily Wellness</h4>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quick Tips for a <span className="text-blue-300">Healthy Mind</span>
          </h2>
          <p className="text-blue-100/60 text-lg">
            Small daily habits can make a huge impact on your long-term mental well-being. Start with these simple steps.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform ${item.color}`}>
                  <Icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-blue-100/60 text-sm leading-relaxed group-hover:text-gray-500 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MentalHealthTips;