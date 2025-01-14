import React from 'react';
import { FaTiktok, FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = ({ quickLinks }) => {
  return (
    <footer className="bg-black text-white font-sans pt-12 pb-6">
      {/* Aplica un tamaño de fuente pequeño a todo el contenedor */}
      <div className="max-w-[1800px] mx-auto px-8 text-sm">
        <div className="grid grid-cols-[300px_300px_300px_1fr] gap-12">
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
          <div>
            <h3 className="font-bold text-base mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
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
          <div>
            <h3 className="font-bold text-base mb-4">Métodos de Pago</h3>
            <ul className="space-y-3">
              <li className="text-[#9e9e9e]">Transferencia</li>
              <li className="text-[#9e9e9e]">Yape</li>
              <li className="text-[#9e9e9e]">Plin</li>
              <li className="text-[#9e9e9e]">Depósito</li>
            </ul>
          </div>

          {/* Cuarta Columna - Redes Sociales */}
          <div className="flex flex-col items-end gap-6">
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
        <div className="flex justify-between items-center mt-8 pt-4 border-t border-[#333333]">
          <div className="text-[#9e9e9e]">
            © 2025 TiaVane. Todos los derechos reservados.
          </div>
          <div className="flex gap-8">
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
