import React from 'react';
import logo from '../../assets/img/Icon.svg';

const Navbar = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">TicketSplit</span>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#login" className="text-gray-600 hover:text-black">
            Iniciar sesión
          </a>
          <a
            href="#register"
            className="border border-black text-black px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Registrarse
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;