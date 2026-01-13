"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PROGRAM_CLUSTERS } from "@/data/programs";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Programs() {
    const [activeCluster, setActiveCluster] = useState(PROGRAM_CLUSTERS[0]);

    return (
        <section className="relative py-24 bg-green-50" id="program">

            {/* Background Ornament - Green (Top Left) */}
            <motion.div
                className="absolute -left-10 -top-10 md:-left-24 md:-top-24 opacity-10 pointer-events-none select-none z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
                <Image
                    src="/ornaments/or2.png"
                    alt="Decoration"
                    width={500}
                    height={500}
                    className="w-40 h-40 md:w-[500px] md:h-[500px]"
                />
            </motion.div>

            {/* Background Ornament - Yellow (Bottom Right) */}
            <motion.div
                className="absolute -right-10 -bottom-10 md:-right-24 md:-bottom-24 opacity-10 pointer-events-none select-none z-10"
                animate={{ rotate: -360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            >
                <Image
                    src="/ornaments/or4.png"
                    alt="Decoration"
                    width={500}
                    height={500}
                    className="w-40 h-40 md:w-[500px] md:h-[500px]"
                />
            </motion.div>

            <div className="w-full max-w-7xl lg:max-w-[90%] mx-auto px-4 md:px-8 relative z-20">

                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
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
                        className="text-slate-600 text-lg mb-8"
                    >
                        Kami membagi fokus pengabdian dalam 4 klaster utama untuk mencakup seluruh aspek kebutuhan masyarakat secara holistik.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <a
                            href="/program"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green/90 transition-transform hover:scale-105 shadow-lg shadow-brand-green/20"
                        >
                            Lihat Detail Semua Program
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>
                </div>

                {/* Modern Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                    {PROGRAM_CLUSTERS.map((cluster) => (
                        <button
                            key={cluster.id}
                            onClick={() => setActiveCluster(cluster)}
                            className={`relative px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-semibold group ${activeCluster.id === cluster.id
                                ? `bg-white shadow-md ${cluster.textColor} ring-2 ring-offset-2 ring-offset-slate-50 ${cluster.textColor.replace("text-", "ring-").replace("600", "200")}`
                                : "text-slate-500 hover:text-slate-700 bg-white/50 hover:bg-white"
                                }`}
                        >
                            {activeCluster.id === cluster.id && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 0.1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    className={`absolute inset-0 rounded-full bg-current pointer-events-none`}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <cluster.icon className={`w-4 h-4 ${activeCluster.id === cluster.id ? cluster.textColor : "text-slate-400 group-hover:text-slate-600"}`} />
                                <span>{cluster.name}</span>
                            </span>
                        </button>
                    ))}
                </div>

                {/* Cluster Content - Animated Transition */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCluster.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className={`p-8 md:p-14 rounded-[2.5rem] bg-white border-2 border-dashed ${activeCluster.borderColor} shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-500`}>
                            {/* Dynamic Background */}
                            <div className={`absolute top-0 right-0 w-64 h-64 ${activeCluster.themeColor} rounded-full blur-3xl -mr-20 -mt-20 opacity-60 group-hover:scale-110 transition-transform duration-700`} />
                            <div className={`absolute bottom-0 left-0 w-64 h-64 ${activeCluster.themeColor} rounded-full blur-3xl -ml-20 -mb-20 opacity-60 group-hover:scale-110 transition-transform duration-700`} />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className={`w-24 h-24 rounded-3xl ${activeCluster.themeColor} ${activeCluster.textColor} flex items-center justify-center mb-8 text-3xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500`}>
                                    <activeCluster.icon className="w-10 h-10" />
                                </div>

                                {/* Text Content */}
                                <h3 className="text-3xl md:text-5xl font-black text-brand-text mb-6 tracking-tight">
                                    {activeCluster.name}
                                </h3>
                                <p className="text-slate-500 text-lg md:text-2xl leading-relaxed max-w-3xl font-medium">
                                    "{activeCluster.description}"
                                </p>

                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
