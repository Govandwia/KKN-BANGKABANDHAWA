import { BookOpen, TrendingUp, Heart, Leaf, Anchor, Users, Globe, Cpu, Droplets, Recycle } from "lucide-react";

export type Program = {
    id: string;
    title: string;
    description: string;
    details?: string;
    subPrograms?: { title: string; description?: string }[];
    icon?: any;
};

export type Cluster = {
    id: string;
    name: string;
    description: string;
    themeColor: string;
    textColor: string;
    borderColor: string;
    icon: any;
    programs: Program[];
};

export const PROGRAM_CLUSTERS: Cluster[] = [
    {
        id: "saintek",
        name: "Sains & Teknologi",
        description: "Inovasi teknologi tepat guna dan pemahaman geospasial untuk solusi lingkungan.",
        themeColor: "bg-blue-50",
        textColor: "text-blue-600",
        borderColor: "border-blue-200",
        icon: Cpu,
        programs: [
            {
                id: "st-1",
                title: "Geosphere Class",
                description: "Edukasi geoheritage dan peta untuk mengenalkan potensi geologi lokal.",
                details: "Geosphere Class merupakan program kerja edukatif yang bertujuan mengenalkan Indonesia melalui pemahaman peta dan potensi geoheritage. Program ini menanamkan wawasan geospasial sejak dini sekaligus mengangkat potensi wisata geologi lokal.",
                subPrograms: [
                    { title: "Pembelajaran Dasar Peta", description: "Penyampaian materi peta menggunakan peta besar (arah mata angin, skala, simbol) dilanjutkan aktivitas mewarnai peta daerah." },
                    { title: "Edukasi Geoheritage", description: "Survei titik geoheritage (batuan granit) dan pembuatan papan informasi geologi untuk pariwisata edukatif." }
                ]
            },
            {
                id: "st-2",
                title: "Tekno Edukasi",
                description: "Peningkatan literasi teknologi dan kesadaran digital pelajar.",
                details: "Program edukatif yang berfokus pada peningkatan literasi teknologi dan kesadaran digital di kalangan pelajar SMP dan SMA. Bertujuan melatih logika berpikir dan membentengi siswa dari bahaya kejahatan siber.",
                subPrograms: [
                    { title: "Kelas Logika & Pemrograman", description: "Melatih berpikir logis dan problem solving melalui algoritma dasar dan studi kasus sederhana." },
                    { title: "Penyuluhan Cyber Safety", description: "Edukasi bahaya judi online dan pinjaman online ilegal, mencakup risiko, dampak hukum, dan sosial." }
                ]
            },
            {
                id: "st-3",
                title: "InsClean Program",
                description: "Pengelolaan sampah partisipatif dengan insinerator dan tempat sampah edukatif.",
                details: "Upaya meningkatkan kesadaran perilaku masyarakat dalam pengelolaan sampah melalui pendekatan edukatif, fasilitas fisik, dan partisipasi warga secara langsung.",
                subPrograms: [
                    { title: "Insinerator Minim Asap", description: "Pembangunan rocket stove dari bahan beton/semen sebagai solusi pembakaran sampah yang lebih ramah lingkungan." },
                    { title: "Tempat Sampah Edukatif", description: "Penyediaan tempat sampah pedal dengan cermin motivasi dan kutipan positif untuk membangun kebiasaan bersih." }
                ]
            },
            {
                id: "st-4",
                title: "From Waste to POC",
                description: "Pemanfaatan limbah ikan menjadi Pupuk Organik Cair (POC).",
                details: "Mengolah limbah organik hasil perikanan yang melimpah menjadi produk bernilai guna untuk mengurangi pencemaran lingkungan pesisir.",
                subPrograms: [
                    { title: "Workshop Pembuatan POC", description: "Edukasi dan praktik langsung fermentasi limbah ikan dengan metode sederhana." },
                    { title: "Aplikasi pada Tanaman", description: "Demonstrasi penggunaan POC pada tanaman untuk membuktikan efektivitas hasil olahan." }
                ]
            },
            {
                id: "st-5",
                title: "Bioreeftek",
                description: "Rehabilitasi terumbu karang dengan media tempurung kelapa.",
                details: "Aksi nyata pemulihan ekosistem laut akibat kerusakan aktivitas manusia, menggunakan substrat alami yang ramah lingkungan.",
                subPrograms: [
                    { title: "Transplantasi Karang", description: "Pemanfaatan tempurung kelapa sebagai media tempel larva karang (planula) dengan teknik Bioreeftek." },
                    { title: "Edukasi Konservasi Laut", description: "Pelibatan taruna dan nelayan dalam perancangan dan peletakan media di perairan." }
                ]
            },
            {
                id: "st-6",
                title: "Alat Penarik Perahu",
                description: "Alat bantu mekanis untuk memudahkan nelayan menepikan perahu.",
                details: "Dirancang untuk membantu nelayan dalam proses penarikan perahu agar lebih aman, kuat, dan efisien, mengurangi beban fisik harian nelayan.",
                subPrograms: [
                    { title: "Instalasi Winch Manual", description: "Pemasangan sistem penarik menggunakan material stainless steel SS316 dan profil baja L tahan korosi." },
                    { title: "Safety & Navigasi", description: "Penyediaan rekomendasi alat pendukung seperti lampu suar LED tenaga surya untuk keselamatan malam hari." }
                ]
            },
            {
                id: "st-7",
                title: "Alat Pengering Ikan",
                description: "Teknologi pengeringan higienis berbasis energi terbarukan.",
                details: "Inovasi tepat guna untuk meningkatkan kualitas hasil olahan laut yang sering terkendala cuaca dan higienitas saat penjemuran konvensional.",
                subPrograms: [
                    { title: "Rumah Pengering Surya", description: "Sosialisasi alat pengering berbasis efek rumah kaca yang mempercepat proses pengeringan." },
                    { title: "Edukasi Higienitas", description: "Penyuluhan pentingnya pengolahan pasca-panen yang bersih untuk meningkatkan nilai jual produk." }
                ]
            },
            {
                id: "st-8",
                title: "Analisis Hidrogeologi",
                description: "Evaluasi kualitas air tanah dan filtrasi air bersih.",
                details: "Mendukung ketersediaan air bersih di wilayah pesisir yang rentan intrusi air laut melalui pemetaan ilmiah dan solusi filtrasi praktis.",
                subPrograms: [
                    { title: "Pemetaan Kualitas Air", description: "Pengambilan sampel sumur warga dan analisis kedalaman muka air tanah serta intrusi air laut." },
                    { title: "Filtrasi Air Sederhana", description: "Pembuatan prototipe alat filter untuk mengolah air payau/keruh menjadi air layak pakai." }
                ]
            },
            {
                id: "st-9",
                title: "Community Space",
                description: "Penyediaan ruang kolaborasi dan interaksi sosial warga.",
                details: "Transformasi lahan tidur menjadi area produktif yang berfungsi sebagai pusat interaksi, edukasi, dan kegiatan positif komunitas desa.",
                subPrograms: [
                    { title: "Penataan Lahan", description: "Pembersihan dan desain layout area untuk kenyamanan aktivitas warga." },
                    { title: "Aktivasi Ruang", description: "Penyelenggaraan event perdana dan serah terima pengelolaan kepada kelompok pemuda desa." }
                ]
            }
        ]
    },
    {
        id: "soshum",
        name: "Sosial & Humaniora",
        description: "Pemberdayaan masyarakat melalui literasi, ekonomi kreatif, dan sadar hukum.",
        themeColor: "bg-orange-50",
        textColor: "text-orange-600",
        borderColor: "border-orange-200",
        icon: Users,
        programs: [
            {
                id: "sh-1",
                title: "Pengelolaan Sampah Terpadu",
                description: "Edukasi zero waste dan ekonomi sirkular.",
                details: "Rangkaian kegiatan edukasi dan aksi pemberdayaan ekonomi lokal berbasis lingkungan untuk mengubah persepsi sampah menjadi berkah.",
                subPrograms: [
                    { title: "Edukasi Zero Waste & Eco-Enzym", description: "Pelatihan pemilahan sampah dan pembuatan cairan serbaguna ramah lingkungan dari kulit buah." },
                    { title: "Sustainable Solution Day", description: "Pameran puncak karya daur ulang dan produk UMKM desa dengan konsep eco-friendly." }
                ]
            },
            {
                id: "sh-2",
                title: "Digitalisasi Desa",
                description: "Literasi digital untuk keamanan dan produktivitas.",
                details: "Edukasi terpadu meningkatkan pemahaman masyarakat terkait dunia digital, mulai dari transaksi, keamanan data, hingga etika berinternet.",
                subPrograms: [
                    { title: "Transaksi Digital Aman", description: "Tutorial penggunaan QRIS/E-Wallet dan tips menghindari penipuan online (phishing/scam)." },
                    { title: "Internet Sehat", description: "Cara menyaring informasi (hoax) dan menggunakan media sosial secara bijak." }
                ]
            },
            {
                id: "sh-3",
                title: "Ekonomi Kreatif",
                description: "Peningkatan kapasitas dan legalitas UMKM.",
                details: "Pelatihan terpadu untuk meningkatkan daya saing UMKM Bangka Tengah melalui legalitas resmi dan branding modern.",
                subPrograms: [
                    { title: "Pendampingan NIB", description: "Fasilitasi pembuatan Nomor Induk Berusaha bagi pelaku usaha mikro berbasis produk lokal." },
                    { title: "Digital Marketing & Branding", description: "Pelatihan foto produk dan pembuatan akun media sosial bisnis untuk memperluas pasar." }
                ]
            },
            {
                id: "sh-4",
                title: "Pariwisata Berkelanjutan",
                description: "Pengembangan potensi wisata dan SDM pariwisata.",
                details: "Kolaborasi dengan Pokdarwis untuk meningkatkan kesadaran pengelolaan kawasan pesisir sebagai destinasi wisata unggulan.",
                subPrograms: [
                    { title: "Pemetaan Potensi Wisata", description: "Identifikasi spot wisata, aksesibilitas, dan UMKM pendukung bersama warga lokal." },
                    { title: "Capacity Building", description: "Pelatihan dasar tour guide, pembuatan guidebook, dan konten promosi desa wisata." }
                ]
            },
            {
                id: "sh-5",
                title: "Edukasi Masa Depan",
                description: "Peningkataan kesadaran pendidikan dan hak hukum.",
                details: "Fokus pada pengembangan SDM melalui motivasi pendidikan lanjut dan pemahaman hak-hak dasar warga negara.",
                subPrograms: [
                    { title: "Kelas Inspirasi & Karir", description: "Penggalian potensi diri untuk siswa SD dan info profesi/kuliah untuk siswa SMP/SMA." },
                    { title: "Advokasi Hukum Nelayan", description: "Sosialisasi hak hukum bagi nelayan dan petani yang terdampak aktivitas pertambangan." }
                ]
            }
        ]
    },
    {
        id: "agro",
        name: "Agrokompleks",
        description: "Pemulihan ekosistem pesisir dan kemandirian pangan berbasis pekarangan.",
        themeColor: "bg-green-50",
        textColor: "text-green-600",
        borderColor: "border-green-200",
        icon: Leaf,
        programs: [
            {
                id: "ag-1",
                title: "Mangrove & Seagrass",
                description: "Restorasi ekosistem pesisir untuk masa depan.",
                details: "Pemulihan sabuk hijau pantai untuk mencegah abrasi, menjaga habitat biota, dan menyerap karbon (Blue Carbon).",
                subPrograms: [
                    { title: "Edukasi Ekosistem Pesisir", description: "Penyuluhan fungsi ekologis mangrove dan padang lamun bagi keberlanjutan hasil tangkap nelayan." },
                    { title: "Aksi Penanaman", description: "Penanaman bibit mangrove dan lamun bersama pemuda desa di lokasi kritis." }
                ]
            },
            {
                id: "ag-2",
                title: "Kebun Mini & TOGA",
                description: "Pemanfaatan pekarangan untuk ketahanan pangan.",
                details: "Mengubah lahan pekarangan rumah menjadi sumber pangan dan obat keluarga yang produktif dan asri.",
                subPrograms: [
                    { title: "Penanaman TOGA", description: "Budidaya jahe, kunyit, sirih, binahong di polybag sebagai apotek hidup." },
                    { title: "Sayuran Pekarangan", description: "Integrasi tanaman sayur (sawi/bayam) dengan aplikasi POC hasil program Saintek." }
                ]
            },
            {
                id: "ag-3",
                title: "Sekolah Alam",
                description: "Pembelajaran lingkungan outdoor untuk anak-anak.",
                details: "Mengajak anak-anak kembali ke alam untuk menumbuhkan rasa cinta lingkungan sejak dini melalui metode bermain sambil belajar.",
                subPrograms: [
                    { title: "Eksplorasi Alam", description: "Pengenalan flora/fauna sekitar dan menanam bibit pohon." },
                    { title: "Permainan Edukatif", description: "Games bertema lingkungan seperti 'Pilah Sampah' dan 'Tebak Gerak Hewan'." }
                ]
            },
            {
                id: "ag-4",
                title: "Revitalisasi Seagrass",
                description: "Riset dan konservasi padang lamun.",
                details: "Fokus spesifik pada ekosistem lamun yang berfungsi menstabilkan sedimen dasar laut dan menjernihkan perairan.",
                subPrograms: [
                    { title: "Monitoring Kondisi", description: "Pengecekan kesehatan padang lamun di area terdampak tambang." },
                    { title: "Pilot Project Seeding", description: "Uji coba penanaman benih lamun di area perairan yang lebih dalam." }
                ]
            },
            {
                id: "ag-5",
                title: "Workshop Budidaya",
                description: "Praktik pertanian skala rumah tangga.",
                details: "Pelatihan teknis budidaya tanaman di lahan terbatas menggunakan input organik untuk kemandirian pangan.",
                subPrograms: [
                    { title: "Budidaya Polybag", description: "Teknik menanam sayur efektif di wadah terbatas." },
                    { title: "Eksperimen POC", description: "Uji banding tanaman dengan dan tanpa aplikasi POC untuk pembuktian efektivitas." }
                ]
            }
        ]
    },
    {
        id: "medika",
        name: "Medika",
        description: "Peningkatan derajat kesehatan masyarakat melalui prevensi dan edukasi.",
        themeColor: "bg-rose-50",
        textColor: "text-rose-600",
        borderColor: "border-rose-200",
        icon: Heart,
        programs: [
            {
                id: "md-1",
                title: "Dual Action for Health",
                description: "Donor darah dan pemeriksaan kesehatan kulit.",
                details: "Layanan kesehatan jemput bola yang memfasilitasi kepedulian sosial (donor) dan deteksi masalah kesehatan kerja (kulit) bagi nelayan.",
                subPrograms: [
                    { title: "Donor Darah", description: "Kerjasama dengan PMI untuk pengambilan darah dengan SOP medis standar." },
                    { title: "Skin Check Nelayan", description: "Skrining kesehatan kulit akibat paparan matahari/laut dan edukasi perawatannya." }
                ]
            },
            {
                id: "md-2",
                title: "PharmaKids MedSmart",
                description: "Edukasi obat sejak dini untuk anak-anak.",
                details: "Pengenalan profesi apoteker dan pemahaman dasar tentang obat-obatan dengan metode yang menyenangkan dan mudah dipahami anak.",
                subPrograms: [
                    { title: "Kenal Karakter Obat", description: "Storytelling tentang jenis obat (Sirup Sunny, Tablet Toby) dan fungsinya." },
                    { title: "Apoteker Cilik", description: "Roleplay profesi dan eksperimen sains sederhana terkait reaksi obat." }
                ]
            },
            {
                id: "md-3",
                title: "Apotek Dapur",
                description: "Meracik obat herbal aman dan higienis.",
                details: "Mengembalikan budaya minum jamu dengan standar kebersihan dan takaran yang tepat untuk kesehatan keluarga.",
                subPrograms: [
                    { title: "Workshop Herbal", description: "Edukasi manfaat jahe, kunyit, sereh dan cara pengolahannya yang benar." },
                    { title: "Praktik Peracikan", description: "Membuat minuman kesehatan (infused water, kunyit asam) bersama warga." }
                ]
            },
            {
                id: "md-4",
                title: "Smart Skin Pesisir",
                description: "Perawatan kulit alami untuk warga pesisir.",
                details: "Edukasi khusus mengenai perlindungan kulit dari iklim ekstrem pesisir menggunakan bahan-bahan alami yang tersedia di sekitar.",
                subPrograms: [
                    { title: "Pembuatan Skincare Alami", description: "Demo membuat toner lidah buaya dan masker daun kelor." },
                    { title: "Self-Skin Check", description: "Pelatihan mandiri mengenali jenis kulit dan masalah kulit dasar." }
                ]
            },
            {
                id: "md-5",
                title: "MABAR GIZI",
                description: "Makan Bareng Bergizi & Berenergi.",
                details: "Kampanye gizi seimbang melalui aktivitas fisik menyenangkan dan makan bersama dengan menu sehat.",
                subPrograms: [
                    { title: "Senam & Isi Piringku", description: "Aktivitas fisik pagi dilanjutkan edukasi porsi makan seimbang." },
                    { title: "Makan Bergizi Gratis", description: "Pembagian paket makan siang sehat hasil kolaborasi dengan UMKM lokal." }
                ]
            },
            {
                id: "md-6",
                title: "SIGAP Stunting",
                description: "Pemantauan pertumbuhan balita terintegrasi.",
                details: "Dukungan operasional Posyandu untuk memastikan data pertumbuhan balita akurat sebagai dasar penanganan stunting.",
                subPrograms: [
                    { title: "Antropometri Akurat", description: "Pengukuran BB/TB/LiLA balita dengan alat standar dan pendampingan kader." },
                    { title: "Pencatatan & Pelaporan", description: "Rekapitulasi data ke buku KIA/KMS untuk deteksi dini masalah pertumbuhan." }
                ]
            },
            {
                id: "md-7",
                title: "PureDrop Initiative",
                description: "Pencegahan DBD dengan spray anti-nyamuk alami.",
                details: "Inovasi pencegahan penyakit tropis (DBD) menggunakan bahan alami rumah tangga yang aman bagi pernapasan.",
                subPrograms: [
                    { title: "DIY Spray Anti-Nyamuk", description: "Pembuatan cairan repelen dari serai, kulit jeruk, dan alkohol." },
                    { title: "Edukasi 3M Plus", description: "Kampanye kebersihan lingkungan untuk memutus siklus hidup nyamuk." }
                ]
            }
        ]
    }
];
