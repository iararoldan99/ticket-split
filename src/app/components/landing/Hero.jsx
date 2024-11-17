import React from 'react';
import { motion } from 'framer-motion'; 
import heroImage from '../../assets/img/Illustration.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <motion.section
      className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-12"
      initial={{ opacity: 0, y: 50 }}  
      animate={{ opacity: 1, y: 0 }}    
      exit={{ opacity: 0, y: 50 }}      
      transition={{ duration: 0.5 }}    
    >
      <div className="max-w-lg text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Compartí gastos sin preocupaciones</h1>
        <p className="text-lg text-gray-600 mb-6">
          Registrá, gestioná y calculá el dinero que gastás con otras personas: simple, rápido y en un solo lugar.
        </p>
        <Link to="/registro">
          <motion.button
            className="bg-black text-white py-3 px-6 rounded-lg"
            whileHover={{ scale: 1.1 }}    
            whileTap={{ scale: 0.95 }}      
            transition={{ duration: 0.2 }}  
          >
            Comencemos
          </motion.button>
        </Link>
      </div>
      <div className="flex-shrink-0">
        <motion.img 
          src={heroImage} 
          alt="Fiesta" 
          className="w-full max-w-lg lg:max-w-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;