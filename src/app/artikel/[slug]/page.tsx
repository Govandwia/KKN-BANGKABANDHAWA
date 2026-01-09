"use client";

import { useParams } from "next/navigation";
import { ARTICLES } from "@/data/articles";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ArticleDetail() {
    const params = useParams();
    const slug = params.slug as string;

    // Find article
    const article = ARTICLES.find((p) => p.slug === slug);

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center px-4">
                <h1 className="text-4xl font-bold text-brand-text mb-4">Artikel Tidak Ditemukan</h1>
                <p className="text-slate-500 mb-8">Maaf, artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
                <Link href="/artikel" className="px-6 py-3 bg-brand-green text-white rounded-full font-bold hover:bg-brand-green/90 transition-colors">
                    Kembali ke Daftar Artikel
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 pb-20 pt-28">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Breadcrumb / Back */}
                <div className="mb-8">
                    <Link href="/artikel" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-green transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Kembali ke Kabar KKN
                    </Link>
                </div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-brand-yellow/20 text-brand-orange text-xs font-bold rounded-full uppercase tracking-wider">
                            {article.category}
                        </span>
                        <span className="text-slate-400 text-sm flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {article.date}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black text-brand-text leading-tight mb-6">
                        {article.title}
                    </h1>

                    <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                                <User className="w-5 h-5 text-slate-400" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-brand-text">{article.author}</p>
                                <p className="text-xs text-slate-500">Kontributor</p>
                            </div>
                        </div>
                        <button className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-brand-green transition-colors" title="Bagikan">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full aspect-video bg-slate-200 rounded-2xl overflow-hidden mb-10 shadow-lg relative"
                >
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xl">
                        [Gambar Utama: {article.title}]
                    </div>
                </motion.div>

                {/* Content Body */}
                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-lg prose-slate max-w-none text-slate-600"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Interaction Footer */}
                <div className="mt-16 pt-8 border-t border-slate-200">
                    <h3 className="text-xl font-bold text-brand-text mb-4">Artikel Lainnya</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {ARTICLES.filter(a => a.id !== article.id).slice(0, 2).map(other => (
                            <Link href={`/artikel/${other.slug}`} key={other.id} className="block p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                                <h4 className="font-bold text-brand-text mb-1">{other.title}</h4>
                                <p className="text-xs text-slate-500">{other.date}</p>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
