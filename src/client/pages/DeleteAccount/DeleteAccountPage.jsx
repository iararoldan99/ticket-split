import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {motion} from 'framer-motion';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import SidebarNavigation from '../../components/myAccount/SidebarNavigation';
import UserHeader from '../../components/myAccount/UserHeader';
import Footer from '../../layout/Footer/Footer';
import {useUserInfo} from "../../context/UserContext.js";

const DeleteAccountPage = () => {
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.user);

    const {userInfo} = useUserInfo();

    const handleDelete = () => {
        navigate('/cuenta-eliminada');
    };

    return (
        <>
            <NavbarDashboard/>
            <div className="min-h-screen flex flex-col justify-between bg-white">
                <motion.div
                    className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1.2, ease: "easeOut"}}
                >
                    <div>
                        <UserHeader userName={user?.username} sectionName="Eliminar cuenta"/>
                        <SidebarNavigation/>
                    </div>

                    <div className="w-full lg:w-3/4 p-8 mt-28 lg:mt-0">
                        <h2 className="text-xl font-bold mb-6 text-black mt-20 lg:w-3/4 lg:-ml-20">Eliminar cuenta</h2>
                        <p className="text-gray-600 mb-6 lg:w-3/4 lg:-ml-20">Por favor, ten en cuenta que esta acción es
                            irreversible.</p>

                        <div
                            className="p-6 bg-red-100 border border-red-300 rounded-lg shadow-md mb-6 lg:w-3/4 lg:-ml-20">
                            <h3 className="text-lg font-semibold text-red-600 mb-4 ">¿Estás seguro de que deseas
                                eliminar tu cuenta?</h3>
                            <p className="text-gray-700">
                                Al eliminar tu cuenta, perderás acceso a todos tus proyectos, amigos, y configuraciones.
                                Esta acción no se puede deshacer.
                            </p>
                        </div>

                        <div className="flex justify-start">
                            <button
                                onClick={handleDelete}
                                className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-sm hover:bg-red-600 transition duration-300 font-semibold lg:-ml-20"
                            >
                                Eliminar cuenta
                            </button>
                        </div>
                    </div>

                </motion.div>

                <Footer/>
            </div>
        </>
    );
};

export default DeleteAccountPage;
