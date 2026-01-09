"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { href: "/", label: "Beranda" },
    { href: "/program", label: "Program Kerja" },
    { href: "/artikel", label: "Artikel" },
    { href: "/galeri", label: "Galeri" },
    { href: "/anggota", label: "Anggota" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 transition-all duration-300">
            <header
                className={cn(
                    "w-full max-w-5xl h-16 px-6 flex items-center justify-between rounded-full transition-all duration-500",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 border border-white/20"
                        : "bg-transparent border-transparent shadow-none"
                )}
            >
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/logo/Logo KKN.png"
                        width={40}
                        height={40}
                        alt="Logo Bangka Bandhawa"
                        className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform"
                    />
                    <Image
                        src="/logo/bangkatext.png"
                        width={150}
                        height={40}
                        alt="Bangka Bandhawa Text"
                        className={cn(
                            "h-10 w-auto object-contain hidden sm:block transition-all duration-300",
                            isScrolled && "invert opacity-80"
                        )}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium hover:font-bold transition-all relative group",
                                isScrolled ? "text-brand-text/80 hover:text-brand-blue" : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.label}
                            {/* Underline Effect */}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full",
                                isScrolled ? "bg-brand-blue" : "bg-white"
                            )} />
                        </Link>
                    ))}
                    <Link href="/sponsorship" className="px-5 py-2 rounded-full bg-brand-yellow text-brand-text text-sm font-bold hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition-all cursor-pointer">
                        Our Sponsor
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className={cn("md:hidden p-2", isScrolled ? "text-brand-text" : "text-white")}>
                    <span className="sr-only">Open Menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </header>
        </div>
    );
}
