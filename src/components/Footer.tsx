"use client";

import Link from "next/link";
import { Instagram, Youtube, Facebook, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 bg-[#062e2e] text-slate-300 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white font-sans">
                            Bangka <span className="text-brand-yellow">Bandhawa</span>
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Sinergi untuk Pertumbuhan. Mewujudkan desa yang mandiri, inklusif, dan berkelanjutan melalui pengabdian tulus.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Tautan Cepat</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: "Beranda", href: "/" },
                                { name: "Program Kerja", href: "/program" },
                                { name: "Artikel", href: "/artikel" },
                                { name: "Galeri", href: "/galeri" },
                                { name: "Anggota", href: "/anggota" },
                                { name: "Sponsorship", href: "/sponsorship" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="group flex items-center gap-2 hover:text-brand-yellow transition-colors duration-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                                <span>
                                    Kecamatan Lubuk Besar,<br />
                                    Kabupaten Bangka Tengah,<br />
                                    Kepulauan Bangka Belitung
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-brand-green flex-shrink-0" />
                                <span>kkn.bangkabandhawa@ugm.ac.id</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-brand-green flex-shrink-0" />
                                <span>+62 812-3456-7890</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Compliance */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Mitra Kami</h4>
                        <p className="text-sm mb-4">
                            Didukung oleh Universitas Gadjah Mada dan Pemerintah Kabupaten Bangka Tengah.
                        </p>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-xs italic text-slate-500">
                                "Mengabdi dengan Hati, Berkarya untuk Negeri."
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© {currentYear} KKN-PPM UGM Bangka Bandhawa. All rights reserved.</p>
                    <p className="text-slate-600 italic text-xs">
                        with love and dedication --- sincerely MIKO
                    </p>
                </div>
            </div>
        </footer>
    );
}
