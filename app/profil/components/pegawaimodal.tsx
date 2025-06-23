import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PegawaiCardProps } from "@/interface/Pegawai";
import { IoIosArrowDropleftCircle } from "react-icons/io";

interface PegawaiModalProps {
  pegawai: PegawaiCardProps | null;
  isOpen: boolean;
  onClose: () => void;
}

const PegawaiModal: React.FC<PegawaiModalProps> = ({
  pegawai,
  isOpen,
  onClose,
}) => {
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
            className="bg-[#196DB8] text-white rounded-xl py-20 px-12 max-w-md w-full flex flex-col sm:flex-row gap-8 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <button
              className="absolute top-4 left-4 text-white text-2xl"
              onClick={onClose}
            >
              <IoIosArrowDropleftCircle />
            </button>
            <img
              src={pegawai.foto}
              alt={pegawai.nama}
              className="w-40 h-48 object-cover rounded-lg mx-auto"
            />
            <div className="flex flex-col justify-center text-left">
              <p>Nama : {pegawai.nama}</p>
              <p>NIP : {pegawai.nip}</p>
              <p>Jabatan : {pegawai.jabatan}</p>
              <p>Periode : {pegawai.periode}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PegawaiModal;
