"use client";

import { motion } from "framer-motion";
import { MEMBERS, Member } from "@/data/members";
import { Layers, Users, MapPin, User, Star } from "lucide-react"; // Added Star icon for Kadiv
import { useState } from "react";
import Image from "next/image";

// View Types
type ViewMode = "UNIT" | "CLUSTER" | "SUBUNIT";

// Helper Data
const CORE_ROLES = ["Kormanit", "Finance", "Sekre 1", "Sekre 2"];
const DIVISIONS = ["HUMPUM", "DDD", "LOKO", "SPONSORSHIP"];
const CLUSTERS = ["Saintek", "Soshum", "Agro", "Medika"];
const DUSUNS = ["Dusun 1", "Dusun 2", "Dusun 3", "Dusun 4", "Dusun 5"];

export default function MembersPage() {
    const [viewMode, setViewMode] = useState<ViewMode>("UNIT");

    // Dynamic Render Helper
    const renderSection = (title: string, members: Member[], colorTheme: string) => {
        // Sort: Kadiv first, then others
        const sortedMembers = [...members].sort((a, b) => {
            if (a.role === "Kadiv" && b.role !== "Kadiv") return -1;
            if (a.role !== "Kadiv" && b.role === "Kadiv") return 1;
            return 0;
        });

        return (
            <motion.section
                key={title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-20"
            >
                <div className="flex items-center gap-4 mb-8 border-b-2 border-dashed border-slate-300 pb-4">
                    <h2 className={`text-3xl font-black ${colorTheme}`}>{title}</h2>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-sm font-bold">{members.length} Orang</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {sortedMembers.map((member, idx) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group relative"
                        >
                            <div className={`bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 relative overflow-hidden ${member.role === 'Kadiv' ? 'ring-2 ring-brand-yellow/50' : ''}`}>
                                {/* Card Pattern Watermark */}
                                <div className="absolute -right-4 -bottom-4 opacity-[0.03] pointer-events-none transition-transform group-hover:scale-110 group-hover:rotate-12">
                                    <Image src="/ornaments/or1.png" width={120} height={120} alt="pattern" />
                                </div>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue/20 to-brand-green/20"></div>

                                <div className="aspect-square bg-slate-100 rounded-lg mb-4 overflow-hidden relative z-10">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                        <User className="w-16 h-16" />
                                    </div>

                                    {/* Division/Role Badges */}
                                    <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
                                        {/* Show Star for Kadiv */}
                                        {member.role === 'Kadiv' && (
                                            <span className="bg-brand-yellow text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-white" /> Kadiv
                                            </span>
                                        )}
                                        {/* Show Core Role badges */}
                                        {CORE_ROLES.includes(member.role) && (
                                            <span className="bg-brand-blue text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                                                {member.role}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <h3 className="font-bold text-brand-text leading-tight mb-1 relative z-10 text-balance">{member.name}</h3>

                                {/* Dynamic Subtext based on View */}
                                <div className="relative z-10">
                                    {viewMode === 'UNIT' && (
                                        <>
                                            {member.role === 'Kadiv' || member.role === 'Anggota' ? (
                                                <p className="text-slate-400 text-xs mb-1">Divisi {member.division}</p>
                                            ) : (
                                                <p className="text-brand-blue font-bold text-sm mb-1">{member.role}</p>
                                            )}
                                        </>
                                    )}
                                    {viewMode === 'CLUSTER' && (
                                        <p className="text-slate-500 text-xs mb-1">{member.major}</p>
                                    )}
                                    {viewMode === 'SUBUNIT' && (
                                        <p className="text-slate-500 text-xs mb-1">{member.cluster} • {member.major}</p>
                                    )}
                                </div>

                                {/* Always show the 'other' context info in small text */}
                                <div className="mt-2 pt-2 border-t border-slate-100 flex flex-wrap gap-1 relative z-10">
                                    {viewMode !== 'CLUSTER' && (
                                        <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded">{member.cluster}</span>
                                    )}
                                    {viewMode !== 'SUBUNIT' && (
                                        <span className="text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded">{member.dusun}</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        );
    };

    return (
        <main className="min-h-screen bg-[#FDF6E3] pb-32">

            {/* HERO */}
            <div className="bg-brand-green pt-32 pb-24 rounded-b-[3rem] relative overflow-hidden mb-12 shadow-xl">
                {/* Ornaments - Top Right */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-10 -top-10 opacity-10 w-64 h-64 pointer-events-none"
                >
                    <Image src="/ornaments/or2.png" width={300} height={300} alt="ornament" />
                </motion.div>

                {/* Ornaments - Bottom Left */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -left-10 -bottom-10 opacity-10 w-48 h-48 pointer-events-none"
                >
                    <Image src="/ornaments/or4.png" width={200} height={200} alt="ornament" />
                </motion.div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-sm">Tim KKN</h1>
                    <p className="text-white/90 text-xl max-w-2xl mx-auto font-medium">
                        Kenalan dengan wajah-wajah di balik Bangka Bandhawa.
                    </p>
                </div>
            </div>

            {/* VIEW SWITCHER */}
            <div className="sticky top-24 z-40 mb-16 px-4">
                <div className="max-w-3xl mx-auto bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-2 rounded-full border border-slate-100 flex relative overflow-hidden">
                    {/* Switcher Background Ornament */}
                    <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                        <Image src="/ornaments/or1.png" width={100} height={100} alt="pattern" />
                    </div>

                    <button
                        onClick={() => setViewMode("UNIT")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all duration-300 relative z-10 ${viewMode === "UNIT" ? "bg-brand-blue text-white shadow-lg scale-105" : "text-slate-500 hover:bg-slate-50 hover:text-brand-blue"}`}
                    >
                        <Users className="w-4 h-4" />
                        <span className="hidden sm:inline">Struktur</span> Unit
                    </button>
                    <button
                        onClick={() => setViewMode("CLUSTER")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all duration-300 relative z-10 ${viewMode === "CLUSTER" ? "bg-orange-500 text-white shadow-lg scale-105" : "text-slate-500 hover:bg-slate-50 hover:text-orange-500"}`}
                    >
                        <Layers className="w-4 h-4" />
                        Kluster
                    </button>
                    <button
                        onClick={() => setViewMode("SUBUNIT")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all duration-300 relative z-10 ${viewMode === "SUBUNIT" ? "bg-brand-green text-white shadow-lg scale-105" : "text-slate-500 hover:bg-slate-50 hover:text-brand-green"}`}
                    >
                        <MapPin className="w-4 h-4" />
                        Sub Unit <span className="hidden sm:inline">(Dusun)</span>
                    </button>
                </div>
                <p className="text-center mt-4 text-slate-400 text-xs font-bold uppercase tracking-widest bg-white/50 inline-block px-4 py-1 rounded-full backdrop-blur-sm mx-auto left-0 right-0 w-fit">
                    {viewMode === "UNIT" && "Struktur Organisasi Unit & Divisi"}
                    {viewMode === "CLUSTER" && "Pembagian Berdasarkan Bidang Ilmu"}
                    {viewMode === "SUBUNIT" && "Pembagian Lokasi Tempat Tinggal"}
                </p>
            </div>

            {/* CONTENT AREA */}
            <div className="container mx-auto px-6 min-h-[50vh] relative">
                {/* Background Decorations for Content */}
                <div className="absolute top-20 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-10 opacity-10"
                    >
                        <Image src="/ornaments/or1.png" width={150} height={150} alt="decoration" />
                    </motion.div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/3 right-10 opacity-10"
                    >
                        <Image src="/ornaments/or3.png" width={200} height={200} alt="decoration" />
                    </motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-40 left-10 opacity-10"
                    >
                        <Image src="/ornaments/or2.png" width={250} height={250} alt="decoration" />
                    </motion.div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-20 right-10 opacity-10"
                    >
                        <Image src="/ornaments/or4.png" width={180} height={180} alt="decoration" />
                    </motion.div>
                </div>

                {/* VIEW: UNIT STRUCTURE */}
                {viewMode === "UNIT" && (
                    <>
                        {/* Core Officials */}
                        {renderSection("Pengurus Inti", MEMBERS.filter(m => CORE_ROLES.includes(m.role)), "text-brand-blue")}

                        {/* Divisions */}
                        {DIVISIONS.map(division => {
                            const members = MEMBERS.filter(m => m.division === division);
                            if (members.length === 0) return null;

                            // Color coding divisions roughly
                            let color = "text-slate-700";
                            if (division === "HUMPUM") color = "text-pink-600";
                            if (division === "DDD") color = "text-purple-600";
                            if (division === "LOKO") color = "text-amber-600";
                            if (division === "SPONSORSHIP") color = "text-emerald-600";

                            return renderSection(`Divisi ${division}`, members, color);
                        })}
                    </>
                )}

                {/* VIEW: CLUSTERS */}
                {viewMode === "CLUSTER" && (
                    CLUSTERS.map(cluster => {
                        const members = MEMBERS.filter(m => m.cluster === cluster);
                        if (members.length === 0) return null;

                        let color = "text-slate-800";
                        if (cluster === "Saintek") color = "text-blue-600";
                        if (cluster === "Soshum") color = "text-orange-600";
                        if (cluster === "Agro") color = "text-green-600";
                        if (cluster === "Medika") color = "text-red-600";

                        return renderSection(cluster, members, color);
                    })
                )}

                {/* VIEW: SUB UNITS (DUSUN) */}
                {viewMode === "SUBUNIT" && (
                    DUSUNS.map(dusun => {
                        const members = MEMBERS.filter(m => m.dusun === dusun);
                        if (members.length === 0) return null;
                        return renderSection(dusun, members, "text-brand-green");
                    })
                )}

            </div>

        </main>
    );
}
