import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

const ImageCarousel = ({ slides, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageWidth, setImageWidth] = useState(0);
  const carouselRef = useRef(null);

  const visibleSlides = 5; // Número de imágenes visibles
  const gap = 10; // Espacio entre imágenes

  const extendedSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    // Calcular dinámicamente el ancho de cada imagen al montar
    const calculateImageWidth = () => {
      if (carouselRef.current) {
        const totalWidth = carouselRef.current.offsetWidth; // Ancho total del carrusel
        const adjustedWidth =
          (totalWidth - gap * (visibleSlides - 1)) / visibleSlides;
        setImageWidth(adjustedWidth);
      }
    };

    calculateImageWidth();

    // Recalcular en caso de redimensionar la ventana
    window.addEventListener("resize", calculateImageWidth);
    return () => window.removeEventListener("resize", calculateImageWidth);
  }, [gap, visibleSlides]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex >= slides.length * 2) {
          setCurrentIndex(currentIndex - slides.length);
        } else if (currentIndex < slides.length) {
          setCurrentIndex(currentIndex + slides.length);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning, slides.length]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const isCenterSlide = (index) => {
    const middlePosition = Math.floor(visibleSlides / 2);
    return index % visibleSlides === middlePosition;
  };

  return (
    <section className="mb-16 w-full" ref={carouselRef}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="relative w-full">
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="absolute left-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white hover:bg-white/90 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <div className="w-full overflow-hidden">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-500 ease-out"
                  : "transition-none"
              }`}
              style={{
                transform: `translateX(calc(-${currentIndex} * (${
                  imageWidth + gap
                }px)))`,
                gap: `${gap}px`,
              }}
            >
              {extendedSlides.map((slide, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0"
                  style={{
                    width: `${imageWidth}px`, // Ancho dinámico
                  }}
                >
                  {/* Números en la parte superior derecha */}
                  {isCenterSlide(index - currentIndex) && (
                    <div className="absolute top-2 right-2 text-white text-md  bg-black bg-opacity-50 px-2 py-1 rounded">
                      {((slide.id - 1) % slides.length) + 1}/{slides.length}
                    </div>
                  )}
                  <img
                    src={slide.image}
                    alt={`Nike ${slide.name}`}
                    className="w-full h-auto bg-black"
                    style={{
                      objectFit: "contain", // Mantener proporción
                    }}
                  />
                  {/* Nombre del producto debajo */}
                  {isCenterSlide(index - currentIndex) && (
                    <p className="text-gray-500 text-start mt-4 font-bold text-lg">
                      {slide.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white hover:bg-white/90 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

ImageCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageCarousel;
