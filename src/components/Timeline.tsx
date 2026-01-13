"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Flag, MapPin, Trophy, Users } from "lucide-react";

const TIMELINE_STEPS = [
    {
        title: "Persiapan & Survey",
        date: "Maret - Juni 2026",
        description: "Melakukan observasi lapangan, perizinan, dan penyusunan matriks program kerja sesuai kebutuhan desa.",
        icon: MapPin,
        color: "bg-blue-100",
        textColor: "text-blue-600"
    },
    {
        title: "Penerjunan",
        date: "1 Juli 2026",
        description: "Upacara penerjunan resmi dan keberangkatan menuju lokasi pengabdian di Kecamatan Lubuk Besar.",
        icon: Flag,
        color: "bg-brand-green",
        textColor: "text-white"
    },
    {
        title: "Sosialisasi Program",
        date: "Minggu 1-2 (Juli)",
        description: "Sowan ke tokoh masyarakat dan sosialisasi program kerja unggulan kepada target sasaran.",
        icon: Users,
        color: "bg-brand-yellow",
        textColor: "text-brand-text"
    },
    {
        title: "Eksekusi & Kolaborasi",
        date: "Minggu 3-5 (Juli - Agustus)",
        description: "Pelaksanaan program inti (Saintek, Soshum, Agro, Medika) dengan kolaborasi penuh bersama warga.",
        icon: CheckCircle2,
        color: "bg-orange-100",
        textColor: "text-orange-600"
    },
    {
        title: "Expo & Monitoring",
        date: "Minggu 6 (Agustus)",
        description: "Gelar karya hasil UMKM binaan dan monitoring evaluasi capaian program oleh DPL.",
        icon: Trophy,
        color: "bg-purple-100",
        textColor: "text-purple-600"
    },
    {
        title: "Laporan & Penarikan",
        date: "20 Agustus 2026",
        description: "Penyusunan laporan akhir, pamitan, dan upacara penarikan kembali ke kampus UGM.",
        icon: Calendar,
        color: "bg-slate-100",
        textColor: "text-slate-600"
    }
];

export function Timeline() {
    return (
        <section className="w-full py-24 bg-yellow-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="w-full px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-brand-green font-bold tracking-widest uppercase text-sm">Perjalanan Kami</span>
                    <h2 className="text-3xl md:text-5xl font-black text-brand-text mt-3">roadmap <span className="text-brand-yellow">Pengabdian</span></h2>
                </div>

                <div className="relative w-full mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 rounded-full" />

                    <div className="space-y-12">
                        {TIMELINE_STEPS.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 items-start ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Icon */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-white shadow-sm z-10 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-brand-green animate-pulse" />
                                </div>

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2 flex justify-center w-[calc(100%-3rem)]">
                                    {/* Wrapper to align properly based on odd/even */}
                                    <div className={`w-full ${idx % 2 !== 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>

                                        <div className={`
                                            group p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden
                                            ${idx % 2 !== 0 ? 'rounded-tl-none' : 'rounded-tr-none'}
                                        `}>
                                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <step.icon className="w-16 h-16" />
                                            </div>

                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${step.color} ${step.textColor}`}>
                                                {step.date}
                                            </span>

                                            <h3 className="text-xl font-bold text-brand-text mb-2 flex items-center gap-2 md:inline-flex md:gap-2">
                                                {/* On mobile, icon is inline. On Desktop, maybe hide or keep it? Let's keep distinct. */}
                                                <span className="md:hidden"><step.icon className="w-4 h-4" /></span>
                                                {step.title}
                                            </h3>

                                            <p className="text-slate-500 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
