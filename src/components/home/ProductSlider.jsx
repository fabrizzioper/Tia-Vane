import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < products.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const canGoNext = currentIndex < products.length - 3;
  const canGoPrev = currentIndex > 0;

  return (
    <div className="w-full">
      {/* Container con padding diferente para el título */}
      <div className="pl-8">
        {/* Header con título y botones de navegación */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Novedades</h2>
          <div className="flex gap-1 pr-8">
            <button 
              onClick={prevSlide}
              className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 
                ${!canGoPrev ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
              disabled={!canGoPrev}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={nextSlide}
              className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 
                ${!canGoNext ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
              disabled={!canGoNext}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Contenedor del carousel con padding menor */}
      <div className="pl-6">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="w-1/3 flex-shrink-0 pr-4"
              >
                <div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full aspect-[5/4] object-cover"
                  />
                  <h3 className="mt-3 text-sm">{product.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;