"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle, BrainCircuit } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      name: "David Aris",
      role: "Software Architect",
      image: "https://i.ibb.co.com/NnbXvb99/portrait-ancient-roman-man.jpg", // Replace with ImgBB link
      tag: "Depression Recovery",
      challenge: "Struggled with severe clinical depression and professional burnout for 3 years.",
      result: "Fully recovered, returned to full-time leadership, and regained emotional stability.",
      quote: "PsynergyBD didn't just provide medicine; they provided a roadmap to reclaim my life."
    },
    {
      name: "Maria Stevens",
      role: "Creative Artist",
      image: "https://i.ibb.co.com/LzQhzz7z/two-beautiful-teenage-students-walking-together.jpg", // Replace with ImgBB link
      tag: "Anxiety Management",
      challenge: "Social anxiety prevented her from attending exhibitions or meetings for years.",
      result: "Successfully hosted her first solo art gallery and manages social interactions with ease.",
      quote: "The personalized therapy changed the way I perceive fear and social situations."
    }
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-bold mb-4">
            <Sparkles size={18} className="text-blue-600" />
            Impactful Journeys
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Life-Changing <br /> <span className="text-blue-600 font-medium italic">Success Stories</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories of courage and recovery. See how our specialized treatment programs have transformed lives.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="space-y-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 border border-gray-100"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-[350px] lg:h-auto overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                      {story.tag}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-blue-600 mb-6">
                    <BrainCircuit size={24} />
                    <span className="font-bold uppercase tracking-tighter text-xs">The Transformation</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{story.name}</h3>
                  <p className="text-blue-600 font-semibold mb-8">{story.role}</p>

                  <div className="grid sm:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">The Challenge</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{story.challenge}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-green-500 uppercase tracking-widest">The Result</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-500 mt-1 shrink-0" />
                        <p className="text-gray-700 font-medium text-sm leading-relaxed">{story.result}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-100 italic text-gray-500 relative">
                    <span className="text-4xl text-blue-100 absolute -top-2 -left-4 font-serif"></span>
                    {story.quote}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6 font-medium">Your story could be next. Let&apos;s start the journey together.</p>
          <button className="inline-flex items-center gap-2 bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-blue-900/20 transition-all active:scale-95">
            Book Your Free Inquiry
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;