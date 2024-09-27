import React from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import SidebarNavigation from '../../components/myAccount/SidebarNavigation';
import UserHeader from '../../components/myAccount/UserHeader';
import Footer from '../../layout/Footer/Footer';
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

          <div className="w-full lg:w-3/4 p-8 mt-16 lg:mt-0">
            <h2 className="text-xl font-bold mb-6 text-black">Sesiones activas</h2>
            <p className="text-gray-600 mb-6">Estas son tus sesiones activas actuales o recientes.</p>
            
            <div className="space-y-4">
              {sessionsData.map((session, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row items-center justify-between p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <img src={session.icon} alt="Icono de dispositivo" className="w-16 h-16" />
                    <div>
                      <p className="text-black font-semibold">{session.location}</p>
                      <p
                        className={`text-sm ${
                          session.device === 'Tu sesión actual' ? 'text-green-500' : 'text-gray-600'
                        }`}
                      >
                        {session.device}
                      </p>
                    </div>
                  </div>

                  <button className="mt-4 lg:mt-0 bg-[#B9FF66] text-black font-medium py-2 px-6 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300">
                    Ver más
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SessionsPage;
