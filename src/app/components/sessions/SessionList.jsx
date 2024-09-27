import React from 'react';
import { motion } from 'framer-motion';
import SessionItem from './SessionItem';

const SessionList = ({ sessions }) => {
  return (
    <motion.div
      className="space-y-4 w-full"
      initial={{ opacity: 0, y: 20 }}  
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.6, ease: 'easeOut' }} 
    >
      {sessions.map((session, index) => (
        <SessionItem key={index} session={session} />
      ))}
    </motion.div>
  );
};

export default SessionList;
