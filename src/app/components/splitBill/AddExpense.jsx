import React from 'react';

const AddExpense = ({ description, amount, onChangeDescription, onChangeAmount }) => {
  return (
    <>
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Descripción del gasto</label>
        <input
          type="text"
          value={description}
          onChange={(e) => onChangeDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Ej: Cena en el restaurante"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Monto total</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => onChangeAmount(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Ej: $1000"
        />
      </div>
    </>
  );
};

export default AddExpense;