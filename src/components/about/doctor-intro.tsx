"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Heart, Sparkles, BrainCircuit } from "lucide-react";

const DoctorIntro = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Patient Centric",
      desc: "Putting your needs and comfort at the heart of every treatment."
    },
    {
      icon: BrainCircuit,
      title: "Evidence Based",
      desc: "Utilizing latest scientific research for effective mental recovery."
    },
    {
      icon: Sparkles,
      title: "Holistic Healing",
      desc: "Focusing on both mind and lifestyle for long-term wellness."
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Images & Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white aspect-[4/5]">
              <Image 
                src="https://i.ibb.co.com/Z1NMLZ8J/male-doctor-taking-notes-while-working-with-colleagues-medical-clinic.jpg" // Replace with ImgBB link
                alt="Doctor's Work"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border border-gray-100 hidden md:block">
              <Quote className="text-blue-600 mb-2" size={32} />
              <p className="text-gray-600 text-sm italic font-medium">
                Healing starts with listening, not just prescribing.
              </p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                Dedicated to Helping You Reclaim Your <span className="text-blue-600">Peace of Mind</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  With over 12 years of experience in clinical psychiatry, I have dedicated my career to understanding the complexities of the human mind. My journey began with a simple mission: to provide a safe haven for those struggling in silence.
                </p>
                <p>
                  I believe that mental health is not just the absence of illness, but the presence of resilience and joy. My approach combines clinical expertise with deep empathy, ensuring that every patient feels seen, heard, and valued.
                </p>
              </div>

              {/* Core Values Grid */}
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                {coreValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-bold text-primary">{value.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{value.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Signature Section */}
              <div className="pt-10 flex flex-col gap-2">
                <p className="text-primary font-bold text-lg italic">Dr. Sarah Johnson</p>
                <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Senior Consultant Psychiatrist</p>
                {/* You can add a signature image link from ImgBB here if you have one */}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DoctorIntro;