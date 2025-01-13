import React from "react";
import Header from "./Header";

const MainLayout = ({ children }) => {
  // Define el logo y los items aquí, solo una vez
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
      <Header logo={logo} menuItems={menuItems} />
      <main className="max-w-[1800px] mx-auto px-8">{children}</main>
    </div>
  );
};

export default MainLayout;
