import React from 'react';
import { useSelector } from 'react-redux'; 
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';  
import Footer from '../../layout/Footer/Footer'; 
import SidebarNavigation from '../../components/myAccount/SidebarNavigation'; 
import EditProfileForm from '../../components/editProfile/EditProfileForm';  
import UserHeader from '../../components/myAccount/UserHeader';  

const EditProfile = () => {
  const { username } = useSelector((state) => state.auth.user);

  return (
    <>
      <NavbarDashboard />
      <div className="min-h-screen flex flex-col justify-between bg-white">
        <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40">
          
          <div>
            <UserHeader userName={username} sectionName="Editar Perfil" />
            <SidebarNavigation />
          </div>

          <div className="w-full lg:w-3/4 p-8 mt-16">
            <EditProfileForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EditProfile;
