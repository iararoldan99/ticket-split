import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/img/Illustration.svg';  

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-white px-8 md:px-16">
      <div className="md:w-1/2 flex flex-col items-start justify-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Compartí gastos sin preocupaciones
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Registra, gestiona y calcula el dinero que gastas con otras personas: simple, rápido y en un solo lugar.
        </p>
        <Link to="/register">
          <button className="bg-black text-white text-lg py-3 px-6 rounded-lg hover:bg-gray-800 transition">
            Comencemos
          </button>
        </Link>
      </div>

      <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <img src={heroImage} alt="Fiesta" className="w-full md:w-3/4" />
      </div>
    </div>
  );
};

export default Hero;