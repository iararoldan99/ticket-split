import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const SidebarNavigation = () => {
  const location = useLocation();

  return (
    <motion.div
      className="w-full lg:w-1/4 p-6 mb-8 lg:mb-0 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}   
      transition={{ duration: 0.7, ease: "easeOut" }}  
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.7, ease: "easeOut" }}  
      >
        <Link 
          to="/projectCreate"
          className={`block text-gray-500 mb-4 whitespace-nowrap ${location.pathname === '/projectCreate' ? 'text-black font-bold' : ''} transition-all duration-300`}
        >
          Crear proyecto
        </Link>

        <Link 
          to="/viewProjects"
          className={`block text-gray-500 mb-4 whitespace-nowrap ${location.pathname === '/viewProjects' ? 'text-black font-bold' : ''} transition-all duration-300`}
        >
          Ver proyectos
        </Link>

        <hr className="my-2 w-3/4 border-t border-gray-300" />

        <Link 
          to="/deleteproject" 
          className="block text-red-500 hover:underline whitespace-nowrap transition-all duration-300"
        >
          Eliminar proyecto
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default SidebarNavigation;

