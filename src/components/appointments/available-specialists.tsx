"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Star, CheckCircle2, ArrowRight } from "lucide-react";

const AvailableSpecialists = () => {
  const specialists = [
    {
      name: "Dr. Sarah Johnson",
      role: "Senior Psychiatrist",
      specialty: "Depression & Mood Disorders",
      image: "https://i.ibb.co.com/dsMLVd2f/doctor-with-smile.jpg",
      availability: "Available Today",
      nextSlot: "04:30 PM",
      rating: "4.9"
    },
    {
      name: "Dr. Michael Chen",
      role: "Clinical Psychologist",
      specialty: "Anxiety & PTSD Specialist",
      image: "https://i.ibb.co.com/HT7YpLwJ/female-doctor-holding-her-medical-mask-shoulder.jpg",
      availability: "Available Tomorrow",
      nextSlot: "10:00 AM",
      rating: "5.0"
    },
    {
      name: "Dr. Emily Williams",
      role: "Child Specialist",
      specialty: "ADHD & Pediatric Psychiatry",
      image: "https://i.ibb.co.com/sp8d0cbB/doctor-analyzing-with-microscope.jpg",
      availability: "Next: Mon, June 5",
      nextSlot: "11:30 AM",
      rating: "4.8"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Team</h4>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Available <span className="text-blue-600 font-medium italic">Specialists</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose from our highly qualified experts who are ready to support your mental health journey.
          </p>
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
              className="group bg-gray-50 rounded-[2.5rem] p-6 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
            >
              {/* Doctor Header Info */}
              <div className="flex items-center gap-5 mb-8">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md shrink-0">
                  <Image 
                    src={doctor.image} 
                    alt={doctor.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-blue-600 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">{doctor.role}</p>
                  <div className="flex items-center gap-1 mt-1 text-yellow-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold text-primary">{doctor.rating}</span>
                  </div>
                </div>
              </div>

              {/* Specialty & Availability */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>{doctor.specialty}</span>
                </div>
                
                <div className="p-4 rounded-2xl bg-white border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-600" />
                    <span className="text-xs font-bold text-primary uppercase">{doctor.availability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-blue-600" />
                    <span className="text-xs font-bold text-primary">{doctor.nextSlot}</span>
                  </div>
                </div>
              </div>

              {/* Select Button */}
              <button className="w-full bg-white text-primary py-4 rounded-xl font-bold border border-primary/10 hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm">
                Select Specialist
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm italic">
            Don&apos;t see your preferred doctor? Call us to check for specific slot availability.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AvailableSpecialists;