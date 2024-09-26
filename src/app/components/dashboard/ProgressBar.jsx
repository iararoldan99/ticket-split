import React from 'react';

const ProgressBar = () => {
  return (
    <div className="w-2/3 mx-auto mt-6">
      <div className="relative w-full h-10 bg-gray-300 rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-black rounded-r-full" style={{ width: '30%' }}></div>
        <div className="absolute top-0 left-4 h-full text-white flex items-center font-semibold">30%</div>
        <div className="absolute top-0 right-4 h-full text-black flex items-center font-semibold">$20,000.00</div>
      </div>
    </div>
  );
};

export default ProgressBar;
