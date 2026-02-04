export interface Member {
    id: string;
    name: string;
    // Expanded roles to include specific KKN roles
    role: "Kormanit" | "Finance" | "Sekre 1" | "Sekre 2" | "Kadiv" | "Anggota" | "Kormater" | "Kormasit" | "Sekretaris";
    division?: "HUMPUB" | "DDD" | "LOKO" | "SPONSORSHIP"; // Optional, only for division members
    faculty: string;
    major: string;
    image: string;
    cluster: "Saintek" | "Soshum" | "Agro" | "Medika";
    // Made dusun string to accommodate uncertain data, defaulting to "Dusun 1" if unknown
    dusun: "Dusun 1" | "Dusun 2" | "Dusun 3" | "Dusun 4" | "Dusun 5" | string;
    instagram?: string;
    linkedin?: string;
    motto?: string;
    imagePosition?: string; // e.g. "object-center", "object-bottom"
    imageScale?: number; // e.g. 1.2 for 120% zoom
}

export const MEMBERS: Member[] = [
    // --- CORE LEADERS (Pengurus Inti) ---
    {
        id: "23/518554/TK/57109",
        name: "Mu’ammar Ihza Syadi",
        role: "Kormanit",
        faculty: "Teknik",
        major: "Teknik Nuklir",
        image: "/anggota/IMG_2001 - Muammar Ihza Syadi.jpeg",
        cluster: "Saintek",
        dusun: "Dusun 1",
        motto: "Proses menentukan hasil!!!"
    },
    {
        id: "23/519618/SA/22510",
        name: "Fega Achillea Maydena",
        role: "Sekre 1",
        faculty: "Ilmu Budaya",
        major: "Bahasa, Sastra, dan Budaya Jawa",
        image: "/anggota/IMG_3147-4x6 - Fega Achillea Maydena.JPG",
        cluster: "Soshum",
        dusun: "Dusun 1",
        motto: "ꦲꦺꦭꦶꦁꦭꦤ꧀ꦮꦱ꧀ꦥꦢ"
    },
    {
        id: "govan-sekre-2",
        name: "Govan", // User: please update with full name
        role: "Sekre 2",
        faculty: "Fakultas?", // User: please update
        major: "Jurusan?", // User: please update
        image: "/anggota/profile-photo govan.png",
        cluster: "Saintek", // User: please update
        dusun: "Dusun 1", // User: please update
        motto: "Bersinergi Membangun Negeri" // User: please update
    },
    // Note: No "Finance" / "Bendahara" explicitly listed in the provided data.

    // --- SPECIAL ROLES ---
    {
        id: "23/513262/TK/56405",
        name: "Pertiwi Zumi Maghfiroh",
        role: "Kormater",
        division: "HUMPUB",
        faculty: "Teknik",
        major: "Teknik Geologi",
        image: "/anggota/foto - Pertiwi Zumi Maghfiroh.jpeg",
        cluster: "Saintek",
        dusun: "Dusun 1",
        motto: "Datang, Berproses, Berdampak",
        imagePosition: "object-[center_65%]", // 1/3 from bottom
        imageScale: 1.6
    },
    {
        id: "23/523327/SP/31779",
        name: "Dinda Calista Khairunnisa",
        role: "Kormater",
        division: "HUMPUB",
        faculty: "ISIPOL",
        major: "Manajemen dan Kebijakan Publik",
        image: "/anggota/Pas Foto_Dinda Calista Khairunnisa - Dinda Calista Khairunnisa.jpg",
        cluster: "Soshum",
        dusun: "Dusun 1",
        motto: "What's yours will find a way to you"
    },
    {
        id: "23/514236/FA/13859",
        name: "Nabilah Qonitah",
        role: "Kormater",
        division: "HUMPUB",
        faculty: "Farmasi",
        major: "Farmasi",
        image: "/anggota/IMG-20260126-WA0110 - nabilah qonita.jpg",
        cluster: "Medika",
        dusun: "Dusun 1",
        motto: "terus berenang terus berenang"
    },
    {
        id: "23/518594/TK/57117",
        name: "I Gusti Lanang Rado Prayata Astina",
        role: "Kormasit",
        division: "LOKO",
        faculty: "Teknik",
        major: "Teknik Nuklir",
        image: "/anggota/foto diri - I Gusti Lanang Rado Prayata Astina.jpeg",
        cluster: "Saintek",
        dusun: "Dusun 1",
        motto: "Menguasai diri = Menguasai segala hal"
    },

    // --- DIVISI HUMPUB ---
    {
        id: "23/522484/SV/23702",
        name: "Aurell Putri M",
        role: "Anggota",
        division: "HUMPUB",
        faculty: "Sekolah Vokasi",
        major: "D4 Teknologi Survei dan Pemetaan Dasar",
        image: "/anggota/DSCF3837 (1) - Aurell Putri Maharani.JPG",
        cluster: "Saintek",
        dusun: "Dusun 1",
        motto: "\"Let God do the rest\""
    },
    {
        id: "23/513971/FA/13848",
        name: "Tia Okta Ramadhani",
        role: "Anggota",
        division: "HUMPUB",
        faculty: "Farmasi",
        major: "Farmasi",
        image: "/anggota/Foto Diri_Tia Okta - tia okta.JPG",
        cluster: "Medika",
        dusun: "Dusun 1",
        motto: "even when things don’t turn out the way i imagined, I learn, I heal, and I rise a little wiser🌻☃️"
    },
    {
        id: "23/522879/PN/18779",
        name: "Dina Purnamaningtyas",
        role: "Anggota",
        division: "HUMPUB",
        faculty: "Pertanian",
        major: "Ilmu Tanah",
        image: "/anggota/WhatsApp Image 2026-02-04 at 12.06.11 dina.jpeg",
        cluster: "Agro",
        dusun: "Dusun 1",
        motto: "Petakan lagi pusaran nirfungsi"
    },
    {
        id: "23/514414/HK/23588",
        name: "alysia el zahrani",
        role: "Anggota",
        division: "HUMPUB",
        faculty: "Hukum",
        major: "Hukum",
        image: "/anggota/WhatsApp Image 2026-01-26 at 15.24.27 - Alysia El Zahrani.jpeg",
        cluster: "Soshum",
        dusun: "Dusun 1",
        motto: "\"everything you lose is a step you take\"",
        imagePosition: "object-center"
    },

    // --- DIVISI SPONSORSHIP ---
    {
        id: "23/516257/31379",
        name: "Ni Made Ayu Suciati",
        role: "Anggota",
        division: "SPONSORSHIP",
        faculty: "Ilmu Sosial dan Ilmu Politik",
        major: "Ilmu Hubungan Internasional",
        image: "/anggota/IMG_2645 - Ni Made Ayu Suciati.jpeg",
        cluster: "Soshum",
        dusun: "Dusun 1",
        motto: "Be kind, be loving, be truthful."
    },
    {
        id: "23/515928/SV/22646",
        name: "Kisnanto",
        role: "Anggota",
        division: "SPONSORSHIP",
        faculty: "Sekolah Vokasi",
        major: "Perbankan",
        image: "/anggota/WhatsApp Image 2026-01-25 at 17.57.12 - Kisnanto.jpeg",
        cluster: "Soshum",
        dusun: "Dusun 1",
        motto: "Lebih baik berani mencoba meskipun gagal, daripada tidak mencoba sama sekali"
    },
    {
        id: "23/512368/TK/56323",
        name: "Fathiya Azizi",
        role: "Anggota",
        division: "SPONSORSHIP",
        faculty: "Teknik",
        major: "Teknik Kimia",
        image: "/anggota/foto_fathiya - Fathiya Azizi.jpeg",
        cluster: "Saintek",
        dusun: "Dusun 1",
        motto: "Apa pun yang dipilih, tuntaskan."
    },
    {
        id: "23/521968/KU/25192",
        name: "Siti Fadilah Noviyanti",
        role: "Anggota",
        division: "SPONSORSHIP",
        faculty: "FKKMK",
        major: "Gizi Kesehatan",
        image: "/anggota/WhatsApp Image 2026-01-25 at 21.52.27 - Siti Fadilah Noviyanti.jpeg",
        cluster: "Medika",
        dusun: "Dusun 1",
        motto: "it will pass"
    },

    // --- DIVISI LOKO ---
    {
        id: "23/516082/TK/56785",
        name: "Aini Qalbi Lathifa",
        role: "Anggota",
        division: "LOKO",
        faculty: "Teknik",
        major: "Teknik Kimia",
        image: "/anggota/WhatsApp Image 2026-01-25 at 13.16.57 - Aini Qalbi Lathifa.jpeg",
        cluster: "Saintek",
        dusun: "Dusun 1",
        motto: "Stop talking, start acting"
    },
    {
        id: "23/515083/TP/13746",
        name: "Ceria Hayyu Rahmadani",
        role: "Kormater",
        division: "LOKO",
        faculty: "Teknologi Pertanian",
        major: "Teknologi Pangan dan Hasil Pertanian",
        image: "/anggota/Formal Pict_Ceria Hayyu Rahmadani - Ceria Hayyu Rahmadani.JPG",
        cluster: "Agro",
        dusun: "Dusun 1",
        motto: "I take full responsibility for my choices, embrace every opportunity, and committed to rational yet thoughtful decision-making."
    },
    {
        id: "23/511876/TK/56274",
        name: "MADE KRISHNAYA ANANDA",
        role: "Anggota",
        division: "LOKO",
        faculty: "Teknik",
        major: "Teknik Mesin",
        image: "/anggota/foto diri_Made Krishnaya Ananda - Made Krishnaya Ananda.jpeg",
        cluster: "Saintek",
        dusun: "Dusun 1",
        motto: "Be The Penguin"
    },

    // --- DIVISI DDD ---
    {
        id: "23/519094/HK/23738",
        name: "Naila Edgina",
        role: "Anggota",
        division: "DDD",
        faculty: "Hukum",
        major: "Hukum",
        image: "/anggota/_DSC0301 (1) - Naila Edgina.JPG",
        cluster: "Soshum",
        dusun: "Dusun 1",
        motto: "know it's for the better"
    },
    {
        id: "23/518607/PS/23394",
        name: "Rafael Rayhan Widusaka",
        role: "Anggota",
        division: "DDD",
        faculty: "Psikologi",
        major: "Psikologi",
        image: "/anggota/IMG_20240822_192546_447 - Rafael Rayhan Widusaka.jpg",
        cluster: "Soshum",
        dusun: "Dusun 1",
        motto: "Menyenangkan atau tidak, pilih sendiri"
    },
    {
        id: "23/515692/SP/31333",
        name: "Belva Salsabila Anas Putri ",
        role: "Anggota",
        division: "DDD",
        faculty: "ISIPOL",
        major: "Ilmu Komunikasi",
        image: "/anggota/AJK09356 - Belva Salsabila.JPG",
        cluster: "Soshum",
        dusun: "Dusun 1",
        motto: "semua akan lewat tapi turu sek"
    },
    {
        id: "23/518586/TK/57113",
        name: "Rizki Nurhidayat",
        role: "Anggota",
        division: "DDD",
        faculty: "Teknik",
        major: "Teknik Sipil",
        image: "/anggota/WhatsApp Image 2026-01-26 at 5.04.32 PM - Rizki Nurhidayat.jpeg",
        cluster: "Saintek",
        dusun: "Dusun 1",
        motto: "nyoba aja dulu, nanti juga terbiasa. Just Learning By Doing"
    },
    {
        id: "23/520859/BI/11334",
        name: "Nayla Dwiputri Adelis",
        role: "Anggota",
        division: "DDD",
        faculty: "Biologi",
        major: "Biologi",
        image: "/anggota/motion_photo_8665603303101331883 - Nayla Dwiputri Adelis.jpg",
        cluster: "Saintek",
        dusun: "Dusun 1",
        motto: "we stress to much for a life that can end at anytime, so make sure to live"
    },
];
