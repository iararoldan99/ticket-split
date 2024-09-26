import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import MovimientoItem from './MovimientoItem';
import projectIcon1 from '../../assets/img/ProjectIcon1.svg'; 
import projectIcon2 from '../../assets/img/ProjectIcon2.svg';
import projectIcon3 from '../../assets/img/ProjectIcon3.svg';
import projectIcon4 from '../../assets/img/ProjectIcon4.svg';

const UltimosMovimientos = () => {
  const navigate = useNavigate(); 

  const movimientos = [
    {
      icon: projectIcon1,
      title: 'Cumple Fran',
      date: '01 de septiembre de 2024',
      amount: '$3,995',
      people: '6'
    },
    {
      icon: projectIcon2,
      title: 'Fiesta en casa',
      date: '04 de septiembre de 2024',
      amount: '$5,430',
      people: '4'
    },
    {
      icon: projectIcon3,
      title: 'Salida grupal',
      date: '10 de septiembre de 2024',
      amount: '$6,211',
      people: '2'
    },
    {
      icon: projectIcon4,
      title: 'Cena familiar',
      date: '18 de septiembre de 2024',
      amount: '$3,300',
      people: '8'
    }
  ];

  const handleNuevoProyecto = () => {
    navigate('/projectCreate');
  };

  const handleVerTodo = () => {
    navigate('/viewProjects'); 
  };

  return (
    <div className="w-full py-6 bg-white flex flex-col items-center flex-grow rounded-t-3xl relative pb-16">
      <div className="flex justify-between items-center mb-4 w-11/12 md:w-2/3 mx-auto pt-0"> 
        <h2 className="text-xl font-semibold">Últimos Movimientos</h2>
        <button 
          className="text-black hover:underline"
          onClick={handleVerTodo} 
        >
          Ver Todo
        </button>
      </div>

      <div className="relative w-11/12 md:w-2/3 mx-auto h-[14rem] md:h-[18rem] overflow-y-auto custom-scrollbar">
        <div className="space-y-4 pr-4"> 
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

      <div className="mt-6 w-11/12 md:w-2/3 mx-auto flex justify-center space-x-4">
        <button
          className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
          onClick={handleNuevoProyecto} 
        >
          Nuevo Proyecto
        </button>
        <button className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300">
          Añadir Saldo
        </button>
      </div>
    </div>
  );
};

export default UltimosMovimientos;
