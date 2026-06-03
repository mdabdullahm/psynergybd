"use client";

import { motion } from "framer-motion";
import { Smile, ThumbsUp, ShieldCheck, Heart, Star } from "lucide-react";

const ClientSatisfaction = () => {
  const metrics = [
    { label: "Treatment Effectiveness", value: 98, icon: Heart, color: "text-red-500" },
    { label: "Patient Confidentiality", value: 100, icon: ShieldCheck, color: "text-blue-600" },
    { label: "Professionalism", value: 99, icon: ThumbsUp, color: "text-green-500" },
    { label: "Ease of Booking", value: 97, icon: Smile, color: "text-purple-500" },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Big Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary p-12 md:p-16 rounded-[3rem] text-white relative shadow-2xl shadow-blue-900/40"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">99%</h2>
              <h3 className="text-2xl font-bold mb-6 text-blue-200">Overall Patient Satisfaction</h3>
              <p className="text-blue-100/70 text-lg leading-relaxed mb-10">
                Based on a survey of over 5,000 patients, we are proud to maintain one of the highest satisfaction rates in the mental health industry.
              </p>
              
              <div className="flex items-center gap-4 p-6 bg-white/10 rounded-2xl border border-white/10">
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <span className="font-bold">Top Rated on Google & Trustpilot</span>
              </div>
            </div>
            {/* Background Icon */}
            <div className="absolute bottom-[-20px] right-[-20px] opacity-10">
               <Smile size={250} />
            </div>
          </motion.div>

          {/* Right Side: Detailed Metrics */}
          <div className="space-y-10">
            <div className="max-w-md">
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Metrics of Care</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">The Standard of Care <span className="text-blue-600">You Deserve</span></h2>
            </div>

            <div className="space-y-8">
              {metrics.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gray-50 ${item.color}`}>
                          <Icon size={20} />
                        </div>
                        <span className="font-bold text-primary">{item.label}</span>
                      </div>
                      <span className="font-black text-primary">{item.value}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-blue-600 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientSatisfaction;