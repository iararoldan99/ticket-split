import React from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import SidebarNavigation from '../../components/myAccount/SidebarNavigation';
import UserHeader from '../../components/myAccount/UserHeader';
import Footer from '../../layout/Footer/Footer';
import SessionList from '../../components/sessions/SessionList'; 
import laptopIcon from '../../assets/img/laptopIcon.svg'; 
import mobileIcon from '../../assets/img/mobileIcon.svg';

const sessionsData = [
  {
    location: 'Buenos Aires 190.168.0.1.1',
    device: 'Tu sesión actual',
    icon: laptopIcon,
    lastActive: null,
  },
  {
    location: 'Buenos Aires 190.168.1.1.1',
    device: 'Ult. sesión 20/08/2024 18:00 hs',
    icon: mobileIcon,
    lastActive: '20/08/2024 18:00 hs',
  },
];

const SessionsPage = () => {
  return (
    <>
      <NavbarDashboard />
      <div className="min-h-screen flex flex-col justify-between bg-white">
        <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40">
          <div className="lg:w-1/4">
            <UserHeader userName="Agus" sectionName="Sesiones" />
            <SidebarNavigation />
          </div>

          <div className="w-full lg:w-3/4 p-8 lg:mt-12 lg:ml-10">
            <h2 className="text-xl font-bold mb-6 text-black">Sesiones activas</h2>
            <p className="text-gray-600 mb-6">Estas son tus sesiones activas actuales o recientes.</p>
            
            <SessionList sessions={sessionsData} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SessionsPage;
