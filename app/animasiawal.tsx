"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function IntroAnimation() {
  const [show, setShow] = useState<boolean>(true);
  const router = useRouter();

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y < -100) {
      setShow(false);
      setTimeout(() => {
        router.push("/beranda");
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-t from-[#196DB8] to-[#0B48A8] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl md:text-4xl font-bold text-center"
            >
              Struktur Organisasi Stasiun
              <br />
              Klimatologi BMKG Bengkulu
            </motion.h1>
            <Image
              src="/assets/logoBMKGputih.png"
              alt="Logo BMKG"
              width={150}
              height={150}
              priority
            />
          </motion.div>

          <motion.div
            className="mt-20 flex flex-col justify-center items-center cursor-pointer text-sm text-white opacity-80"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={handleDragEnd}
            whileDrag={{ scale: 1.1 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-4xl mb-4"
            >
              <IoIosArrowDropupCircle />
            </motion.div>
            <div>Geser ke atas untuk memulai</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
