import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Star, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-white pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6 animate-fade-in">
              <ShieldCheck size={18} className="text-blue-600" />
              <span>Your Trusted Mental Health Partner</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-primary leading-[1.15] mb-6">
              Empower Your Mind <br />
              <span className="text-blue-600 font-medium italic">Restore Your Peace</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
              At PsynergyBD, we provide professional psychiatric care and counseling to help you navigate lifes challenges. Your well-being is our ultimate priority.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/appointments"
                className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-blue-900/20 transition-all flex items-center gap-3 group"
              >
                Book Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/services"
                className="px-8 py-4 rounded-2xl font-bold text-lg text-gray-700 hover:bg-gray-50 transition-all border border-gray-200"
              >
                Our Services
              </Link>
            </div>

            {/* Quick Trust Badges */}
            <div className="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary flex items-center gap-1">
                  10+ <Star size={18} className="fill-yellow-400 text-yellow-400" />
                </span>
                <span className="text-sm text-gray-500">Years Experience</span>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary flex items-center gap-1">
                  5000+ <Users size={18} className="text-blue-500" />
                </span>
                <span className="text-sm text-gray-500">Happy Patients</span>
              </div>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="relative">
            <div className="relative z-10 w-full h-[450px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                // Placeholder ImgBB Link (Replace with your actual ImgBB direct link)
                src="https://i.ibb.co.com/fd3y1mBK/photo-1559839734-2b71ea197ec2.avif.jpg" 
                alt="Professional Psychiatrist"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl z-20 hidden md:flex items-center gap-4 border border-gray-50">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Certified &</p>
                <p className="text-primary font-bold">Expert Treatment</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;