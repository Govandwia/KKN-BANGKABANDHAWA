"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function VisionMission() {
    return (
        <section className="relative py-24 bg-blue-50" id="visi-misi">
            {/* Background Ornament - Left */}
            <motion.div
                className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-10 pointer-events-none z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
                <Image
                    src="/ornaments/or2.png"
                    alt="Decoration"
                    width={400}
                    height={400}
                    className="w-48 h-48 md:w-[400px] md:h-[400px] object-contain"
                />
            </motion.div>

            {/* Background Ornament - Right */}
            <motion.div
                className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-5 pointer-events-none z-10"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <Image
                    src="/ornaments/or3.png"
                    alt="Decoration"
                    width={500}
                    height={500}
                    className="w-56 h-56 md:w-[500px] md:h-[500px] object-contain"
                />
            </motion.div>

            <div className="w-full px-4 md:px-12 lg:px-20 relative z-20">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-sans text-brand-text mb-4"
                    >
                        Visi & Misi
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 text-lg max-w-2xl mx-auto"
                    >
                        Membangun masa depan berkelanjutan melalui kolaborasi dan inovasi bersama masyarakat.
                    </motion.p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-[3rem] p-8 lg:p-10 border-2 border-dashed border-brand-green/30 relative overflow-hidden group hover:border-brand-green transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-telescope"><path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.153a.935.935 0 0 1 .698-1.111l6.102-1.53" /><path d="m2.482 7.81 2-2" /><path d="M4 21h4" /><path d="M12 21h9" /><path d="M9 21v-5l1-1" /><path d="M17 21v-2l1-1" /><path d="m15 5 2 2" /><path d="M20.3 3.3 9.6 14a2.5 2.5 0 0 0-3.5 0l-.5.5" /><path d="m13.4 8.3.6.6a2.5 2.5 0 0 0 3.5 0l.5-.5" /></svg>
                            </div>

                            <h3 className="text-2xl font-bold text-brand-text mb-4">Visi Kami</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Mewujudkan Desa Batu Beriga dan Kecamatan Lubuk Besar sebagai pusat komunitas produktif yang mendukung pertumbuhan UMKM dan pariwisata desa melalui penyediaan community space serta inovasi alat yang aplikatif dan berkelanjutan.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-[3rem] p-8 lg:p-10 border-2 border-dashed border-brand-yellow/30 relative overflow-hidden group hover:border-brand-yellow transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-brand-yellow/10 text-brand-yellow rounded-xl flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                            </div>

                            <h3 className="text-2xl font-bold text-brand-text mb-4">Misi Kami</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-600">
                                    <span className="w-6 h-6 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                                        1
                                    </span>
                                    <span>
                                        Membangun dan mengaktifkan community space desa sebagai wadah kolaborasi, pelatihan, promosi, dan inkubasi UMKM serta pusat interaksi masyarakat dan pelaku pariwisata desa.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <span className="w-6 h-6 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                                        2
                                    </span>
                                    <span>
                                        Membangun ekosistem budaya ekonomi yang mandiri dengan mengintegrasikan nilai lokal, kearifan budaya, serta aktivitas ekonomi masyarakat dalam pengelolaan UMKM dan pariwisata desa.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <span className="w-6 h-6 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                                        3
                                    </span>
                                    <span>
                                        Mengintegrasikan UMKM dengan sektor pariwisata desa, sehingga community space berfungsi sebagai pusat informasi wisata sekaligus etalase produk unggulan lokal.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <span className="w-6 h-6 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                                        4
                                    </span>
                                    <span>
                                        Mendorong keberlanjutan program melalui pelibatan aktif masyarakat, pemerintah desa, dan kelompok lokal dalam pengelolaan community space serta pemanfaatannya pasca-KKN.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
