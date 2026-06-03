"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Sparkles, Microscope, CheckCircle } from "lucide-react";

const TreatmentMethods = () => {
  const methods = [
    {
      title: "Cognitive Behavioral Therapy (CBT)",
      desc: "A highly effective, goal-oriented treatment that focuses on changing negative thought patterns and behaviors to improve emotional regulation.",
      icon: Brain,
      benefits: ["Identify triggers", "Develop coping skills", "Anxiety reduction"],
    },
    {
      title: "Dialectical Behavior Therapy (DBT)",
      desc: "Specially designed for individuals who experience emotions very intensely. It combines mindfulness with practical social skills.",
      icon: Activity,
      benefits: ["Emotional control", "Mindfulness practice", "Interpersonal skills"],
    },
    {
      title: "Medication Management",
      desc: "Safe and personalized pharmacological treatment plans monitored by our senior psychiatrists to balance neurochemistry.",
      icon: Microscope,
      benefits: ["Precise diagnosis", "Regular monitoring", "Scientific approach"],
    },
    {
      title: "Holistic Psychotherapy",
      desc: "Focusing on the connection between mind, body, and spirit to promote long-term resilience and overall mental well-being.",
      icon: Sparkles,
      benefits: ["Stress management", "Lifestyle coaching", "Inner peace"],
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">The Science of Healing</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Our Evidence-Based <br /> <span className="text-blue-600">Treatment Methods</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We utilize the most advanced and clinically proven psychological methodologies to ensure effective and sustainable recovery for our patients.
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 md:p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-blue-600 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {method.desc}
                    </p>
                    
                    {/* Benefits List */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                      {method.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-tight">
                          <CheckCircle size={14} className="text-green-500" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TreatmentMethods;