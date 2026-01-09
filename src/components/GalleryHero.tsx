"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// EXTENDED 3D SCENE: Images + Ornaments distributed deep into Z space
const HERO_OBJECTS = [
    // --- Deep Background (Z: -4000 to -5000) ---
    { id: 30, type: "image", color: "bg-blue-100", x: -900, y: -500, z: -4800, rotate: 15 },
    { id: 29, type: "image", color: "bg-red-100", x: 900, y: 400, z: -4600, rotate: -10 },
    { id: "or1", type: "ornament", src: "/ornaments/or1.png", x: 0, y: -800, z: -4700, scale: 1.5, rotateSpeed: 2 },
    { id: 28, type: "image", color: "bg-green-100", x: -400, y: 600, z: -4400, rotate: 20 },
    { id: 27, type: "image", color: "bg-yellow-100", x: 500, y: -300, z: -4200, rotate: -15 },
    { id: 26, type: "image", color: "bg-purple-100", x: 0, y: 800, z: -4000, rotate: 5 },

    // --- Far Background (Z: -3000 to -4000) ---
    { id: 25, type: "image", color: "bg-cyan-100", x: -800, y: -200, z: -3800, rotate: -25 },
    { id: "or2", type: "ornament", src: "/ornaments/or2.png", x: 1000, y: 0, z: -3700, scale: 1.2, rotateSpeed: -3 },
    { id: 24, type: "image", color: "bg-pink-100", x: 800, y: 300, z: -3600, rotate: 10 },
    { id: 23, type: "image", color: "bg-orange-100", x: -600, y: 700, z: -3400, rotate: -5 },
    { id: 22, type: "image", color: "bg-teal-100", x: 600, y: -600, z: -3200, rotate: 15 },
    { id: 21, type: "image", color: "bg-indigo-100", x: 200, y: 0, z: -3000, rotate: -20 },

    // --- Mid-Far Layer (Z: -2000 to -3000) ---
    { id: 20, type: "image", color: "bg-rose-100", x: -1000, y: 500, z: -2800, rotate: 12 },
    { id: "or3", type: "ornament", src: "/ornaments/or3.png", x: -500, y: -500, z: -2700, scale: 1.8, rotateSpeed: 1 },
    { id: 19, type: "image", color: "bg-emerald-100", x: 1000, y: -400, z: -2600, rotate: -18 },
    { id: 18, type: "image", color: "bg-violet-100", x: -300, y: -700, z: -2400, rotate: 8 },
    { id: 17, type: "image", color: "bg-amber-100", x: 400, y: 200, z: -2200, rotate: -12 },
    { id: 16, type: "image", color: "bg-sky-100", x: -900, y: -300, z: -2000, rotate: 25 },

    // --- Mid Layer (Z: -1000 to -2000) ---
    { id: 15, type: "image", color: "bg-lime-100", x: 700, y: 600, z: -1800, rotate: -15 },
    { id: 14, type: "image", color: "bg-fuchsia-100", x: -500, y: 0, z: -1600, rotate: 20 },
    { id: 13, type: "image", color: "bg-blue-200", x: 600, y: -500, z: -1400, rotate: -10 },
    { id: "or4", type: "ornament", src: "/ornaments/or4.png", x: 0, y: 400, z: -1300, scale: 1.4, rotateSpeed: -2 },
    { id: 12, type: "image", color: "bg-red-200", x: -800, y: 300, z: -1200, rotate: 5 },
    { id: 11, type: "image", color: "bg-green-200", x: 0, y: -600, z: -1000, rotate: -25 },

    // --- Near Layer (Z: -500 to -1000) ---
    { id: 10, type: "image", color: "bg-yellow-200", x: -400, y: 200, z: -900, rotate: 15 },
    { id: 9, type: "image", color: "bg-purple-200", x: 500, y: -100, z: -800, rotate: -20 },
    { id: 8, type: "image", color: "bg-pink-200", x: -200, y: -400, z: -700, rotate: 10 },
    { id: 7, type: "image", color: "bg-indigo-200", x: 300, y: 400, z: -600, rotate: -15 },

    // --- Close Layer (Z: 0 to -500) ---
    { id: 6, type: "image", color: "bg-cyan-200", x: -600, y: -200, z: -500, rotate: 25 },
    { id: "or5", type: "ornament", src: "/ornaments/or2.png", x: 600, y: -300, z: -450, scale: 1, rotateSpeed: 4 },
    { id: 5, type: "image", color: "bg-orange-200", x: 600, y: 150, z: -400, rotate: -10 },
    { id: 4, type: "image", color: "bg-teal-200", x: -150, y: 300, z: -300, rotate: 5 },
    { id: 3, type: "image", color: "bg-rose-200", x: 200, y: -300, z: -200, rotate: -25 },
    { id: 2, type: "image", color: "bg-emerald-200", x: -350, y: 50, z: -150, rotate: 15 },
    { id: 1, type: "image", color: "bg-violet-200", x: 400, y: 0, z: -100, rotate: -15 },
];

