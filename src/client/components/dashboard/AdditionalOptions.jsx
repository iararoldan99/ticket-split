import React from 'react';
import { useNavigate } from 'react-router-dom';
import illustration from '../../assets/img/interface-testing.svg';

const AdditionalOptions = ({ openModal }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-8 space-y-8 md:flex-row md:space-y-0 md:space-x-8">
      <img src={illustration} alt="Ilustración" className="w-60 h-60 md:w-80 md:h-80" />
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">¿Qué querés hacer hoy?</h2>
        <div className="space-y-4 md:space-y-0 md:flex md:space-x-4">
          <button
            className="bg-[#B9FF66] text-black font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#9FDF59] transition-all duration-300"
            onClick={() => navigate('/dividir-gastos')}
          >
            Cargar un ticket
          </button>
          <button
            className="bg-gray-300 text-black font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-400 transition-all duration-300"
            onClick={openModal}
          >
            Cargar saldo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdditionalOptions;