"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { dataPegawai } from "@/constants/dataPegawai";

export default function ProfilPegawai() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterJabatan, setFilterJabatan] = useState("Semua");

  const filteredPegawai = dataPegawai.filter((p) => {
    const cocokCari =
      p.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.nip.includes(searchTerm);
    const cocokJabatan =
      filterJabatan === "Semua" || p.jabatan === filterJabatan;
    return cocokCari && cocokJabatan;
  });

  const daftarJabatan = [
    "Semua",
    ...new Set(dataPegawai.map((p) => p.jabatan)),
  ];

  return (
    <div className="mflex flex-col min-h-screen bg-gradient-to-b from-blue-800 to-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h1 className="text-3xl font-bold text-black">Profil Pegawai</h1>

            <div className="flex items-center gap-4 flex-wrap justify-end">
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari"
                  className="border border-blue-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute right-3 top-2.5 text-gray-400">
                  🔍
                </span>
              </div>

              {/* Dropdown Jabatan */}
              <div className="text-sm text-gray-700">
                Urut Berdasarkan:{" "}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPegawai.map((p, i) => (
              <div
                key={i}
                className="bg-gradient-to-b from-blue-600 to-blue-700 rounded-2xl shadow-md p-4 text-center text-white"
              >
                <img
                  src={p.foto}
                  alt={p.nama}
                  className="w-24 h-28 object-cover rounded-lg mx-auto mb-4"
                />
                <p className="text-sm">Nama : {p.nama}</p>
                <p className="text-sm">NIP : {p.nip}</p>
                <p className="text-sm">Jabatan : {p.jabatan}</p>
                <p className="text-sm">Periode : {p.periode}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
