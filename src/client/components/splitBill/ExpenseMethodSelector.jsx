import React from 'react';

const ExpenseMethodSelector = ({ splitMethod, onSelectMethod }) => {
  return (
    <div className="mb-6">
      <p className="text-gray-700 font-medium">¿Cómo deseas dividir los gastos?</p>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          className={`p-3 rounded-lg font-semibold ${splitMethod === 'equitative' ? 'bg-[#B9FF66] text-black hover:bg-[#A1E554]' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => onSelectMethod('equitative')}
        >
          Equitativo
        </button>
        <button
          className={`p-3 rounded-lg font-semibold ${splitMethod === 'percentage' ? 'bg-[#B9FF66] text-black' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => onSelectMethod('percentage')}
        >
          Por porcentaje
        </button>
      </div>
    </div>
  );
};

export default ExpenseMethodSelector;