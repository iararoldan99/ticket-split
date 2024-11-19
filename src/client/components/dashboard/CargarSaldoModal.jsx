import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMonthlyBudget } from '../../store/user/userSlice.js';
import { motion } from 'framer-motion';

const CargarSaldoModal = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    const newBudget = parseFloat(inputValue);
    if (!isNaN(newBudget)) {
      dispatch(setMonthlyBudget(newBudget));
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full"
          >
            <h2 className="text-2xl font-bold mb-4">Cargar Saldo</h2>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ingrese el monto"
              className="w-full border border-gray-300 p-2 rounded mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                className="bg-light-primary text-white py-2 px-4 rounded hover:bg-dark-primary"
                onClick={handleSave}
              >
                Guardar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CargarSaldoModal;
