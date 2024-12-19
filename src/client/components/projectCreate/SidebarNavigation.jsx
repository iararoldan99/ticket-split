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
          to="/crear-proyecto"
          className={`block text-gray-500 mb-4 whitespace-nowrap ${location.pathname === '/projectCreate' ? 'text-black font-bold' : ''} transition-all duration-300`}
        >
          Crear proyecto
        </Link>

        <Link
          to="/ver-proyectos"
          className={`block text-gray-500 mb-4 whitespace-nowrap ${location.pathname === '/ver-proyectos' ? 'text-black font-bold' : ''} transition-all duration-300`}
        >
          Ver proyectos
        </Link>

      </motion.div>
    </motion.div>
  );
};

export default SidebarNavigation;

