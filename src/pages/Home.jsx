import React from "react";
import Header from "../components/layout/Header";
import ProductSlider from "../components/home/ProductSlider";
import HeroSection from "../components/home/HeroSection";
import imagen from "../assets/imagen.png";
import imagen2 from "../assets/imagen2.jpg";
import imagen3 from "../assets/imagen3.png";
import ImageCarousel from "../components/home/ImageCarousel";

const logo = "/api/placeholder/48/48";

const menuItems = [
  { label: "Lo nuevo", href: "#" },
  { label: "Hombre", href: "#" },
  { label: "Mujer", href: "#" },
  { label: "Niños", href: "#" },
  { label: "Accesorios", href: "#" },
  { label: "Ofertas⚡️", href: "#" },
];

const products = [
  { id: 1, name: "Pegasus", image: imagen },
  { id: 2, name: "Air Max", image: imagen },
  { id: 3, name: "ZoomX", image: imagen },
  { id: 4, name: "Vaporfly", image: imagen },
  { id: 5, name: "Infinity", image: imagen },
  { id: 6, name: "Air Max", image: imagen },
];


const heroContent = {
  firstImage: imagen,
  secondImage: imagen2,
  title: "RECIÉN LLEGADOS",
  subtitle: "Comienza el año con lo nuevo",
  buttons: [{ label: "Comprar", href: "#" }],
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header logo={logo} menuItems={menuItems} />
      <main className="max-w-[1800px] mx-auto px-8">
        <HeroSection {...heroContent} />
        <ProductSlider products={products} title={"Novedades"} />
        <ImageCarousel products={products} title="Siempre Icónico" />
      </main>
    </div>
  );
};

export default Home;
