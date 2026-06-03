"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Heart, 
  Activity, 
  ShieldPlus, 
  Zap, 
  UserPlus, 
  Users, 
  Stethoscope,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const MainServicesGrid = () => {
  const services = [
    {
      title: "Depression Therapy",
      desc: "Holistic care for persistent sadness, loss of interest, and emotional exhaustion using CBT and modern psychiatry.",
      icon: Heart,
      tags: ["CBT", "Mood Disorders", "Counseling"]
    },
    {
      title: "Anxiety & Panic Care",
      desc: "Specialized treatments for generalized anxiety, social phobia, and sudden panic attacks to restore your calm.",
      icon: Zap,
      tags: ["Panic Relief", "Phobia", "Relaxation"]
    },
    {
      title: "ADHD Management",
      desc: "Comprehensive diagnostic and management plans for children and adults to improve focus and productivity.",
      icon: Brain,
      tags: ["Attention", "Behavioral", "Kids & Adults"]
    },
    {
      title: "Bipolar Care",
      desc: "Expert mood stabilization and long-term management strategies for individuals living with bipolar disorder.",
      icon: Activity,
      tags: ["Mood Balance", "Psychiatry", "Monitoring"]
    },
    {
      title: "PTSD & Trauma",
      desc: "Compassionate trauma-informed care to help you process and heal from past traumatic experiences safely.",
      icon: ShieldPlus,
      tags: ["Healing", "Trauma", "PTSD"]
    },
    {
      title: "Couple Counseling",
      desc: "Improving communication, rebuilding trust, and resolving conflicts to create healthier, happier relationships.",
      icon: Users,
      tags: ["Marriage", "Relations", "Trust"]
    },
    {
      title: "Addiction Recovery",
      desc: "Evidence-based support for overcoming substance abuse and behavioral addictions with a patient-first approach.",
      icon: UserPlus,
      tags: ["Rehab", "Support", "Recovery"]
    },
    {
      title: "Psychiatric Consultation",
      desc: "Professional medical evaluations and medication management by experienced senior psychiatrists.",
      icon: Stethoscope,
      tags: ["Diagnosis", "Medication", "Expert"]
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Comprehensive Treatment <br /> <span className="text-blue-600">Programs</span>
          </h2>
          <div className="flex justify-center">
             <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-white text-primary shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-blue-50 text-blue-600 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <Link 
                  href="/appointments" 
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all"
                >
                  Book Session
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

export default MainServicesGrid;