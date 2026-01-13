export interface Member {
    id: string;
    name: string;
    // Role is now more generic for division members, but specific for core leaders
    role: "Kormanit" | "Finance" | "Sekre 1" | "Sekre 2" | "Kadiv" | "Anggota";
    division?: "HUMPUB" | "DDD" | "LOKO" | "SPONSORSHIP"; // Optional, only for division members
    faculty: string;
    major: string;
    image: string;
    cluster: "Saintek" | "Soshum" | "Agro" | "Medika";
    dusun: "Dusun 1" | "Dusun 2" | "Dusun 3" | "Dusun 4" | "Dusun 5";
    instagram?: string;
    linkedin?: string;
    motto?: string;
}

export const MEMBERS: Member[] = [
    // --- CORE LEADERS (Pengurus Inti) ---
    { id: "1", name: "Nama Kormanit", role: "Kormanit", faculty: "Teknik", major: "Teknik Sipil", image: "", cluster: "Saintek", dusun: "Dusun 1", motto: "Memimpin dengan hati, melayani dengan aksi." },
    { id: "2", name: "Nama Finance", role: "Finance", faculty: "Ekonomika & Bisnis", major: "Akuntansi", image: "", cluster: "Soshum", dusun: "Dusun 1", motto: "Transparansi adalah kunci integritas." },
    { id: "3", name: "Nama Sekre 1", role: "Sekre 1", faculty: "Ilmu Budaya", major: "Sastra Inggris", image: "", cluster: "Soshum", dusun: "Dusun 2", motto: "Tertib administrasi, lancar kontribusi." },
    { id: "4", name: "Nama Sekre 2", role: "Sekre 2", faculty: "MIPA", major: "Statistika", image: "", cluster: "Saintek", dusun: "Dusun 2", motto: "Data akurat, keputusan tepat." },

    // --- DIVISI HUMPUB ---
    { id: "5", name: "Kadiv HUMPUB", role: "Kadiv", division: "HUMPUB", faculty: "ISIPOL", major: "Komunikasi", image: "", cluster: "Soshum", dusun: "Dusun 3", motto: "Menyambung rasa, merajut asa." },
    { id: "6", name: "Anggota HUMPUB 1", role: "Anggota", division: "HUMPUB", faculty: "ISIPOL", major: "Sosiologi", image: "", cluster: "Soshum", dusun: "Dusun 3" },
    { id: "7", name: "Anggota HUMPUB 2", role: "Anggota", division: "HUMPUB", faculty: "Filsafat", major: "Filsafat", image: "", cluster: "Soshum", dusun: "Dusun 3" },
    { id: "8", name: "Anggota HUMPUB 3", role: "Anggota", division: "HUMPUB", faculty: "Hukum", major: "Hukum", image: "", cluster: "Soshum", dusun: "Dusun 3" },

    // --- DIVISI DDD (Dokumentasi Desain Dekorasi) ---
    { id: "9", name: "Kadiv DDD", role: "Kadiv", division: "DDD", faculty: "Teknik", major: "Arsitektur", image: "", cluster: "Saintek", dusun: "Dusun 4", motto: "Visualisasikan mimpi, abadikan momen." },
    { id: "10", name: "Anggota DDD 1", role: "Anggota", division: "DDD", faculty: "Teknik", major: "PWK", image: "", cluster: "Saintek", dusun: "Dusun 4" },
    { id: "11", name: "Anggota DDD 2", role: "Anggota", division: "DDD", faculty: "MIPA", major: "Ilmu Komputer", image: "", cluster: "Saintek", dusun: "Dusun 4" },
    { id: "12", name: "Anggota DDD 3", role: "Anggota", division: "DDD", faculty: "Vokasi", major: "D4 Teknologi Rekayasa", image: "", cluster: "Saintek", dusun: "Dusun 4" },

    // --- DIVISI LOKO (Logistik & Akomodasi?) ---
    { id: "13", name: "Kadiv LOKO", role: "Kadiv", division: "LOKO", faculty: "Teknik", major: "Teknik Mesin", image: "", cluster: "Saintek", dusun: "Dusun 5" },
    { id: "14", name: "Anggota LOKO 1", role: "Anggota", division: "LOKO", faculty: "Teknik", major: "Teknik Industri", image: "", cluster: "Saintek", dusun: "Dusun 5" },
    { id: "15", name: "Anggota LOKO 2", role: "Anggota", division: "LOKO", faculty: "Pertanian", major: "Agroteknologi", image: "", cluster: "Agro", dusun: "Dusun 5" },
    { id: "16", name: "Anggota LOKO 3", role: "Anggota", division: "LOKO", faculty: "Peternakan", major: "Ilmu Peternakan", image: "", cluster: "Agro", dusun: "Dusun 5" },

    // --- DIVISI SPONSORSHIP ---
    { id: "17", name: "Kadiv SPONSORSHIP", role: "Kadiv", division: "SPONSORSHIP", faculty: "Ekonomika & Bisnis", major: "Manajemen", image: "", cluster: "Soshum", dusun: "Dusun 1" },
    { id: "18", name: "Anggota SPONSORSHIP 1", role: "Anggota", division: "SPONSORSHIP", faculty: "Ekonomika & Bisnis", major: "Ilmu Ekonomi", image: "", cluster: "Soshum", dusun: "Dusun 1" },
    { id: "19", name: "Anggota SPONSORSHIP 2", role: "Anggota", division: "SPONSORSHIP", faculty: "Vokasi", major: "D4 Bisnis", image: "", cluster: "Soshum", dusun: "Dusun 1" },

    // --- NON-DIVISION MEMBERS (Filling out the rest to 30) ---
    // Assuming some members might just be focused on program work or cluster work without a specific unit division, 
    // OR we should distribute evryone into these divisions. 
    // For now, I'll put the rest as just 'Anggota' without a division property if that's allowed, 
    // OR I will assume the user implies EVERYONE is in a division. 
    // Let's distribute the Medika/Agro people into these divisions for completeness.

    { id: "20", name: "Anggota Medika 1", role: "Anggota", division: "HUMPUB", faculty: "Kedokteran", major: "Pendidikan Dokter", image: "", cluster: "Medika", dusun: "Dusun 2" },
    { id: "21", name: "Anggota Medika 2", role: "Anggota", division: "HUMPUB", faculty: "Farmasi", major: "Farmasi", image: "", cluster: "Medika", dusun: "Dusun 2" },
    { id: "22", name: "Anggota Medika 3", role: "Anggota", division: "DDD", faculty: "Kedokteran Gigi", major: "Kedokteran Gigi", image: "", cluster: "Medika", dusun: "Dusun 2" },
    { id: "23", name: "Anggota Medika 4", role: "Anggota", division: "DDD", faculty: "Kedokteran Hewan", major: "Kedokteran Hewan", image: "", cluster: "Medika", dusun: "Dusun 5" },
    { id: "24", name: "Anggota Medika 5", role: "Anggota", division: "SPONSORSHIP", faculty: "Kedokteran", major: "Gizi Kesehatan", image: "", cluster: "Medika", dusun: "Dusun 5" },

    { id: "25", name: "Anggota Agro 1", role: "Anggota", division: "LOKO", faculty: "Pertanian", major: "Penyuluhan", image: "", cluster: "Agro", dusun: "Dusun 3" },
    { id: "26", name: "Anggota Agro 2", role: "Anggota", division: "LOKO", faculty: "Kehutanan", major: "Kehutanan", image: "", cluster: "Agro", dusun: "Dusun 3" },
    { id: "27", name: "Anggota Agro 3", role: "Anggota", division: "SPONSORSHIP", faculty: "Teknologi Pertanian", major: "TPHP", image: "", cluster: "Agro", dusun: "Dusun 4" },

    // Remaining fillers
    { id: "28", name: "Anggota Extra 1", role: "Anggota", division: "DDD", faculty: "MIPA", major: "Matematika", image: "", cluster: "Saintek", dusun: "Dusun 1" },
    { id: "29", name: "Anggota Extra 2", role: "Anggota", division: "HUMPUB", faculty: "Psikologi", major: "Psikologi", image: "", cluster: "Soshum", dusun: "Dusun 2" },
    { id: "30", name: "Anggota Extra 3", role: "Anggota", division: "LOKO", faculty: "Teknik", major: "Teknik Kimia", image: "", cluster: "Saintek", dusun: "Dusun 3" },
];
