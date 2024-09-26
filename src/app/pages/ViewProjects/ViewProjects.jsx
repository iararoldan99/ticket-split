import React, { useState, useEffect } from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import UserHeader from '../../components/projectCreate/UserHeader';
import SidebarNavigation from '../../components/projectCreate/SidebarNavigation';
import ProjectList from '../../components/viewProjects/ProjectList';

const ViewProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = [
        {
          name: 'Fiesta en casa',
          icon: 'https://via.placeholder.com/150',
        },
        {
          name: 'Cena Familiar',
          icon: 'https://via.placeholder.com/150',
        },
        {
          name: 'Cumple Fran',
          icon: 'https://via.placeholder.com/150',
        },
        {
          name: 'Salida grupal',
          icon: 'https://via.placeholder.com/150',
        },
      ];

      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <NavbarDashboard />
      <div className="min-h-screen flex flex-col justify-between bg-white">
        <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40"> 
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row lg:items-start items-start lg:space-x-8">
            <div>
              <UserHeader userName="Agus" sectionName="Ver Proyectos" />
              <SidebarNavigation />
            </div>

            <div className="w-full lg:w-3/4 p-8 mt-16">
              <h2 className="text-2xl font-bold mb-6">Lista de Proyectos</h2>

              {projects.length > 0 ? (
                <ProjectList projects={projects} />
              ) : (
                <p>Cargando proyectos...</p>
              )}

              <div className="flex justify-end space-x-4 mt-10">
                <button className="bg-gray-200 text-black font-bold px-4 py-2 rounded-lg hover:bg-gray-300">
                  Editar
                </button>
                <button className="bg-[#B9FF66] text-black font-bold px-4 py-2 rounded-lg hover:bg-[#a3e65b]">
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ViewProjects;
