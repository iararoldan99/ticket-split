import React from 'react';

const MovimientoItem = ({ icon, title, date, amount, people }) => {
  return (
    <div className="flex items-center justify-between bg-[#B9FF66] p-4 rounded-lg w-full max-w-3xl mx-auto mb-4">
      <div className="flex items-center space-x-4">
        <div className="bg-white p-1 rounded-full h-14 w-14 overflow-hidden">
          <img
            src={icon}
            alt={title}
            className="h-full w-full object-cover transform scale-110"
          />
        </div>
        <div>
          <h3 className="font-semibold text-black">{title}</h3>
          <p className="text-sm text-black-700">{date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-black">{amount}</p>
        <p className="text-sm text-black-700">{people} personas</p>
      </div>
    </div>
  );
};

export default MovimientoItem;
