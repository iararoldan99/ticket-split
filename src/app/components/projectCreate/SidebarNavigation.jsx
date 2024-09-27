import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarNavigation = () => {
  const location = useLocation(); 
  return (
    <div className="w-full lg:w-1/4 p-6 mb-8 lg:mb-0 flex flex-col">
      <Link 
        to="/projectCreate"
        className={`block text-gray-500 mb-4 whitespace-nowrap ${location.pathname === '/my-account' ? 'text-black font-bold' : ''}`}
      >
        Crear proyecto
      </Link>

      <Link 
        to="/viewProjects"
        className={`block text-gray-500 mb-4 whitespace-nowrap ${location.pathname === '/edit-profile' ? 'text-black font-bold' : ''}`}
      >
        Ver proyectos
      </Link>
      
      <hr className="my-2 w-3/4 border-t border-gray-300" />
      
      <Link 
        to="/deleteproject" 
        className="block text-red-500 hover:underline whitespace-nowrap"
      >
        Eliminar proyecto
      </Link>
    </div>
  );
};

export default SidebarNavigation;
