import React from 'react';

const FormRegistro = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="mt-8">
      <label className="block mb-2">Email</label>
      <input
        type="email"
        className="border border-gray-300 p-2 w-full mb-4 rounded-lg"
        placeholder="Ingresa tu email"
      />

      <label className="block mb-2">Usuario</label>
      <input
        type="text"
        className="border border-gray-300 p-2 w-full mb-4 rounded-lg"
        placeholder="Ingresa tu usuario"
      />

      <label className="block mb-2">Contraseña</label>
      <input
        type="password"
        className="border border-gray-300 p-2 w-full mb-4 rounded-lg"
        placeholder="Ingresa tu contraseña"
      />

      <div className="mt-4">
        <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg w-full">
          Crear cuenta
        </button>
      </div>

      <p className="text-sm mt-4">Al registrarte aceptás los <a href="#" className="text-primary">Términos y condiciones</a>.</p>
    </form>
  );
};

export default FormRegistro;