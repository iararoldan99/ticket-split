import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarSimple from '../../layout/Navbar/NavbarSimple';
import Footer from '../../layout/Footer/Footer';
import deletedAccountImage from '../../assets/img/deletedAccount.svg';

const AccountDeletedPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavbarSimple />
      <div className="min-h-screen flex flex-col justify-center items-center bg-white">
        <div className="w-full p-8 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">

          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-black mb-6">Lamentamos que te vayas</h2>
            <p className="text-gray-600 mb-4">
              Tu cuenta ha sido eliminada correctamente. Gracias por usar TicketSplit.
            </p>
            <p className="text-black mb-6">
              ¿Ganas de volver? <span className="text-blue-500 cursor-pointer" onClick={() => navigate('/registro')}>Regístrate</span>
            </p>

            <button
              onClick={() => navigate('/')}
              className="bg-[#B9FF66] text-black font-semibold py-2 px-6 rounded-lg shadow-sm hover:bg-[#a3e65b] transition duration-300"
            >
              Volver al inicio
            </button>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
            <img src={deletedAccountImage} alt="Cuenta eliminada" className="w-[700px] lg:w-[1000px] h-auto" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountDeletedPage;
