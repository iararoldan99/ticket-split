import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import SidebarNavigation from '../../components/myAccount/SidebarNavigation';
import UserHeader from '../../components/myAccount/UserHeader';
import Footer from '../../layout/Footer/Footer';

const DeleteAccountPage = () => {
  const navigate = useNavigate(); 

  const handleDelete = () => {
    console.log("Cuenta eliminada");
    
    navigate('/account-deleted');
  };

  return (
    <>
      <NavbarDashboard />
      <div className="min-h-screen flex flex-col justify-between bg-white">
        <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40">
          <div className="lg:w-1/4">
            <UserHeader userName="Agus" sectionName="Eliminar cuenta" />
            <SidebarNavigation />
          </div>

          <div className="w-full lg:w-3/4 p-8 mt-16 lg:mt-0">
            <h2 className="text-xl font-bold mb-6 text-black">Eliminar cuenta</h2>
            <p className="text-gray-600 mb-6">Por favor, ten en cuenta que esta acción es irreversible.</p>

            <div className="p-6 bg-red-100 border border-red-300 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-semibold text-red-600 mb-4">¿Estás seguro de que deseas eliminar tu cuenta?</h3>
              <p className="text-gray-700">
                Al eliminar tu cuenta, perderás acceso a todos tus proyectos, amigos, y configuraciones. Esta acción no se puede deshacer.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-sm hover:bg-red-600 transition duration-300 font-semibold"
              >
                Eliminar cuenta
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DeleteAccountPage;
