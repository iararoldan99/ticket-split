import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavbarDashboard from "../../layout/Navbar/NavbarDashboard.jsx";
import UserHeader from "../../components/projectCreate/UserHeader.jsx";
import SidebarNavigation from "../../components/projectCreate/SidebarNavigation.jsx";
import Footer from "../../layout/Footer/Footer.jsx";
import ViewProjectDetail from "../../components/viewProjects/ViewProjectDetail.jsx";
import { useParams } from 'react-router-dom';

const ViewProject = () => {
    const { user } = useSelector((state) => state.user);
    const { projects } = useSelector((state) => state.project || []);
    const { projectId } = useParams();
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const project = projects.find((proj) => proj._id === projectId);
        setSelectedProject(project);
    }, [projectId, projects]);

    return (
        <>
            <NavbarDashboard />
            <div className="min-h-screen flex flex-col justify-between bg-white">
                <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40">
                    <div className="w-full lg:w-2/3 flex flex-col lg:flex-row lg:items-start items-start lg:space-x-8">
                        <div>
                            <UserHeader userName={user?.username} sectionName="Detalles del Proyecto" />
                            <SidebarNavigation />
                        </div>
                        <div className="w-full lg:w-3/4 p-8 mt-16">
                            <ViewProjectDetail
                                selectedProject={selectedProject}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default ViewProject;
