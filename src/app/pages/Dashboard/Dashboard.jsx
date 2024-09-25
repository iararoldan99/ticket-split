import React from 'react';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import projectIcon1 from '../../assets/img/ProjectIcon1.svg'; 
import projectIcon2 from '../../assets/img/ProjectIcon2.svg';
import projectIcon3 from '../../assets/img/ProjectIcon3.svg'; 

const Dashboard = () => {
  return (
    <>
      <NavbarDashboard />
      <div className="min-h-screen py-8" style={{ backgroundColor: '#00C995' }}>
        <div className="container mx-auto">
          {/* Sección con saludo y presupuesto */}
          <div className="text-white p-8 mb-10">
            <h1 className="text-4xl font-bold">¡Buenos días, Agus!</h1>
            <p className="text-sm">16 de septiembre de 2024</p>

            <div className="mt-6 flex flex-col items-center">
              <div className="flex justify-center items-center space-x-16 mb-6">
                <div className="text-center">
                  <h2 className="text-2xl text-black">Saldo</h2>
                  <p className="text-4xl font-semibold text-black">$7,783.00</p>
                </div>
                <div className="w-px bg-[#F1FFF3] h-20"></div> 
                <div className="text-center">
                  <h2 className="text-2xl">Gastos Registrados</h2>
                  <p className="text-4xl font-bold" style={{ color: '#F1FFF3' }}>-$1,187.40</p>
                </div>
              </div>

              <div className="mt-6 bg-[#EAF4EB] rounded-full h-10 w-2/3 flex items-center relative overflow-hidden">
                <div className="bg-black h-10 rounded-r-full" style={{ width: '30%' }}></div> 
                <div className="absolute left-4 text-white font-semibold">30%</div>
                <div className="absolute right-4 text-black font-semibold">$20,000.00</div>
              </div>
              <p className="text-black mt-2 text-center">30% de tu presupuesto mensual.</p>
            </div>
          </div>

          <div className="p-8 rounded-3xl shadow-lg" style={{ backgroundColor: '#EDFFF2' }}>
            <div className="flex justify-between items-center mb-4"> 
              <h2 className="text-xl font-semibold text-center w-full">Últimos Movimientos</h2>
              <button className="text-black hover:underline text-center w-full">Ver Todo</button>
            </div>

            <div className="space-y-4 flex flex-col items-center">
              <div className="flex items-center justify-between bg-[#00C995] p-4 rounded-lg w-2/3">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-2 rounded-full h-16 w-16 overflow-hidden">
                    <img src={projectIcon1} alt="Cumple Fran" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Cumple Fran</h3>
                    <p className="text-sm text-black-700">10 de septiembre de 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-black">$395</p>
                  <p className="text-sm text-black-700">6 personas</p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#00C995] p-4 rounded-lg w-2/3">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-2 rounded-full h-16 w-16 overflow-hidden">
                    <img src={projectIcon2} alt="Fiesta en casa" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Fiesta en casa</h3>
                    <p className="text-sm text-black-700">4 de septiembre de 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-black">$395</p>
                  <p className="text-sm text-black-700">6 personas</p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#00C995] p-4 rounded-lg w-2/3">
                <div className="flex items-center space-x-4">
                  <div className="bg-white p-2 rounded-full h-16 w-16 overflow-hidden">
                    <img src={projectIcon3} alt="Salida grupal" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Salida grupal</h3>
                    <p className="text-sm text-black-700">1 de septiembre de 2024</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-black">$395</p>
                  <p className="text-sm text-gray-700">6 personas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
