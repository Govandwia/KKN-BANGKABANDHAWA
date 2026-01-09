"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, TrendingUp, Heart, Leaf } from "lucide-react";

const PROGRAMS = [
    {
        id: 1,
        title: "Pilar Pendidikan",
        description: "Meningkatkan kualitas SDM melalui bimbingan belajar, workshop literasi digital, dan pelatihan soft skill.",
        icon: BookOpen,
        color: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200"
    },
    {
        id: 2,
        title: "Pilar Ekonomi",
        description: "Pemberdayaan UMKM lokal dan optimalisasi potensi pariwisata untuk kemandirian ekonomi desa.",
        icon: TrendingUp,
        color: "bg-yellow-100", // Sunrise Yellow
        text: "text-amber-600",
        border: "border-yellow-200"
    },
    {
        id: 3,
        title: "Pilar Kesehatan",
        description: "Layanan cek kesehatan gratis, sosialisasi stunting, dan promosi gaya hidup bersih.",
        icon: Heart,
        color: "bg-red-100", // Bandhawa Red
        text: "text-red-600",
        border: "border-red-200"
    },
    {
        id: 4,
        title: "Pilar Lingkungan",
        description: "Pengelolaan limbah berkelanjutan dan reboisasi kawasan pesisir untuk menjaga ekosistem.",
        icon: Leaf,
        color: "bg-green-100", // Nature Green
        text: "text-green-600",
        border: "border-green-200"
    }
];

export function Programs() {
    return (
        <section className="relative py-24 bg-slate-50 overflow-hidden" id="program">

            {/* Background Ornament - Green (Top Left) */}
            <motion.div
                className="absolute -left-24 -top-24 opacity-10 pointer-events-none select-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
                <Image src="/ornaments/or2.png" alt="Decoration" width={500} height={500} />
            </motion.div>

            {/* Background Ornament - Yellow (Bottom Right) */}
            <motion.div
                className="absolute -right-24 -bottom-24 opacity-10 pointer-events-none select-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            >
                <Image src="/ornaments/or4.png" alt="Decoration" width={500} height={500} />
            </motion.div>

            <div className="w-full max-w-7xl lg:max-w-[90%] mx-auto px-4 md:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold tracking-wide mb-4"
                    >
                        Program Kerja Unggulan
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold font-sans text-brand-text mb-6"
                    >
                        Aksi Nyata untuk <span className="text-brand-blue">Bangka</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg"
                    >
                        Empat pilar utama yang menjadi pondasi pengabdian kami dalam membangun sinergi dan kebermanfaatan.
                    </motion.p>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PROGRAMS.map((program, idx) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-[2.5rem] bg-white border-2 border-dashed ${program.border} shadow-sm hover:shadow-xl transition-all duration-300 group`}
                        >
                            <div className={`w-14 h-14 rounded-2xl ${program.color} ${program.text} flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform`}>
                                <program.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-text mb-3">{program.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {program.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
