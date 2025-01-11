import React from 'react';
import Header from '../components/layout/Header';
import ProductSlider from '../components/home/ProductSlider';
import HeroSection from '../components/home/HeroSection';
import imagen from '../assets/imagen.png';
import imagen2 from '../assets/imagen2.jpg';

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
  {
    id: 1,
    title: "Producto 1",
    image: imagen,
  },
  {
    id: 2,
    title: "Producto 2",
    image: imagen2,
  },
  {
    id: 3,
    title: "Producto 3",
    image: imagen,
  },
  {
    id: 4,
    title: "Producto 4",
    image: imagen2,
  },
  {
    id: 5,
    title: "Producto 5",
    image: imagen,
  },
  {
    id: 6,
    title: "Producto 6",
    image: imagen2,
  },
];

const heroContent = {
  firstImage: imagen,
  secondImage: imagen2,
  title: "RECIÉN LLEGADOS",
  subtitle: "Comienza el año con lo nuevo"
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header logo={logo} menuItems={menuItems} />

      <main className="max-w-[1800px] mx-auto px-8">
        <HeroSection {...heroContent} />
        <ProductSlider products={products} />
      </main>
    </div>
  );
};

export default Home;