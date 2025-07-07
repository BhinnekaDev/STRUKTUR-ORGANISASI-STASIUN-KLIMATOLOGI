"use client";

import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#0B48A8] px-6 py-5 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-3">
        <Image
          src="/assets/logoBMKGputih.png"
          alt="Logo BMKG"
          width={40}
          height={48}
          className="w-10 h-12"
          priority
        />
      </div>
    </nav>
  );
};

export default Navbar;
