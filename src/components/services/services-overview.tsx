"use client";

import { motion } from "framer-motion";
import { 
  User, 
  Users2, 
  Baby, 
  Building2, 
  BrainCircuit, 
  ShieldAlert,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const ServicesOverview = () => {
  const serviceCategories = [
    {
      title: "Individual Psychiatry",
      desc: "Comprehensive psychiatric evaluation and medication management for adults dealing with complex mental health conditions.",
      icon: User,
      features: ["Depression & Mood Disorders", "Anxiety & Panic Attacks", "Bipolar Disorder Care"],
      color: "blue"
    },
    {
      title: "Child & Adolescent",
      desc: "Specialized mental health support for children and teenagers, focusing on development and behavioral health.",
      icon: Baby,
      features: ["ADHD Management", "Autism Spectrum Support", "Behavioral Therapy"],
      color: "purple"
    },
    {
      title: "Couple & Family",
      desc: "Helping families and couples navigate relationship challenges and improve communication and emotional bonds.",
      icon: Users2,
      features: ["Marriage Counseling", "Conflict Resolution", "Family Dynamic Support"],
      color: "pink"
    },
    {
      title: "Corporate Wellness",
      desc: "Mental health programs designed for workplaces to reduce burnout and improve employee productivity and well-being.",
      icon: Building2,
      features: ["Stress Workshops", "Executive Coaching", "Burnout Prevention"],
      color: "indigo"
    },
    {
      title: "Neuropsychiatry",
      desc: "Expert care for mental health issues resulting from neurological conditions like epilepsy, stroke, or brain injury.",
      icon: BrainCircuit,
      features: ["Cognitive Assessment", "Post-Stroke Care", "Seizure Related Issues"],
      color: "cyan"
    },
    {
      title: "Crisis Intervention",
      desc: "Immediate support for individuals experiencing acute psychological distress or emergency mental health situations.",
      icon: ShieldAlert,
      features: ["Immediate Support", "Suicide Prevention", "Trauma Stabilization"],
      color: "red"
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Explore Our Comprehensive <br /> 
            <span className="text-blue-600 font-medium italic">Treatment Areas</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We provide evidence-based treatments tailored to your specific needs, ensuring a path to lasting mental wellness.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
              >
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl bg-gray-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link 
                  href="/appointments"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-blue-600 transition-colors"
                >
                  Book this service
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Icon size={80} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;