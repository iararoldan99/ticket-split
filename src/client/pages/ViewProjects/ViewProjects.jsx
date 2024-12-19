import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import UserHeader from '../../components/projectCreate/UserHeader';
import SidebarNavigation from '../../components/projectCreate/SidebarNavigation';
import ProjectList from '../../components/viewProjects/ProjectList';
import {motion} from 'framer-motion';

const ViewProjects = () => {
    const {projects} = useSelector((state) => state.project || []);
    const {user} = useSelector((state) => state.user);

    return (
        <>
            <NavbarDashboard/>
            <div className="min-h-screen flex flex-col justify-between bg-white">
                <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40">
                    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row lg:items-start items-start lg:space-x-8">
                        <div>
                            <UserHeader userName={user?.username} sectionName="Ver Proyectos"/>
                            <SidebarNavigation/>
                        </div>

                        <div className="w-full lg:w-3/4 p-8 mt-16">
                            <motion.h2
                                className="text-2xl font-bold mb-6"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.7}}
                            >
                            </motion.h2>

                            {projects.length > 0 ? (
                                <ProjectList projects={projects}/>
                            ) : (
                                <p>Todavía no tenés ningún proyecto, ¡empezá creando uno!</p>
                            )}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default ViewProjects;
