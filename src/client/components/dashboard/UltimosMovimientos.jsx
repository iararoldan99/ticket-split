import React from 'react';
import { useSelector } from 'react-redux';
import MovimientoItem from './MovimientoItem';

const UltimosMovimientos = () => {
    const movements = useSelector((state) => state.movement.movements);

    return (
        <div className="w-full bg-gray-100 py-4">

            <div className="space-y-2 px-4">
                {movements && movements.length > 0 ? (
                    movements.map((mov) => (
                        <MovimientoItem key={mov._id} movement={mov} />
                    ))
                ) : (
                    <p className="text-center text-gray-500">Todavía no tenés movimientos registrados.</p>
                )}
            </div>
        </div>
    );
};

export default UltimosMovimientos;
