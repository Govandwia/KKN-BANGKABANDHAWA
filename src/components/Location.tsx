"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DistrictMap } from "./DistrictMap";

interface VillageData {
    id: string;
    name: string;
    description: string;
    color: string;
}

const VILLAGE_METADATA: VillageData[] = [
    { id: "batu_beriga", name: "Desa Batu Beriga", description: "Desa pesisir dengan potensi wisata bahari yang memukau dan kearifan lokal yang kuat.", color: "#02AA6D" },
    { id: "lubuk_besar", name: "Kec. Lubuk Besar", description: "Pusat kegiatan ekonomi, pemerintahan kecamatan, dan pengembangan UMKM masyarakat.", color: "#C0392B" },
    { id: "belimbing", name: "Desa Belimbing", description: "Desa asri dengan perkebunan buah yang melimpah dan pemandangan perbukitan yang indah.", color: "#00A6FB" },
    { id: "kulur", name: "Desa Kulur", description: "Wilayah dengan tradisi budaya yang masih kental, ramah tamah, dan semangat gotong royong.", color: "#27AE60" },
    { id: "kulur_kilir", name: "Desa Kulur Ilir", description: "Kawasan strategis dengan potensi perikanan darat dan pertanian yang terus berkembang.", color: "#BD2A16" },
    { id: "lubuk_lingkuk", name: "Desa Lubuk Lingkuk", description: "Desa dengan lahan pertanian yang subur dan masyarakat yang guyub rukun.", color: "#FFE400" },
    { id: "lubuk_pabrik", name: "Desa Lubuk Pabrik", description: "Sentra pengolahan hasil bumi dan perkebunan dengan inovasi produk lokal.", color: "#00A6FB" },
    { id: "perlang", name: "Desa Perlang", description: "Terkenal dengan Danau Pading dan wisata alamnya yang menjadi ikon pariwisata daerah.", color: "#416F46" },
    { id: "trubus", name: "Desa Trubus", description: "Desa yang tumbuh dengan semangat wirausaha dan persatuan warga yang kokoh.", color: "#FFE400" },
];

export function Location() {
    const [activeLocation, setActiveLocation] = useState<VillageData>(VILLAGE_METADATA[0]);

    const handleSelectLocation = (id: string) => {
        const found = VILLAGE_METADATA.find(v => v.id === id);
        if (found) setActiveLocation(found);
    };

    return (
        <section className="relative py-24 bg-red-50" id="lokasi">
            <div className="w-full px-4 md:px-12 lg:px-20">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-sans text-brand-text mb-4"
                    >
                        Lokasi Pengabdian
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg max-w-2xl mx-auto"
                    >
                        Jelajahi 9 desa yang menjadi titik fokus kegiatan KKN Bangka Bandhawa di Kabupaten Bangka Tengah.
                    </motion.p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Map Column (Left/Top) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 relative w-full aspect-[4/3] lg:aspect-[16/9] rounded-[3rem] border-2 border-dashed border-brand-yellow/50 bg-slate-50 p-6 md:p-10 flex items-center justify-center overflow-hidden"
                    >
                        {/* Ornament */}
                        <div className="absolute -top-12 -right-12 w-40 h-40 opacity-80 pointer-events-none z-0">
                            <Image src="/ornaments/or4.png" alt="Decoration" width={200} height={200} className="w-full h-full object-contain" />
                        </div>

                        {/* Background Text */}
                        <span className="absolute bottom-6 left-8 text-slate-200 font-bold text-3xl select-none z-0 uppercase tracking-widest hidden md:block">
                            {activeLocation.name}
                        </span>

                        {/* Unified District Map */}
                        <div className="relative w-full h-full z-10 flex items-center justify-center p-4">
                            <DistrictMap
                                activeId={activeLocation.id}
                                onSelect={handleSelectLocation}
                            />
                        </div>
                    </motion.div>

                    {/* List/Info Column (Right/Bottom) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-4 space-y-6"
                    >
                        {/* Active Details Card */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            {/* Subtle background glow */}
                            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 transition-colors duration-500 blur-3xl" style={{ backgroundColor: activeLocation.color }} />

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundColor: activeLocation.color }}
                                >
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl text-brand-text leading-tight">{activeLocation.name}</h3>
                                    <span className="text-sm text-slate-400 font-medium">Kab. Bangka Tengah</span>
                                </div>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6 text-base relative z-10">
                                {activeLocation.description}
                            </p>
                            <div className="h-1.5 w-20 rounded-full transition-all duration-500 group-hover:w-full" style={{ backgroundColor: activeLocation.color }} />
                        </div>

                        {/* Village List */}
                        <div className="bg-white/50 rounded-3xl p-6 border border-slate-100 backdrop-blur-sm">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">DAFTAR DESA</h4>
                            <div className="space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                                {VILLAGE_METADATA.map((loc) => (
                                    <button
                                        key={loc.id}
                                        onClick={() => handleSelectLocation(loc.id)}
                                        className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 group text-left ${activeLocation.id === loc.id ? 'bg-white shadow-md border-l-4 translate-x-1' : 'hover:bg-white/80 hover:shadow-sm hover:translate-x-1'}`}
                                        style={{ borderLeftColor: activeLocation.id === loc.id ? loc.color : 'transparent' }}
                                    >
                                        <span
                                            className={`w-3 h-3 rounded-full mr-3 transition-transform duration-300 flex-shrink-0 ${activeLocation.id === loc.id ? 'scale-125' : 'scale-100 group-hover:scale-110'}`}
                                            style={{ backgroundColor: loc.color }}
                                        />
                                        <span className={`font-medium text-sm line-clamp-1 ${activeLocation.id === loc.id ? 'text-brand-text' : 'text-slate-500'}`}>
                                            {loc.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
