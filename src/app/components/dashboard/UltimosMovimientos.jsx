import { motion } from 'framer-motion';
import React from 'react';
import MovimientoItem from './MovimientoItem';
import projectIcon1 from '../../assets/img/ProjectIcon1.svg';
import projectIcon2 from '../../assets/img/ProjectIcon2.svg';
import projectIcon3 from '../../assets/img/ProjectIcon3.svg';

const UltimosMovimientos = () => {
  const movimientos = [
    {
      icon: projectIcon1,
      title: 'Cumple Fran',
      date: '01 de septiembre de 2024',
      amount: '$3,995',
      people: '6',
    },
    {
      icon: projectIcon2,
      title: 'Fiesta en casa',
      date: '04 de septiembre de 2024',
      amount: '$5,430',
      people: '4',
    },
    {
      icon: projectIcon3,
      title: 'Salida grupal',
      date: '10 de septiembre de 2024',
      amount: '$6,211',
      people: '2',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full py-6 flex flex-col items-center bg-[#B9FF66]"
    >
      <div className="flex justify-between items-center mb-4 w-11/12 md:w-2/3 mx-auto pt-0">
        <h2 className="text-xl font-semibold">Últimos Movimientos</h2>
        <button className="text-green-600 hover:underline">Ver Todo</button>
      </div>

      <div className="relative w-11/12 md:w-2/3 mx-auto overflow-y-auto custom-scrollbar">
        <div className="space-y-4">
          {movimientos.map((movimiento, index) => (
            <MovimientoItem
              key={index}
              icon={movimiento.icon}
              title={movimiento.title}
              date={movimiento.date}
              amount={movimiento.amount}
              people={movimiento.people}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default UltimosMovimientos;
