import React from 'react';

const ExpenseMethodSelector = ({ splitMethod, onSelectMethod }) => {
  return (
    <div className="mb-6">
      <p className="text-gray-700 font-medium">¿Cómo deseas dividir los gastos?</p>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          className={`p-3 rounded-lg font-semibold ${splitMethod === 'equitative' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => onSelectMethod('equitative')}
        >
          Equitativo
        </button>
        <button
          className={`p-3 rounded-lg font-semibold ${splitMethod === 'percentage' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => onSelectMethod('percentage')}
        >
          Por porcentaje
        </button>
      </div>
    </div>
  );
};

export default ExpenseMethodSelector;