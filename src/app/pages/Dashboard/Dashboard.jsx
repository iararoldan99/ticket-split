import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import ProgressBar from '../../components/dashboard/ProgressBar';
import CargarSaldoModal from '../../components/dashboard/CargarSaldoModal';
import AdditionalOptions from '../../components/dashboard/AdditionalOptions';
import { setMonthlyBudget } from '../../redux/authSlice';
import UltimosMovimientos from '../../components/dashboard/UltimosMovimientos';

const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const totalBudget = user.monthlyBudget || 0;

  const currentSpent = user.movements.length > 0 
    ? user.movements.reduce((total, movement) => total + (movement.amount || 0), 0) 
    : 0;

  const progress = totalBudget > 0 ? (currentSpent / totalBudget) * 100 : 0;

  const isExceeded = currentSpent > totalBudget;

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <NavbarDashboard />
      <div className="w-full bg-white-100 py-4 mt-12">
        <h1 className="text-4xl font-bold text-black text-center">
          ¡Buenos días, {user.username}!✌️
        </h1>
      </div>

      <div className="min-h-screen flex flex-col justify-between bg-white-background">
        <div className="mt-8 flex flex-col items-center text-center space-y-4">
          <div className="flex justify-center space-x-12">
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold">Saldo</h2>
              <p className="text-3xl font-bold">${totalBudget.toFixed(2)}</p>
            </div>
            <div className="hidden md:block h-16 border-l border-gray-300"></div>
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold">Gastos Registrados</h2>
              <p className={`text-3xl font-bold ${isExceeded ? 'text-red-600' : 'text-black'}`}>-${currentSpent.toFixed(2)}</p>
            </div>
          </div>

          <div className="mt-4 flex justify-center w-full px-8">
            <ProgressBar 
              totalBudget={totalBudget} 
              currentSpent={currentSpent} 
              progress={progress} 
              isExceeded={isExceeded} 
              className="w-1/2" 
            />
          </div>
          
          {isExceeded && (
            <p className="text-red-600 font-semibold">
              ¡Has excedido tu presupuesto mensual!
            </p>
          )}

          <AdditionalOptions openModal={openModal} />

          <UltimosMovimientos />
        </div>

        <Footer />

        <CargarSaldoModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          onSave={(saldo) => dispatch(setMonthlyBudget(saldo))} 
        />
      </div>
    </>
  );
};

export default Dashboard;