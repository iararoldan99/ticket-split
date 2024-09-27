import React from 'react';
import { motion } from 'framer-motion';

const Greeting = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-black mb-4 px-6 py-4"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">¡Buenos días, Iara! ✌️</h1>
    </motion.div>
  );
};

export default Greeting;