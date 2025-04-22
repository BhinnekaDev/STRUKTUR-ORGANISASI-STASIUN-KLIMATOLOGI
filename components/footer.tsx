"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B48A8] text-white text-center py-6 text-sm">
      <div className="mb-2">
        <Image
          src="/assets/logoBMKGputih.png"
          alt="Logo BMKG"
          width={50}
          height={50}
          className="mx-auto"
        />
        <p> </p>
        <p className="font-semibold">STASIUN KLIMATOLOGI</p>
        <p>Jl. Ir. Rustandi Sugianto P. Balai Bengkulu 39172</p>
        <p>0736-51251 / 0736-51426 / 0736-55300</p>
        <p>staklim.pulaubaai@bmkg.go.id</p>
      </div>
      <div className="text-gray-300 mt-2">
        Copyrights © 2025 - Bhinnekadev. All Rights Reserved.
      </div>
    </footer>
  );
}
