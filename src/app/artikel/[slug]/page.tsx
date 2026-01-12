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
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF5F5] text-center px-4">
                <h1 className="text-4xl font-bold text-brand-text mb-4">Artikel Tidak Ditemukan</h1>
                <p className="text-slate-500 mb-8">Maaf, artikel yang Anda cari tidak tersedia atau telah dihapus.</p>
                <Link href="/artikel" className="px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-colors">
                    Kembali ke Daftar Artikel
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#FFF5F5] pb-20 pt-28">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Breadcrumb / Back */}
                <div className="mb-8">
                    <Link href="/artikel" className="inline-flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors font-medium">
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
                        <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full uppercase tracking-wider">
                            {article.category}
                        </span>
                        <span className="text-slate-400 text-sm flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {article.date}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black text-brand-text leading-tight mb-6">
                        {article.title}
                    </h1>

                    <div className="flex items-center justify-between border-b border-red-100 pb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                                <User className="w-5 h-5 text-slate-400" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-brand-text">{article.author}</p>
                                <p className="text-xs text-slate-500">Kontributor</p>
                            </div>
                        </div>
                        <button className="p-2 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors" title="Bagikan">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full aspect-video bg-red-50 rounded-2xl overflow-hidden mb-10 shadow-lg relative border border-red-50"
                >
                    <div className="absolute inset-0 flex items-center justify-center text-red-200 font-bold text-xl">
                        [Gambar Utama: {article.title}]
                    </div>
                </motion.div>

                {/* Content Body */}
                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-lg prose-slate max-w-none text-slate-600 prose-headings:text-brand-text prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Interaction Footer */}
                <div className="mt-16 pt-8 border-t border-red-100">
                    <h3 className="text-xl font-bold text-brand-text mb-4">Artikel Lainnya</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {ARTICLES.filter(a => a.id !== article.id).slice(0, 2).map(other => (
                            <Link href={`/artikel/${other.slug}`} key={other.id} className="block p-4 rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-red-100">
                                <h4 className="font-bold text-brand-text mb-1 group-hover:text-red-600 transition-colors">{other.title}</h4>
                                <p className="text-xs text-slate-500">{other.date}</p>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
