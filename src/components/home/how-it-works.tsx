import { CalendarDays, MessageSquare, ClipboardList, HeartPulse } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Book Appointment",
      desc: "Select your preferred doctor and schedule a convenient time online.",
      icon: CalendarDays,
      stepNo: "01",
    },
    {
      title: "Initial Consultation",
      desc: "Speak with our specialist to share your concerns in a safe environment.",
      icon: MessageSquare,
      stepNo: "02",
    },
    {
      title: "Personalized Plan",
      desc: "Receive a customized treatment roadmap tailored to your mental health goals.",
      icon: ClipboardList,
      stepNo: "03",
    },
    {
      title: "Start Your Healing",
      desc: "Begin your journey to wellness with our continuous professional support.",
      icon: HeartPulse,
      stepNo: "04",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full border-8 border-primary"></div>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Process</h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Simple Steps to Your <br /> Mental Wellness
          </h2>
          <p className="text-gray-600 text-lg">
            Taking the first step is the hardest. Weve made the rest of the process easy and transparent for you.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-dashed bg-gray-200 -z-10 border-t-2 border-dashed"></div>

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group text-center">
                {/* Icon Box */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white text-primary shadow-xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 z-10">
                  <Icon size={36} />
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shadow-lg group-hover:bg-primary-hover">
                    {item.stepNo}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed px-4">
                  {item.desc}
                </p>

                {/* Mobile/Tablet Arrow/Indicator (Optional) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden mt-8 flex justify-center text-gray-300">
                    <div className="w-0.5 h-10 bg-gradient-to-b from-primary/20 to-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-20 text-center">
          <button className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-900/30 transition-all transform hover:-translate-y-1">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;