import React from 'react';

const ExpenseResults = ({ results }) => {
  return (
    results.length > 0 && (
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-center">Resultados</h2>
        <table className="w-full mt-6 text-center">
          <thead>
            <tr>
              <th className="p-2">Amigo</th>
              <th className="p-2">Total a pagar</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.name}</td>
                <td>${result.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default ExpenseResults;