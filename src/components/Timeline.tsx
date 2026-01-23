"use client";

import { motion } from "framer-motion";
import {
    FileText, Monitor, ShieldCheck, ClipboardList, GraduationCap,
    Stethoscope, Laptop2, Map, Megaphone, HeartHandshake,
    BookOpen, Shirt, Flag, Activity, CheckCircle,
    Calendar, CheckCircle2, MapPin, Trophy, Users // Keep some old ones if needed or cleanup
} from "lucide-react";

const TIMELINE_STEPS = [
    {
        title: "Open Recruitment",
        date: "20 Oktober - 27 Oktober 2025",
        description: "Pendaftaran calon anggota tim KKN Bangka Bandhawa.",
        icon: Users,
        color: "bg-rose-100",
        textColor: "text-rose-600"
    },
    {
        title: "Wawancara",
        date: "1 November - 4 November 2025",
        description: "Proses seleksi dan wawancara calon anggota tim.",
        icon: ClipboardList,
        color: "bg-blue-100",
        textColor: "text-blue-600"
    },
    {
        title: "Pengumuman",
        date: "7 November 2025",
        description: "Pengumuman hasil seleksi anggota tim KKN.",
        icon: Megaphone,
        color: "bg-indigo-100",
        textColor: "text-indigo-600"
    },
    {
        title: "First Gathering",
        date: "16 November 2025",
        description: "Pertemuan perdana untuk perkenalan dan penyatuan visi.",
        icon: HeartHandshake,
        color: "bg-violet-100",
        textColor: "text-violet-600"
    },
    {
        title: "Persiapan dan Survey",
        date: "Januari - April 2026",
        description: "Survey lokasi dan persiapan kebutuhan teknis di lapangan.",
        icon: Map,
        color: "bg-orange-100",
        textColor: "text-orange-600"
    },
    {
        title: "Penyusunan Program Kerja",
        date: "Januari - April 2026",
        description: "Perancangan program kerja yang sesuai dengan kebutuhan desa.",
        icon: FileText,
        color: "bg-cyan-100",
        textColor: "text-cyan-600"
    },
    {
        title: "Pembekalan Umum KKN",
        date: "14 Februari - 29 Maret 2026",
        description: "Materi pembekalan wajib dari pihak universitas.",
        icon: GraduationCap,
        color: "bg-emerald-100",
        textColor: "text-emerald-600"
    },
    {
        title: "Upacara Penerjunan",
        date: "19 Juni 2026",
        description: "Pelepasan resmi mahasiswa ke lokasi pengabdian.",
        icon: Flag,
        color: "bg-brand-green",
        textColor: "text-white"
    },
    {
        title: "Operasional KKN",
        date: "20 Juni - 8 Agustus 2026",
        description: "Pelaksanaan program kerja dan pengabdian di Desa Batu Beriga & Lubuk Besar.",
        icon: Activity,
        color: "bg-brand-yellow",
        textColor: "text-brand-text"
    },
    {
        title: "Pelaporan dan Penilaian",
        date: "12 Agustus - 24 Agustus 2026",
        description: "Penyusunan laporan akhir dan penilaian kinerja.",
        icon: CheckCircle,
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
