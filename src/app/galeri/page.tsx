"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GalleryHero } from "@/components/GalleryHero";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// Types
type Category = "Penerjunan" | "Minggu 1" | "Minggu 2" | "Minggu 3" | "Minggu 4" | "Minggu 5" | "Minggu 6" | "Minggu 7" | "Penarikan";

const CATEGORIES: Category[] = [
    "Penerjunan",
    "Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4", "Minggu 5", "Minggu 6", "Minggu 7",
    "Penarikan"
];

// Placeholder Data
const ALL_PHOTOS = [
    // Penerjunan
    { id: 1, title: "Upacara Penerjunan", category: "Penerjunan", color: "bg-brand-blue/10" },
    { id: 2, title: "Tiba di Lokasi", category: "Penerjunan", color: "bg-brand-green/10" },

    // Minggu 1 - Survey & Sosialisasi
    { id: 3, title: "Silaturahmi Warga", category: "Minggu 1", color: "bg-yellow-100" },
    { id: 4, title: "Survey UMKM", category: "Minggu 1", color: "bg-orange-100" },

    // Minggu 2 - Program Kerja Awal
    { id: 5, title: "Penyuluhan Kesehatan", category: "Minggu 2", color: "bg-red-100" },
    { id: 6, title: "Bimbel Anak Sekolah", category: "Minggu 2", color: "bg-pink-100" },

    // Minggu 3 - Pelaksanaan
    { id: 7, title: "Kerja Bakti Desa", category: "Minggu 3", color: "bg-purple-100" },
    { id: 8, title: "Pelatihan Digital", category: "Minggu 3", color: "bg-indigo-100" },

    // Minggu 4 - Mid Term
    { id: 9, title: "Evaluasi Tengah Periode", category: "Minggu 4", color: "bg-blue-100" },
    { id: 10, title: "Lomba 17an", category: "Minggu 4", color: "bg-cyan-100" },

    // Minggu 5 - Lanjutan Proker
    { id: 11, title: "Panen Raya Kebun", category: "Minggu 5", color: "bg-teal-100" },
    { id: 12, title: "Demo Masak", category: "Minggu 5", color: "bg-emerald-100" },

    // Minggu 6 - Finishing
    { id: 13, title: "Pembuatan Peta Desa", category: "Minggu 6", color: "bg-lime-100" },
    { id: 14, title: "Renovasi Gapura", category: "Minggu 6", color: "bg-amber-100" },

    // Minggu 7 - Laporan
    { id: 15, title: "Seminar Hasil", category: "Minggu 7", color: "bg-violet-100" },
    { id: 16, title: "Pamitan Sekolah", category: "Minggu 7", color: "bg-fuchsia-100" },

    // Penarikan
    { id: 17, title: "Malam Perpisahan", category: "Penarikan", color: "bg-rose-100" },
    { id: 18, title: "Upacara Penarikan", category: "Penarikan", color: "bg-slate-100" },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("Penerjunan");

    return (
        <main className="min-h-screen bg-[#E9F3D3] pb-20">
            {/* Background color matched to the reference's light greenish tone */}

            {/* Gallery Hero - Pionir Style */}
            <GalleryHero />

            {/* STITCHED BORDER SEPARATOR */}
            <div className="relative w-full h-16 -mt-8 z-20">
                {/* The 'stitch' pattern can be a dashed border on a pseudo element or a specific SVG */}
                <div className="absolute inset-x-0 bottom-0 h-8 border-t-[4px] border-dashed border-black/10"></div>
                {/* Wavy/Zigzag separator could also work, but dashed is simple "stitch" effect */}
            </div>

            <div className="container mx-auto px-6 relative z-10 mt-16">

                {/* HEADER SECTION */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Title mimicking "Galeri Momen PIONIR" */}
                        <h2 className="text-4xl md:text-5xl font-black text-brand-orange drop-shadow-sm mb-4" style={{ fontFamily: 'var(--font-jakarta)' }}>
                            <span>Galeri Momen</span> <span className="text-brand-red">KKN</span>
                        </h2>
                        <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
                            Tangkap semangat, tawa, dan keseruan Mahasiswa KKN selama mengabdi di Bangka Bandhawa!
                        </p>
                    </motion.div>
                </div>

                {/* FILTER TABS */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 ${activeCategory === cat
                                ? "bg-brand-orange text-white shadow-lg scale-105"
                                : "bg-[#FDF6E3] text-brand-text/70 hover:bg-white hover:shadow-md"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* GALLERY GRID (Uniform) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ALL_PHOTOS.filter(p => p.category === activeCategory).length > 0 ? (
                        ALL_PHOTOS.filter(p => p.category === activeCategory).map((photo, idx) => (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="group relative"
                            >
                                {/* Card Container */}
                                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white">

                                    {/* Image Placeholder */}
                                    <div className={`w-full h-full ${photo.color} relative flex items-center justify-center`}>
                                        <span className="text-slate-400 font-bold opacity-50">[IMG {photo.title}]</span>
                                    </div>

                                    {/* Overlay & Icon */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 p-4 flex flex-col justify-end">

                                        {/* Arrow Icon Button - Bottom Right */}
                                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <ArrowUpRight className="w-5 h-5 text-brand-text" />
                                        </div>

                                    </div>
                                </div>
                                <div className="mt-3 pl-2">
                                    <h3 className="font-bold text-brand-text text-lg">{photo.title}</h3>
                                    <p className="text-sm text-slate-500">{photo.category}</p>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-slate-400">
                            <p>Belum ada dokumentasi untuk kategori ini.</p>
                        </div>
                    )}
                </div>

                {/* Background Pattern Overlay for the section */}
                <div className="absolute inset-0 z-[-1] opacity-5 pointer-events-none" style={{ backgroundImage: `url('/ornaments/pattern-geometric.png')`, backgroundRepeat: 'repeat' }}></div>

            </div>
        </main>
    );
}
