import React from 'react';
import { motion } from 'framer-motion';

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: '-100vh' },
  visible: { opacity: 1, y: '0' },
};

const SplitBillModal = ({ message, onClose }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative"
        variants={modalVariants}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold">{message.title || '¡Gasto guardado con éxito!'}</h2>
          <p className="mt-4">{message.body || 'El gasto ha sido registrado correctamente.'}</p>
          <button
            className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplitBillModal;