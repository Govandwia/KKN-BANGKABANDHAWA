"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, Download, Star, ExternalLink } from "lucide-react";

export default function SponsorshipPage() {
    return (
        <main className="min-h-screen bg-[#FDF6E3] pb-32">

            {/* HERO SECTION */}
            <div className="relative min-h-[60vh] flex flex-col items-center justify-center pt-24 overflow-hidden rounded-b-[4rem] bg-brand-blue shadow-2xl shadow-brand-blue/20">
                {/* Animated Background Layers */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[50%] -right-[20%] w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl border border-white/10 dashed"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-[0%] -left-[10%] w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-3xl"
                    />
                </div>

                {/* Floating Ornaments */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/3 left-[10%] opacity-80"
                    >
                        <Image src="/ornaments/or3.png" width={80} height={80} alt="ornament" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/3 right-[10%] opacity-80"
                    >
                        <Image src="/ornaments/or1.png" width={100} height={100} alt="ornament" />
                    </motion.div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-yellow-300 font-bold text-sm mb-8"
                    >
                        <Star className="w-4 h-4 fill-yellow-300" />
                        Our Valuable Partners
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
                    >
                        Mitra & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">Sponsor</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 text-xl max-w-2xl mx-auto font-medium"
                    >
                        Terima kasih kepada seluruh instansi dan perusahaan yang telah membersamai langkah kami membangun desa.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-20 relative z-20 space-y-24">

                {/* PLATINUM SPONSORS - Premium Cards */}
                <div className="text-center">
                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 flex items-center justify-center gap-4 opacity-70">
                        <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-slate-400"></span>
                        Platinum Sponsors
                        <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-slate-400"></span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[1, 2].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50"
                            >
                                {/* Shine Effect */}
                                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="h-32 flex items-center justify-center relative z-10">
                                    {/* Placeholder Logo */}
                                    {/* In real usage: <Image src="..." /> */}
                                    <span className="text-4xl font-black text-slate-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-green transition-all duration-300">
                                        LOGO {i}
                                    </span>
                                </div>

                                <div className="absolute bottom-6 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                                    <a href="#" className="flex items-center gap-2 text-sm font-bold text-brand-blue hover:underline">
                                        Kunjungi Website <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* GOLD SPONSORS - Clean Grid */}
                <div>
                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-10 text-center flex items-center justify-center gap-4 opacity-70">
                        <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-slate-400"></span>
                        Gold Sponsors
                        <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-slate-400"></span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-2xl h-32 flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                            >
                                <span className="text-lg font-bold text-slate-300 group-hover:text-brand-orange transition-colors">GOLD {i}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* SUPPORTED BY / MEDIA PARTNER */}
                <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 max-w-6xl mx-auto">
                    <h2 className="text-center text-slate-400 font-bold mb-8 uppercase tracking-wider text-xs">Media Partner & Supported By</h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                                <span className="font-bold text-slate-500 text-sm">Partner {i}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA SECTION */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-yellow to-orange-400 shadow-2xl shadow-orange-500/30"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("/ornaments/pattern-geometric.png")`, backgroundSize: '200px' }}></div>

                    <div className="relative z-10 px-8 py-20 md:px-20 text-center">
                        <motion.div
                            whileHover={{ rotate: 10 }}
                            className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg rotate-3"
                        >
                            <Mail className="w-10 h-10 text-brand-orange" />
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-sm">
                            Mari Berkolaborasi!
                        </h2>
                        <p className="text-white/90 text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                            Jadilah bagian dari perubahan nyata. Dukungan Anda akan langsung berdampak pada pengembangan Desa Batu Beriga dan Lubuk Besar.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-brand-orange font-black rounded-full shadow-lg shadow-black/10 flex items-center justify-center gap-3 text-lg"
                            >
                                <Mail className="w-5 h-5" />
                                Hubungi Sponsorship
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-black/10 text-white font-bold rounded-full border-2 border-white/30 hover:bg-black/20 transition-all flex items-center justify-center gap-3 text-lg backdrop-blur-sm"
                            >
                                <Download className="w-5 h-5" />
                                Unduh Proposal
                            </motion.button>
                        </div>
                    </div>
                </motion.section>

            </div>
        </main>
    );
}
