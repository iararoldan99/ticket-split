import React from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';  
import Footer from '../../layout/Footer/Footer';  
import SidebarNavigation from '../../components/myAccount/SidebarNavigation'; 
import HeaderIcon from '../../components/myAccount/UserHeader';  
import NotificationsForm from '../../components/notifications/NotificationsForm';  

const Notifications = () => {
  return (
    <>
      <NavbarDashboard />

      <div className="min-h-screen flex flex-col justify-between bg-white">
        <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40">
          
          <div>
            <HeaderIcon userName="Agus" sectionName="Notifications" />
            <SidebarNavigation />
          </div>

          {/* Ajustamos el ancho del formulario */}
          <div className="w-full lg:w-3/4 p-8 mt-16 lg:mt-0"> 
            <NotificationsForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Notifications;
