import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import CargarSaldoModal from '../../components/dashboard/CargarSaldoModal';
import UltimosMovimientos from '../../components/dashboard/UltimosMovimientos.jsx';
import BalanceChart from '../../components/dashboard/BalanceChart.jsx';
import descubri from '../../assets/img/all-good.png';
import ProjectList from "../../components/dashboard/ProjectList.jsx";
import {useNavigate} from "react-router-dom";
import {useProjects} from "../../context/ProjectContext.js";

const Dashboard = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const projects = useSelector((state) => state.project.projects || []);

    return (
        <>
            <NavbarDashboard />
            <div className="bg-gray-50 py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-left mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            ¡Buenos días, {user?.username || 'invitado'}!✌️
                        </h1>
                        <p className="text-lg text-gray-600">
                            {new Date().toLocaleDateString('es-ES', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
                        <div className="flex flex-col space-y-4 w-full md:w-1/3">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold text-gray-600">Gastos totales por proyecto</h2>
                                <BalanceChart projects={projects} />
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-semibold text-gray-600">Tus Proyectos</h2>
                                    <button
                                        onClick={() => navigate('/ver-proyectos')}
                                        className="text-black hover:underline"
                                    >
                                        Ver todo
                                    </button>
                                </div>
                                <ProjectList projects={projects}/>
                            </div>
                            <div className="bg-light-primary text-black flex items-center p-4 rounded-lg shadow-md">
                                <div className="w-1/2">
                                    <h3 className="text-xs uppercase font-bold">Invitá y Ganá</h3>
                                    <p className="text-lg font-bold">Recomendá la app y ganá $10.000</p>
                                </div>
                                <div className="w-1/2 h-40 flex justify-end overflow-hidden">
                                    <img src={descubri} alt="Descubri este beneficio" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Últimos Movimientos</h3>
                                    <button className="text-black hover:underline"
                                            >
                                        Ver todo
                                    </button>
                                </div>
                                <input type="text" placeholder="Buscar" className="w-full mb-4 p-2 border rounded-lg"/>
                                <UltimosMovimientos/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

            <CargarSaldoModal isOpen={isModalOpen} onClose={closeModal}/>
        </>
    );
};

export default Dashboard;
