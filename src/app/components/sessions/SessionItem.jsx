import React from 'react';
import { motion } from 'framer-motion';

const SessionItem = ({ session }) => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-between p-4 md:p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300 mt-2 max-w-xl mx-auto"  
      whileHover={{ scale: 1.02 }}  
      whileTap={{ scale: 0.98 }}    
    >
      <div className="flex items-center space-x-4">
        <img src={session.icon} alt="Icono de dispositivo" className="w-12 h-12 md:w-16 md:h-16" />
        <div>
          <p className="text-black font-semibold text-sm md:text-base">{session.location}</p>
          <p className={`text-xs md:text-sm ${session.device === 'Tu sesión actual' ? 'text-green-500' : 'text-gray-600'}`}>
            {session.device}
          </p>
        </div>
      </div>
      <motion.button
        className="mt-4 sm:mt-0 bg-[#B9FF66] text-black font-medium py-2 px-4 md:px-6 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300"
        whileHover={{ scale: 1.05 }}  
        whileTap={{ scale: 0.95 }}    
      >
        Ver más
      </motion.button>
    </motion.div>
  );
};

export default SessionItem;
