import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/user/userSlice.js';
import { useSelector} from 'react-redux';

const AccountForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);

    dispatch(updateUser({ username, email }));
    console.log('Datos guardados:', { username, email });
  };

  return (
    <motion.form
      className="space-y-6 w-full max-w-lg mx-auto mt-20 mr-20"
      style={{ marginRight: '30rem' }}
      onSubmit={handleSave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div>
        <label className="block text-sm font-medium text-black" htmlFor="username">
          Nombre de usuario
        </label>
        <motion.input
          type="text"
          id="username"
          name="username"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          readOnly={!isEditing}
          whileFocus={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black" htmlFor="email">
          Correo electrónico
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          readOnly={!isEditing}
          whileFocus={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-black">
          Desactivar anuncios <span className="bg-[#B9FF66] text-black font-bold px-1 rounded">PRO</span>
        </label>
        <p className="text-gray-500 mt-1">Desactivá los anuncios con una subscripción mensual para cuentas Pro.</p>
      </div>

      <div className="flex justify-end space-x-4 mt-8">
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
    </motion.form>
  );
};

export default AccountForm;
