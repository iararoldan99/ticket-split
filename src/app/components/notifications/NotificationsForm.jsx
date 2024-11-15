import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NotificationsForm = () => {
  const [pendingBalance, setPendingBalance] = useState(true);
  const [newProjects, setNewProjects] = useState(true);
  const [newFriends, setNewFriends] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Notification settings saved", {
      pendingBalance,
      newProjects,
      newFriends,
      pushNotifications,
      emailNotifications
    });
  };

  return (
    <motion.form 
      className="space-y-6 w-full max-w-xl mx-auto px-0 lg:px-0 mt-20 ml-4" 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.8, ease: "easeOut" }}  
    >
      <h2 className="text-xl font-bold text-black" style={{ marginBottom: '2px' }}>Notificaciones</h2>
      <p className="text-gray-600" style={{ marginBottom: '2px' }}>Administrá las notificaciones que recibís</p>



      {[
        { label: "Saldos pendientes", state: pendingBalance, setState: setPendingBalance },
        { label: "Nuevos proyectos", state: newProjects, setState: setNewProjects },
        { label: "Nuevos amigos", state: newFriends, setState: setNewFriends },
        { label: "Notificaciones push", state: pushNotifications, setState: setPushNotifications },
        { label: "Notificaciones e-mail", state: emailNotifications, setState: setEmailNotifications }
      ].map((item, index) => (
        <motion.div
          key={index}
          className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-between"
          whileHover={{ scale: 1.02 }}  
          transition={{ duration: 0.3 }}
        >
          <label className="block text-md text-gray-800">{item.label}</label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={item.state}
              onChange={() => item.setState(!item.state)}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all"></div>
            <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></div>
          </label>
        </motion.div>
      ))}

      <motion.div 
        className="flex justify-end mt-6"
        initial={{ opacity: 0, y: 10 }}  
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.button
          type="submit"
          className="bg-[#B9FF66] text-black py-2 px-6 rounded-lg shadow-sm hover:bg-[#a3e65b] transition duration-300 font-semibold"
          whileHover={{ scale: 1.05 }}  
          whileTap={{ scale: 0.95 }}    
        >
          Guardar cambios
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default NotificationsForm;
