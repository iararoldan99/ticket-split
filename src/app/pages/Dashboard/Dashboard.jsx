import React from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import SaldoGastos from '../../components/dashboard/SaldoGastos';
import ProgressBar from '../../components/dashboard/ProgressBar';
import UltimosMovimientos from '../../components/dashboard/UltimosMovimientos';

const Dashboard = () => {
  return (
    <>
      <NavbarDashboard />
      <div className="min-h-screen flex flex-col justify-between">
        <div className="w-full" style={{ backgroundColor: '#B9FF66' }}>
          <div className="text-black mb-16 px-6 mt-4 ml-5 pb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">¡Buenos días, Agus!</h1>
            <div className="mt-20 flex flex-col items-center">
              <SaldoGastos />
              <ProgressBar />
              <p className="text-black mt-2 text-center">30% de tu presupuesto mensual.</p>
            </div>
          </div>
        </div>

        <div className="w-full flex-grow bg-white pb-32">
          <UltimosMovimientos />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
