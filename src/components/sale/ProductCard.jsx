import React from "react";
import { Heart } from "lucide-react";

const ProductCard = ({ products }) => {
  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm overflow-hidden bg-white">
            <div className="relative">
              <img
                src={product.imageUrl}
                alt={`${product.name} - ${product.description}`}
                className="w-full h-80 object-cover bg-gray-100"
              />
              <button
                className="absolute top-4 right-4 p-1 rounded-full bg-white/80 hover:bg-white transition-colors"
                onClick={() => console.log(`Added ${product.name} to wishlist`)}
                aria-label="Add to wishlist"
              >
                <Heart className="w-6 h-6" />
              </button>
            </div>

            <div className="py-3">
              <h2 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h2>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-2 space-y-2">
                <p className="text-sm text-gray-500">
                  {product.colors}{" "}
                  {product.colors === 1 ? "Color" : "Colores"}
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {product.currency} {product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
