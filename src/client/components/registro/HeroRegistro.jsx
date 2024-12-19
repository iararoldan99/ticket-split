import React from 'react';
import FormRegistro from '../../components/registro/FormRegistro';
import picRegistro from '../../assets/img/face-id.svg';

const HeroRegistro = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-10">
      <div className="md:w-1/2 w-full flex justify-center md:justify-start mb-8 md:mb-0">
        <div className="max-w-lg w-full">
          <h1 className="text-4xl font-bold mb-4">Te damos la bienvenida</h1>
          <p className="mb-4">
            ¿Ya tenés una cuenta?{' '}
            <a href="/login" className="text-primary font-bold hover:underline">Iniciar sesión</a>
          </p>
          <FormRegistro onSubmit={handleSubmit} />
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-center">
        <img src={picRegistro} alt="Bienvenida" className="w-full max-w-lg" />
      </div>
    </div>
  );
};

export default HeroRegistro;
