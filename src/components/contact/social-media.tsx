"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Instagram,
    Facebook,
    Linkedin,
    Twitter,
    Heart,
    MessageCircle,
    ArrowUpRight
} from "lucide-react";

const SocialMedia = () => {
    const socialPlatforms = [
        { name: "Instagram", followers: "12K", icon: Instagram, color: "bg-pink-500", href: "#" },
        { name: "Facebook", followers: "25K", icon: Facebook, color: "bg-blue-600", href: "#" },
        { name: "LinkedIn", followers: "8K", icon: Linkedin, color: "bg-blue-700", href: "#" },
        { name: "Twitter", followers: "5K", icon: Twitter, color: "bg-sky-500", href: "#" },
    ];

    // আপনার দেওয়া গ্যালারি ইমেজ লিঙ্ক
    const galleryPosts = [
        "https://i.ibb.co.com/C5q3jvVv/serene-silhouette-meditating-tranquil-autumn-mountain-generated-by-ai.jpg",
        "https://i.ibb.co.com/s9L3rGBs/doctor-looking-camera-after-typing-computer-modern-private-hospital-clinic-working-consultation-room.jpg",
        "https://i.ibb.co.com/nNWJbVBw/6509024.jpg",
        "https://i.ibb.co.com/0pGp46gv/girl-sitting-alone-wooden-bridge-sea-frustrated-depression.jpg",
    ];

    // ফলোয়ারদের (User Avatars) ছবির জন্য ৪টি আলাদা রিয়েল লিঙ্ক
    const followerAvatars = [
        "https://i.ibb.co.com/C5q3jvVv/serene-silhouette-meditating-tranquil-autumn-mountain-generated-by-ai.jpg",
        "https://i.ibb.co.com/s9L3rGBs/doctor-looking-camera-after-typing-computer-modern-private-hospital-clinic-working-consultation-room.jpg",
        "https://i.ibb.co.com/nNWJbVBw/6509024.jpg",
        "https://i.ibb.co.com/0pGp46gv/girl-sitting-alone-wooden-bridge-sea-frustrated-depression.jpg",
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Join Our Community</h4>
                            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                                Follow Us for Daily <br /> <span className="text-blue-600 font-medium italic">Mental Wellness Tips</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Be part of our growing community. We share expert advice, inspirational stories, and mental health resources daily to help you stay resilient and mindful.
                            </p>
                        </div>

                        {/* Social Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {socialPlatforms.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="group p-6 rounded-[2rem] bg-gray-50 border border-gray-100 flex items-center justify-between hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-xl ${social.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{social.name}</p>
                                                <p className="text-lg font-black text-primary">{social.followers}</p>
                                            </div>
                                        </div>
                                        <ArrowUpRight size={18} className="text-gray-300 group-hover:text-primary transition-colors" />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Follower Count - fixed avatars */}
                        <div className="flex items-center gap-4 p-6 rounded-3xl bg-blue-50 border border-blue-100">
                            <div className="flex -space-x-3">
                                {followerAvatars.map((src, index) => (
                                    <div key={index} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                        <Image
                                            src={src}
                                            alt={`follower-${index}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm font-bold text-primary">
                                Join <span className="text-blue-600 text-lg">50,000+</span> individuals on the path to wellness.
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side */}
                    {/* Right Side: Social Media Gallery Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            {galleryPosts.map((img, index) => (
                                <motion.div
                                    key={index}
                                    className="relative aspect-square rounded-[2rem] overflow-hidden group shadow-lg"
                                >
                                    <Image
                                        src={img}
                                        alt={`Social post ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Hover Overlay - এখানে র্যান্ডম ফাংশন সরিয়ে ফিক্সড ভ্যালু দেওয়া হয়েছে */}
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white">
                                        <div className="flex items-center gap-1 font-bold">
                                            <Heart size={20} className="fill-white" />
                                            {/* ইনডেক্স ব্যবহার করে আলাদা সংখ্যা দেখানো হচ্ছে যাতে এরর না আসে */}
                                            <span>{200 + (index * 45)}</span>
                                        </div>
                                        <div className="flex items-center gap-1 font-bold">
                                            <MessageCircle size={20} className="fill-white" />
                                            <span>{20 + (index * 7)}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Floating Handle Badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white px-8 py-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3">
                            <Instagram className="text-pink-500" size={24} />
                            <p className="text-xl font-black text-primary tracking-tight">@psynergybd</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SocialMedia;