"use client";

import { motion } from "framer-motion";
import { Member } from "@/data/members";
import { User, Star, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const CORE_ROLES = ["Kormanit", "Finance", "Sekre 1", "Sekre 2"];

interface MemberCardProps {
    member: Member;
    viewMode: "UNIT" | "CLUSTER" | "SUBUNIT";
}

export function MemberCard({ member, viewMode }: MemberCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="relative h-full" style={{ perspective: "1000px" }}>
            <motion.div
                className="relative w-full h-full transition-all duration-500"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                {/* --- FRONT FACE --- */}
                <div
                    className={`bg-white p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative overflow-hidden cursor-pointer h-full flex flex-col ${member.role === 'Kadiv' ? 'ring-2 ring-brand-yellow/50' : ''}`}
                    style={{ backfaceVisibility: "hidden" }}
                >
                    {/* Card Pattern Watermark */}
                    <div className="absolute -right-4 -bottom-4 opacity-[0.03] pointer-events-none">
                        <Image src="/ornaments/or1.png" width={120} height={120} alt="pattern" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue/20 to-brand-green/20"></div>

                    <div className="aspect-square bg-slate-100 rounded-lg mb-4 overflow-hidden relative z-10 shrink-0">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                            {/* Placeholder if no image, or actual image */}
                            {member.image ? (
                                <Image src={member.image} alt={member.name} fill className="object-cover" />
                            ) : (
                                <User className="w-16 h-16" />
                            )}
                        </div>

                        {/* Division/Role Badges */}
                        <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
                            {member.role === 'Kadiv' && (
                                <span className="bg-brand-yellow text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-white" /> Kadiv
                                </span>
                            )}
                            {CORE_ROLES.includes(member.role) && (
                                <span className="bg-brand-blue text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                                    {member.role}
                                </span>
                            )}
                        </div>

                        {/* Tap Hint */}
                        <div className="absolute bottom-2 right-2 bg-black/20 text-white text-[8px] px-2 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                            Click to Flip
                        </div>
                    </div>

                    <h3 className="font-bold text-brand-text leading-tight mb-1 relative z-10 text-balance">{member.name}</h3>

                    {/* Dynamic Subtext */}
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

                    {/* Footer Tags */}
                    <div className="mt-auto pt-2 border-t border-slate-100 flex flex-wrap gap-1 relative z-10">
                        {viewMode !== 'CLUSTER' && (
                            <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded">{member.cluster}</span>
                        )}
                        {viewMode !== 'SUBUNIT' && (
                            <span className="text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded">{member.dusun}</span>
                        )}
                    </div>
                </div>

                {/* --- BACK FACE --- */}
                <div
                    className="absolute inset-0 h-full w-full bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg border-2 border-dashed border-brand-blue/30 cursor-pointer overflow-hidden ring-4 ring-white/50"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    {/* Background Pattern */}


                    {/* Decorative Corner Ornaments */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 opacity-20 rotate-45 pointer-events-none">
                        <Image src="/ornaments/or2.png" fill className="object-contain" alt="decoration" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20 rotate-45 pointer-events-none">
                        <Image src="/ornaments/or4.png" fill className="object-contain" alt="decoration" />
                    </div>

                    <div className="relative z-10 text-brand-text">
                        <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                            <Quote className="w-5 h-5 fill-current" />
                        </div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Motto Hidup</h4>
                        <p className="text-base font-bold italic font-serif leading-relaxed text-brand-blue">
                            "{member.motto || "Bersinergi Membangun Negeri"}"
                        </p>
                        <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-green mx-auto mt-6 rounded-full opacity-50" />
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
