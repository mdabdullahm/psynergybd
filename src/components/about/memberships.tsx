"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Building } from "lucide-react";

const Memberships = () => {
  const memberships = [
    {
      org: "American Psychiatric Association (APA)",
      type: "International Member",
      location: "Washington, D.C.",
      logo: "https://i.ibb.co.com/8n5HP1Ff/diverse-group-people-sitting-together-hospital-waiting-room-preparing-meet-with-general-practitioner.jpg", // Replace with actual ImgBB links
    },
    {
      org: "Royal College of Psychiatrists",
      type: "Fellow Member",
      location: "London, UK",
      logo: "https://i.ibb.co.com/v6hzzNcS/portrait-mother-little-girl-waiting-room-clinic-woman-with-child-sitting-reception-lobby-waiting-go.jpg",
    },
    {
      org: "Bangladesh Association of Psychiatrists",
      type: "Life Member",
      location: "Dhaka, Bangladesh",
      logo: "https://i.ibb.co.com/PVVhMLC/woman-with-anger-management-issues-talking-about-addiction-with-people-aa-therapy-meeting-angry-pers.jpg",
    },
    {
      org: "World Federation for Mental Health",
      type: "Active Member",
      location: "International",
      logo: "https://i.ibb.co.com/svp9DpDT/people-wearing-mask-workshop-new-normal.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Affiliations</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Professional <span className="text-blue-600">Memberships</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Proudly affiliated with leading national and international psychiatric organizations dedicated to excellence in mental health.
          </p>
        </div>

        {/* Memberships Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {memberships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-2 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              {/* Org Logo Placeholder/Image */}
              <div className="w-72 h-72 relative mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={item.logo}
                  alt={item.org}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="font-bold text-primary text-lg mb-2 leading-tight">
                {item.org}
              </h3>
              
              <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-tighter mb-4">
                <ShieldCheck size={14} />
                {item.type}
              </div>

              <div className="mt-auto flex items-center gap-1 text-gray-400 text-xs">
                <Globe size={12} />
                {item.location}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Badge */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 border border-blue-100 text-primary font-semibold">
            <Building size={20} className="text-blue-600" />
            <span>Recognized by Global Medical Boards</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Memberships;