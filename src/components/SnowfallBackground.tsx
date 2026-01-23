"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ORNAMENTS = [
    "/ornaments/or1.png",
    "/ornaments/or2.png",
    "/ornaments/or3.png",
    "/ornaments/or4.png",
];

export function SnowfallBackground() {
    const [snowflakes, setSnowflakes] = useState<any[]>([]);

    useEffect(() => {
        // Generate random snowflakes on client-side only to avoid hydration mismatch
        const flakes = Array.from({ length: 50 }).map((_, i) => {
            const duration = 60 + Math.random() * 60; // Very slow fall (1-2 minutes)
            return {
                id: i,
                x: Math.random() * 100, // Random horizontal position %
                delay: -Math.random() * duration, // Start immediately at random position in cycle
                duration: duration,
                size: 20 + Math.random() * 30, // Slightly smaller range
                image: ORNAMENTS[Math.floor(Math.random() * ORNAMENTS.length)],
                rotation: Math.random() * 360,
            };
        });
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden w-full h-full">
            {snowflakes.map((flake) => (
                <motion.div
                    key={flake.id}
                    initial={{ top: "-20%", rotate: flake.rotation, opacity: 0.8 }}
                    animate={{
                        top: "120%", // Fall passed the bottom to ensure exit
                        rotate: flake.rotation + 360,
                    }}
                    transition={{
                        duration: flake.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: flake.delay,
                    }}
                    className="absolute"
                    style={{
                        width: flake.size,
                        height: flake.size,
                        left: `${flake.x}%`,
                    }}
                >
                    <Image
                        src={flake.image}
                        fill
                        className="object-contain"
                        alt="snow"
                    />
                </motion.div>
            ))}
        </div>
    );
}
