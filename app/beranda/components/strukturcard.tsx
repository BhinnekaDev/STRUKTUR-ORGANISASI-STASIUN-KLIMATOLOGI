"use client";

import Image from "next/image";
import { Jabatan } from "@/interface/Jabatan";

interface StrukturCardProps {
  pejabat?: Jabatan;
  onClick?: () => void;
}

export default function StrukturCard({ pejabat, onClick }: StrukturCardProps) {
  if (!pejabat) {
    return (
      <div className="relative bg-gradient-to-b from-[#196DB8] to-[#0B48A8] rounded-xl text-center p-4 shadow-lg w-52 h-56 flex items-center justify-center text-white">
        <p className="text-sm">Belum ada data</p>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="relative bg-gradient-to-b from-[#196DB8] to-[#0B48A8] rounded-xl text-center p-4 shadow-lg w-52 cursor-pointer hover:scale-105 transition-transform duration-200"
    >
      {/* Foto bulat di atas card */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <div className="bg-gradient-to-b from-[#196DB8] to-[#0B48A8] p-1 rounded-full">
          <div className="bg-white rounded-full w-24 h-24 overflow-hidden">
            <Image
              src={pejabat.foto || "/default.jpg"}
              alt={pejabat.nama_lengkap}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Informasi pejabat */}
      <div className="pt-16 text-white">
        <h2 className="font-semibold text-lg">{pejabat.jabatan}</h2>
        <p className="text-sm font-medium">{pejabat.nama_lengkap}</p>
        <p className="text-xs mt-1">{pejabat.nip}</p>
      </div>
    </div>
  );
}
