"use client";

import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  CalendarDays, 
  MessageCircleHeart, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const GetStarted = () => {
  const steps = [
    {
      title: "Select Your Service",
      desc: "Browse our specialized mental health services and choose the one that best fits your current needs.",
      icon: ClipboardCheck,
      step: "01"
    },
    {
      title: "Book Your Slot",
      desc: "Use our easy online booking system to select a date and time that is convenient for you.",
      icon: CalendarDays,
      step: "02"
    },
    {
      title: "Start Your Journey",
      desc: "Attend your first consultation session and begin your path toward mental wellness and recovery.",
      icon: MessageCircleHeart,
      step: "03"
    },
  ];

  return (
    <section className="py-20 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-50 to-transparent -z-10"></div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Begin Today</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            How to Get Started <br /> <span className="text-blue-600 font-medium italic">With Your Recovery</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Starting your mental health journey is a brave step. We’ve made the process simple and supportive for you.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 border-t-2 border-dashed border-blue-200 -z-10"></div>

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 bg-primary text-white text-xs font-black px-4 py-1 rounded-full shadow-lg z-20">
                  STEP {item.step}
                </div>

                {/* Icon Box */}
                <div className="w-24 h-24 rounded-[2rem] bg-white text-primary shadow-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10 border border-gray-100">
                  <Icon size={40} />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm px-4">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Final Action Button */}
        <div className="mt-20 text-center">
          <Link
            href="/appointments"
            className="inline-flex items-center gap-3 bg-primary text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-900/30 transition-all hover:-translate-y-1 active:scale-95"
          >
            Ready to Begin? Book Now
            <ArrowRight size={22} />
          </Link>
          <p className="mt-6 text-gray-400 text-sm italic">
            No credit card required for initial inquiry.
          </p>
        </div>

      </div>
    </section>
  );
};

export default GetStarted;