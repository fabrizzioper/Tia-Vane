import React, { useState } from 'react';
import { FaTiktok, FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { IoIosAdd } from 'react-icons/io';

const Footer = ({ quickLinks }) => {
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);

  return (
    <footer className="bg-black text-white font-sans pt-12 pb-6">
      <div className="max-w-[1800px] mx-auto px-8 text-sm">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_300px_300px_1fr] gap-8 lg:gap-12">
          {/* Primera Columna - Información Básica */}
          <div className="space-y-4">
            <h3 className="font-bold text-base">TiaVane</h3>
            <p className="text-[#9e9e9e]">
              Lima, Perú
            </p>
            <p className="text-[#9e9e9e]">
              Correo:{' '}
              <a
                href="mailto:tia_vane_contact@gmail.com"
                className="hover:text-gray-300 break-words"
              >
                tia_vane_contact@gmail.com
              </a>
            </p>
            <p className="text-[#9e9e9e]">
              Teléfono:{' '}
              <a href="tel:+51965730662" className="hover:text-gray-300">
                +51 965730662
              </a>
            </p>
          </div>

          {/* Segunda Columna - Navegación */}
          <div className="lg:block">
            <button 
              className="w-full flex justify-between items-center lg:hidden border-b border-[#333333] pb-4"
              onClick={() => setShowQuickLinks(!showQuickLinks)}
            >
              <h3 className="font-bold text-base">Enlaces Rápidos</h3>
              <IoIosAdd 
                size={24} 
                className={`transform transition-transform ${showQuickLinks ? 'rotate-45' : ''}`}
              />
            </button>
            <h3 className="font-bold text-base mb-4 hidden lg:block">Enlaces Rápidos</h3>
            <ul className={`space-y-3 mt-4 ${showQuickLinks ? 'block' : 'hidden'} lg:block`}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#9e9e9e] hover:text-gray-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tercera Columna - Métodos de Pago */}
          <div className="lg:block">
            <button 
              className="w-full flex justify-between items-center lg:hidden border-b border-[#333333] pb-4"
              onClick={() => setShowPaymentMethods(!showPaymentMethods)}
            >
              <h3 className="font-bold text-base">Métodos de Pago</h3>
              <IoIosAdd 
                size={24} 
                className={`transform transition-transform ${showPaymentMethods ? 'rotate-45' : ''}`}
              />
            </button>
            <h3 className="font-bold text-base mb-4 hidden lg:block">Métodos de Pago</h3>
            <ul className={`space-y-3 mt-4 ${showPaymentMethods ? 'block' : 'hidden'} lg:block`}>
              <li className="text-[#9e9e9e]">Transferencia</li>
              <li className="text-[#9e9e9e]">Yape</li>
              <li className="text-[#9e9e9e]">Plin</li>
              <li className="text-[#9e9e9e]">Depósito</li>
            </ul>
          </div>

          {/* Cuarta Columna - Redes Sociales */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            <h3 className="font-bold text-base">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-500 hover:bg-gray-400 p-3 rounded-full"
              >
                <FaTiktok size={16} color="black" />
              </a>
              <a
                href="#"
                className="bg-gray-500 hover:bg-gray-400 p-3 rounded-full"
              >
                <FaFacebookF size={16} color="black" />
              </a>
              <a
                href="#"
                className="bg-gray-500 hover:bg-gray-400 p-3 rounded-full"
              >
                <AiFillInstagram size={16} color="black" />
              </a>
              <a
                href="#"
                className="bg-gray-500 hover:bg-gray-400 p-3 rounded-full"
              >
                <IoLogoWhatsapp size={16} color="black" />
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 pt-4 border-t border-[#333333] space-y-4 lg:space-y-0">
          <div className="text-[#9e9e9e] text-center lg:text-left">
            © 2025 TiaVane. Todos los derechos reservados.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center">
            <a
              href="#"
              className="text-[#9e9e9e] hover:text-gray-300"
            >
              Términos y Condiciones
            </a>
            <a
              href="#"
              className="text-[#9e9e9e] hover:text-gray-300"
            >
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;