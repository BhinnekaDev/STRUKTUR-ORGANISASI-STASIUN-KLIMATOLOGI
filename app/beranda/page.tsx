"use client";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Konten = dynamic(() => import("@/app/beranda/konten"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#93B3CF] to-[#196DB8]">
      <Navbar />
      <Konten />
      <Footer />
    </div>
  );
}
