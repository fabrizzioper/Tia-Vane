import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from 'prop-types';

const ImageCarousel = ({ slides, title = "Featured Images" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 1 : 5);
  const [gapClass, setGapClass] = useState(window.innerWidth < 768 ? '' : 'gap-4');
  
  const extendedSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
        setGapClass('');
      } else {
        setItemsPerPage(5);
        setGapClass('gap-4');
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const isCenterSlide = (index) => {
    const middlePosition = Math.floor(itemsPerPage / 2);
    return (index % itemsPerPage) === middlePosition;
  };

  return (
    <section className="mb-16 w-full">
      {/* Header with title and navigation */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous images"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next images"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Carousel container */}
      <div className="relative overflow-hidden w-full">
        <div 
          className={`flex transition-transform duration-500 ease-in-out ${gapClass}`}
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div 
              key={index} 
              className="relative"
              style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
            >
              {isCenterSlide(index - currentIndex) && (
                <div className="absolute top-2 right-4 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                  {((slide.id - 1) % slides.length) + 1}/{slides.length}
                </div>
              )}
              <img
                src={slide.image}
                alt={slide.name}
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              {isCenterSlide(index - currentIndex) && (
                <h3 className="text-lg sm:text-xl font-medium mt-4">{slide.name}</h3>
              )}
            </div>
          ))}
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
  title: PropTypes.string,
};

export default ImageCarousel;







// // BlazerCarousel.jsx
// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import PropTypes from 'prop-types';

// const BlazerCarousel = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
  
//   const extendedSlides = [...slides, ...slides, ...slides];

//   useEffect(() => {
//     if (isTransitioning) {
//       const timer = setTimeout(() => {
//         setIsTransitioning(false);
//         if (currentIndex >= slides.length * 2) {
//           setCurrentIndex(currentIndex - slides.length);
//         } else if (currentIndex < slides.length) {
//           setCurrentIndex(currentIndex + slides.length);
//         }
//       }, 500);

//       return () => clearTimeout(timer);
//     }
//   }, [currentIndex, isTransitioning, slides.length]);

//   const nextSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setCurrentIndex(prev => prev + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setCurrentIndex(prev => prev - 1);
//     }
//   };

//   const isCenterSlide = (index) => {
//     const visibleSlides = 5;
//     const middlePosition = Math.floor(visibleSlides / 2);
//     return (index % visibleSlides) === middlePosition;
//   };

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center bg-red-700">
//       <div className="relative w-full max-w-[1600px] mx-auto px-8">
//         <div className="flex items-center justify-between">
//           <button 
//             onClick={prevSlide}
//             className="absolute left-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white hover:bg-white/90 transition-colors"
//           >
//             <ChevronLeft className="w-6 h-6 text-black" />
//           </button>

//           <div className="w-full overflow-hidden">
//             <div 
//               className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : 'transition-none'}`}
//               style={{ 
//                 transform: `translateX(-${currentIndex * 20}%)`,
//               }}
//             >
//               {extendedSlides.map((slide, index) => (
//                 <div key={index} className="w-1/5 flex-shrink-0 px-2 relative">
//                   {isCenterSlide(index - currentIndex) && (
//                     <div className="absolute top-2 right-4 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
//                       {((slide.id - 1) % slides.length) + 1}/{slides.length}
//                     </div>
//                   )}
//                   <img
//                     src={slide.image}
//                     alt={`Nike ${slide.name}`}
//                     className="w-full h-auto bg-black"
//                   />
//                   {isCenterSlide(index - currentIndex) && (
//                     <p className="text-gray-400 text-start mt-4">{slide.name}</p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button 
//             onClick={nextSlide}
//             className="absolute right-12 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white hover:bg-white/90 transition-colors"
//           >
//             <ChevronRight className="w-6 h-6 text-black" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// BlazerCarousel.propTypes = {
//   slides: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default BlazerCarousel;