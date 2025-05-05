import React from "react";

interface PegawaiCardProps {
  nama: string;
  nip: string;
  jabatan: string;
  periode: string;
  foto: string;
}

const PegawaiCard: React.FC<PegawaiCardProps> = ({
  nama,
  nip,
  jabatan,
  periode,
  foto,
}) => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-700 rounded-2xl shadow-md p-4 text-center text-white">
      <img
        src={foto}
        alt={nama}
        className="w-24 h-28 object-cover rounded-lg mx-auto mb-4"
      />
      <p className="text-sm">Nama : {nama}</p>
      <p className="text-sm">NIP : {nip}</p>
      <p className="text-sm">Jabatan : {jabatan}</p>
      <p className="text-sm">Periode : {periode}</p>
    </div>
  );
};

export default PegawaiCard;
