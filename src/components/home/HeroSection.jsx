import React from 'react';

const HeroSection = ({ firstImage, secondImage, title, subtitle }) => {
  return (
    <section className="mt-4">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <img
                src={firstImage}
                alt="Featured Product 1"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <img
                src={secondImage}
                alt="Featured Product 2"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12 mb-16">
          <h1 className="text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;