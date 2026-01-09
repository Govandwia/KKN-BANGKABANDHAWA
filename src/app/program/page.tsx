"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, TrendingUp, Heart, Leaf, ArrowRight, Star, Target } from "lucide-react";
import { useState } from "react";

const CLUSTERS = [
    {
        id: "saintek",
        title: "Sains & Teknologi",
        icon: BookOpen,
        color: "bg-blue-500",
        lightColor: "bg-blue-50",
        textColor: "text-blue-600",
        description: "Menerapkan teknologi tepat guna untuk efisiensi produksi dan kesejahteraan masyarakat.",
        programs: [
            "Instalasi Penjernih Air Sederhana",
            "Penerapan Teknologi Komposting",
            "Digitalisasi UMKM Desa",
            "Pelatihan Web Desa"
        ]
    },
    {
        id: "soshum",
        title: "Sosial & Humaniora",
        icon: TrendingUp,
        color: "bg-brand-yellow",
        lightColor: "bg-yellow-50",
        textColor: "text-amber-600",
        description: "Membangun kesadaran sosial, hukum, dan literasi digital demi masyarakat yang lebih berdaya.",
        programs: [
            "Sosialisasi Sadar Hukum",
            "Pelatihan Public Speaking Pemuda",
            "Pendampingan Belajar Anak",
            "Workshop Literasi Digital"
        ]
    },
    {
        id: "agro",
        title: "Agro",
        icon: Leaf,
        color: "bg-brand-green",
        lightColor: "bg-green-50",
        textColor: "text-green-600",
        description: "Optimalisasi potensi pertanian dan peternakan untuk ketahanan pangan desa.",
        programs: [
            "Budidaya Tanaman Hidroponik",
            "Pembuatan Pakan Silase",
            "Urban Farming Pekarangan",
            "Penyuluhan Hama & Penyakit"
        ]
    },
    {
        id: "medika",
        title: "Medika",
        icon: Heart,
        color: "bg-brand-red",
        lightColor: "bg-red-50",
        textColor: "text-red-600",
        description: "Meningkatkan derajat kesehatan masyarakat melalui promosi dan preventif.",
        programs: [
            "Cek Kesehatan Gratis",
            "Sosialisasi Stunting",
            "Senam Sehat Lansia",
            "Penyuluhan PHBS Sekolah"
        ]
    }
];

export default function ProgramsPage() {
    return (
        <main className="min-h-screen bg-[#FDF6E3] pb-32">

            {/* HERO SECTION */}
            <div className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-48 overflow-hidden rounded-b-[3rem] bg-brand-green shadow-xl">
                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-yellow/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                {/* Floating Ornaments */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-10 opacity-60"
                    >
                        <Image src="/ornaments/or2.png" width={80} height={80} alt="ornament" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/3 right-10 opacity-60"
                    >
                        <Image src="/ornaments/or4.png" width={100} height={100} alt="ornament" />
                    </motion.div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm text-white font-bold text-sm mb-6 shadow-sm"
                    >
                        Focus & Impact
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                    >
                        Program Kerja <br /> <span className="text-brand-yellow">Unggulan</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/90 text-xl max-w-2xl mx-auto font-medium"
                    >
                        Sinergi lintas disiplin ilmu untuk satu tujuan: Kemandirian dan kesejahteraan masyarakat desa.
                    </motion.p>
                </div>
            </div>

            {/* CLUSTER SECTIONS */}
            <div className="container mx-auto px-6 -mt-20 relative z-20 space-y-20">

                {CLUSTERS.map((cluster, idx) => (
                    <motion.div
                        key={cluster.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className={`bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 overflow-hidden group`}>
                            {/* Background Accent */}
                            <div className={`absolute top-0 right-0 w-64 h-64 ${cluster.lightColor} rounded-bl-[100px] -mr-16 -mt-16 opacity-50 group-hover:scale-125 transition-transform duration-700 ease-out`} />

                            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                                {/* Visual Side */}
                                <div className="lg:w-1/3 flex-shrink-0">
                                    <div className={`aspect-square rounded-[2rem] ${cluster.color} flex items-center justify-center shadow-lg transform group-hover:rotate-3 transition-transform duration-500`}>
                                        <cluster.icon className="w-32 h-32 text-white opacity-90" />
                                    </div>
                                    <div className="mt-6 text-center lg:text-left">
                                        <h3 className={`text-3xl font-black ${cluster.textColor} mb-2`}>
                                            {cluster.title}
                                        </h3>
                                        <p className="text-slate-500 font-medium">4 Program Utama</p>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="lg:w-2/3 flex flex-col justify-center">
                                    <div className="mb-8">
                                        <h4 className="flex items-center gap-2 text-lg font-bold text-slate-400 uppercase tracking-widest mb-4">
                                            <Target className="w-5 h-5" />
                                            Mission
                                        </h4>
                                        <p className="text-2xl text-slate-700 font-medium leading-relaxed">
                                            "{cluster.description}"
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        {cluster.programs.map((program, p_idx) => (
                                            <div
                                                key={p_idx}
                                                className={`${cluster.lightColor} p-4 rounded-xl flex items-center gap-3 border border-transparent hover:border-${cluster.textColor.split('-')[1]}-200 transition-colors cursor-default`}
                                            >
                                                <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm`}>
                                                    <Star className={`w-4 h-4 ${cluster.textColor} fill-current`} />
                                                </div>
                                                <span className={`${cluster.textColor} font-bold text-sm`}>
                                                    {program}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>

        </main>
    );
}
