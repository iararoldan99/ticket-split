import React from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import SidebarNavigation from '../../components/projectCreate/SidebarNavigation';
import UserHeader from '../../components/projectCreate/UserHeader';
import ProjectForm from '../../components/projectCreate/ProjectForm';
import {useSelector} from "react-redux";

const ProjectDetails = () => {
    const {user} = useSelector((state) => state.user);

    return (
        <>
            <NavbarDashboard/>
            <div className="min-h-screen flex flex-col justify-between bg-white">
                <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40">
                    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row lg:items-start items-start lg:space-x-8">
                        <div>
                            <UserHeader userName={user?.username} sectionName="Detalles del Proyecto"/>
                            <SidebarNavigation/>
                        </div>
                        <div className="w-full lg:w-3/4 p-8 mt-16">
                                <ProjectForm
                                />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default ProjectDetails;
