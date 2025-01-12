import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 1 : 3);
  const [gapClass, setGapClass] = useState(window.innerWidth < 768 ? '' : 'gap-4');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
        setGapClass('');
      } else {
        setItemsPerPage(3);
        setGapClass('gap-4');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    if (currentIndex < products.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const canGoNext = currentIndex < products.length - itemsPerPage;
  const canGoPrev = currentIndex > 0;

  return (
    <section className="mb-16 w-full">
      {/* Header con título y navegación */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Novedades</h2>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${
              !canGoPrev ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!canGoPrev}
            aria-label="Previous products"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${
              !canGoNext ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!canGoNext}
            aria-label="Next products"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Contenedor del carrusel */}
      <div className="relative overflow-hidden w-full">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${gapClass}`}
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/3 flex-shrink-0"
              style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <h3 className="text-lg sm:text-xl font-medium mt-4">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;