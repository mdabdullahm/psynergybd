"use client";

import { motion } from "framer-motion";
import { 
  MonitorSmartphone, 
  Building2, 
  AlertCircle, 
  Users, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

const ConsultationTypes = () => {
  const types = [
    {
      title: "Online Video Call",
      desc: "Connect with our specialists from the comfort of your home via secure, high-definition video conferencing.",
      icon: MonitorSmartphone,
      tag: "Most Popular",
      benefits: ["Safe & Confidential", "Zero Travel Time", "Global Access"],
    },
    {
      title: "In-Person Clinic",
      desc: "Visit our modern and peaceful clinic for a face-to-face consultation in a professional environment.",
      icon: Building2,
      tag: "Traditional",
      benefits: ["Deep Clinical Insight", "Physical Presence", "Full Diagnostics"],
    },
    {
      title: "Group Session",
      desc: "Join collaborative therapy sessions with others facing similar challenges under expert guidance.",
      icon: Users,
      tag: "Affordable",
      benefits: ["Peer Support", "Shared Experience", "Skill Building"],
    },
    {
      title: "Crisis Support",
      desc: "Immediate psychiatric attention for individuals experiencing acute mental health emergencies.",
      icon: AlertCircle,
      tag: "Urgent",
      benefits: ["Priority Booking", "Stabilization", "Direct Access"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Flexibility</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Consultation <span className="text-blue-600">Formats</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We offer multiple ways to access our services, ensuring you get the support you need in the most convenient way possible.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
              >
                {/* Status Tag */}
                <span className="absolute top-6 right-8 text-[10px] font-black uppercase tracking-widest text-blue-600 px-3 py-1 bg-blue-50 rounded-full">
                  {item.tag}
                </span>

                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-white text-primary shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-8 border-t border-gray-100 pt-6">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-gray-600 uppercase tracking-tight">
                      <CheckCircle2 size={14} className="text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/appointments"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  Choose Format
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ConsultationTypes;