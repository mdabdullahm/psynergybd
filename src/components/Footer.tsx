"use client";

import Link from "next/link";
import { 
  Facebook, 
  Linkedin, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  Heart,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Doctor", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Specializations", href: "/specializations" },
    { name: "Patient Testimonials", href: "/testimonials" },
    { name: "Blogs & News", href: "/blogs" },
  ];

  const services = [
    { name: "Depression Therapy", href: "/services" },
    { name: "Anxiety Management", href: "/services" },
    { name: "Child Psychiatry", href: "/services" },
    { name: "Couple Counseling", href: "/services" },
    { name: "Crisis Support", href: "/appointments" },
  ];

  return (
    <footer className="bg-[#0D0B61] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-black tracking-tighter">
              psynergy<span className="text-blue-400">bd</span>
            </Link>
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-xs">
              Providing professional psychiatric care and compassionate counseling to help you navigate life&apos;s challenges. Your mental wellness is our commitment.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all group"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              Quick Links <div className="h-1 w-8 bg-blue-400 rounded-full"></div>
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-blue-100/60 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 text-sm group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              Our Services <div className="h-1 w-8 bg-blue-400 rounded-full"></div>
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-blue-100/60 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 text-sm group">
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              Contact Info <div className="h-1 w-8 bg-blue-400 rounded-full"></div>
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-blue-100/60">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <span>123 Wellness Tower, Dhanmondi Road 27, Dhaka - 1209</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-blue-100/60">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-blue-100/60">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <span>support@psynergybd.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center">
          <p className="text-blue-100/40 text-xs">
            © {currentYear} <span className="font-bold text-blue-200">psynergybd</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-xs font-medium text-blue-100/40">
             <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
             <Link href="/faq" className="hover:text-blue-400 transition-colors">Support FAQ</Link>
          </div>
          <div className="flex items-center gap-2 text-xs text-blue-100/40">
             Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Bangladesh
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;