import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
const ProjectItem = ({ name, icon }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-4"
      initial={{ opacity: 0, y: 20 }}  
      animate={{ opacity: 1, y: 0 }}   
      transition={{ duration: 0.5, ease: "easeOut" }}  

  
      whileHover={{ scale: 1.03 }}  
      whileTap={{ scale: 0.98 }}    
    >
      <motion.div
        className="w-36 h-36 mb-4"
        whileHover={{ scale: 1.05 }}  
        transition={{ type: "spring", stiffness: 200 }}  
      >
        <img 
          src={icon} 
          alt={name} 
          className="w-full h-full rounded-full object-cover" 
        />
      </motion.div>
      
      <Link to={`/projectDetails/${encodeURIComponent(name)}`} className="text-lg font-bold text-black hover:underline">
        {name}
      </Link>
    </motion.div>
  );
};

export default ProjectItem;
