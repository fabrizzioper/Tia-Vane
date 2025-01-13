import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

const ImageCarousel = ({ products, title }) => {
  const [currentIndex, setCurrentIndex] = useState(products.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageWidth, setImageWidth] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(5);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);
  const dragStartX = useRef(0);
  const currentTranslateX = useRef(0);
  const gap = 10;
  const extendedSlides = [...products, ...products, ...products];

  const updateLayout = () => {
    if (window.innerWidth <= 768) {
      setVisibleSlides(1);
      setIsMobile(true);
    } else {
      setVisibleSlides(5);
      setIsMobile(false);
    }
  };

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const calculateImageWidth = () => {
      if (carouselRef.current) {
        const totalWidth = carouselRef.current.offsetWidth;
        const adjustedWidth = (totalWidth - gap * (visibleSlides - 1)) / visibleSlides;
        setImageWidth(adjustedWidth);
      }
    };

    calculateImageWidth();
    window.addEventListener("resize", calculateImageWidth);
    return () => window.removeEventListener("resize", calculateImageWidth);
  }, [gap, visibleSlides]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        // Ajustar la posición sin transición visual cuando llegamos a los extremos
        if (currentIndex >= products.length * 2) {
          setCurrentIndex(products.length);
        } else if (currentIndex < products.length) {
          setCurrentIndex(products.length * 2 - 1);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, isTransitioning, products.length]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    dragStartX.current = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    currentTranslateX.current = -currentIndex * (imageWidth + gap);
    
    if (e.type === 'mousedown') {
      e.preventDefault();
    }
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const diff = currentX - dragStartX.current;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const moveThreshold = imageWidth / 4;
    
    if (Math.abs(dragOffset) > moveThreshold) {
      if (dragOffset > 0) {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
      } else {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
      }
    }
    
    setIsTransitioning(true);
    setDragOffset(0);
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
          {!isMobile && (
            <button
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(prev => prev - 1);
              }}
              className="absolute left-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white hover:bg-white/90 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
          )}

          <div 
            className="w-full overflow-hidden"
            onMouseDown={isMobile ? handleDragStart : null}
            onMouseMove={isMobile ? handleDragMove : null}
            onMouseUp={isMobile ? handleDragEnd : null}
            onMouseLeave={isMobile ? handleDragEnd : null}
            onTouchStart={isMobile ? handleDragStart : null}
            onTouchMove={isMobile ? handleDragMove : null}
            onTouchEnd={isMobile ? handleDragEnd : null}
          >
            <div
              className={`flex ${(isTransitioning || !isDragging) ? "transition-transform duration-500 ease-out" : ""}`}
              style={{
                transform: `translateX(calc(${-currentIndex * (imageWidth + gap)}px + ${dragOffset}px))`,
                gap: `${gap}px`,
                transition: isTransitioning ? 'transform 500ms ease-out' : 'none'
              }}
            >
              {extendedSlides.map((slide, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0"
                  style={{
                    width: `${imageWidth}px`,
                  }}
                >
                  {isCenterSlide(index - currentIndex) && (
                    <div className="absolute top-2 right-2 text-white text-md bg-black bg-opacity-50 px-2 py-1 rounded">
                      {((slide.id - 1) % products.length) + 1}/{products.length}
                    </div>
                  )}
                  <img
                    src={slide.image}
                    alt={`Nike ${slide.name}`}
                    className="w-full h-auto bg-black select-none"
                    style={{
                      objectFit: "contain",
                    }}
                    draggable="false"
                  />
                  {isCenterSlide(index - currentIndex) && (
                    <p className="text-gray-500 text-start mt-4 font-bold text-lg">
                      {slide.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
            <button
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(prev => prev + 1);
              }}
              className="absolute right-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white hover:bg-white/90 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

ImageCarousel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default ImageCarousel;