import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children, onSearch }) => {
  const logo = "/api/placeholder/48/48";
  const menuItems = [
    { label: "Lo nuevo", href: "#" },
    { label: "Hombre", href: "#" },
    { label: "Mujer", href: "#" },
    { label: "Niños", href: "#" },
    { label: "Accesorios", href: "#" },
    { label: "Ofertas⚡️", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Pasamos onSearch al Header */}
      <Header logo={logo} menuItems={menuItems} onSearch={onSearch} />

      <main className="max-w-[1800px] mx-auto px-8 md:px-24 lg:px-28 ">{children}</main>

      <Footer quickLinks={menuItems} />
    </div>
  );
};

export default MainLayout;
