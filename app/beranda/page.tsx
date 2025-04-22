import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Konten from "@/app/beranda/components/konten";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/assets/BGBeranda.png')] bg-cover bg-center">
      <Navbar />
      <Konten />
      <Footer />
    </div>
  );
}
