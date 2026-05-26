"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
    Home,
    User,
    Stethoscope,
    Target,
    Calendar,
    MessageSquare,
    FileText,
    HelpCircle,
    Phone,
    Menu,
    X
} from "lucide-react";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // page link & icon
    const navLinks = [
        { name: "Home", href: "/", icon: Home },
        { name: "About Doctor", href: "/about", icon: User },
        { name: "Services", href: "/services", icon: Stethoscope },
        { name: "Specializations", href: "/specializations", icon: Target },
        { name: "Appointments", href: "/appointments", icon: Calendar },
        { name: "Testimonials", href: "/testimonials", icon: MessageSquare },
        { name: "Blogs", href: "/blogs", icon: FileText },
        { name: "FAQ", href: "/faq", icon: HelpCircle },
        { name: "Contact", href: "/contact", icon: Phone },
    ];

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* Logo */}
                    <div className="shrink-0">
                        <Link
                            href="/"
                            className="text-5xl font-thin text-primary tracking-wide"
                        >
                            psynergy<span className="text-blue-600">bd</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-4 items-center h-full">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-1 h-full flex items-center text-sm font-medium transition-colors duration-200 group ${isActive ? "text-primary" : "text-gray-500 hover:text-primary"
                                        }`}
                                >
                                    <span className="relative inline-block">
                                        {link.name}
                                        <span
                                            className={`absolute left-0 -bottom-1 w-full h-px bg-primary transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                                }`}
                                        ></span>
                                    </span>
                                </Link>

                            );
                        })}

                        {/* CTA Button */}
                        <Link
                            href="/appointments"
                            className="ml-4 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-sm shadow-md"
                        >
                            Book Appointment
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
                }`}>
                <div className="px-4 pt-2 pb-8 space-y-2 bg-white border-t border-gray-50">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        const Icon = link.icon; // Icon component
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive
                                    ? "bg-primary text-white shadow-lg shadow-blue-900/20"
                                    : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                <Icon size={20} className={isActive ? "text-white" : "text-primary"} />
                                {link.name}
                            </Link>
                        );
                    })}

                    <div className="pt-4 px-2">
                        <Link
                            href="/appointments"
                            onClick={() => setIsOpen(false)}
                            className="flex justify-center items-center bg-primary text-white px-6 py-4 rounded-xl font-bold text-center shadow-lg"
                        >
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;