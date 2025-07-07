"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Jabatan } from "@/interface/Jabatan";
import Image from "next/image";

interface CardModalProps {
  pegawai: Jabatan | null;
  isOpen: boolean;
  onClose: () => void;
}

const CardModal: React.FC<CardModalProps> = ({ pegawai, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && pegawai && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#196DB8] text-white rounded-xl py-10 px-8 max-w-md w-full flex flex-col sm:flex-row gap-8 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Tombol Tutup */}
            <button
              className="absolute top-4 left-4 text-white text-2xl"
              onClick={onClose}
            >
              <IoIosArrowDropleftCircle />
            </button>

            {/* Foto */}
            <div className="w-40 h-48 relative mx-auto">
              <Image
                src={pegawai.foto || "/default.jpg"} // fallback jika foto kosong
                alt={pegawai.nama}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            {/* Info Pegawai */}
            <div className="flex flex-col justify-center text-left text-sm sm:text-base">
              <p>
                <strong>Nama:</strong> {pegawai.nama}
              </p>
              <p>
                <strong>NIP:</strong> {pegawai.nip}
              </p>
              <p>
                <strong>Jabatan:</strong> {pegawai.jabatan}
              </p>
              <p>
                <strong>Periode:</strong> {pegawai.periode}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CardModal;
