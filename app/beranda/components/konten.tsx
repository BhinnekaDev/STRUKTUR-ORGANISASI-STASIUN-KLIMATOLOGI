"use client";
import StrukturCard from "@/app/beranda/strukturcard";

export default function StrukturOrganisasi() {
  const kepalaList = Array(6).fill({
    nama: "[Nama]",
    nip: "[NIP]",
    periode: "2025 - 2029",
    foto: "/foto-kepala.png",
  });

  return (
    <section className="bg-gradient-to-b from-[#93B3CF] to-[#196DB8] text-white py-10 min-h-screen relative">
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Struktur Organisasi <br />
          Stasiun Klimatologi BMKG Bengkulu
        </h1>
      </div>

      <div className="flex flex-col items-center relative gap-20">
        {/* Level 1 */}
        <div className="relative z-10">
          <StrukturCard kepala={kepalaList[0]} />
          <div className="absolute top-full left-1/2 h-12 w-1 bg-white -translate-x-1/2" />
        </div>

        {/* Level 2 */}
        <div className="relative z-10">
          <StrukturCard kepala={kepalaList[1]} />
          <div className="absolute top-full left-1/2 h-8 w-1 bg-white -translate-x-1/2" />
          <div className="absolute top-full left-1/2 h-1 w-[600px] bg-white -translate-x-1/2" />
        </div>

        {/* Level 3 */}
        <div className="flex justify-center items-start gap-20 relative">
          {kepalaList.slice(2, 5).map((kepala, i) => (
            <div key={i} className="relative z-10">
              <StrukturCard kepala={kepala} />
              <div className="absolute -top-8 left-1/2 w-1 h-8 bg-white -translate-x-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
