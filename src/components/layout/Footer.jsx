// import React from 'react';
// import { FaTiktok, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
// import { AiFillInstagram } from "react-icons/ai";
// import { IoLogoWhatsapp } from "react-icons/io";

// const Footer = ({ quickLinks }) => {
//   return (
//     <footer className="bg-black text-white font-sans pt-20 pb-12">
//       <div className="max-w-[1800px] mx-auto px-8">
//         <div className="grid grid-cols-[300px_300px_300px_1fr] gap-12">
//           {/* First Column - Información Básica */}
//           <div className="space-y-4">
//             <h3 className="text-[20px] font-bold">TiaVane</h3>
//             <p className="text-[18px] text-[#9e9e9e]">
//               Lima, Perú
//             </p>
//             <p className="text-[18px] text-[#9e9e9e]">
//               Correo: <a href="mailto:tia_vane_contact@gmail.com" className="hover:text-gray-300">tia_vane_contact@gmail.com</a>
//             </p>
//             <p className="text-[18px] text-[#9e9e9e]">
//               Teléfono: <a href="tel:+51965730662" className="hover:text-gray-300">+51 965730662</a>
//             </p>
//           </div>

//           {/* Second Column - Navegación */}
//           <div>
//             <h3 className="text-[20px] font-bold mb-4">Enlaces Rápidos</h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <a href={link.href} className="text-[18px] text-[#9e9e9e] hover:text-gray-300">
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Third Column - Métodos de Pago */}
//           <div>
//             <h3 className="text-[20px] font-bold mb-4">Métodos de Pago</h3>
//             <ul className="space-y-3">
//               <li className="text-[18px] text-[#9e9e9e]">Transferencia</li>
//               <li className="text-[18px] text-[#9e9e9e]">Yape</li>
//               <li className="text-[18px] text-[#9e9e9e]">Plin</li>
//               <li className="text-[18px] text-[#9e9e9e]">Depósito</li>
//             </ul>
//           </div>

//           {/* Fourth Column - Redes Sociales */}
//           <div className="flex flex-col items-end gap-6">
//             <h3 className="text-[20px] font-bold">Síguenos</h3>
//             <div className="flex gap-4">
//               <a href="#" className="bg-gray-500 hover:bg-gray-400 p-3 rounded-full">
//               <FaTiktok size={20}  color='black'/>
//               </a>
//               <a href="#" className="bg-gray-500 hover:bg-gray-400 p-3 rounded-full">
//               <FaFacebookF size={20}  color='black'/>
//               </a>
//               <a href="#" className="bg-gray-500 hover:bg-gray-400 p-3 rounded-full">
//               <AiFillInstagram size={20}  color='black'/>
//               </a>
//               <a href="#" className="bg-gray-500 hover:bg-gray-400 p-3 rounded-full">
//               <IoLogoWhatsapp size={20} color='black'/>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#333333]">
//           <div className="text-[18px] text-[#9e9e9e]">
//             © 2025 TiaVane. Todos los derechos reservados.
//           </div>
//           <div className="flex gap-8">
//             <a href="#" className="text-[18px] text-[#9e9e9e] hover:text-gray-300">
//               Términos y Condiciones
//             </a>
//             <a href="#" className="text-[18px] text-[#9e9e9e] hover:text-gray-300">
//               Política de privacidad
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { FaTiktok, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = ({ quickLinks }) => {
  return (
    <footer className="bg-black text-white font-sans">
      <div className="max-w-[1800px] mx-auto px-8 py-20">
        <div className="grid grid-cols-4  gap-12">
          {/* First Column - Información Básica */}
          <div className="space-y-4">
            <h3 className="text-[20px] font-bold">TiaVane</h3>
            <p className="text-[18px] text-[#9e9e9e]">
              Lima, Perú
            </p>
            <p className="text-[18px] text-[#9e9e9e]">
              Correo: <a href="mailto:tia_vane_contact@gmail.com" className="hover:text-gray-300 break-words">tia_vane_contact@gmail.com</a>
            </p>
            <p className="text-[18px] text-[#9e9e9e]">
              Teléfono: <a href="tel:+51965730662" className="hover:text-gray-300">+51 965730662</a>
            </p>
          </div>

          {/* Second Column - Navegación */}
          <div>
            <h3 className="text-[20px] font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[18px] text-[#9e9e9e] hover:text-gray-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column - Métodos de Pago */}
          <div>
            <h3 className="text-[20px] font-bold mb-4">Métodos de Pago</h3>
            <ul className="space-y-3">
              <li className="text-[18px] text-[#9e9e9e]">Transferencia</li>
              <li className="text-[18px] text-[#9e9e9e]">Yape</li>
              <li className="text-[18px] text-[#9e9e9e]">Plin</li>
              <li className="text-[18px] text-[#9e9e9e]">Depósito</li>
            </ul>
          </div>

          {/* Fourth Column - Redes Sociales */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <h3 className="text-[20px] font-bold ">Síguenos</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="#" className="bg-gray-500 hover:bg-gray-400 p-3 rounded-full">
                <FaTiktok size={20} color='black'/>
              </a>
              <a href="#" className="bg-gray-500 hover:bg-gray-400 p-3 rounded-full">
                <FaFacebookF size={20} color='black'/>
              </a>
              <a href="#" className="bg-gray-500 hover:bg-gray-400 p-3 rounded-full">
                <AiFillInstagram size={20} color='black'/>
              </a>
              <a href="#" className="bg-gray-500 hover:bg-gray-400 p-3 rounded-full">
                <IoLogoWhatsapp size={20} color='black'/>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-12 pt-8 border-t border-[#333333] gap-4">
          <div className="text-[18px] text-[#9e9e9e] text-center lg:text-left">
            © 2025 TiaVane. Todos los derechos reservados.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center">
            <a href="#" className="text-[18px] text-[#9e9e9e] hover:text-gray-300">
              Términos y Condiciones
            </a>
            <a href="#" className="text-[18px] text-[#9e9e9e] hover:text-gray-300">
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;