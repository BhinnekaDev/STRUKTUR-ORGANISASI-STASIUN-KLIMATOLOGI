"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StrukturCard from "@/app/beranda/components/strukturcard";
import CardModal from "@/app/beranda/components/cardmodal";
import {
  Jabatan,
  getStrukturOrganisasi,
} from "@/lib/api/struktur-organisasi/router";

export default function Konten() {
  const [data, setData] = useState<Jabatan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPegawai, setSelectedPegawai] = useState<Jabatan | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    try {
      const result = await getStrukturOrganisasi();
      setData(result);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCardClick = (pegawai: Jabatan) => {
    setSelectedPegawai(pegawai);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPegawai(null);
  };

  const findByJabatan = (jabatan: string): Jabatan | undefined => {
    const normalize = (s: string) => s.trim().toLowerCase();
    return data.find((item) => normalize(item.jabatan) === normalize(jabatan));
  };

  if (loading) {
    return (
      <section className="bg-gradient-to-b from-[#93B3CF] to-[#196DB8] text-white py-10 min-h-screen flex items-center justify-center">
        <div>Memuat data struktur organisasi...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gradient-to-b from-[#93B3CF] to-[#196DB8] text-white py-10 min-h-screen flex items-center justify-center">
        <div>Error: {error}</div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-[#93B3CF] to-[#196DB8] text-white py-10 min-h-screen">
      {/* Judul */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          Struktur Organisasi <br />
          Stasiun Klimatologi BMKG Bengkulu
        </h1>
      </motion.div>

      <div className="flex flex-col items-center relative">
        {/* Kepala Stasiun */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StrukturCard
            pejabat={findByJabatan("Kepala Stasiun")}
            onClick={() => {
              const pegawai = findByJabatan("Kepala Stasiun");
              if (pegawai) handleCardClick(pegawai);
            }}
          />
        </motion.div>

        {/* Garis Model "T" */}
        <div className="relative flex items-center justify-center h-20 w-full">
          {/* Garis vertikal dari Kepala Stasiun */}
          <div className="absolute top-0 h-10 w-1 bg-white" />

          {/* Garis horizontal */}
          <div className="absolute top-10 h-1 w-[55%] bg-white" />

          {/* Garis vertikal turun ke masing-masing anak */}
          <div className="absolute top-10 left-[22.5%] h-20 w-1 bg-white" />
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 h-20 w-1 bg-white" />
          <div className="absolute top-10 right-[22.5%] h-20 w-1 bg-white" />
        </div>

        {/* Struktur bawah sejajar dengan garis */}
        <div className="relative w-full h-[220px] md:h-[250px] mt-10">
          {/* Tata Usaha */}
          <div className="absolute top-0 left-[15%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StrukturCard
                pejabat={findByJabatan("Kepala Sub-bagian Tata Usaha")}
                onClick={() => {
                  const pegawai = findByJabatan("Kepala Sub-bagian Tata Usaha");
                  if (pegawai) handleCardClick(pegawai);
                }}
              />
            </motion.div>
          </div>

          {/* Observasi */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <StrukturCard
                pejabat={findByJabatan("Sub Koordinator Bidang Observasi")}
                onClick={() => {
                  const pegawai = findByJabatan(
                    "Sub Koordinator Bidang Observasi"
                  );
                  if (pegawai) handleCardClick(pegawai);
                }}
              />
            </motion.div>
          </div>

          {/* Data & Informasi */}
          <div className="absolute top-0 right-[15%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <StrukturCard
                pejabat={findByJabatan(
                  "Sub Koordinator Bidang Data dan Informasi"
                )}
                onClick={() => {
                  const pegawai = findByJabatan(
                    "Sub Koordinator Bidang Data dan Informasi"
                  );
                  if (pegawai) handleCardClick(pegawai);
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal Pegawai */}
      <CardModal
        pegawai={selectedPegawai}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
