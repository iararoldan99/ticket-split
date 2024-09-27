import React from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';  // Navbar
import Footer from '../../layout/Footer/Footer';  // Footer
import SidebarNavigation from '../../components/myAccount/SidebarNavigation'; // Sidebar navigation
import HeaderIcon from '../../components/myAccount/UserHeader';  // Header with user icon
import NotificationsForm from '../../components/notifications/NotificationsForm';  // Formulario de notificaciones

const Notifications = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarDashboard />

      {/* Page structure for "Notifications" */}
      <div className="min-h-screen flex flex-col justify-between bg-white">
        <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40">
          
          {/* Sidebar navigation */}
          <div>
            <HeaderIcon userName="Agus" sectionName="Notifications" />
            <SidebarNavigation />
          </div>

          {/* Main content: Notifications form */}
          <div className="w-full lg:w-3/4 p-8 mt-16">
            <NotificationsForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Notifications;
