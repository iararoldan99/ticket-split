import React from 'react';

const ProjectForm = () => {
  return (
    <div className="relative w-full lg:w-[150%] mx-auto"> 
      <form className="space-y-6 w-full lg:w-[70%]"> 
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="projectName">
            Nombre
          </label>
          <input
            type="text"
            id="projectName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Fiesta en casa"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="description">
            Descripción
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Cumpleaños de Fran"
            rows="4"
          ></textarea>
        </div>

        <div className="ml-0 mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Desactivar anuncios <span className="bg-yellow-200 text-green-700 font-bold px-1 rounded">PRO</span>
          </label>
          <p className="text-gray-500 mt-1">Desactívalos con una suscripción mensual para cuentas Pro.</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="w-full lg:w-[30%] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-800 bg-[#B9FF66] hover:bg-[#a3e65b] focus:outline-none focus:ring-0"
          >
            Guardar cambios
          </button>
        </div>
      </form>

      <div className="absolute top-0 right-0 flex flex-col items-center mt-10 lg:mt-0 lg:right-[-5px]">
        <p className="text-sm font-bold text-black mb-2">Ícono</p>
        <img
          src="https://via.placeholder.com/150"
          alt="Ícono del proyecto"
          className="w-36 h-36 rounded-full object-cover mb-4"
        />
        <button className="bg-[#B9FF66] text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-[#a3e65b]">
          Editar
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;
