"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ALL_PHOTOS } from "@/data/gallery";

const NAV_LINKS = [
    { href: "/", label: "Beranda" },
    { href: "/program", label: "Program Kerja" },
    { href: "/artikel", label: "Artikel" },
    { href: "/galeri", label: "Galeri" },
    { href: "/anggota", label: "Anggota" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 transition-all duration-300">
                <header
                    className={cn(
                        "w-full max-w-5xl h-16 px-6 flex items-center justify-between rounded-full transition-all duration-500",
                        isScrolled || isMobileMenuOpen
                            ? "bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 border border-white/20"
                            : "bg-transparent border-transparent shadow-none"
                    )}
                >
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group relative z-50" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image
                            src="/logo/Logo KKN.png"
                            width={40}
                            height={40}
                            alt="Logo Bangka Bandhawa"
                            className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform"
                        />
                        <Image
                            src="/logo/bangkatext.png"
                            width={200}
                            height={56}
                            alt="Bangka Bandhawa Text"
                            className={cn(
                                "h-14 w-auto object-contain hidden sm:block transition-all duration-300",
                                (isScrolled || isMobileMenuOpen) && "invert opacity-80"
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
                    <button
                        className={cn("md:hidden p-2 relative z-50 transition-colors", (isScrolled || isMobileMenuOpen) ? "text-brand-text" : "text-white")}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="sr-only">Toggle Menu</span>
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </header>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[45] bg-white/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-4">
                            {NAV_LINKS.map((link, idx) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-brand-text hover:text-brand-blue transition-colors flex items-center justify-between border-b border-gray-100 pb-3"
                                >
                                    {link.label}
                                    <span className="text-sm font-normal text-gray-400">0{idx + 1}</span>
                                </Link>
                            ))}
                            <Link
                                href="/sponsorship"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-2 w-full py-3 rounded-xl bg-brand-yellow text-brand-text text-lg font-bold text-center shadow-lg shadow-yellow-500/20"
                            >
                                Our Sponsor
                            </Link>

                            {/* Fly-in Panel Gallery Preview */}
                            <div className="mt-6">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Galeri Terbaru</h3>
                                <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide snap-x">
                                    {ALL_PHOTOS.slice(0, 6).map((photo) => (
                                        <div key={photo.id} className="relative min-w-[120px] aspect-[4/5] rounded-xl overflow-hidden shadow-md snap-start flex-shrink-0">
                                            <Image
                                                src={photo.src}
                                                alt={photo.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                    <Link href="/galeri" onClick={() => setIsMobileMenuOpen(false)} className="min-w-[100px] aspect-[4/5] rounded-xl bg-slate-100 flex items-center justify-center text-brand-blue font-bold text-sm snap-start flex-shrink-0">
                                        Lihat Semua
                                    </Link>
                                </div>
                            </div>
                        </nav>

                        <div className="mt-auto text-center text-gray-400 text-sm pt-8">
                            <p>© 2026 KKN Bangka Bandhawa</p>
                            <p>Universitas Gadjah Mada</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
