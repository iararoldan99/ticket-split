import React from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import SidebarNavigation from '../../components/projectCreate/SidebarNavigation';
import UserHeader from '../../components/projectCreate/UserHeader';
import ProjectForm from '../../components/projectCreate/ProjectForm';
import user1 from '../../assets/img/user1.svg'; 
import user2 from '../../assets/img/user2.svg'; 
import user3 from '../../assets/img/user3.svg'; 
import user4 from '../../assets/img/user4.svg'; 
import user5 from '../../assets/img/user5.svg'; 
import user6 from '../../assets/img/user6.svg'; 


const ProjectDetails = () => {
  const projectData = {
    projectName: 'Fiesta en casa',
    description: 'Cumpleaños de Fran',
    members: [
      { name: 'Tobias', image: user1 },
      { name: 'Camila', image: user2 },
      { name: 'Cata', image: user3},
      { name: 'Agus', image: user4 },
      { name: 'Andrea', image: user5 },
      { name: 'Nacho', image: user6 },
    ],
  };

  return (
    <>
      <NavbarDashboard />
      <div className="min-h-screen flex flex-col justify-between bg-white">
        <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40">
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row lg:items-start items-start lg:space-x-8">
            <div>
              <UserHeader userName="Agus" sectionName="Detalles del Proyecto" />
              <SidebarNavigation />
            </div>
            <div className="w-full lg:w-3/4 p-8 mt-16">
              <ProjectForm
                projectName={projectData.projectName}
                description={projectData.description}
                members={projectData.members}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetails;
