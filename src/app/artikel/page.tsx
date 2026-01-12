"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ARTICLES } from "@/data/articles";
import { ArrowRight, Calendar, User, Search, Tag, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function ArticlesPage() {
    const [activeCategory, setActiveCategory] = useState("Semua");

    // Derived state
    const categories = ["Semua", ...Array.from(new Set(ARTICLES.map(a => a.category)))];
    const filteredArticles = activeCategory === "Semua"
        ? ARTICLES
        : ARTICLES.filter(a => a.category === activeCategory);

    const featuredArticle = filteredArticles[0];
    const remainingArticles = filteredArticles.slice(1);

    return (
        <main className="min-h-screen bg-[#FFF5F5] pb-32"> {/* Changed bg to slight red tint */}

            {/* HERO SECTION */}
            <div className="relative min-h-[50vh] flex flex-col items-center justify-center pt-24 pb-32 overflow-hidden rounded-b-[3rem] bg-red-700 shadow-xl">
                {/* Decorative Blobs */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-900/40 rounded-full blur-3xl translate-y-1/2 translate-x-1/2"></div>

                {/* Floating Ornaments */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 right-[15%] w-16 h-16 opacity-60 mix-blend-screen"
                    >
                        <Image src="/ornaments/or1.png" width={100} height={100} alt="ornament" />
                    </motion.div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm text-white font-bold text-sm mb-6 shadow-sm uppercase tracking-wider"
                    >
                        Bangka Bandhawa News
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                    >
                        Kabar & <span className="text-brand-yellow">Cerita</span> KKN
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/90 text-xl max-w-2xl mx-auto font-medium"
                    >
                        Rekam jejak perjalanan pengabdian kami di Desa Batu Beriga dan Lubuk Besar.
                    </motion.p>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="container mx-auto px-6 -mt-20 relative z-20">

                {/* TOOLBAR */}
                <div className="bg-white p-3 rounded-2xl shadow-lg border border-red-50 mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Category Filters */}
                    <div className="flex gap-2 p-1 overflow-x-auto w-full md:w-auto">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeCategory === cat
                                    ? "bg-red-600 text-white shadow-md shadow-red-200"
                                    : "bg-slate-50 text-slate-500 hover:bg-red-50 hover:text-red-500"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Mockup */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Cari artikel..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 transition-all font-medium hover:bg-white"
                        />
                    </div>
                </div>

                {/* FEATURED ARTICLE */}
                {featuredArticle && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-red-50 grid md:grid-cols-2">
                            {/* Image Side */}
                            <div className="relative h-64 md:h-auto overflow-hidden">
                                <Link href={`/artikel/${featuredArticle.slug}`}>
                                    <div className="absolute inset-0 bg-slate-200 transition-transform duration-700 group-hover:scale-110">
                                        {/* Placeholder for real image */}
                                        <div className="w-full h-full flex items-center justify-center text-red-300 font-bold bg-red-50">
                                            [Featured Image]
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 md:hidden">
                                        <span className="px-3 py-1 bg-white text-red-600 text-xs font-bold rounded-lg uppercase tracking-wider mb-2 inline-block shadow-sm">
                                            {featuredArticle.category}
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-center relative">
                                <div className="hidden md:block mb-6">
                                    <span className="px-4 py-1.5 bg-red-100 text-red-600 text-xs font-bold rounded-full uppercase tracking-wider">
                                        {featuredArticle.category}
                                    </span>
                                </div>

                                <Link href={`/artikel/${featuredArticle.slug}`} className="group-hover:text-red-600 transition-colors">
                                    <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 leading-tight">
                                        {featuredArticle.title}
                                    </h2>
                                </Link>

                                <div className="flex items-center text-slate-400 text-sm mb-6 gap-6 font-medium">
                                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredArticle.date}</span>
                                    <span className="flex items-center gap-2"><User className="w-4 h-4" /> {featuredArticle.author}</span>
                                </div>

                                <p className="text-slate-500 text-lg leading-relaxed mb-8 line-clamp-3">
                                    {featuredArticle.excerpt}
                                </p>

                                <Link
                                    href={`/artikel/${featuredArticle.slug}`}
                                    className="inline-flex items-center gap-2 text-red-600 font-bold text-base hover:gap-4 transition-all"
                                >
                                    Baca Selengkapnya <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* REMAINING ARTICLES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {remainingArticles.map((article, idx) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-slate-100 hover:border-red-100 hover:-translate-y-2"
                        >
                            {/* Card Image */}
                            <div className="relative h-56 overflow-hidden bg-slate-100">
                                <Link href={`/artikel/${article.slug}`}>
                                    <div className="absolute inset-0 bg-red-50 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center text-red-200 font-bold">
                                        [Image]
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-red-600 text-xs font-bold rounded-lg uppercase tracking-wider shadow-sm">
                                            {article.category}
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center text-slate-400 text-xs mb-3 gap-3 font-medium">
                                    <span>{article.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                    <span>{article.author}</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                                    <Link href={`/artikel/${article.slug}`}>
                                        {article.title}
                                    </Link>
                                </h3>

                                <p className="text-slate-500 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                                    {article.excerpt}
                                </p>

                                <div className="pt-4 border-t border-slate-100 flex justify-end">
                                    <Link href={`/artikel/${article.slug}`} className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-red-600 group-hover:text-white transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </main>
    );
}
