import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-300"> 
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">TicketSplit</h2>
            <p className="text-sm text-gray-600">Somos la plataforma #1 de división de gastos compartidos.</p>
            <div className="flex space-x-4 mt-4">
              <FaDribbble className="text-gray-600 w-5 h-5" />
              <FaTwitter className="text-gray-600 w-5 h-5" />
              <FaFacebook className="text-gray-600 w-5 h-5" />
              <FaInstagram className="text-gray-600 w-5 h-5" />
              <FaPinterest className="text-gray-600 w-5 h-5" />
            </div>
          </div>

          <div>
            <h3 className="text-md font-bold mb-4">Quiénes somos</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Equipo</li>
              <li>Historia</li>
              <li>Oficinas</li>
              <li>Privacidad</li>
              <li>Términos y condiciones</li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Reclamos</li>
              <li>Comentarios</li>
              <li>Sugerencias</li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Subscripción</li>
              <li>API</li>
              <li>Calculadora</li>
              <li>Proyectos</li>
              <li>Reportes</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-600">
          © 2024 TicketSplit. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
