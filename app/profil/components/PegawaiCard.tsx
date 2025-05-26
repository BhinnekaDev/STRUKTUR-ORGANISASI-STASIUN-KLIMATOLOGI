import React from "react";
import { PegawaiCardProps } from "@/interface/Pegawai";

const PegawaiCard: React.FC<PegawaiCardProps> = ({
  nama,
  nip,
  jabatan,
  periode,
  foto,
}) => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#93B3CF] to-[#0B48A8] rounded-2xl shadow-md px-6 py-10 text-center text-white flex flex-col items-center">
      <img
        src={foto}
        alt={nama}
        className="w-32 h-36 object-cover rounded-lg mb-4"
      />
      <p className="text-sm">Nama : {nama}</p>
      <p className="text-sm">NIP : {nip}</p>
      <p className="text-sm">Jabatan : {jabatan}</p>
      <p className="text-sm">Periode : {periode}</p>
    </div>
  );
};

export default PegawaiCard;
