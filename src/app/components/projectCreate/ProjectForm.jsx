import React, { useState } from 'react';
import heroImage from '../../assets/img/Illustration.svg';
import { motion } from 'framer-motion';  

const ProjectForm = ({ initialProjectName = '', initialDescription = '', members = [] }) => {
  const [projectName, setProjectName] = useState(initialProjectName); 
  const [description, setDescription] = useState(initialDescription);
  const [newMember, setNewMember] = useState(''); 
  const [projectMembers, setProjectMembers] = useState(members); 
  const [isEditing, setIsEditing] = useState(false); 

  const handleAddMember = () => {
    if (newMember.trim() === '') return;
    const newMemberData = { name: newMember, image: '' };
    setProjectMembers([...projectMembers, newMemberData]);
    setNewMember('');
  };

  const handleEdit = () => {
    setIsEditing(true); 
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Datos guardados:', { projectName, description, projectMembers });
    setIsEditing(false); 
  };

  return (
    <div className="relative w-full lg:w-[150%] mx-auto"> 
      <motion.form 
        className="space-y-6 w-full lg:w-[70%]" 
        onSubmit={handleSave}
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}  
      >
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
            readOnly={!isEditing} 
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
              disabled={!isEditing}
            />
            <button
              type="button"
              className="bg-[#B9FF66] text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300"
              onClick={handleAddMember}
              disabled={!isEditing}  
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
            readOnly={!isEditing} 
            rows="4"
          ></textarea>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {projectMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="text-center" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}  
            >
              <img
                src={member.image || heroImage}
                alt={member.name}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <p className="mt-2">{member.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="ml-0 mt-4">
          <label className="block text-sm font-medium text-black">
            Desactivar anuncios <span className="bg-[#B9FF66] text-black font-medium px-1 rounded">PRO</span>
          </label>
          <p className="text-gray-500 mt-1">Desactívalos con una suscripción mensual para cuentas Pro.</p>
        </div>

        <div className="mt-6 flex justify-end space-x-4">
          {!isEditing && (
            <button
              type="button"
              className="bg-gray-300 text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-gray-400 transition duration-300"
              onClick={handleEdit}
            >
              Editar
            </button>
          )}

          {isEditing && ( 
            <button
              type="submit"
              className="bg-[#B9FF66] text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300"
            >
              Guardar cambios
            </button>
          )}
        </div>
      </motion.form>

      <div className="relative lg:absolute top-0 right-0 flex flex-col items-center mt-10 lg:mt-0 lg:right-[-5px]">
        <motion.p 
          className="text-sm font-bold text-black mb-2"
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}  
        >
          Ícono
        </motion.p>
        <motion.img
          src={heroImage} 
          alt="Ícono del proyecto"
          className="w-36 h-36 rounded-full object-cover mb-4"
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}  
        />
        <button className="bg-[#B9FF66] text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300">
          Editar
        </button>
      </div>
    </div>
  );
};

export default ProjectForm;

