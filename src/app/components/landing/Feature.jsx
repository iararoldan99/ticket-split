import React from 'react';
import mobileAppImage from '../../assets/img/Group 1948759423 (1).svg';
import Wave from './Wave.jsx';
const Features = () => {
  return (
    <section className="relative bg-light-primary py-12 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="flex space-x-4 justify-center md:w-1/2">
          <img src={mobileAppImage} alt="Mobile App" className="w-3/4 md:w-full" />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Las finanzas de tu grupo de amigos, resueltas para vos.</h2>
          <p className="text-lg text-black-600">
            Creá y gestioná proyectos de división de gastos, calculá y controlá el dinero que gastás.
          </p>
        </div>
        <Wave />  
      </div>
    </section>
  );
};

export default Features;