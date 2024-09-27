import React from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import Greeting from '../../components/dashboard/Greeting';
import SaldoGastos from '../../components/dashboard/SaldoGastos';
import ProgressBar from '../../components/dashboard/ProgressBar';
import UltimosMovimientos from '../../components/dashboard/UltimosMovimientos';

const Dashboard = () => {
  return (
    <>
      <div className="relative z-50">
        <NavbarDashboard />
      </div>
      <div className="min-h-screen flex flex-col justify-between bg-white">
        <Greeting />
        <div className="mt-10 flex flex-col items-center">
          <SaldoGastos />
          <ProgressBar />
        </div>
        <div className="w-full flex-grow bg-white pt-8 pb-20">
          <UltimosMovimientos />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
