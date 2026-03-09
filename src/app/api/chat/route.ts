import OpenAI from "openai";
import { NextResponse } from "next/server";
import { MEMBERS } from "@/data/members";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey || apiKey === "TEMPEL_API_KEY_GROQ_ANDA_DISINI") {
      return NextResponse.json(
        { error: "API Key Groq belum diatur. Silakan masukkan di .env.local" },
        { status: 500 }
      );
    }

    // Menggunakan OpenAI SDK namun diarahkan ke server Groq
    const groq = new OpenAI({ 
      apiKey: apiKey,
      baseURL: "https://api.groq.com/openai/v1",
    });
    
    const { history, message } = await req.json();

    // Mengoptimalkan Token: Hanya mengirim data pengurus inti 
    const pengurus = MEMBERS.filter(m => ["Kormanit", "Sekre 1", "Sekre 2", "Kormater"].includes(m.role));

    // Mendeklarasikan System Instruction yang Lebih Padat dan Hemat Kuota
    const systemInstruction = `
      Kamu adalah BANDA, AI asisten KKN UGM Bangka Bandhawa 2026.
      Karakter: Ramah, singkat, to-the-point maksimal 2 kalimat.
      
      Struktur Pimpinan (Tim Inti):
      - Kormanit: ${pengurus.find(m => m.role === "Kormanit")?.name || 'Mu\'ammar Ihza Syadi'}
      - Sekre 1 & 2: ${pengurus.find(m => m.role === "Sekre 1")?.name || 'Fega Achillea'} & ${pengurus.find(m => m.role === "Sekre 2")?.name || 'Govan Dwi'}
      
      Aturan:
      1. Jika ditanya soal data anggota (selain nama di atas/divisi: HUMPUB, SPONSORSHIP, LOKO, DDD), segera arahkan ke halaman "Anggota".
      2. Lokasi KKN: Desa Lubuk Besar & Batu Beriga (Bangka Tengah).
      3. Kontak Sponshorship: kknbangkabandhawa2026@gmail.com atau IG @kknugm.bangkabandhawa.
      4. Selalu jawab SUPER SINGKAT (1-2 kalimat).
    `;

    // Map histori format ke format yang dimengerti Llama 3 (Groq)
    const formattedHistory = history.map((msg: { role: string; parts?: { text: string }[], text?: string }) => ({
      role: msg.role === "user" ? "user" : "assistant",
      content: msg.text || (msg.parts ? msg.parts[0].text : ""),
    }));

    // Tambahkan user message saat ini
    const messages = [
      { role: "system", content: systemInstruction },
      ...formattedHistory,
      { role: "user", content: message }
    ];

    // Panggil Groq API
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // Model Llama 3 yang super cepat dan cerdas di Groq
      messages: messages as any,
    });

    const responseText = response.choices[0].message.content || "Maaf, BANDA sedang kebingungan memproses jawaban.";

    return NextResponse.json({ reply: responseText });
  } catch (error: any) {
    console.error("Groq API Error:", error);
    
    if (error?.status === 429 || error?.message?.includes("429") || error?.message?.includes("quota") || error?.message?.includes("rate limit")) {
      return NextResponse.json({ 
        reply: "Waduh kak, maaf banget BANDA lagi *overload* (kena limit permintaan dari Groq). 😅 Minta tolong tunggu bentar ya buat lanjut ngobrol! 🙏" 
      });
    }

    return NextResponse.json(
      { error: error?.message || "Terjadi kesalahan saat menghubungi server AI Groq." },
      { status: 500 }
    );
  }
}
