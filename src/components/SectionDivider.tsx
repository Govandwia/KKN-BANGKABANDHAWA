"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function SectionDivider() {
    const { scrollY } = useScroll();

    // Entrance Animation based on Scroll
    // 0px to 300px: Fade in and Scale up (Faster appearance)
    const opacity = useTransform(scrollY, [0, 300], [0, 1]);
    const scale = useTransform(scrollY, [0, 300], [0.8, 1]);
    const y = useTransform(scrollY, [0, 300], [100, 0]);

    return (
        <div className="relative w-full h-64 md:h-[500px] -mt-32 md:-mt-[250px] z-30 pointer-events-none">
            {/* Container to center the crossing lines */}
            <div className="absolute inset-0 flex items-center justify-center">

                {/* Wrapper for Scroll Entrance */}
                <motion.div
                    style={{ opacity, scale, y }}
                    className="w-full h-full relative"
                >
                    {/* Blue Line - Moving Top Right */}
                    <motion.div
                        className="absolute w-[130%] h-auto left-1/2"
                        initial={{ x: "-50%" }}
                        animate={{
                            x: ["-52%", "-48%", "-52%"],
                            y: ["2%", "-2%", "2%"]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Image
                            src="/ornaments/lineblue.png"
                            alt="Blue Divider"
                            width={1920}
                            height={300}
                            className="w-full h-full object-contain opacity-90"
                        />
                    </motion.div>

                    {/* Red Line - Moving Top Left */}
                    <motion.div
                        className="absolute w-[130%] h-auto left-1/2"
                        initial={{ x: "-50%" }}
                        animate={{
                            x: ["-48%", "-52%", "-48%"],
                            y: ["2%", "-2%", "2%"]
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    >
                        <Image
                            src="/ornaments/linered.png"
                            alt="Red Divider"
                            width={1920}
                            height={300}
                            className="w-full h-full object-contain opacity-90"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
}
