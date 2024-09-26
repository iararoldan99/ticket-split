import React from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import ProjectForm from '../../components/projectCreate/ProjectForm';

const ProjectCreate = () => {
  return (
    <>
      <NavbarDashboard />
      <div className="min-h-screen flex flex-col justify-between bg-white">
        <div className="w-full flex justify-center mt-10 px-6 lg:px-20 space-y-10">
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-1/4 p-6 mb-8 lg:mb-0 lg:mr-8">
              <h2 className="text-gray-600 font-semibold mb-4">Crear</h2>
              <a href="#" className="block text-gray-600 mb-4">Ver proyectos</a>
              <hr className="my-2" />
              <a href="#" className="block text-red-500 hover:underline">Eliminar proyecto</a>
            </div>

            <div className="w-full lg:w-3/4 p-8">
              <ProjectForm />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProjectCreate;
