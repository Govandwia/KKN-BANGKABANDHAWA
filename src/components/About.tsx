"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Users, MapPin, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const STATS = [
    { label: "Hari Pengabdian", value: "50", icon: Calendar },
    { label: "Desa Mitra", value: "2", icon: MapPin },
    { label: "Anggota Tim", value: "30", icon: Users },
];

const ABOUT_IMAGES = [
    "/photo/IMG_1516.jpg",
    "/photo/IMG_0820.jpg",
    "/photo/IMG_0889.jpg",
    "/photo/IMG_1094.jpg",
    "/photo/IMG_1158.jpg"
];

export function About() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % ABOUT_IMAGES.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative py-24 bg-white" id="tentang">
            {/* Background Ornament - Rotating Blue */}
            <motion.div
                className="absolute -left-20 top-20 opacity-5 pointer-events-none select-none z-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            >
                <Image
                    src="/ornaments/or3.png"
                    alt="Decoration"
                    width={500}
                    height={500}
                    className="w-64 h-64 md:w-[500px] md:h-[500px]"
                />
            </motion.div>

            <div className="w-full px-4 md:px-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-semibold tracking-wide mb-4">
                            Tentang Bangka Bandhawa
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-sans text-brand-text mb-6">
                            Membangun <span className="text-brand-red">Sinergi</span>, Mewujudkan <span className="text-brand-green">Pertumbuhan</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            <span className="font-bold text-brand-blue">Bangka Bandhawa</span> hadir sebagai wujud persaudaraan di tanah Bangka.
                            Mengusung semangat kolaborasi, kami berkomitmen untuk mengintegrasikan potensi lokal
                            Desa Batu Beriga dan Lubuk Besar demi menciptakan dampak yang inklusif dan berkelanjutan.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Bukan sekadar program kerja, ini adalah perjalanan merajut asa bersama masyarakat,
                            mengubah tantangan menjadi peluang, dan menanam benih perubahan yang nyata.
                        </p>

                        {/* Stats Grid */}
                        {/* Stats Grid - Enhanced */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {/* Card 1: Hari - Blue */}
                            <div className="p-6 rounded-3xl bg-blue-50 border-4 border-dashed border-blue-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                <div className="mx-auto w-14 h-14 mb-4 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                    <Calendar className="w-7 h-7" />
                                </div>
                                <h3 className="text-4xl font-black text-slate-800 mb-1">50</h3>
                                <p className="text-sm text-blue-600 font-bold uppercase tracking-wider">Hari Pengabdian</p>
                            </div>

                            {/* Card 2: Desa - Green */}
                            <div className="p-6 rounded-3xl bg-green-50 border-4 border-dashed border-green-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                <div className="mx-auto w-14 h-14 mb-4 rounded-2xl bg-white shadow-sm flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <h3 className="text-4xl font-black text-slate-800 mb-1">2</h3>
                                <p className="text-sm text-green-600 font-bold uppercase tracking-wider">Desa Mitra</p>
                            </div>

                            {/* Card 3: Anggota - Yellow */}
                            <div className="p-6 rounded-3xl bg-yellow-50 border-4 border-dashed border-yellow-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                <div className="mx-auto w-14 h-14 mb-4 rounded-2xl bg-white shadow-sm flex items-center justify-center text-yellow-600 group-hover:scale-110 transition-transform">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-4xl font-black text-slate-800 mb-1">30</h3>
                                <p className="text-sm text-yellow-700 font-bold uppercase tracking-wider">Anggota Tim</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visuals / Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border-2 border-dashed border-brand-blue/30 p-4 bg-white rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Inner image frame */}
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100">
                                <AnimatePresence>
                                    <motion.div
                                        key={currentImage}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={ABOUT_IMAGES[currentImage]}
                                            alt="Foto Bersama Tim KKN Bangka Bandhawa"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                {/* Overlay Gradient for text readability if needed, but clean is better here */}
                            </div>
                        </div>
                        {/* Decorative Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border-l-4 border-brand-red hidden md:block">
                            <p className="text-brand-text font-medium italic">
                                "Bersama Membangun Desa, Merajut Asa."
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
