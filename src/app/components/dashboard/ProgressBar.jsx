import React from 'react';
import { motion } from 'framer-motion'; 

const ProgressBar = () => {
  return (
    <div className="w-full md:w-2/3 mx-auto mt-8">
      <div className="relative w-full h-10 bg-gray-200 rounded-full shadow-inner overflow-hidden"> 
        <motion.div 
          className="absolute top-0 left-0 h-full bg-green-500 rounded-r-full" 
          initial={{ width: '0%' }}  
          animate={{ width: '30%' }}  
          transition={{ duration: 1.5, ease: "easeInOut" }}  
        />
        
        <div className="absolute top-0 left-4 h-full text-white flex items-center font-semibold">30%</div>
        
        <div className="absolute top-0 right-4 h-full text-gray-800 flex items-center font-semibold">$20,000.00</div>
      </div>
    </div>
  );
};

export default ProgressBar;
