import { motion } from 'framer-motion';
import React from 'react';

const Greeting = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-black mb-8 px-6 py-10"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">¡Buenos días, Agus!</h1>
    </motion.div>
  );
};

export default Greeting;
