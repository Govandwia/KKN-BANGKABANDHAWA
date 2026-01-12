"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, Target, CheckCircle2, X } from "lucide-react";
import { PROGRAM_CLUSTERS, Program } from "@/data/programs";
import { useState, useEffect } from "react";

export default function ProgramsPage() {
    const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProgram) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedProgram]);

    return (
        <main className="min-h-screen bg-[#FDF6E3] pb-32 w-full overflow-x-hidden relative">

            {/* HERO SECTION */}
            <div className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center pt-24 pb-32 md:pt-32 md:pb-48 overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem] bg-brand-green shadow-2xl w-full">
                {/* Decorative Blobs - Resized and constrained for mobile */}
                <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-white/10 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-brand-yellow/20 rounded-full blur-[60px] md:blur-[100px] translate-y-1/2 -translate-x-1/2 mix-blend-overlay pointer-events-none"></div>

                {/* Floating Ornaments - Hidden on mobile to prevent overflow/clutter */}
                <div className="absolute inset-0 pointer-events-none hidden md:block">
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-10 opacity-40 mix-blend-screen"
                    >
                        <Image src="/ornaments/or2.png" width={120} height={120} alt="ornament" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/3 right-10 opacity-40 mix-blend-screen"
                    >
                        <Image src="/ornaments/or4.png" width={150} height={150} alt="ornament" />
                    </motion.div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white max-w-full">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-5 py-2 md:px-6 rounded-full bg-white/20 border border-white/30 backdrop-blur-md text-white font-bold text-xs md:text-sm mb-6 md:mb-8 shadow-lg shadow-black/5"
                    >
                        ✨ Focus & Impact
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: "backOut" }}
                        className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tight drop-shadow-sm break-words"
                    >
                        Program Kerja <br /> <span className="text-brand-yellow drop-shadow-md">Unggulan</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed px-4"
                    >
                        Sinergi lintas disiplin ilmu untuk satu tujuan: Kemandirian dan kesejahteraan masyarakat desa.
                    </motion.p>
                </div>
            </div>

            {/* CLUSTER SECTIONS */}
            <div className="container mx-auto px-4 md:px-6 -mt-16 md:-mt-24 relative z-20 space-y-20 md:space-y-32 w-full max-w-full overflow-hidden">

                {PROGRAM_CLUSTERS.map((cluster, idx) => (
                    <section key={cluster.id} id={cluster.id} className="scroll-mt-32 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full"
                        >
                            <div className={`bg-gradient-to-br from-white to-slate-50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl border border-white overflow-hidden group hover:shadow-3xl transition-shadow duration-500 w-full relative`}>

                                {/* Background Accent - Constrained */}
                                <div className={`absolute top-0 right-0 w-[200px] h-[200px] md:w-[500px] md:h-[500px] ${cluster.themeColor} rounded-full blur-3xl -mr-16 -mt-16 md:-mr-32 md:-mt-32 opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 ease-out pointer-events-none`} />

                                {/* Cluster Header */}
                                <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 mb-8 md:mb-16 relative z-10 text-center md:text-left w-full">
                                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] ${cluster.themeColor} ${cluster.textColor} flex items-center justify-center shadow-xl shadow-${cluster.textColor.split('-')[1]}-100 transform group-hover:rotate-12 transition-transform duration-500 border border-white shrink-0`}>
                                        <cluster.icon className="w-10 h-10 md:w-12 md:h-12" />
                                    </div>
                                    <div className="w-full">
                                        <h2 className={`text-3xl md:text-5xl font-black ${cluster.textColor} mb-3 md:mb-4 tracking-tight break-words`}>{cluster.name}</h2>
                                        <p className="text-base md:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">{cluster.description}</p>
                                    </div>
                                </div>

                                {/* Programs Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 relative z-10 w-full">
                                    {cluster.programs.map((program, p_idx) => (
                                        <motion.div
                                            key={program.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: p_idx * 0.1 }}
                                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                            onClick={() => setSelectedProgram(program)}
                                            className="group/card cursor-pointer w-full"
                                        >
                                            <div className={`h-full bg-white/60 backdrop-blur-sm rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 border-[3px] border-dashed border-${cluster.textColor.split('-')[1]}-200 shadow-lg hover:border-${cluster.textColor.split('-')[1]}-400 hover:shadow-xl hover:shadow-${cluster.textColor.split('-')[1]}-100/50 transition-all duration-300 relative overflow-hidden active:scale-95 w-full group/inner`}>

                                                {/* Card Hover Gradient */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${cluster.themeColor} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} />

                                                {/* Decorative Corner Shape */}
                                                <div className="absolute -right-6 -bottom-6 opacity-10 group-hover/card:opacity-20 transition-all duration-500 group-hover/card:rotate-12 group-hover/card:scale-110 pointer-events-none">
                                                    <Image src="/ornaments/or3.png" width={120} height={120} alt="ornament" />
                                                </div>

                                                {/* Small top-left dot pattern or simple shape */}
                                                <div className="absolute top-4 right-4 flex gap-1 pointer-events-none opacity-20">
                                                    <div className={`w-2 h-2 rounded-full bg-${cluster.textColor.split('-')[1]}-400`} />
                                                    <div className={`w-2 h-2 rounded-full bg-${cluster.textColor.split('-')[1]}-400`} />
                                                </div>

                                                <div className="relative z-10">
                                                    <div className="flex items-start justify-between mb-4 md:mb-6">
                                                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${cluster.textColor} font-bold text-base md:text-lg group-hover/card:scale-110 transition-transform duration-300 border border-dashed border-slate-200`}>
                                                            {p_idx + 1}
                                                        </div>
                                                        <div className={`w-8 h-8 rounded-full bg-white/50 flex items-center justify-center opacity-100 md:opacity-0 group-hover/card:opacity-100 transform translate-x-0 transition-all duration-300`}>
                                                            <ArrowRight className={`w-4 h-4 ${cluster.textColor}`} />
                                                        </div>
                                                    </div>

                                                    <h3 className={`text-xl md:text-2xl font-bold text-slate-800 mb-2 md:mb-3 group-hover/card:text-${cluster.textColor.split('-')[1]}-700 transition-colors leading-tight break-words`}>
                                                        {program.title}
                                                    </h3>
                                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 group-hover/card:text-slate-600">
                                                        {program.description}
                                                    </p>

                                                    <span className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${cluster.textColor} opacity-80 md:opacity-60 group-hover/card:opacity-100 transition-opacity`}>
                                                        Lihat Detail
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    </section>
                ))}

            </div>

            {/* DETAILED MODAL */}
            <AnimatePresence>
                {selectedProgram && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProgram(null)}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] grid place-items-center p-4 md:p-8"
                            style={{ zIndex: 100 }}
                        >
                            {/* Modal Container */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 50 }}
                                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-[#FFFDF7] rounded-[2rem] md:rounded-[3rem] w-full max-w-5xl max-h-[85vh] md:max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col"
                            >
                                {/* Decorative Ornaments in Modal - Reduced on Mobile */}
                                <div className="absolute top-0 right-0 pointer-events-none opacity-10 md:opacity-20">
                                    <Image src="/ornaments/or2.png" width={300} height={300} className="transform translate-x-1/2 -translate-y-1/2 md:translate-x-1/3 md:-translate-y-1/3 rotate-12 w-32 h-32 md:w-auto md:h-auto" alt="decoration" />
                                </div>
                                <div className="absolute bottom-0 left-0 pointer-events-none opacity-10 md:opacity-20">
                                    <Image src="/ornaments/or4.png" width={250} height={250} className="transform -translate-x-1/3 translate-y-1/3 -rotate-12 w-32 h-32 md:w-auto md:h-auto" alt="decoration" />
                                </div>

                                {/* Modal Header (Sticky) */}
                                <div className="p-6 md:p-10 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-20 flex justify-between items-start gap-4">
                                    <div className="pr-8">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-3"
                                        >
                                            <Target className="w-3 h-3" />
                                            Program Detail
                                        </motion.div>
                                        <motion.h3
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="text-2xl md:text-5xl font-black text-brand-text mb-2 leading-tight"
                                        >
                                            {selectedProgram.title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="text-slate-500 font-medium text-sm md:text-xl line-clamp-2 md:line-clamp-none"
                                        >
                                            {selectedProgram.description}
                                        </motion.p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProgram(null)}
                                        className="absolute top-4 right-4 md:static p-2 md:p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all hover:rotate-90 shadow-sm"
                                    >
                                        <X className="w-5 h-5 md:w-6 md:h-6" />
                                    </button>
                                </div>

                                {/* Modal Scrollable Content */}
                                <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar relative z-10">
                                    <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">

                                        {/* Main Narrative */}
                                        {selectedProgram.details && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 }}
                                                className="prose prose-lg prose-slate max-w-none"
                                            >
                                                <p className="text-base md:text-2xl text-slate-700 leading-relaxed font-serif">
                                                    "{selectedProgram.details}"
                                                </p>
                                            </motion.div>
                                        )}

                                        {/* Sub Programs Grid */}
                                        {selectedProgram.subPrograms && selectedProgram.subPrograms.length > 0 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                <div className="flex items-center gap-4 mb-6 md:mb-8">
                                                    <div className="h-px flex-1 bg-slate-200"></div>
                                                    <h4 className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                                        <Star className="w-3 h-3 md:w-4 md:h-4" />
                                                        Kegiatan & Sub-Proker
                                                    </h4>
                                                    <div className="h-px flex-1 bg-slate-200"></div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                                    {selectedProgram.subPrograms.map((sub, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.7 + idx * 0.1 }}
                                                            className="bg-white p-5 md:p-6 rounded-3xl md:rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 group/sub"
                                                        >
                                                            <div className="flex items-start gap-4">
                                                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 text-brand-green flex items-center justify-center shrink-0 font-bold text-base md:text-lg shadow-inner group-hover/sub:scale-110 transition-transform">
                                                                    {idx + 1}
                                                                </div>
                                                                <div>
                                                                    <h5 className="font-bold text-base md:text-xl text-brand-text mb-1 md:mb-2 group-hover/sub:text-brand-green transition-colors">{sub.title}</h5>
                                                                    {sub.description && (
                                                                        <p className="text-sm text-slate-500 leading-relaxed">
                                                                            {sub.description}
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </main>
    );
}
