"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, Download, Star, ExternalLink } from "lucide-react";

export default function SponsorshipPage() {
    return (
        <main className="min-h-screen bg-[#FDFDF5] pb-32 relative overflow-hidden">

            {/* Background Texture/Pattern for whole page */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('/ornaments/pattern-geometric.png')`, backgroundSize: '400px' }}></div>
            <div className="absolute top-[20%] right-0 translate-x-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[20%] left-0 -translate-x-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

            {/* HERO SECTION */}
            <div className="relative min-h-[50vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 animate-float-slow hidden md:block">
                    <Image src="/ornaments/or1.png" width={120} height={120} alt="ornament" className="opacity-80 drop-shadow-lg" />
                </div>
                <div className="absolute bottom-10 left-10 animate-float-delayed hidden md:block">
                    <Image src="/ornaments/or2.png" width={100} height={100} alt="ornament" className="opacity-80 drop-shadow-lg" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 bg-white border-2 border-brand-green border-dashed rounded-full text-brand-green font-bold text-sm mb-6 shadow-sm rotate-2"
                    >
                        ✨ Our Beloved Partners
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-6 text-slate-800 tracking-tight"
                        style={{ fontFamily: 'var(--font-jakarta)' }}
                    >
                        Mitra & <span className="text-brand-orange relative inline-block">
                            Sponsor
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-yellow/30 -rotate-1 -z-10 rounded-full"></span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-xl max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Kolaborasi tulus untuk membangun negeri. Terima kasih kepada para visioner yang membersamai langkah kami.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-20 space-y-24">

                {/* PLATINUM SPONSORS - Scrapbook Style */}
                <div className="text-center relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10"></div>
                    <div className="inline-block bg-[#FDFDF5] px-6">
                        <h2 className="text-2xl font-black text-slate-800 uppercase tracking-widest flex items-center justify-center gap-3">
                            <Star className="w-6 h-6 text-brand-yellow fill-brand-yellow" />
                            Platinum Sponsors
                            <Star className="w-6 h-6 text-brand-yellow fill-brand-yellow" />
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {[1, 2].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5, rotate: 0 }}
                            className="group relative bg-white p-4 pb-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 transform rotate-1 even:-rotate-1 hover:rotate-0"
                        >
                            {/* Tape Effect */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-brand-yellow/30 backdrop-blur-sm -rotate-2 mask-tape shadow-sm border-l border-r border-white/20"></div>

                            {/* Inner Frame */}
                            <div className="h-64 border-2 border-slate-100 bg-slate-50/50 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-brand-orange/30 transition-colors">
                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url('/ornaments/pattern-geometric.png')`, backgroundSize: '200px' }}></div>

                                <span className="text-5xl font-black text-slate-300 group-hover:text-slate-800 transition-colors duration-500 scale-90 group-hover:scale-100">
                                    LOGO {i}
                                </span>
                                <span className="absolute bottom-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Official Partner</span>
                            </div>

                            <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                <a href="#" className="flex items-center gap-2 px-4 py-2 bg-brand-orange text-white text-sm font-bold rounded-full shadow-lg hover:bg-brand-orange/90">
                                    Kunjungi Website <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GOLD SPONSORS - Postcard Grid */}
                <div>
                    <div className="text-center relative mb-12">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10"></div>
                        <span className="inline-block bg-[#FDFDF5] px-6 text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">
                            Gold Sponsors
                        </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-xl border-2 border-dashed border-slate-200 hover:border-brand-green/50 flex items-center justify-center aspect-[4/3] relative group shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-slate-200 group-hover:bg-brand-green transition-colors"></div>
                                <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-slate-200 group-hover:bg-brand-green transition-colors"></div>

                                <span className="text-xl font-bold text-slate-300 group-hover:text-slate-600 transition-colors">GOLD {i}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* MEDIA PARTNER - Stamp Style */}
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green"></div>

                    <h2 className="text-center text-slate-800 font-bold mb-10 uppercase tracking-wider text-sm flex items-center justify-center gap-3">
                        <span className="w-12 h-px bg-slate-300"></span>
                        Media Partner & Supported By
                        <span className="w-12 h-px bg-slate-300"></span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="group flex flex-col items-center gap-3 cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-brand-blue group-hover:scale-110 transition-all duration-300 shadow-sm">
                                    <span className="text-[10px] font-bold text-slate-300">LOGO</span>
                                </div>
                                <span className="font-bold text-slate-400 text-xs group-hover:text-slate-700 transition-colors">Partner {i}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA SECTION - Ticket Style */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="bg-brand-blue rounded-[3rem] overflow-hidden shadow-2xl relative p-1">
                        <div className="absolute inset-0 border-2 border-white/20 rounded-[3rem] pointer-events-none z-20 m-3 border-dashed"></div>

                        <div className="bg-gradient-to-br from-brand-blue to-[#0A2A2A] rounded-[2.8rem] px-8 py-20 md:px-20 text-center relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("/ornaments/pattern-geometric.png")`, backgroundSize: '300px' }}></div>

                            <motion.div
                                whileHover={{ rotate: 10 }}
                                className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-white/20 rotate-3"
                            >
                                <Mail className="w-10 h-10 text-brand-yellow" />
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                Mari Berkolaborasi!
                            </h2>
                            <p className="text-white/70 text-lg font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                                Jadilah bagian dari perubahan nyata. Dukungan Anda akan langsung berdampak pada pengembangan masyarakat.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-30">
                                <motion.a
                                    href="mailto:kknbangkabandhawa2026@gmail.com"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-brand-yellow text-brand-blue font-black rounded-xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-3 text-lg cursor-pointer"
                                >
                                    <Mail className="w-5 h-5" />
                                    Hubungi Kami
                                </motion.a>
                                <motion.a
                                    href="https://drive.google.com/file/d/18DzJRjOXek4fIXBnGxurfosQtvQgHs6M/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-lg cursor-pointer"
                                >
                                    <Download className="w-5 h-5" />
                                    Proposal
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.section>

            </div>
        </main>
    );
}
