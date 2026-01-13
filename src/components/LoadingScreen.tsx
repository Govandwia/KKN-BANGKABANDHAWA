"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time, 2 seconds is usually a good sweet spot
        // In a real app we might wait for actual resources, but for splash screen 2-3s is standard.
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-[#FDF6E3] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background Ornaments (Subtle) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-10 right-10 opacity-10 w-32 h-32"
                    >
                        <Image src="/ornaments/or1.png" width={128} height={128} alt="loading-ornament" />
                    </motion.div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-10 left-10 opacity-10 w-40 h-40"
                    >
                        <Image src="/ornaments/or3.png" width={160} height={160} alt="loading-ornament" />
                    </motion.div>

                    {/* Logo / Main Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 relative"
                        >
                            {/* Logo */}
                            <Image
                                src="/logo/Logo KKN.png"
                                width={120}
                                height={120}
                                alt="Bangka Bandhawa Logo"
                                className="drop-shadow-xl"
                                priority
                            />
                        </motion.div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl font-black text-brand-green mb-2 tracking-tight"
                        >
                            Bangka Bandhawa
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-slate-500 font-medium mb-10"
                        >
                            KKN-PPM UGM 2026
                        </motion.p>

                        {/* Loading Bar */}
                        <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.2, ease: "easeInOut" }}
                                className="h-full bg-gradient-to-r from-brand-green via-brand-yellow to-brand-blue rounded-full"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
