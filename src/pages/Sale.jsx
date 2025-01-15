// import React from "react";
// import MainLayout from "../components/layout/MainLayout";
// import ProductCard from "../components/sale/ProductCard";

// const Sale = () => {
//     return (
//       <MainLayout>
//          <ProductCard  />
//       </MainLayout>
//     );
//   };
  
//   export default Sale;


import React from "react";
import MainLayout from "../components/layout/MainLayout";
import ProductCard from "../components/sale/ProductCard";
import imagen4 from "../assets/imagen4.jpg";

const Sale = () => {
    const products = [
      {
        id: 1,
        name: "Jordan",
        description: "Mochila (grande)",
        price: 139.90,
        currency: "S/",
        colors: 1,
        imageUrl: imagen4,  // Quitamos las llaves
      },
      {
        id: 2,
        name: "Jordan",
        description: "Mochila (mediana)",
        price: 129.90,
        currency: "S/",
        colors: 2,
        imageUrl: imagen4,  // Quitamos las llaves
      },
      {
        id: 3,
        name: "Jordan",
        description: "Mochila (mediana)",
        price: 129.90,
        currency: "S/",
        colors: 2,
        imageUrl: imagen4,  // Quitamos las llaves
      }
    ];

    return (
      <MainLayout>
        <ProductCard products={products} />
      </MainLayout>
    );
};
  
export default Sale;