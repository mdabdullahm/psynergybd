"use client";

import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  Stethoscope, 
  MessageSquare,
  Send,
  Info
} from "lucide-react";
import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const doctors = [
    "Dr. Sarah Johnson (Senior Psychiatrist)",
    "Dr. Michael Chen (Clinical Psychologist)",
    "Dr. Emily Williams (Child Specialist)",
    "Dr. Robert Wilson (Neuropsychiatrist)"
  ];

  const services = [
    "Depression Therapy",
    "Anxiety & Panic Care",
    "Couple Counseling",
    "Child Psychiatry",
    "Stress Management",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Thank you! Your appointment request has been sent.");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column: The Form (Takes 2/3 of space) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm"
          >
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-primary mb-2">Schedule Your Session</h2>
              <p className="text-gray-500">Please fill out the form below and we will confirm your slot shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-primary ml-1">
                    <User size={16} /> Full Name
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-primary ml-1">
                    <Mail size={16} /> Email Address
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="example@mail.com"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-primary ml-1">
                    <Phone size={16} /> Phone Number
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+880 1XXX XXXXXX"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-primary ml-1">
                    <Stethoscope size={16} /> Select Service
                  </label>
                  <select 
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white appearance-none"
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Choose a service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-primary ml-1">
                    <Calendar size={16} /> Preferred Date
                  </label>
                  <input 
                    type="date" 
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                {/* Time */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-primary ml-1">
                    <Clock size={16} /> Preferred Time
                  </label>
                  <input 
                    type="time" 
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white"
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-primary ml-1">
                  <MessageSquare size={16} /> Brief Note (Optional)
                </label>
                <textarea 
                  rows={4}
                  placeholder="Tell us a little bit about your concerns..."
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-blue-900/30 transition-all active:scale-95"
              >
                Confirm Appointment Request
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Right Column: Support Info (Takes 1/3 space) */}
          <div className="space-y-8">
            {/* Help Card */}
            <div className="bg-primary text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Info size={100} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Booking Information</h3>
              <ul className="space-y-5 text-blue-100 text-sm">
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 text-[10px] font-bold italic">i</div>
                  Confirmation will be sent via email within 2 hours.
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 text-[10px] font-bold italic">i</div>
                  Please arrive 10 minutes before your scheduled time.
                </li>
                <li className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 text-[10px] font-bold italic">i</div>
                  Cancellations must be made 24 hours in advance.
                </li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="p-8 rounded-[2.5rem] border border-gray-100 bg-white shadow-sm text-center">
              <h4 className="font-bold text-primary mb-2">Need Immediate Help?</h4>
              <p className="text-gray-500 text-sm mb-6">If you are in a crisis, please call our emergency line directly.</p>
              <a 
                href="tel:+8801234567890" 
                className="text-2xl font-black text-blue-600 hover:text-primary transition-colors"
              >
                +880 1234 567 890
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;