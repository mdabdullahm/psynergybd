"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, MapPin, PhoneCall, Info } from "lucide-react";

const ClinicSchedule = () => {
  const schedules = [
    { day: "Saturday", time: "10:00 AM - 08:00 PM", status: "Open" },
    { day: "Sunday", time: "10:00 AM - 08:00 PM", status: "Open" },
    { day: "Monday", time: "10:00 AM - 08:00 PM", status: "Open" },
    { day: "Tuesday", time: "10:00 AM - 08:00 PM", status: "Open" },
    { day: "Wednesday", time: "10:00 AM - 08:00 PM", status: "Open" },
    { day: "Thursday", time: "10:00 AM - 08:00 PM", status: "Open" },
    { day: "Friday", time: "Emergency Only", status: "Closed" },
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Schedule Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center">
                <Calendar size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">Clinic Hours</h2>
                <p className="text-gray-500 text-sm">Our weekly operational schedule</p>
              </div>
            </div>

            <div className="space-y-4">
              {schedules.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                    item.status === "Closed" 
                    ? "bg-red-50/50 border border-red-100" 
                    : "bg-gray-50 border border-transparent hover:border-blue-200"
                  }`}
                >
                  <span className={`font-bold ${item.status === "Closed" ? "text-red-600" : "text-primary"}`}>
                    {item.day}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 font-medium text-sm">{item.time}</span>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${
                      item.status === "Open" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Information & Map Link */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-primary text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Clock size={120} />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">Important Notes</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4">
                  <Info className="text-blue-300 shrink-0" size={24} />
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Online consultations are available from <span className="text-white font-bold">08:00 AM to 11:00 PM</span> daily, including Fridays.
                  </p>
                </div>
                <div className="flex gap-4">
                  <MapPin className="text-blue-300 shrink-0" size={24} />
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We are located at 123 Wellness Tower, Dhanmondi, Dhaka. Free parking is available for patients.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                   <p className="text-xs uppercase tracking-widest font-bold text-blue-300 mb-2">Emergency Support</p>
                   <div className="flex items-center gap-3">
                     <div className="p-3 rounded-xl bg-white/10">
                       <PhoneCall size={20} />
                     </div>
                     <span className="text-2xl font-black">+880 1234 567 890</span>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Link Card */}
            <div className="p-8 rounded-[2.5rem] border-2 border-dashed border-gray-200 flex flex-col items-center text-center group hover:border-primary transition-all">
               <p className="text-gray-500 text-sm mb-4">Want to see our location on map?</p>
               <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                 Open Google Maps
                 <div className="p-2 rounded-full bg-primary text-white">
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      <Calendar size={14} />
                    </motion.div>
                 </div>
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClinicSchedule;