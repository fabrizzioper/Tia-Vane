import React from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import SearchResults from "../components/sale/SearchResults";
import ProductCard from "../components/sale/ProductCard";
import imagen4 from "../assets/imagen4.jpg";

const Sale = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const products = [
    {
      id: 1,
      name: "Blazer",
      description: "Mochila (grande)",
      price: 139.90,
      currency: "S/",
      colors: 1,
      imageUrl: imagen4,
    },
    {
      id: 2,
      name: "blazer",
      description: "Mochila (mediana)",
      price: 129.90,
      currency: "S/",
      colors: 2,
      imageUrl: imagen4,
    },
    {
      id: 3,
      name: "blazer",
      description: "Mochila (mediana)",
      price: 129.90,
      currency: "S/",
      colors: 2,
      imageUrl: imagen4,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  return (
    <MainLayout>
      <SearchResults
        searchTerm={searchTerm}
        resultCount={filteredProducts.length}
      />

      <ProductCard products={filteredProducts} />
    </MainLayout>
  );
};


export default Sale;




