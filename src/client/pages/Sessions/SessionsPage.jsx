import React from 'react';
import {useSelector} from 'react-redux';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import SidebarNavigation from '../../components/myAccount/SidebarNavigation';
import UserHeader from '../../components/myAccount/UserHeader';
import Footer from '../../layout/Footer/Footer';
import SessionList from '../../components/sessions/SessionList';
import laptopIcon from '../../assets/img/laptopIcon.svg';
import mobileIcon from '../../assets/img/mobileIcon.svg';
import {motion} from 'framer-motion';
import {useUserInfo} from "../../context/UserContext.js";

const sessionsData = [
    {
        location: 'Buenos Aires 190.168.0.1.1',
        device: 'Tu sesión actual',
        icon: laptopIcon,
        lastActive: null,
    },
    {
        location: 'Buenos Aires 190.168.1.1.1',
        device: 'Ult. sesión 20/08/2024 18:00 hs',
        icon: mobileIcon,
        lastActive: '20/08/2024 18:00 hs',
    },
];

const SessionsPage = () => {
    const {userInfo} = useUserInfo();
    const {user} = useSelector((state) => state.user);

    return (
        <>
            <NavbarDashboard/>

            <div className="min-h-screen flex flex-col justify-between bg-white">
                <motion.div
                    className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40"
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    <div>
                        <UserHeader userName={user?.username} sectionName="Sesiones"/>
                        <SidebarNavigation/>
                    </div>

                    <motion.div
                        className="w-full lg:w-3/4 p-8 mt-10 lg:mt-0 lg:-ml-12"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: "easeOut", delay: 0.2}}
                    >
                        <h2 className="text-2xl font-bold mb-4 text-black mt-20">Sesiones activas</h2>
                        <p className="text-gray-600 mb-6 mt-2">Estas son tus sesiones activas actuales o recientes.</p>

                        <SessionList sessions={sessionsData}/>
                    </motion.div>
                </motion.div>
            </div>

            <Footer/>
        </>
    );
};

export default SessionsPage;
