import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#0B48A8] px-6 py-5 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-3">
        <img
          src="/assets/logoBMKGputih.png"
          alt="Logo BMKG"
          className="w-10 h-12"
        />
      </div>

      <div className="flex items-center space-x-6">
        <div className="text-white font-medium space-x-6">
          <a
            href="#beranda"
            className="hover: underline transition-colors duration-200"
          >
            Beranda
          </a>
          <a
            href="#profil"
            className="hover: underline transition-colors duration-200:"
          >
            Profil
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
