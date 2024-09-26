import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import { FaChevronDown, FaBars } from 'react-icons/fa';
import logo from '../../assets/img/Icon.svg';
import userIcon from '../../assets/img/UserIcon.svg';

const NavbarDashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="TicketSplit Logo" className="h-8 w-8" />
          <Link to="/dashboard" className="font-semibold text-black">TicketSplit</Link> 
        </div>

        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu}>
            <FaBars className="text-black h-6 w-6" />
          </button>
        </div>

        <div className={`flex-col md:flex-row items-center space-x-6 hidden md:flex ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
          <Link to="/dashboard" className="text-gray-500 hover:text-black font-bold">Inicio</Link> 
          <Link to="/calcular-gastos" className="text-gray-500 hover:text-black">Calcular gastos</Link>
          <Link to="/proyectos" className="text-gray-500 hover:text-black">Proyectos</Link>
          <Link to="/historial" className="text-gray-500 hover:text-black">Historial</Link>

          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-2">
              <img src={userIcon} alt="User Icon" className="h-8 w-8 rounded-full" />
              <span>Agus</span>
              <FaChevronDown />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <Link to="/mi-cuenta" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mi cuenta</Link>
                <Link to="/notificaciones" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Notificaciones</Link>
                <Link to="/configuracion" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Configuración</Link>
                <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cerrar sesión</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <Link to="/dashboard" className="block px-4 py-2 text-gray-500 hover:text-black font-bold">Inicio</Link> 
          <Link to="/calcular-gastos" className="block px-4 py-2 text-gray-500 hover:text-black">Calcular gastos</Link>
          <Link to="/proyectos" className="block px-4 py-2 text-gray-500 hover:text-black">Proyectos</Link>
          <Link to="/historial" className="block px-4 py-2 text-gray-500 hover:text-black">Historial</Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarDashboard;
