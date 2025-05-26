import React from "react";
import Navbar from "@/components/navbar";
import Konten from "@/app/profil/konten";
import Footer from "@/components/footer";

export default function ProfilPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#93B3CF] to-[#196DB8]">
      <Navbar />
      <Konten />
      <Footer />
    </div>
  );
}
