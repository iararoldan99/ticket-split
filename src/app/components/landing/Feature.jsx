import React from 'react';
import mobileAppImage from '../../assets/img/Pantalla 1 Mobile.svg';  
import saludoImg from '../../assets/img/Group.svg';
const Features = () => {
  return (
    <section className="bg-white py-12">
      <section className="bg-lime-200 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="flex space-x-4 justify-center md:w-1/2">
            <img src={mobileAppImage} alt="Mobile App" className="w-1/2" />
            <img src={mobileAppImage} alt="Mobile App" className="w-1/2" />
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Las finanzas de tu grupo de amigos, resueltas para vos.</h2>
            <p className="text-lg font-semibold">Gestioná los gastos fácilmente con la app. Divide y organiza de manera simple.</p>
            <span className="block mt-8 text-black text-2xl font-bold">★</span>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lleva un control de las cuentas con tu compañero de piso sin pensar demasiado.
            </h2>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img src={saludoImg} alt="Control de cuentas" className="w-2/3 md:w-full" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Features;