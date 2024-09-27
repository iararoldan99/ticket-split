import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion'; 
import logo from '../../assets/img/Icon.svg';
import userIcon from '../../assets/img/UserIcon.svg';

const NavbarDashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation(); 

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/account-deleted') {
      navigate('/');  
    } else {
      navigate('/dashboard');  
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }}   
      transition={{ duration: 0.6 }}   
      className="bg-white py-4 border-b border-gray-200"
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <motion.div 
          className="flex items-center space-x-3 cursor-pointer" 
          onClick={handleLogoClick}
          whileHover={{ scale: 1.02 }}  
          transition={{ type: 'spring', stiffness: 300 }} 
        >
          <img src={logo} alt="TicketSplit Logo" className="h-8 w-8" />
          <span className="font-semibold text-black">TicketSplit</span>
        </motion.div>

        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu}>
            <FaBars className="text-black h-6 w-6" />
          </button>
        </div>

        <div className={`flex-col md:flex-row items-center space-x-6 hidden md:flex`}>
          <Link to="/dashboard" className="text-gray-500 hover:text-black font-bold">Inicio</Link> 
          <Link to="/calcular-gastos" className="text-gray-500 hover:text-black">Calcular gastos</Link>
          
          <Link to="/viewProjects" className="text-gray-500 hover:text-black">Proyectos</Link>
          
          <Link to="/historial" className="text-gray-500 hover:text-black">Historial</Link>

          <div className="relative"> 
            <button onClick={toggleDropdown} className="flex items-center space-x-2">
              <motion.img 
                src={userIcon} 
                alt="User Icon" 
                className="h-8 w-8 rounded-full" 
                whileHover={{ scale: 1.1 }} 
              />
              <span>Agus</span>
              <FaChevronDown />
            </button>

            {isDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.3 }} 
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
              > 
                <Link to="/my-account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mi cuenta</Link>
                <Link to="/my-account/notifications" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Notificaciones</Link>
                <Link to="/edit-profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Configuración</Link>
                <Link to="/logout" className="block px-4 py-2 text-red-500 hover:bg-gray-100">Cerrar sesión</Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.3 }} 
          className="md:hidden bg-white py-2"
        >
          <Link to="/dashboard" className="block px-4 py-2 text-gray-500 hover:text-black font-bold">Inicio</Link> 
          <Link to="/calcular-gastos" className="block px-4 py-2 text-gray-500 hover:text-black">Calcular gastos</Link>
          
          <Link to="/viewProjects" className="block px-4 py-2 text-gray-500 hover:text-black">Proyectos</Link>
          
          <Link to="/historial" className="block px-4 py-2 text-gray-500 hover:text-black">Historial</Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavbarDashboard;

