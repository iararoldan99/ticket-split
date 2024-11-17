import React from 'react';
import { motion } from 'framer-motion'; 

const ProgressBar = ({ totalBudget, currentSpent, progress, isExceeded }) => {
  return (
    <div className="w-full md:w-2/3 mx-auto mt-4">
      <div className="relative w-full h-6 bg-gray-200 rounded-full shadow-inner overflow-hidden">
        <motion.div 
          className={`absolute top-0 left-0 h-full ${isExceeded ? 'bg-red-500' : 'bg-lime-400'} rounded-r-full`} 
          initial={{ width: '0%' }}  
          animate={{ width: `${progress}%` }}  
          transition={{ duration: 1.5, ease: "easeInOut" }}  
        />
        
        <div className="absolute top-0 left-4 h-full text-white flex items-center font-semibold text-sm">
          {progress.toFixed(2)}% 
        </div>
        
        <div className="absolute top-0 right-4 h-full text-gray-800 flex items-center font-semibold text-sm">
          ${currentSpent.toFixed(2)} 
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;