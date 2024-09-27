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

  const handleNavigation = (path) => {
    setDropdownOpen(false);
    navigate(path); 
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
      className="bg-white py-4 border-b border-gray-200 relative z-50"  
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
          <Link 
            to="/dashboard" 
            className={`${location.pathname === '/dashboard' ? 'text-green-500 font-bold' : 'text-black hover:text-gray-700'}`}
          >
            Inicio
          </Link> 
          <Link 
            to="/dividir-gastos" 
            className={`${location.pathname === '/dividir-gastos' ? 'text-green-500 font-bold' : 'text-black hover:text-gray-700'}`}
          >
            Dividir gastos
          </Link>
          
          <Link 
            to="/viewProjects" 
            className={`${location.pathname === '/viewProjects' ? 'text-green-500 font-bold' : 'text-black hover:text-gray-700'}`}
          >
            Proyectos
          </Link>
          
          <Link 
            to="/historial" 
            className={`${location.pathname === '/historial' ? 'text-green-500 font-bold' : 'text-black hover:text-gray-700'}`}
          >
            Historial
          </Link>

          <div className="relative z-50">
            <button onClick={toggleDropdown} className="flex items-center space-x-2">
              <motion.img 
                src={userIcon} 
                alt="User Icon" 
                className="h-8 w-8 rounded-full cursor-pointer"
                onClick={() => handleNavigation('/edit-profile')}  
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
                <button 
                  onClick={() => handleNavigation('/my-account')} 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:shadow-md w-full text-left"
                >
                  Mi cuenta
                </button>
                <button 
                  onClick={() => handleNavigation('/my-account/notifications')} 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:shadow-md w-full text-left"
                >
                  Notificaciones
                </button>
                <button 
                  onClick={() => handleNavigation('/edit-profile')}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:shadow-md w-full text-left"
                >
                  Configuración
                </button>
                <button 
                  onClick={() => handleNavigation('/logout')}
                  className="block px-4 py-2 text-red-500 hover:bg-gray-100 hover:shadow-md w-full text-left"
                >
                  Cerrar sesión
                </button>
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
          <Link 
            to="/dashboard" 
            className={`${location.pathname === '/dashboard' ? 'block px-4 py-2 text-green-500 font-bold' : 'block px-4 py-2 text-black hover:text-gray-700'}`}
          >
            Inicio
          </Link> 
          <Link 
            to="/dividir-gastos" 
            className={`${location.pathname === '/dividir-gastos' ? 'block px-4 py-2 text-green-500 font-bold' : 'block px-4 py-2 text-black hover:text-gray-700'}`}
          >
            Calcular gastos
          </Link>
          
          <Link 
            to="/viewProjects" 
            className={`${location.pathname === '/viewProjects' ? 'block px-4 py-2 text-green-500 font-bold' : 'block px-4 py-2 text-black hover:text-gray-700'}`}
          >
            Proyectos
          </Link>
          
          <Link 
            to="/historial" 
            className={`${location.pathname === '/historial' ? 'block px-4 py-2 text-green-500 font-bold' : 'block px-4 py-2 text-black hover:text-gray-700'}`}
          >
            Historial
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavbarDashboard;
