"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PegawaiCard from "@/app/profil/components/pegawaicard";
import { PegawaiCardProps } from "@/interface/Pegawai";

interface Props {
  data: PegawaiCardProps[];
  onCardClick: (pegawai: PegawaiCardProps) => void;
  animationKey: string;
}

const PegawaiGrid: React.FC<Props> = ({ data, onCardClick, animationKey }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={animationKey}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {data.map((p) => (
          <motion.div
            key={p.nip}
            className="min-w-[250px] max-w-[300px] mx-auto cursor-pointer"
            onClick={() => onCardClick(p)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <PegawaiCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default PegawaiGrid;
