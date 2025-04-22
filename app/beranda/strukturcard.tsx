"use client";
import Image from "next/image";

export default function StrukturCard({ kepala }: { kepala: any }) {
  return (
    <div className="relative bg-gradient-to-b from-[#196DB8] to-[#0B48A8] rounded-xl text-center p-4 shadow-lg w-52">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <div className="bg-gradient-to-b from-[#196DB8] to-[#0B48A8] p-1 rounded-full">
          <div className="bg-white rounded-full w-20 h-20 overflow-hidden">
            <Image
              src={kepala.foto}
              alt={kepala.nama}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="pt-12">
        <h2 className="font-semibold text-lg">Kepala Stasiun</h2>
        <p className="text-sm">{kepala.nama}</p>
        <p className="text-sm">{kepala.nip}</p>
        <p className="text-sm">{kepala.periode}</p>
      </div>
    </div>
  );
}
