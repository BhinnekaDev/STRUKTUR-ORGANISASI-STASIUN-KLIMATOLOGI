"use client";

import Image from "next/image";
import { Jabatan } from "@/interface/Jabatan";

interface StrukturCardProps {
  pejabat?: Jabatan;
  onClick?: () => void;
}

export default function StrukturCard({ pejabat, onClick }: StrukturCardProps) {
  // Jika belum ada data
  if (!pejabat) {
    return (
      <div className="relative bg-gradient-to-b from-[#196DB8] to-[#0B48A8] rounded-xl text-center p-4 shadow-lg w-52 h-40 flex items-center justify-center text-white">
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
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <div className="bg-gradient-to-b from-[#196DB8] to-[#0B48A8] p-1 rounded-full">
          <div className="bg-white rounded-full w-20 h-20 overflow-hidden">
            <Image
              src={pejabat.foto || "/default.jpg"} // fallback jika foto kosong
              alt={pejabat.nama}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Informasi pejabat */}
      <div className="pt-12 text-white">
        <h2 className="font-semibold text-lg">{pejabat.jabatan}</h2>
        <p className="text-sm">{pejabat.nama}</p>
        <p className="text-sm">{pejabat.nip}</p>
        <p className="text-sm">{pejabat.periode}</p>
      </div>
    </div>
  );
}
