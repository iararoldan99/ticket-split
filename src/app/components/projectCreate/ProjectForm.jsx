import React, { useState } from 'react';
import heroImage from '../../assets/img/Illustration.svg';

const ProjectForm = ({ initialProjectName = '', initialDescription = '', members = [] }) => {
  const [projectName, setProjectName] = useState(initialProjectName); 
  const [description, setDescription] = useState(initialDescription);
  const [newMember, setNewMember] = useState(''); 

  const handleAddMember = () => {
    console.log(`Nuevo miembro: ${newMember}`);
    setNewMember(''); 
  };

  return (
    <div className="relative w-full lg:w-[150%] mx-auto"> 
      <form className="space-y-6 w-full lg:w-[70%]"> 
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="projectName">
            Nombre
          </label>
          <input
            type="text"
            id="projectName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Nombre del proyecto"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)} 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black" htmlFor="members">
            Añadir Miembro
          </label>
          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
              placeholder="Nombre del usuario"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
            />
            <button
              type="button"
              className="bg-[#B9FF66] text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300"
              onClick={handleAddMember}
            >
              Añadir
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black" htmlFor="description">
            Descripción
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Descripción del proyecto"
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
            rows="4"
          ></textarea>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {members.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image || heroImage}
                alt={member.name}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="mt-2">{member.name}</p>
            </div>
          ))}
        </div>

        <div className="ml-0 mt-4">
          <label className="block text-sm font-medium text-black">
            Desactivar anuncios <span className="bg-[#B9FF66] text-black font-medium px-1 rounded">PRO</span>
          </label>
          <p className="text-gray-500 mt-1">Desactívalos con una suscripción mensual para cuentas Pro.</p>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-[#B9FF66] text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300"
          >
            Guardar cambios
          </button>
        </div>
      </form>

      <div className="relative lg:absolute top-0 right-0 flex flex-col items-center mt-10 lg:mt-0 lg:right-[-5px]">
        <p className="text-sm font-bold text-black mb-2">Ícono</p>
        <img
          src={heroImage} 
          alt="Ícono del proyecto"
          className="w-36 h-36 rounded-full object-cover mb-4"
        />
        <button className="bg-[#B9FF66] text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300">
          Editar
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;

