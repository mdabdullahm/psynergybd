"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BadgeCheck, BookOpenCheck } from "lucide-react";

const Qualifications = () => {
  const education = [
    {
      year: "2012 - 2015",
      degree: "MD in Clinical Psychiatry",
      institute: "Harvard Medical School, USA",
    },
    {
      year: "2006 - 2011",
      degree: "MBBS (Bachelor of Medicine & Surgery)",
      institute: "Dhaka Medical College & Hospital",
    },
    {
      year: "2016",
      degree: "Specialization in Child Psychology",
      institute: "King's College London, UK",
    },
  ];

  const certifications = [
    {
      title: "Board Certified Psychiatrist",
      provider: "American Board of Psychiatry and Neurology",
    },
    {
      title: "Fellowship in Behavioral Medicine",
      provider: "Royal College of Psychiatrists, UK",
    },
    {
      title: "Lifetime Member",
      provider: "Bangladesh Medical & Dental Council (BMDC)",
    },
    {
      title: "Clinical Research Award",
      provider: "Global Mental Health Summit 2022",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Academic Excellence</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Education & <span className="text-blue-600">Professional Qualifications</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side: Education Timeline */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 text-primary rounded-xl">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Academic Journey</h3>
            </div>

            <div className="relative border-l-2 border-gray-100 ml-4 pl-8 space-y-12">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-primary shadow-sm"></div>
                  
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold text-primary mt-2">{item.degree}</h4>
                  <p className="text-gray-500 mt-1 flex items-center gap-2">
                    <BookOpenCheck size={16} />
                    {item.institute}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Certifications & Memberships */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 text-primary rounded-xl">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Board Certifications</h3>
            </div>

            <div className="grid sm:grid-cols-1 gap-4">
              {certifications.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-4 group hover:bg-primary transition-all duration-300"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:bg-white/20 group-hover:text-white">
                    <BadgeCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm group-hover:text-blue-100 transition-colors">
                      {item.provider}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extra Info Box */}
            <div className="mt-8 p-6 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/20">
               <p className="text-sm italic opacity-90">
                Continuing education is the key to providing the most effective and modern treatments for my patients.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Qualifications;