import React, { useState } from 'react';

const AccountForm = () => {
  const [username] = useState('aguslopez99');
  const [email] = useState('aguslopez99@gmail.com');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <form className="space-y-6 w-full max-w-lg mx-auto mt-16 mr-20" style={{ marginRight: '30rem' }} onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-black" htmlFor="username">
          Nombre de usuario
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
          value={username}
          readOnly  
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
          value={email}
          readOnly  
        />
      </div>
    </form>
  );
};

export default AccountForm;