export function GalleryHero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Move camera forward by 5500 units to clear all images
    const zMovement = useTransform(scrollYProgress, [0, 1], [0, 5500]);

    // Fade out removed for stability
    // const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

    // Revealed Content Opacity - Fades in as we fly through
    const revealOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    const revealScale = useTransform(scrollYProgress, [0.4, 1], [0.8, 1]);

    return (
        // Increased height to 400vh to give time to scroll through 30 images
        <section ref={containerRef} className="relative w-full h-[400vh]">
            <div className="sticky top-0 w-full h-screen overflow-hidden bg-brand-green/5">

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#02AA6D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                {/* REVEALED CONTENT (Fixed at the back) */}
                <motion.div
                    style={{ opacity: revealOpacity, scale: revealScale }}
                    className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-auto"
                >
                    <div className="text-center">
                        <div className="w-20 h-20 bg-brand-yellow rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg animate-bounce">
                            <span className="text-2xl">👇</span>
                        </div>
                        <h2 className="text-4xl md:text-8xl font-black text-brand-green/20 leading-tight uppercase tracking-tighter">
                            Dokumentasi<br />Terlengkap
                        </h2>
                        <p className="mt-4 text-slate-400 font-bold text-lg">Menjelajahi Jejak Pengabdian</p>
                    </div>
                </motion.div>

                {/* 3D SCENE CONTAINER */}
                <div className="absolute inset-0 flex items-center justify-center perspective-[1000px]">
                    <motion.div
                        style={{
                            transformStyle: "preserve-3d",
                            z: zMovement, // Move the entire world forward
                        }}
                        className="relative w-full h-full flex items-center justify-center will-change-transform"
                    >

                        {/* IMAGES AND ORNAMENTS */}
                        {HERO_OBJECTS.map((obj) => (
                            <div
                                key={obj.id}
                                style={{
                                    transform: `translate3d(${obj.x}px, ${obj.y}px, ${obj.z}px) rotate(${obj.rotate || 0}deg)`,
                                }}
                                className={`absolute flex items-center justify-center origin-center will-change-transform ${obj.type === 'ornament' ? 'pointer-events-none' : ''}`}
                            >
                                {obj.type === 'image' ? (
                                    <div className="w-64 h-48 md:w-80 md:h-60 bg-white p-2 shadow-2xl relative">
                                        {/* Tape Effect */}
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 rotate-1 backdrop-blur-sm shadow-sm z-30 transform -skew-x-12 opacity-80" />

                                        <div className={`w-full h-full relative overflow-hidden ${obj.color} flex items-center justify-center`}>
                                            <div className="text-slate-400/50 font-bold text-lg">
                                                [IMG {obj.id}]
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear", duration: 20 / (Math.abs(obj.rotateSpeed || 1)) }}
                                        className="w-32 h-32 md:w-48 md:h-48 opacity-80"
                                        style={{ scale: obj.scale }}
                                    >
                                        <Image
                                            src={obj.src || ""}
                                            width={200}
                                            height={200}
                                            alt="ornament"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>
                                )}
                            </div>
                        ))}

                        {/* CENTRAL BADGE (At Z=0) */}
                        <div className="absolute z-50 bg-white px-12 py-10 md:px-20 md:py-16 rounded-[4rem] border-[6px] border-dashed border-brand-yellow/60 shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-center w-[90%] md:w-auto mx-4 origin-center">
                            {/* Decorative Ornaments on Badge */}
                            <div className="absolute -top-12 -left-10 w-24 h-24 md:w-32 md:h-32">
                                <Image src="/ornaments/or2.png" width={150} height={150} alt="ornament" className="w-full h-full object-contain animate-spin-slow" />
                            </div>
                            <div className="absolute -bottom-12 -right-10 w-24 h-24 md:w-32 md:h-32">
                                <Image src="/ornaments/or4.png" width={150} height={150} alt="ornament" className="w-full h-full object-contain animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                            </div>

                            <h1 className="text-4xl md:text-7xl font-bold font-sans text-brand-text mb-2 tracking-tight">
                                Galeri <span className="text-brand-green">KKN</span>
                            </h1>
                            <p className="text-slate-400 font-bold text-lg md:text-xl tracking-widest uppercase mt-4">
                                Bangka Bandhawa 2026
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
