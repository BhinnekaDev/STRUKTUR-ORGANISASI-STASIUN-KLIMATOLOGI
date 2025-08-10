/**
 * Interface Jabatan yang digunakan di frontend untuk menampilkan struktur organisasi
 */
export interface Jabatan {
    id: string;
    nip: string;
    nama: string;
    nama_lengkap: string;
    jabatan: string;
    tmt?: string;
    foto: string;
    parent_id: number | null;

    // Informasi tambahan (opsional)
    no_telepon?: string;
}

/**
 * Interface sesuai struktur respons dari endpoint /struktur-organisasi
 */
interface StrukturOrganisasiAPIResponse {
    ID_Struktur: string;
    Petugas: string;
    tmt?: string;
    jabatan: string;
    petugas: {
        nip: string;
        nama_lengkap: string;
        no_telepon?: string;
        foto_pegawai?: string;
    };
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL_KLIMATOLOGI as string;

/**
 * Fungsi untuk fetch dan mapping data struktur organisasi dari API
 */
export async function getStrukturOrganisasi(): Promise<Jabatan[]> {
    try {
        const response = await fetch(`${API_BASE_URL}struktur-organisasi`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(
                `Gagal mengambil data struktur organisasi: ${response.status}`
            );
        }

        const result: StrukturOrganisasiAPIResponse[] = await response.json();

        const mapped: Jabatan[] = result.map((item, index) => ({
            id: item.ID_Struktur || `${index}`,
            nip: item.petugas.nip,
            nama: item.petugas.nama_lengkap,
            nama_lengkap: item.petugas.nama_lengkap,
            jabatan: item.jabatan,
            tmt: item.tmt,
            foto: item.petugas.foto_pegawai || "/default.jpg",
            parent_id: null, // Jika API belum support, default null

            // Tambahan opsional
            no_telepon: item.petugas.no_telepon,
        }));

        console.log("✅ Data struktur organisasi berhasil diambil:", mapped);
        return mapped;
    } catch (error) {
        console.error("❌ Error saat mengambil struktur organisasi:", error);
        throw new Error(
            (error as Error).message ||
                "Terjadi kesalahan saat mengambil data struktur organisasi"
        );
    }
}
