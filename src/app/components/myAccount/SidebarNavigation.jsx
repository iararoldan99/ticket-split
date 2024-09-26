import React from 'react';
import { Link } from 'react-router-dom'; 

const SidebarNavigation = () => {
  return (
    <div className="w-full lg:w-1/4 p-6 mb-8 lg:mb-0 flex flex-col ml-8">
      <Link to="/my-account" className="block text-gray-600 mb-4 whitespace-nowrap">Detalles de la cuenta</Link>
      <Link to="/change-password" className="block text-gray-600 mb-4 whitespace-nowrap">Cambiar contraseña</Link>
      <hr className="my-2 w-3/4 border-t border-gray-300" />
      <Link to="/logout" className="block text-red-500 hover:underline whitespace-nowrap">Cerrar sesión</Link>
    </div>
  );
};

export default SidebarNavigation;
