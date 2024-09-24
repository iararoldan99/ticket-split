import React from 'react';
import logo from '../../assets/img/Icon.svg';
const Navbar = () => {
  return (
    <nav className="bg-white py-4"> 
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="flex items-center mb-4 md:mb-0">
      <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
      <span className="text-xl font-bold">TicketSplit</span>
    </div>
  </div>
</nav>
  );
};

export default Navbar;