import React from "react";
import MainLayout from "../components/layout/MainLayout";
import ProductSlider from "../components/home/ProductSlider";
import HeroSection from "../components/home/HeroSection";
import ImageCarousel from "../components/home/ImageCarousel";
import imagen from "../assets/imagen.png";
import imagen2 from "../assets/imagen2.jpg";

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
    <MainLayout>
      <HeroSection {...heroContent} />
      <ProductSlider products={products} title="Novedades" />
      <ImageCarousel products={products} title="Siempre Icónico" />
    </MainLayout>
  );
};

export default Home;
