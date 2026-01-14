"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GalleryHero } from "@/components/GalleryHero";
import { useState } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Download } from "lucide-react";

import { GALLERY_CATEGORIES, ALL_PHOTOS } from "@/data/gallery";
import { Category } from "@/data/gallery";

const CATEGORIES = GALLERY_CATEGORIES;

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("Penerjunan");
    const [selectedPhoto, setSelectedPhoto] = useState<(typeof ALL_PHOTOS)[0] | null>(null);

    // Filter photos to current view for navigation
    const visiblePhotos = ALL_PHOTOS.filter(p => p.category === activeCategory);

    const openPhoto = (photo: typeof ALL_PHOTOS[0]) => {
        setSelectedPhoto(photo);
        document.body.style.overflow = 'hidden';
    };

    const closePhoto = () => {
        setSelectedPhoto(null);
        document.body.style.overflow = 'unset';
    };

    const navigatePhoto = (direction: 'next' | 'prev') => {
        if (!selectedPhoto) return;
        const currentIndex = visiblePhotos.findIndex(p => p.id === selectedPhoto.id);
        if (currentIndex === -1) return;

        let newIndex;
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % visiblePhotos.length;
        } else {
            newIndex = (currentIndex - 1 + visiblePhotos.length) % visiblePhotos.length;
        }
        setSelectedPhoto(visiblePhotos[newIndex]);
    };

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
                            className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 border-2 ${activeCategory === cat
                                ? "bg-brand-green border-brand-green text-white shadow-lg"
                                : "bg-white border-white text-slate-700 hover:border-brand-green/30 hover:text-brand-green shadow-sm"
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
                                initial={{ opacity: 0, scale: 0.9, rotate: idx % 2 === 0 ? 1 : -1 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: idx % 2 === 0 ? 1 : -1 }}
                                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                                onClick={() => openPhoto(photo)}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="group relative cursor-pointer"
                            >
                                {/* Polaroid Card Container */}
                                <div className="relative w-full bg-white p-3 pb-12 shadow-[0_4px_10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_20px_25px_rgba(0,0,0,0.15)] transition-shadow duration-300 rounded-sm transform">

                                    {/* Tape Effect */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-[#FFFFF0]/80 backdrop-blur-[1px] shadow-sm z-20 -rotate-2 border-l border-r border-white/50 opacity-90 transform skew-x-3 pointer-events-none"></div>

                                    {/* Image Area */}
                                    <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden mb-4 shadow-inner">
                                        <Image
                                            src={photo.src}
                                            alt={photo.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Handwritten-style Caption */}
                                    <div className="absolute bottom-3 left-4 right-4 text-center">
                                        <h3 className="font-bold text-gray-800 text-sm md:text-base truncate" style={{ fontFamily: 'var(--font-jakarta)' }}>{photo.title}</h3>
                                        <p className="text-xs text-brand-orange font-medium">{photo.category}</p>
                                    </div>

                                    {/* Decorative element on hover */}
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <ArrowUpRight className="w-5 h-5 text-brand-text" />
                                    </div>

                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-slate-400">
                            <p>Belum ada dokumentasi untuk kategori ini.</p>
                        </div>
                    )}
                </div>

                {/* PHOTO DETAIL MODAL */}
                <AnimatePresence>
                    {selectedPhoto && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 bg-black/90 backdrop-blur-md"
                            onClick={closePhoto}
                        >
                            {/* Modal Content */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full h-full md:h-auto md:max-w-6xl md:aspect-[16/9] bg-black flex flex-col md:flex-row shadow-2xl overflow-hidden md:rounded-xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={closePhoto}
                                    className="absolute top-4 right-4 z-[60] p-2 bg-black/50 text-white rounded-full hover:bg-red-500 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Main Image Container */}
                                <div className="relative flex-1 bg-neutral-900 flex items-center justify-center group h-[60vh] md:h-full">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={selectedPhoto.src}
                                            alt={selectedPhoto.title}
                                            fill
                                            className="object-contain"
                                            sizes="100vw"
                                            priority
                                        />
                                    </div>

                                    {/* Navigation Buttons (Desktop) */}
                                    <button
                                        onClick={(e) => { e.stopPropagation(); navigatePhoto('prev'); }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
                                    >
                                        <ChevronLeft className="w-8 h-8" />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); navigatePhoto('next'); }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
                                    >
                                        <ChevronRight className="w-8 h-8" />
                                    </button>
                                </div>

                                {/* Info Sidebar */}
                                <div className="w-full md:w-96 bg-white p-6 md:p-8 flex flex-col h-[40vh] md:h-full overflow-y-auto">
                                    <div className="mb-auto">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 bg-brand-green text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                                {selectedPhoto.category}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight font-jakarta">
                                            {selectedPhoto.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                            Momen ini diabadikan selama kegiatan KKN Bangka Bandhawa.
                                            Terima kasih telah menjadi bagian dari perjalanan kami.
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-slate-100">
                                        <div className="grid grid-cols-2 gap-4 text-xs text-slate-400 mb-6">
                                            <div>
                                                <p className="font-semibold text-slate-800">Tanggal</p>
                                                <p>Nov 2025</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-800">Lokasi</p>
                                                <p>Desa Neira</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            {/* Mobile Nav */}
                                            <button
                                                onClick={() => navigatePhoto('prev')}
                                                className="flex-1 py-3 bg-slate-100 rounded-lg text-slate-600 font-bold hover:bg-slate-200 md:hidden"
                                            >
                                                <ChevronLeft className="w-5 h-5 mx-auto" />
                                            </button>

                                            <a
                                                href={selectedPhoto.src}
                                                download
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-[3] flex items-center justify-center gap-2 py-3 bg-brand-green text-white font-bold rounded-lg hover:bg-brand-green/90 transition-colors shadow-lg shadow-brand-green/20"
                                            >
                                                <Download className="w-4 h-4" />
                                                Simpan
                                            </a>

                                            {/* Mobile Nav */}
                                            <button
                                                onClick={() => navigatePhoto('next')}
                                                className="flex-1 py-3 bg-slate-100 rounded-lg text-slate-600 font-bold hover:bg-slate-200 md:hidden"
                                            >
                                                <ChevronRight className="w-5 h-5 mx-auto" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Background Pattern Overlay for the section - SINGLE PATTERN (or2.png) */}
                <div
                    className="absolute inset-0 z-[-1] opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `url('/ornaments/or2.png')`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '120px'
                    }}
                ></div>

            </div>
            {/* PHOTO DETAIL MODAL - Moved to root to avoid stacking issues */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6 bg-black/90 backdrop-blur-md"
                        onClick={closePhoto}
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full h-full md:max-w-7xl md:h-[85vh] bg-transparent flex flex-col md:flex-row shadow-2xl overflow-hidden md:rounded-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closePhoto}
                                className="absolute top-4 right-4 z-[70] p-2 bg-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all backdrop-blur-md border border-white/20 md:top-6 md:right-6"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Main Image Container */}
                            <div className="relative flex-1 bg-[#F0F0E8] flex items-center justify-center group h-[50vh] md:h-full p-4">

                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('/ornaments/or2.png')`, backgroundSize: '150px' }}></div>

                                {/* Photo Frame Effect */}
                                <div className="relative w-auto h-auto shadow-2xl md:max-h-[85vh] max-w-full">
                                    {/* White Border for Photo Print Look */}
                                    <div className="absolute -inset-2 md:-inset-4 bg-white rounded-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.1)]"></div>

                                    <div className="relative">
                                        <Image
                                            src={selectedPhoto.src}
                                            alt={selectedPhoto.title}
                                            width={1200}
                                            height={800}
                                            className="object-contain max-h-[50vh] md:max-h-[80vh] w-auto h-auto"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Navigation Buttons (Desktop) */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); navigatePhoto('prev'); }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/50 hover:bg-brand-orange text-slate-800 hover:text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:flex hover:scale-110 shadow-lg"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); navigatePhoto('next'); }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/50 hover:bg-brand-orange text-slate-800 hover:text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden md:flex hover:scale-110 shadow-lg"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Info Sidebar (Scrapbook Style) */}
                            <div className="w-full md:w-[400px] bg-white md:bg-[#FDFDF5] relative flex flex-col h-auto md:h-full overflow-hidden border-l border-white/10">

                                {/* Sidebar Background Pattern */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('/ornaments/or2.png')`, backgroundSize: '150px' }}></div>

                                {/* Content Scrollable Area */}
                                <div className="relative z-10 p-4 md:p-8 flex flex-col h-full overflow-y-auto">

                                    {/* Decorative Tape */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-brand-yellow/30 -rotate-1 backdrop-blur-sm"></div>

                                    <div className="mb-auto mt-6">
                                        {/* Category Stamp */}
                                        <div className="inline-block px-3 py-1 md:px-4 md:py-1 border-2 border-brand-green text-brand-green text-[10px] md:text-sm font-bold rounded-lg mb-4 md:mb-6 uppercase tracking-widest transform -rotate-2 opacity-80 mix-blend-multiply">
                                            {selectedPhoto.category}
                                        </div>

                                        <h3 className="text-xl md:text-3xl font-black text-slate-800 mb-2 md:mb-4 leading-tight" style={{ fontFamily: 'var(--font-jakarta)' }}>
                                            {selectedPhoto.title}
                                        </h3>

                                        <div className="w-16 h-1 bg-brand-orange mb-6 rounded-full"></div>

                                        <p className="text-slate-600 text-xs md:text-base leading-relaxed mb-4 md:mb-6 font-medium">
                                            "Setiap momen adalah cerita yang berharga. Foto ini menjadi saksi perjalanan pengabdian kami di Bangka Bandhawa."
                                        </p>

                                        {/* Metadata Grid */}
                                        <div className="grid grid-cols-2 gap-y-3 gap-x-2 md:gap-y-4 text-[10px] md:text-sm text-slate-500 bg-white/50 p-3 md:p-4 rounded-xl border border-dashed border-slate-300">
                                            <div>
                                                <p className="font-bold text-slate-400 text-xs uppercase mb-1">Tanggal</p>
                                                <p className="text-slate-700 font-semibold">Nov 2025</p>
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-400 text-xs uppercase mb-1">Lokasi</p>
                                                <p className="text-slate-700 font-semibold">Desa Neira</p>
                                            </div>
                                            <div className="col-span-2">
                                                <p className="font-bold text-slate-400 text-xs uppercase mb-1">Fotografer</p>
                                                <p className="text-slate-700 font-semibold">Tim Pubdok KKN</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t font-mono border-slate-200/60">
                                        <div className="flex gap-3">
                                            {/* Mobile Nav */}
                                            <button
                                                onClick={() => navigatePhoto('prev')}
                                                className="flex-none p-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 hover:border-brand-orange transition-colors md:hidden shadow-sm"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>

                                            <a
                                                href={selectedPhoto.src}
                                                download
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-brand-orange transition-all shadow-lg hover:shadow-brand-orange/30 group"
                                            >
                                                <Download className="w-4 h-4 group-hover:animate-bounce" />
                                                <span>Unduh Foto</span>
                                            </a>

                                            {/* Mobile Nav */}
                                            <button
                                                onClick={() => navigatePhoto('next')}
                                                className="flex-none p-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 hover:border-brand-orange transition-colors md:hidden shadow-sm"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
