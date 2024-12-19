import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import logo from '../../assets/img/Icon.svg';
import userIcon from '../../assets/img/UserIcon.svg';
import {useUserInfo} from "../../context/UserContext.js";

const NavbarDashboard = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const location = useLocation();
    const { logoutContext } = useUserInfo();
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    const handleNavigation = (path) => {
        setDropdownOpen(false);
        navigate(path);
    };

    const handleLogOut = () => {
        const success = logoutContext();
        if (success) {
            setDropdownOpen(false);
            navigate('/');
        }
    }

    const handleLogoClick = () => navigate('/dashboard');

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white py-4 border-b border-gray-200"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                <motion.div
                    className="flex items-center space-x-3 cursor-pointer"
                    onClick={handleLogoClick}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <img src={logo} alt="TicketSplit Logo" className="h-8 w-8" />
                    <span className="font-semibold text-black">TicketSplit</span>
                </motion.div>

                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/dashboard" className={`${location.pathname === '/dashboard' ? 'font-bold' : 'hover:text-gray-500'}`}>Inicio</Link>
                    <Link to="/dividir-gastos" className={`${location.pathname === '/dividir-gastos' ? 'font-bold' : 'hover:text-gray-500'}`}>Dividir gastos</Link>
                    <Link to="/ver-proyectos" className={`${location.pathname === '/ver-proyectos' ? 'font-bold' : 'hover:text-gray-500'}`}>Proyectos</Link>

                    <div className="relative z-50">
                        <button onClick={toggleDropdown} className="flex items-center space-x-2">
                            <motion.img src={userIcon} alt="User Icon" className="h-8 w-8 rounded-full cursor-pointer" whileHover={{ scale: 1.1 }} />
                            <span>{user?.username || 'Usuario'}</span>
                            <FaChevronDown />
                        </button>

                        {isDropdownOpen && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                                <button onClick={() => handleNavigation('/mi-cuenta')} className="block px-4 py-2 text-gray-700 text-left">Mi cuenta</button>
                                <Link to="/mi-cuenta/notificaciones" className="block px-4 py-2 text-gray-700">Notificaciones</Link>
                                <Link to="/mi-cuenta/editar-perfil" className="block px-4 py-2 text-gray-700">Configuración</Link>
                                <button onClick={() => { handleLogOut() }} className="block px-4 py-2 text-red-500 w-full text-left">Cerrar sesión</button>                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default NavbarDashboard;
