"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, GraduationCap } from "lucide-react";

const RelatedSpecialists = () => {
  const specialists = [
    {
      name: "Dr. Michael Chen",
      role: "Clinical Psychologist",
      image: "https://i.ibb.co.com/F4YTtq4g/female-doctor-holding-her-medical-mask-shoulder.jpg", // Replace with ImgBB link
      degrees: "PhD in Clinical Psychology",
      rating: 4.9,
    },
    {
      name: "Dr. Emily Williams",
      role: "Child Specialist",
      image: "https://i.ibb.co.com/wHw7BwZ/young-doctor-woman-wearing-stethoscope-medical-robe-crossing-hands-isolated-white-wall.jpg", // Replace with ImgBB link
      degrees: "MBBS, FCPS (Psychiatry)",
      rating: 4.8,
    },
    {
      name: "Dr. Robert Wilson",
      role: "Neuropsychiatrist",
      image: "https://i.ibb.co.com/5gm8MS8J/portrait-confident-male-doctor.jpg", // Replace with ImgBB link
      degrees: "MD, Board Certified",
      rating: 5.0,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Other Experts</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Related <span className="text-blue-600">Specialists</span>
            </h2>
            <p className="text-gray-600">
              Our clinic houses a team of highly qualified mental health professionals dedicated to your recovery.
            </p>
          </div>
          <Link 
            href="/specializations" 
            className="text-primary font-bold flex items-center gap-2 hover:text-blue-600 transition-colors group"
          >
            View All Team
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Specialists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-primary">{doctor.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-blue-600 transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 text-sm font-semibold mb-4">{doctor.role}</p>
                
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-6">
                  <GraduationCap size={16} className="text-primary" />
                  {doctor.degrees}
                </div>

                <Link
                  href="/appointments"
                  className="w-full py-3 rounded-xl border border-primary/20 text-primary font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                  Book Appointment
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RelatedSpecialists;