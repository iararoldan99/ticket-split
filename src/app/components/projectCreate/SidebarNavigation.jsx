import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarNavigation = () => {
  const location = useLocation(); 

  return (
    <div className="w-full lg:w-1/4 p-6 mb-8 lg:mb-0 flex flex-col ml-8">
      <Link
        to="/projectCreate"
        className={`block mb-4 whitespace-nowrap ${
          location.pathname === '/projectCreate' ? 'text-black font-semibold' : 'text-gray-600'
        }`}
      >
        Crear proyecto
      </Link>

      <Link
        to="/viewProjects"
        className={`block mb-4 whitespace-nowrap ${
          location.pathname === '/viewProjects' ? 'text-black font-semibold' : 'text-gray-600'
        }`}
      >
        Ver proyectos
      </Link>
      
      <hr className="my-2 w-3/4 border-t border-gray-300" />

      <a href="#" className="block text-red-500 hover:underline whitespace-nowrap">Eliminar proyecto</a>
    </div>
  );
};

export default SidebarNavigation;
