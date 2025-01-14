import React from "react";

const HeroSection = ({ firstImage, secondImage, title, subtitle, buttons }) => {
  return (
    <section className="mt-4">
      <div className="flex flex-col items-center">
        <div className="w-full">
          {/* Configuración responsiva */}
          <div className="grid grid-cols-1 gap-0">
            <div className="block md:hidden">
              {/* Primera imagen para dispositivos móviles */}
              <img
                src={firstImage}
                alt="Featured Product 1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="hidden md:block">
              {/* Ambas imágenes en pantallas grandes */}
              <div className="grid grid-cols-2 gap-0">
                <div>
                  <img
                    src={firstImage}
                    alt="Featured Product 1"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                <div>
                  <img
                    src={secondImage}
                    alt="Featured Product 2"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start md:items-center">
        {/* Texto centrado */}
        <div className="text-start md:text-center mt-8 mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-snug mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 tracking-wide leading-relaxed mb-8">
            {subtitle}
          </p>

          {/* Botones dinámicos */}
          {buttons && buttons.length > 0 && (
            <div className="flex gap-4 justify-start md:justify-center">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors "
                >
                  {button.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
