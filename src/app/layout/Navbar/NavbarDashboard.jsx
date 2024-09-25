import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/img/Icon.svg';
import userIcon from '../../assets/img/UserIcon.svg'; 

const NavbarDashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white py-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="TicketSplit Logo" className="h-8 w-8" />
          <a href="/" className="font-semibold text-black">TicketSplit</a>
          <a href="/inicio" className="ml-6 text-gray-500 hover:text-black font-bold">Inicio</a>
          <a href="/calcular-gastos" className="text-gray-500 hover:text-black">Calcular gastos</a>
          <a href="/proyectos" className="text-gray-500 hover:text-black">Proyectos</a>
          <a href="/historial" className="text-gray-500 hover:text-black">Historial</a>
        </div>

        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center space-x-8">
            <img src={userIcon} alt="User Icon" className="h-8 w-8 rounded-full" />
            <span>Agus</span>
            <FaChevronDown />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
              <a href="/mi-cuenta" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mi cuenta</a>
              <a href="/notificaciones" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Notificaciones</a>
              <a href="/configuracion" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Configuración</a>
              <a href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cerrar sesión</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
