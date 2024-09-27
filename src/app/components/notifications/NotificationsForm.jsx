import React, { useState } from 'react';

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
    <form className="space-y-6 w-full max-w-xl mx-auto px-4 lg:px-0" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4 text-black">Notificaciones</h2>
      <p className="text-gray-600 mb-6">Administrá las notificaciones que recibís</p>

      {/* Notificación: Saldos pendientes */}
      <div className="flex items-center justify-between mb-4">
        <label className="block text-md text-gray-800">Saldos pendientes</label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={pendingBalance}
            onChange={() => setPendingBalance(!pendingBalance)}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all"></div>
          <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></div>
        </label>
      </div>

      {/* Notificación: Nuevos proyectos */}
      <div className="flex items-center justify-between mb-4">
        <label className="block text-md text-gray-800">Nuevos proyectos</label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={newProjects}
            onChange={() => setNewProjects(!newProjects)}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all"></div>
          <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></div>
        </label>
      </div>

      {/* Notificación: Nuevos amigos */}
      <div className="flex items-center justify-between mb-4">
        <label className="block text-md text-gray-800">Nuevos amigos</label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={newFriends}
            onChange={() => setNewFriends(!newFriends)}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all"></div>
          <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></div>
        </label>
      </div>

      {/* Notificación: Notificaciones push */}
      <div className="flex items-center justify-between mb-4">
        <label className="block text-md text-gray-800">Notificaciones push</label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={pushNotifications}
            onChange={() => setPushNotifications(!pushNotifications)}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all"></div>
          <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></div>
        </label>
      </div>

      {/* Notificación: Notificaciones e-mail */}
      <div className="flex items-center justify-between mb-4">
        <label className="block text-md text-gray-800">Notificaciones e-mail</label>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-all"></div>
          <div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></div>
        </label>
      </div>

      {/* Botón Guardar cambios */}
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-[#B9FF66] text-black py-2 px-6 rounded-lg shadow-sm hover:bg-[#a3e65b] transition duration-300 font-semibold"
        >
          Guardar cambios
        </button>
      </div>
    </form>
  );
};

export default NotificationsForm;

