"use client";
import React from "react";
import { motion } from "framer-motion";
import StrukturCard from "@/app/beranda/components/strukturcard";
import { dataPegawai } from "@/constants/dataPegawai";

export default function StrukturOrganisasi() {
  const kepalaUtama = dataPegawai.find((p) => p.jabatan === "Kepala Utama");
  const wakilKepala = dataPegawai.find((p) => p.jabatan === "Wakil Kepala");
  const kepalaDivisi1 = dataPegawai.find(
    (p) => p.jabatan === "Kepala Divisi 1"
  );
  const kepalaDivisi2 = dataPegawai.find(
    (p) => p.jabatan === "Kepala Divisi 2"
  );
  const kepalaDivisi3 = dataPegawai.find(
    (p) => p.jabatan === "Kepala Divisi 3"
  );

  const stafDivisi1 = dataPegawai.filter((p) => p.jabatan === "Staf Divisi 1");
  const stafDivisi2 = dataPegawai.filter((p) => p.jabatan === "Staf Divisi 2");
  const stafDivisi3 = dataPegawai.filter((p) => p.jabatan === "Staf Divisi 3");

  return (
    <section className="bg-gradient-to-b from-[#93B3CF] to-[#196DB8] text-white py-10 min-h-screen relative">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-4xl font-semibold">
          Struktur Organisasi <br />
          Stasiun Klimatologi BMKG Bengkulu
        </h1>
      </motion.div>

      <div className="flex flex-col items-center relative">
        {/* Kepala Utama */}
        {kepalaUtama && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <StrukturCard pejabat={kepalaUtama} />
          </motion.div>
        )}
        <div className="h-24 w-1 bg-white" />

        {/* Wakil Kepala */}
        {wakilKepala && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StrukturCard pejabat={wakilKepala} />
          </motion.div>
        )}
        <div className="h-24 w-1 bg-white" />

        {/* Kepala Divisi */}
        <div className="relative flex justify-center gap-48 items-start">
          <div className="absolute top-[80px] left-0 right-0 h-1 bg-white z-0" />

          {[kepalaDivisi1, kepalaDivisi2, kepalaDivisi3].map((kepala, i) =>
            kepala ? (
              <motion.div
                key={kepala.nip}
                className="flex flex-col items-center relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
              >
                <StrukturCard pejabat={kepala} />
                <div className="h-24 w-1 bg-white" />
              </motion.div>
            ) : null
          )}
        </div>

        {/* Staf Divisi */}
        <div className="mt-10 grid grid-cols-3 gap-48 justify-center">
          {[stafDivisi1, stafDivisi2, stafDivisi3].map((stafDivisi, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              {stafDivisi.map((s, index) => (
                <motion.div
                  key={s.nip}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + i * 0.3 + index * 0.1,
                  }}
                >
                  {index === 1 && <div className="h-24 w-1 bg-white mb-2" />}
                  <StrukturCard pejabat={s} />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
