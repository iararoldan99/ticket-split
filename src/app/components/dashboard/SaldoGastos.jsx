import React from 'react';

const SaldoGastos = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full text-center space-y-6 md:space-y-0 md:space-x-10">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">Saldo</h2>
        <p className="text-4xl font-bold">$7,783.00</p>
      </div>
      <div className="hidden md:block h-16 border-l border-black"></div> 
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">Gastos Registrados</h2>
        <p className="text-4xl font-bold text-red-600">-$1,187.40</p>
      </div>
    </div>
  );
};

export default SaldoGastos;
