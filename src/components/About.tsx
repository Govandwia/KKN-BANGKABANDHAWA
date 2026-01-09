"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, MapPin, Calendar } from "lucide-react";

const STATS = [
    { label: "Hari Pengabdian", value: "50", icon: Calendar },
    { label: "Desa Mitra", value: "2", icon: MapPin },
    { label: "Anggota Tim", value: "30", icon: Users },
];

export function About() {
    return (
        <section className="relative py-24 bg-white overflow-hidden" id="tentang">
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
                />
            </motion.div>

            <div className="w-full px-4 md:px-8 relative z-10">
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
                        <div className="grid grid-cols-3 gap-4">
                            {STATS.map((stat, idx) => (
                                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-md transition-shadow">
                                    <div className="mx-auto w-10 h-10 mb-3 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                                        <stat.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-brand-text">{stat.value}</h3>
                                    <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                                </div>
                            ))}
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
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                                {/* Placeholder for real activity photo - using a gradient/pattern for now if no image provided */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-green/20" />
                                <div className="absolute inset-0 flex items-center justify-center text-brand-text/20 font-bold text-xl">
                                    [Foto Kegiatan KKN]
                                </div>
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
