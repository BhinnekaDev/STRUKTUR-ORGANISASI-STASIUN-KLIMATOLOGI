export interface Jabatan {
  id: string;
  nip: string;
  nama: string;
  nama_lengkap: string;
  jabatan: string;
  tmt?: string;
  foto: string;
  parent_id: number | null;
  tempat_tanggal_lahir?: string;
  pendidikan_terakhir?: string;
  pangkat_golongan?: string;
  no_telepon?: string;
}
