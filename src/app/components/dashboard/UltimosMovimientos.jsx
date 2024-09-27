import { motion } from 'framer-motion';
import React from 'react';
import MovimientoItem from './MovimientoItem';
import projectIcon1 from '../../assets/img/ProjectIcon1.svg';
import projectIcon2 from '../../assets/img/ProjectIcon2.svg';
import projectIcon3 from '../../assets/img/ProjectIcon3.svg';
import heroImage from '../../assets/img/Illustration.svg'
import projectIcon4 from '../../assets/img/ProjectIcon4.svg';

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
      icon: heroImage,
      title: 'Fiesta en casa',
      date: '04 de septiembre de 2024',
      amount: '$5,430',
      people: '4',
    },
    {
      icon: projectIcon2,
      title: 'Merienda',
      date: '10 de septiembre de 2024',
      amount: '$6,211',
      people: '4',
    },
    {
      icon: projectIcon3,
      title: 'Cena familiar',
      date: '19 de septiembre de 2024',
      amount: '$5,211',
      people: '10',
    },
    {
      icon: projectIcon4,
      title: 'Almuerzo de la empresa',
      date: '10 de septiembre de 2024',
      amount: '$3,401',
      people: '6',
    },

  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full min-h-[700px] py-12 flex flex-col items-center bg-[#B9FF66] rounded-t-3xl" 
    >
      <div className="flex justify-between items-center mb-4 w-11/12 md:w-2/3 mx-auto pt-0">
        <h2 className="text-xl font-semibold">Últimos Movimientos</h2>
        <button className="text-green-600 hover:underline">Ver todo</button>
      </div>

      <div className="relative w-11/12 md:w-2/3 mx-auto custom-scrollbar max-h-[400px] overflow-y-auto"> 
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

      <div className="flex space-x-4 mt-6">
        <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">
          Nuevo Proyecto
        </button>
        <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">
          Añadir Saldo
        </button>
      </div>
    </motion.div>
  );
};

export default UltimosMovimientos;

