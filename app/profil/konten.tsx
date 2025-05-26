"use client";

import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import PegawaiModal from "@/app/profil/components/pegawaimodal";
import PegawaiGrid from "@/app/profil/components/pegawaigrid";
import { dataPegawai } from "@/constants/dataPegawai";
import { PegawaiCardProps } from "@/interface/Pegawai";

const Konten: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterJabatan, setFilterJabatan] = useState("Semua");
  const [selectedPegawai, setSelectedPegawai] =
    useState<PegawaiCardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (pegawai: PegawaiCardProps) => {
    setSelectedPegawai(pegawai);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPegawai(null);
  };

  const filteredPegawai = dataPegawai.filter((p) => {
    const cocokCari =
      p.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.nip.includes(searchTerm);

    const cocokJabatan =
      filterJabatan === "Semua" ||
      (filterJabatan === "Staf" && p.jabatan.startsWith("Staf")) ||
      (filterJabatan === "Kepala Divisi" &&
        p.jabatan.startsWith("Kepala Divisi")) ||
      p.jabatan === filterJabatan;

    return cocokCari && cocokJabatan;
  });

  const daftarJabatan = [
    "Semua",
    "Kepala Utama",
    "Wakil Kepala",
    "Kepala Divisi",
    "Staf",
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-16 flex-grow">
      <div className="bg-white rounded-3xl shadow-lg px-10 py-12">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <h1 className="text-3xl font-bold text-black">Profil Pegawai</h1>

          <div className="flex flex-col items-end gap-2 w-full md:w-auto">
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Cari nama atau NIP"
                className="w-full border border-[#93B3CF] rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <AiOutlineSearch className="absolute right-3 top-3 text-gray-400 text-lg" />
            </div>

            <div className="text-sm text-gray-700 w-full sm:w-72 text-right">
              Filter Jabatan:{" "}
              <select
                value={filterJabatan}
                onChange={(e) => setFilterJabatan(e.target.value)}
                className="border border-gray-400 rounded px-2 py-1 ml-1"
              >
                {daftarJabatan.map((j, i) => (
                  <option key={i} value={j}>
                    {j}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid Pegawai */}
        {filteredPegawai.length > 0 ? (
          <PegawaiGrid
            data={filteredPegawai}
            onCardClick={handleCardClick}
            animationKey={filterJabatan + searchTerm}
          />
        ) : (
          <div className="text-center text-gray-500 py-20">
            Tidak ada pegawai yang cocok dengan pencarian atau filter.
          </div>
        )}

        {/* Modal */}
        <PegawaiModal
          pegawai={selectedPegawai}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default Konten;
