import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profileIcon from '../../assets/img/UserIcon.svg'; 

const EditProfileForm = () => {
  const [name, setName] = useState('Agus'); 
  const [bio, setBio] = useState('25. Me gustan los gatos y el café');
  const [location, setLocation] = useState('Caballito, CABA.'); 
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del perfil editado:", { name, bio, location });
    setIsEditing(false);  
  };

  return (
    <motion.div 
      className="relative w-full lg:w-[80%] mx-0 mt-20"  
      initial={{ opacity: 0, y: 20 }}  
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 1.2, ease: "easeOut" }}  
    > 
      <form className="space-y-6 w-full" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="name">
            Nombre
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            className="mt-1 block lg:w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            readOnly={!isEditing}
            whileFocus={{ scale: 1.01 }}  
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black" htmlFor="bio">
            Biografía
          </label>
          <motion.textarea
            id="bio"
            name="bio"
            className="mt-1 block lg:w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Escribe una breve biografía"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            readOnly={!isEditing}
            rows="4"
            whileFocus={{ scale: 1.01 }}  
            transition={{ type: 'spring', stiffness: 300 }}
          ></motion.textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-black" htmlFor="location">
            Ubicación
          </label>
          <motion.input
            type="text"
            id="location"
            name="location"
            className="mt-1 block lg:w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Tu ubicación actual"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            readOnly={!isEditing}
            whileFocus={{ scale: 1.01 }}  
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-black">
            Desactivar anuncios <span className="bg-[#B9FF66] text-black font-bold px-1 rounded">PRO</span>
          </label>
          <p className="text-gray-500 mt-1">Desactívalos con una suscripción mensual para cuentas Pro.</p>
        </div>

        <div className="flex justify-start mt-8">
          {!isEditing && (
            <motion.button
              type="button"
              className="bg-gray-300 text-black py-2 px-4 rounded-lg shadow-sm hover:bg-gray-400 transition duration-300"
              onClick={handleEdit}  
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}   
            >
              Editar
            </motion.button>
          )}

          {isEditing && (
            <motion.button
              type="submit"
              className="bg-[#B9FF66] text-black py-2 px-4 rounded-lg shadow-sm hover:bg-[#a3e65b] transition duration-300"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}    
            >
              Guardar cambios
            </motion.button>
          )}
        </div>
      </form>

      <div className="relative lg:absolute top-0 right-0 flex flex-col items-center mt-10 lg:mt-0 lg:right-[-5px]">
        <p className="text-sm font-bold text-black mb-2">Foto de perfil</p>
        <img
          src={profileIcon} 
          alt="Ícono del perfil"
          className="w-36 h-36 rounded-full object-cover mb-4"
        />
        <button className="bg-[#B9FF66] text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300">
          Editar
        </button>
      </div>
    </motion.div>
  );
};

export default EditProfileForm;
