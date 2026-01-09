"use client";

import { motion } from "framer-motion";
import { MEMBERS, Member } from "@/data/members";
import { Layers, Users, MapPin, User, Star } from "lucide-react"; // Added Star icon for Kadiv
import { useState } from "react";

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
                            {/* Card Style */}
                            <div className={`bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 ${member.role === 'Kadiv' ? 'ring-2 ring-brand-yellow/50' : ''}`}>
                                <div className="aspect-square bg-slate-100 rounded-lg mb-4 overflow-hidden relative">
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

                                <h3 className="font-bold text-brand-text leading-tight mb-1">{member.name}</h3>

                                {/* Dynamic Subtext based on View */}
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

                                {/* Always show the 'other' context info in small text */}
                                <div className="mt-2 pt-2 border-t border-slate-100 flex flex-wrap gap-1">
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
            <div className="bg-brand-green pt-32 pb-24 rounded-b-[3rem] relative overflow-hidden mb-12">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Tim KKN</h1>
                    <p className="text-white/80 text-xl max-w-2xl mx-auto">
                        Kenalan dengan wajah-wajah di balik Bangka Bandhawa.
                    </p>
                </div>
            </div>

            {/* VIEW SWITCHER */}
            <div className="sticky top-24 z-40 mb-16 px-4">
                <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md p-1.5 rounded-full shadow-lg border border-white/50 flex p-1">
                    <button
                        onClick={() => setViewMode("UNIT")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all ${viewMode === "UNIT" ? "bg-brand-blue text-white shadow-md" : "text-slate-500 hover:bg-slate-100"}`}
                    >
                        <Users className="w-4 h-4" />
                        Struktur Unit
                    </button>
                    <button
                        onClick={() => setViewMode("CLUSTER")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all ${viewMode === "CLUSTER" ? "bg-brand-orange text-white shadow-md" : "text-slate-500 hover:bg-slate-100"}`}
                    >
                        <Layers className="w-4 h-4" />
                        Kluster
                    </button>
                    <button
                        onClick={() => setViewMode("SUBUNIT")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all ${viewMode === "SUBUNIT" ? "bg-brand-green text-white shadow-md" : "text-slate-500 hover:bg-slate-100"}`}
                    >
                        <MapPin className="w-4 h-4" />
                        Sub Unit (Dusun)
                    </button>
                </div>
                <p className="text-center mt-3 text-slate-400 text-xs font-medium uppercase tracking-widest">
                    {viewMode === "UNIT" && "Menampilkan Struktur Organisasi Unit & Divisi"}
                    {viewMode === "CLUSTER" && "Menampilkan Pembagian Berdasarkan Bidang Ilmu"}
                    {viewMode === "SUBUNIT" && "Menampilkan Pembagian Lokasi Tempat Tinggal"}
                </p>
            </div>

            {/* CONTENT AREA */}
            <div className="container mx-auto px-6 min-h-[50vh]">

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
