export interface Article {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML or Markdown content
    author: string;
    date: string;
    category: string;
    image: string;
}

export const ARTICLES: Article[] = [
    {
        id: "1",
        slug: "penerjunan-kkn-bangka-bandhawa-2026",
        title: "Penerjunan Mahasiswa KKN Bangka Bandhawa 2026",
        excerpt: "Sebanyak 30 mahasiswa UGM resmi diterjunkan di Desa Batu Beriga dan Lubuk Besar untuk mengabdi selama 50 hari.",
        content: `
            <p><strong>Bangka Tengah</strong> – Semangat pengabdian membara di wajah 30 mahasiswa Universitas Gadjah Mada (UGM) yang tergabung dalam Tim KKN-PPM Unit Bangka Bandhawa 2026. Mereka resmi diterjunkan pada Senin (1/7) untuk memulai masa pengabdian selama 50 hari di Kecamatan Lubuk Besar, Kabupaten Bangka Tengah.</p>
            
            <p>Acara penyambutan berlangsung hangat di Kantor Kecamatan Lubuk Besar. Camat Lubuk Besar menyambut baik kehadiran mahasiswa dan berharap program-program yang dibawa dapat memberikan dampak nyata bagi masyarakat, khususnya dalam sektor pariwisata dan UMKM yang menjadi fokus utama tema KKN tahun ini.</p>

            <h3>Fokus Utama: Sinergi dan Pertumbuhan</h3>
            <p>Dengan mengusung tema "Sinergi untuk Pertumbuhan", KKN Bangka Bandhawa berfokus pada kolaborasi erat dengan warga lokal. Kormanit KKN, dalam sambutannya, menegaskan bahwa mahasiswa hadir bukan untuk "menggurui", melainkan untuk belajar dan tumbuh bersama masyarakat.</p>

            <blockquote>"Kami datang membawa semangat dan ilmu, namun kami sadar pengalaman bapak-ibu sekalian adalah guru terbaik bagi kami. Mari kita bersinergi membangun desa," ujarnya.</blockquote>

            <p>Setelah upacara, mahasiswa langsung menuju lokasi penempatan masing-masing di Desa Batu Beriga dan Desa Lubuk Besar untuk melakukan observasi awal dan silaturahmi dengan perangkat desa setempat.</p>
        `,
        author: "Humas KKN",
        date: "01 Juli 2026",
        category: "Berita",
        image: "/hero-bg.jpg" // Using existing asset for now
    },
    {
        id: "2",
        slug: "potensi-wisata-batu-beriga",
        title: "Menyingkap Surga Tersembunyi di Pantai Batu Beriga",
        excerpt: "Pantai Batu Beriga memiliki pesona bebatuan granit yang unik. Mahasiswa KKN berupaya memetakan potensi wisata ini.",
        content: `
            <p>Desa Batu Beriga tidak hanya kaya akan hasil laut, tetapi juga menyimpan pesona alam yang memukau. Pantai Batu Beriga, dengan ciri khas bebatuan granit raksasa yang seolah berserakan di bibir pantai, menjadi daya tarik utama yang belum tergarap maksimal.</p>

            <p>Tim Cluster Saintek KKN Bangka Bandhawa melakukan pemetaan potensi wisata di kawasan ini. "Kami melihat potensi <em>geotourism</em> yang kuat. Bebatuan ini punya nilai estetika dan geologi yang tinggi," ujar salah satu anggota tim.</p>
            
            <p>Rencana ke depan meliputi pembuatan peta wisata digital, pelatihan pemandu wisata lokal, dan penataan area spot foto yang instagramable tanpa merusak alam. Diharapkan langkah ini dapat membuka lapangan kerja baru bagi pemuda desa.</p>
        `,
        author: "Tim Saintek",
        date: "05 Juli 2026",
        category: "Opini",
        image: "/ornaments/or1.png" // Placeholder
    },
    {
        id: "3",
        slug: "pelatihan-digital-marketing-umkm",
        title: "Digitalisasi UMKM: Membawa Produk Lokal ke Pasar Global",
        excerpt: "Pelatihan digital marketing bagi pelaku UMKM di Lubuk Besar antusias diikuti oleh ibu-ibu PKK.",
        content: `
            <p>Produk olahan ikan dan kerupuk dari Lubuk Besar memiliki rasa yang juara, namun seringkali terkendala dalam pemasaran. Menjawab tantangan ini, Tim KKN Soshum mengadakan pelatihan Digital Marketing di Balai Desa.</p>

            <p>Pelatihan ini mencakup cara memfoto produk dengan HP, membuat akun media sosial bisnis, hingga mendaftar di <em>marketplace</em>. "Ternyata mudah ya, saya jadi semangat jualan online," kata Ibu Siti, salah satu peserta.</p>

            <p>Tindak lanjut dari pelatihan ini adalah pendampingan intensif selama 2 minggu untuk memastikan setiap UMKM binaan memiliki minimal satu platform penjualan digital yang aktif.</p>
        `,
        author: "Tim Soshum",
        date: "10 Juli 2026",
        category: "Kegiatan",
        image: "/ornaments/or2.png" // Placeholder
    }
];
