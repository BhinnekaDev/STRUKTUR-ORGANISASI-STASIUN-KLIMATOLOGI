import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Konten from "@/app/beranda/konten";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#93B3CF] to-[#196DB8]">
      <Navbar />
      <Konten />
      <Footer />
    </div>
  );
}
