import React, { useState } from 'react';

const AccountForm = () => {
  const [userData, setUserData] = useState({
    name: 'Agus',
    email: 'agus@example.com',
    phone: '123-456-7890',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-black" htmlFor="name">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
          value={userData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black" htmlFor="email">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
          value={userData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black" htmlFor="phone">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
          value={userData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-bold text-black">
          Desactivar anuncios <span className="bg-[#B9FF66] text-black font-bold px-1 rounded">PRO</span>
        </label>
        <p className="text-gray-500 mt-1">Desactivá los anuncios con una suscripción mensual para cuentas Pro.</p>
      </div>

      <div className="flex justify-end space-x-4 mt-6">
        <button
          type="button"
          className="bg-gray-200 text-black py-2 px-4 rounded-md shadow-sm font-semibold hover:bg-gray-300"
        >
          Editar
        </button>
        <button
          type="submit"
          className="bg-[#B9FF66] text-black py-2 px-4 rounded-md shadow-sm font-semibold hover:bg-[#a3e65b]"
        >
          Guardar cambios
        </button>
      </div>
    </form>
  );
};

export default AccountForm;
