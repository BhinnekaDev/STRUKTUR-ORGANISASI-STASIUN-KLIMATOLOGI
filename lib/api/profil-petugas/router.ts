const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface Jabatan {
  id: string;
  nip: string;
  nama: string;
  jabatan: string;
  periode: string;
  foto: string;
  parent_id: number | null; // Belum tersedia, jadi diset null
}

// Tipe untuk response dari /petugas
interface PetugasAPIResponse {
  NIP: string;
  ID_Jabatan: string;
  Jabatan: {
    Nama_Jabatan: string;
  };
  Nama_Depan_Petugas: string;
  Nama_Belakang_Petugas: string;
  No_Telepon_Petugas: string;
  Foto_Petugas: string;
  Masa_Bakti: string;
}

export async function getPetugas(): Promise<Jabatan[]> {
  try {
    const response = await fetch(`${API_BASE_URL}petugas`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Gagal mengambil data petugas");
    }

    const result: PetugasAPIResponse[] = await response.json();

    const mapped: Jabatan[] = result.map((item) => ({
      id: item.ID_Jabatan,
      nip: item.NIP,
      nama: `${item.Nama_Depan_Petugas} ${item.Nama_Belakang_Petugas}`,
      jabatan: item.Jabatan.Nama_Jabatan,
      periode: item.Masa_Bakti,
      foto: item.Foto_Petugas,
      parent_id: null, // jika nanti tersedia field hierarki, bisa diubah
    }));

    console.log("Data petugas berhasil diambil:", mapped);
    return mapped;
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    throw new Error(
      (error as Error).message ||
        "Terjadi kesalahan saat mengambil data petugas"
    );
  }
}
