"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Consultant Psychiatrist",
      company: "PsynergyBD Mental Health Clinic",
      location: "Dhanmondi, Dhaka",
      period: "2020 - Present",
      desc: "Leading the clinical team and providing specialized care for complex mood disorders and anxiety cases.",
    },
    {
      title: "Consultant Psychotherapist",
      company: "Central Wellness Hospital",
      location: "Gulshan, Dhaka",
      period: "2016 - 2020",
      desc: "Worked with diverse patient groups, focusing on cognitive behavioral therapy (CBT) and trauma recovery.",
    },
    {
      title: "Resident Physician (Psychiatry)",
      company: "Dhaka Medical College Hospital",
      location: "Dhaka, Bangladesh",
      period: "2012 - 2016",
      desc: "Completed extensive residency training in clinical psychiatry and emergency mental health care.",
    },
    {
      title: "Junior Medical Officer",
      company: "General Health Care Clinic",
      location: "Chittagong, Bangladesh",
      period: "2011 - 2012",
      desc: "Handled primary patient care and initial psychiatric assessments for outpatient services.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Journey</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A decade of dedicated service in psychiatry, helping individuals navigate their mental health challenges in prestigious institutions.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
          
          {experiences.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Dot Indicator */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-100 group-hover:bg-primary group-hover:text-white text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-500 z-10">
                <Briefcase size={18} />
              </div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {item.period}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                    <MapPin size={14} />
                    {item.location}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 font-semibold mb-4 text-sm">
                  <Building2 size={16} className="text-blue-500" />
                  {item.company}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;