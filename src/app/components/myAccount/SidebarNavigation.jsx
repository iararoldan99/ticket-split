import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarNavigation = () => {
  const location = useLocation(); 
  return (
    <div className="w-full lg:w-1/4 p-6 mb-8 lg:mb-0 flex flex-col">
      <Link 
        to="/my-account" 
        className={`block text-gray-500 mb-4 whitespace-nowrap ${location.pathname === '/my-account' ? 'text-black font-bold' : ''}`}
      >
        Mi cuenta
      </Link>

      <Link 
        to="/edit-profile" 
        className={`block text-gray-500 mb-4 whitespace-nowrap ${location.pathname === '/edit-profile' ? 'text-black font-bold' : ''}`}
      >
        Editar perfil
      </Link>

      <Link 
        to="/update-password" 
        className={`block text-gray-500 mb-4 whitespace-nowrap ${location.pathname === '/update-password' ? 'text-black font-bold' : ''}`}
      >
        Contraseña
      </Link>
      
      <Link 
        to="/my-account/notifications" 
        className="block text-gray-500 mb-4 whitespace-nowrap"
      >
        Notificaciones
      </Link>

      <Link 
        to="/my-account/sessions" 
        className="block text-gray-500 mb-4 whitespace-nowrap"
      >
        Sesiones
      </Link>
      
      <hr className="my-2 w-3/4 border-t border-gray-300" />
      
      <Link 
        to="/my-account/delete-account" 
        className="block text-red-500 hover:underline whitespace-nowrap"
      >
        Eliminar cuenta
      </Link>
    </div>
  );
};

export default SidebarNavigation;
