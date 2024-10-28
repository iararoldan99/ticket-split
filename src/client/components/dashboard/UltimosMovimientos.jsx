import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MovimientoItem from './MovimientoItem';
import defaultPic from '../../assets/img/Pic.svg';
const UltimosMovimientos = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/historial');
  };

  return (
    <div className="w-full bg-gray-100 pt-8 pb-20">
      <div className="flex justify-between items-center mb-4 w-11/12 md:w-2/3 mx-auto">
        <h2 className="text-xl font-semibold">Últimos Movimientos</h2>
        <button
          className="text-black hover:underline"
          onClick={handleViewAll}
        >
          Ver todo
        </button>
      </div>

      {user.movements && user.movements.length > 0 ? (
        <div className="space-y-4 w-11/12 md:w-2/3 mx-auto">
          {user.movements.map((mov) => (
            <MovimientoItem
              key={mov.id}
              icon={mov.avatar || '/default-avatar.jpg'}
              title={mov.name}
              date={mov.date}
              amount={mov.amount}
              people={mov.participants}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Todavía no tienes movimientos registrados.</p>
      )}
    </div>
  );
};

export default UltimosMovimientos;