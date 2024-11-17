import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UpdatePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log("Contraseña actualizada con éxito:", {
      currentPassword,
      newPassword,
      confirmPassword
    });

    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <motion.div 
      className="relative w-full lg:w-[80%] mx-0 mt-20"  
      initial={{ opacity: 0, y: 20 }}  
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 1.2, ease: "easeOut" }}
    > 
      <motion.form 
        className="space-y-6 w-full"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}  
      >
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="currentPassword">
            Contraseña actual
          </label>
          <motion.input
            type="password"
            id="currentPassword"
            name="currentPassword"
            className="mt-1 block lg:w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Ingrese su contraseña actual"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            whileFocus={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black" htmlFor="newPassword">
            Nueva contraseña 
          </label>
          <motion.input
            type="password"
            id="newPassword"
            name="newPassword"
            className="mt-1 block lg:w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Ingrese su nueva contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            whileFocus={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black" htmlFor="confirmPassword">
            Confirmar nueva contraseña
          </label>
          <motion.input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="mt-1 block lg:w-2/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Confirme su nueva contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
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

        <div className="flex justify-end mt-4 lg:ml-auto lg:w-2/3"> 
          <motion.button
            type="submit"
            className="bg-[#B9FF66] text-black py-2 px-4 rounded-lg shadow-sm hover:bg-[#a3e65b] transition duration-300 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Actualizar contraseña
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default UpdatePasswordForm;
