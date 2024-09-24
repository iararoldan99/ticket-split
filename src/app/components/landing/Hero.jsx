import React from 'react';
import heroImage from '../../assets/img/Illustration.svg';

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-12">
      <div className="max-w-lg text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Compartí gastos sin preocupaciones</h1>
        <p className="text-lg text-gray-600 mb-6">
          Registrá, gestioná y calculá el dinero que gastás con otras personas: simple, rápido y en un solo lugar.
        </p>
        <button className="bg-black text-white py-3 px-6 rounded-lg">Comencemos</button>
      </div>
      <div className="flex-shrink-0">
        <img src={heroImage} alt="Fiesta" className="w-full max-w-lg lg:max-w-2xl" />
      </div>
    </section>
  );
};

export default Hero;