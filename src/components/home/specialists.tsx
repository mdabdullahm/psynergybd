import Image from "next/image";
import Link from "next/link";
// এখানে LinkedIn এবং Twitter এর বানান চেক করুন
import { GraduationCap, Award, Star } from 'lucide-react';

const Specialists = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Senior Psychiatrist",
      image: "https://i.ibb.co.com/dsMLVd2f/doctor-with-smile.jpg",
      degrees: "MBBS, MD (Psychiatry)",
      experience: "12+ Years Experience",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. Michael Chen",
      role: "Clinical Psychologist",
      image: "https://i.ibb.co.com/HT7YpLwJ/female-doctor-holding-her-medical-mask-shoulder.jpg",
      degrees: "PhD in Clinical Psychology",
      experience: "10+ Years Experience",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. Emily Williams",
      role: "Child & Adolescent Specialist",
      image: "https://i.ibb.co.com/sp8d0cbB/doctor-analyzing-with-microscope.jpg",
      degrees: "MBBS, FCPS (Psychiatry)",
      experience: "8+ Years Experience",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Experts</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Meet Our Qualified <br /> Mental Health Specialists
            </h2>
            <p className="text-gray-600 text-lg">
              Our team consists of highly experienced psychiatrists and psychologists dedicated to providing the best compassionate care.
            </p>
          </div>
          <Link 
            href="/specializations" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all"
          >
            View All Specialists
          </Link>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doctor, index) => (
            <div key={index} className="group">
              <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden mb-6 shadow-lg shadow-gray-200">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link href={doctor.linkedin} className="bg-white p-3 rounded-full text-primary hover:bg-blue-600 hover:text-white transition-all">
                    <Linkedin size={20} />
                  </Link>
                  <Link href={doctor.twitter} className="bg-white p-3 rounded-full text-primary hover:bg-sky-500 hover:text-white transition-all">
                    <Twitter size={20} />
                  </Link>
                </div> */}
              </div>

              <div className="text-center px-4">
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{doctor.role}</p>
                
                <div className="space-y-2 border-t border-gray-100 pt-4 text-gray-500 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <GraduationCap size={16} className="text-primary" />
                    {doctor.degrees}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award size={16} className="text-primary" />
                    {doctor.experience}
                  </div>
                </div>

                <Link
                  href="/appointments"
                  className="mt-6 w-full inline-block bg-gray-50 text-primary py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Specialists;