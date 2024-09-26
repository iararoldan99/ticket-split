import React from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import UserHeader from '../../components/myAccount/UserHeader'; 
import SidebarNavigation from '../../components/myAccount/SidebarNavigation'; 
import AccountForm from '../../components/myAccount/AccountForm';
import Footer from '../../layout/Footer/Footer';

const MyAccount = () => {
  return (
    <>
      <NavbarDashboard />
      <div className="min-h-screen flex flex-col justify-between bg-white">
        <div className="w-full flex flex-col lg:flex-row mt-10 px-6 lg:px-8 space-y-10 lg:space-y-0 lg:ml-40">
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row lg:items-start items-start lg:space-x-8">
            <div>
              <UserHeader userName="Agus" sectionName="Mi cuenta" />
              <SidebarNavigation />
            </div>

            <div className="w-full lg:w-3/4 p-8 mt-16">
              <AccountForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MyAccount;
