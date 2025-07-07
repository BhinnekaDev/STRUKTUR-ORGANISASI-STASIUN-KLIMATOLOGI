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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getStrukturOrganisasi();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

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

  const findByJabatan = (jabatan: string) =>
    data.find((item) => item.jabatan.toLowerCase() === jabatan.toLowerCase());

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
            onClick={() => handleCardClick(findByJabatan("Kepala Stasiun")!)}
          />
        </motion.div>

        {/* Garis Vertikal */}
        <div className="h-32 w-1 bg-white" />

        {/* Kepala Sub-bagian TU */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StrukturCard
            pejabat={findByJabatan("Kepala Sub-bagian Tata Usaha")}
            onClick={() =>
              handleCardClick(findByJabatan("Kepala Sub-bagian Tata Usaha")!)
            }
          />
        </motion.div>

        {/* Garis Vertikal */}
        <div className="h-32 w-1 bg-white" />

        {/* Seksi-seksi */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center px-10">
          {/* Seksi Pengamatan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center"
          >
            <StrukturCard
              pejabat={findByJabatan("Seksi Pengamatan Klimatologi")}
              onClick={() =>
                handleCardClick(findByJabatan("Seksi Pengamatan Klimatologi")!)
              }
            />
            {/* Garis ke kanan */}
            <div className="hidden md:block w-32 h-1 bg-white" />
          </motion.div>

          {/* Seksi Analisis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center"
          >
            <StrukturCard
              pejabat={findByJabatan("Seksi Analisis Data Klimatologi")}
              onClick={() =>
                handleCardClick(
                  findByJabatan("Seksi Analisis Data Klimatologi")!
                )
              }
            />
            {/* Garis ke kanan */}
            <div className="hidden md:block w-32 h-1 bg-white" />
          </motion.div>

          {/* Seksi Informasi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center"
          >
            <StrukturCard
              pejabat={findByJabatan("Seksi Informasi Iklim")}
              onClick={() =>
                handleCardClick(findByJabatan("Seksi Informasi Iklim")!)
              }
            />
          </motion.div>
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
