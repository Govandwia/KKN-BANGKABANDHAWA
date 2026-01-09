"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bg pt-20">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Dark Overlay for readability */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video/videoplayback.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Ornaments (Watermarks) - Above video, below content */}
            <motion.div
                className="absolute top-10 right-10 opacity-20 pointer-events-none select-none z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
                <Image
                    src="/ornaments/or3.png" // Blue
                    alt="Decoration"
                    width={250}
                    height={250}
                />
            </motion.div>
            <motion.div
                className="absolute bottom-20 left-10 opacity-20 pointer-events-none select-none z-10"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <Image
                    src="/ornaments/or2.png" // Green
                    alt="Decoration"
                    width={300}
                    height={300}
                />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-semibold tracking-wide mb-6">
                        KKN-PPM UGM 2026
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans text-white mb-6 tracking-tight text-balance">
                        Sinergi untuk <span className="text-brand-green">Pertumbuhan</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-200 mb-10 leading-relaxed text-balance">
                        Integrasikan kolaborasi sebagai wujud nyata pertumbuhan inklusif
                        dan dampak berkelanjutan di Desa Batu Beriga & Lubuk Besar,
                        Kabupaten Bangka Tengah.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-brand-red text-white font-semibold rounded-full hover:bg-brand-red/90 transition-all flex items-center gap-2 shadow-lg shadow-brand-red/20 group cursor-pointer hover:scale-105">
                            Jelajahi Program
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors cursor-pointer hover:border-white/50">
                            Tentang Kami
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none z-20" />
        </section>
    );
}
