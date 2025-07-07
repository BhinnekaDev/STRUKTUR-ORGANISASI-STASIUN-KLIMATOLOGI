const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log("API Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

export interface Jabatan {
  id: string;
  nip: string;
  nama: string;
  jabatan: string;
  periode: string;
  foto: string;
  parent_id: number | null;
}

interface StrukturOrganisasiAPIResponse {
  ID_Struktur: string;
  Periode: string;
  Petugas: string;
  PetugasDetail: {
    NIP: string;
    ID_Jabatan: string;
    Masa_Bakti: string;
    Foto_Petugas: string;
    JabatanDetail: {
      Nama_Jabatan: string;
    };
    Nama_Depan_Petugas: string;
    Nama_Belakang_Petugas: string;
    No_Telepon_Petugas: string;
  };
}

export async function getStrukturOrganisasi(): Promise<Jabatan[]> {
  try {
    const response = await fetch(`${API_BASE_URL}struktur-organisasi`, {
      method: "GET",
    });
    console.log(response);

    if (!response.ok) {
      throw new Error("Gagal mengambil data struktur organisasi");
    }

    const result: StrukturOrganisasiAPIResponse[] = await response.json();

    const mapped = result.map(
      (item): Jabatan => ({
        id: item.ID_Struktur,
        nip: item.PetugasDetail.NIP,
        nama: `${item.PetugasDetail.Nama_Depan_Petugas} ${item.PetugasDetail.Nama_Belakang_Petugas}`,
        jabatan: item.PetugasDetail.JabatanDetail.Nama_Jabatan,
        periode: item.Periode,
        foto: item.PetugasDetail.Foto_Petugas,
        parent_id: null, // Bisa diganti jika API sediakan struktur hierarki
      })
    );

    console.log("Data struktur organisasi berhasil diambil:", mapped);
    return mapped;
  } catch (error) {
    throw new Error(
      (error as Error).message ||
        "Terjadi kesalahan saat mengambil data struktur organisasi"
    );
  }
}
