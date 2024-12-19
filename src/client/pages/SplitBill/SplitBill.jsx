import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import ProjectSelector from '../../components/splitBill/ProjectSelector';
import ExpenseMethodSelector from '../../components/splitBill/ExpenseMethodSelector';
import SplitBillModal from '../../components/splitBill/SplitBillModal';
import shareImage from '../../assets/img/share.svg';
import { motion } from 'framer-motion';
import { useProjects } from '../../context/ProjectContext.js';
import { useMovements } from '../../context/MovementContext.js';

const pageTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.5 },
};

const SplitBill = () => {
    const { createMovement } = useMovements();
    const { projects, addExpense } = useProjects();
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [selectedProject, setSelectedProject] = useState(null);
    const totalSpent = selectedProject
        ? selectedProject.expenses.reduce((acc, expense) => {
            const amount = parseFloat(expense.amount);
            return acc + (isNaN(amount) ? 0 : amount);
        }, 0)
        : 0;
    const [splitMethod, setSplitMethod] = useState('equitative');
    const [additionalFields, setAdditionalFields] = useState(false);
    const [percentages, setPercentages] = useState([]);
    const [percentageError, setPercentageError] = useState(false);
    const [totalPercentage, setTotalPercentage] = useState(0);
    const [exceedError, setExceedError] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSplitMethodChange = (method) => {
        setSplitMethod(method);
        setAdditionalFields(true);
        if (method === 'percentage' && selectedProject) {
            setPercentages(Array(selectedProject.members.length).fill(0)); // Inicializa con 0
        }
    };

    const handlePercentageChange = (index, value) => {
        const sanitizedValue = value.replace(/[^0-9]/g, '');
        const newPercentages = [...percentages];
        newPercentages[index] = Math.min(Math.max(parseInt(sanitizedValue) || 0, 0), 100);
        setPercentages(newPercentages);
        const newTotal = newPercentages.reduce((acc, val) => acc + val, 0);
        setTotalPercentage(newTotal);
        setPercentageError(newTotal !== 100);
        setExceedError(newTotal > 100);
    };

    const handleSelectProject = async (projectId) => {
        const selected = projects.find((proj) => proj._id === projectId);

        if (selected) {
            const isUserInProject = selected.members.some((member) => member.userId === user?._id);

            const updatedMembers = selected.members.map((member) => ({
                userId: member.userId || member._id,
                username: member.username || 'Sin Nombre',
            }));

            const updatedProject = isUserInProject
                ? { ...selected, members: updatedMembers }
                : {
                    ...selected,
                    members: [...updatedMembers, { userId: user?._id, username: user?.username }],
                };

            setSelectedProject(updatedProject);
        }
    };

    const handleCreateProject = () => {
        navigate('/crear-proyecto');
    };

/*    const handleSubmit = async () => {
        if (!selectedProject) return;
        if (splitMethod === 'percentage' && (totalPercentage !== 100 || exceedError)) return;

        const splitDetails = selectedProject.members.map((member, index) => ({
            member,
            percentage: splitMethod === 'percentage' ? percentages[index] : undefined,
            share: (splitMethod === 'equitative')
                ? (totalSpent / selectedProject.members.length).toFixed(2)
                : (percentages[index] / 100 * totalSpent).toFixed(2),
        }));

        const expenseData = {
            projectId: selectedProject._id,
            projectName: selectedProject.name,
            projectPic: selectedProject.pic,
            description: "División de dinero en proyecto",
            totalSpent,
            splitMethod,
            splitDetails,
        };

        await addExpense(selectedProject._id, expenseData);

        await Promise.all(
            selectedProject.members.map(async (member) => {
                if (!member.userId) {
                    console.error(`El miembro ${member.username || 'sin nombre'} no tiene un userId válido.`);
                    return;
                }

                const share = (totalSpent / selectedProject.members.length).toFixed(2);

                const success = await createMovement({
                    userId: member.userId,
                    projectId: selectedProject._id,
                    amount: parseFloat(share),
                    type: 'Split',
                    category: 'División de dinero',
                    description: 'División de dinero en proyecto',
                    splitMethod: 'equitative',
                });

                if (!success) {
                    console.error(`Error al crear el movimiento para el usuario ${member.userId}`);
                }
            })
        );
    };*/

    const handleSubmit = async () => {
        if (!selectedProject) return;
        if (splitMethod === 'percentage' && (totalPercentage !== 100 || exceedError)) return;

        const splitDetails = selectedProject.members.map((member, index) => ({
            member,
            percentage: splitMethod === 'percentage' ? percentages[index] : undefined,
            share: (splitMethod === 'equitative')
                ? (totalSpent / selectedProject.members.length).toFixed(2)
                : (percentages[index] / 100 * totalSpent).toFixed(2),
        }));

        const expenseData = {
            projectId: selectedProject._id,
            projectName: selectedProject.name,
            projectPic: selectedProject.pic,
            description: "División de dinero en proyecto",
            totalSpent,
            splitMethod,
            splitDetails,
        };

        try {
            await addExpense(selectedProject._id, expenseData);

            const movementPromises = selectedProject.members.map(async (member) => {
                if (!member.userId) {
                    console.error(`El miembro ${member.username || 'sin nombre'} no tiene un userId válido.`);
                    return false;
                }

                const share = (totalSpent / selectedProject.members.length).toFixed(2);

                return createMovement({
                    userId: member.userId,
                    projectId: selectedProject._id,
                    amount: parseFloat(share),
                    type: 'Split',
                    category: 'División de dinero',
                    description: 'División de dinero en proyecto',
                    splitMethod: 'equitative',
                });
            });

            const results = await Promise.all(movementPromises);

            if (results.every((res) => res)) {
                setShowModal(true);
            } else {
                console.error("Algunos movimientos no se pudieron crear.");
            }
        } catch (error) {
            console.error("Error al dividir gastos:", error);
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        navigate('/dashboard');
    };

    return (
        <>
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                transition={pageTransition.transition}
            >
                <NavbarDashboard />
                <div className="min-h-screen bg-white flex justify-center items-center px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-6xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="w-full p-4">
                            <h1 className="text-3xl font-bold text-center mb-4">Dividir Gastos</h1>
                            <p className="text-center text-gray-600 mb-8">Elegí un proyecto y dividí los gastos</p>
                            <ProjectSelector
                                projects={projects}
                                onSelectProject={handleSelectProject}
                                onCreateProject={handleCreateProject}
                            />
                            {selectedProject && (
                                <p className="text-left text-gray-600 mb-8">Monto total a dividir: ${totalSpent.toFixed(2)}</p>
                            )}
                            <ExpenseMethodSelector
                                splitMethod={splitMethod}
                                onSelectMethod={handleSplitMethodChange}
                            />
                            {additionalFields && splitMethod === 'equitative' && selectedProject && (
                                <div className="mt-6">
                                    <h3 className="font-semibold text-lg mb-4">
                                        División Equitativa entre los {selectedProject.members.length} miembros
                                    </h3>
                                    <ul className="list-disc pl-5">
                                        {selectedProject.members.map((member) => (
                                            <li key={member.userId} className="text-gray-700">
                                                {member.username}: ${(totalSpent / selectedProject.members.length).toFixed(2)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {additionalFields && splitMethod === 'percentage' && selectedProject && (
                                <div className="mt-6">
                                    <h3 className="font-semibold text-lg mb-4">Porcentaje de división</h3>
                                    {selectedProject.members.map((member, index) => (
                                        <div key={index} className="mb-4">
                                            <label
                                                className="block text-gray-700 font-medium mb-1">{member.username}
                                            </label>
                                            <input
                                                type="text"
                                                value={percentages[index]}
                                                onChange={(e) => handlePercentageChange(index, e.target.value)}
                                                className={`w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary ${exceedError ? 'border-red-500' : ''
                                                }`}
                                                placeholder="Ej: 50%"
                                                disabled={exceedError}
                                            />
                                        </div>
                                    ))}
                                    {percentageError && (
                                        <p className="text-red-500 text-center mt-2">El porcentaje total debe ser 100%</p>
                                    )}
                                    {exceedError && (
                                        <p className="text-red-500 text-center mt-2">El porcentaje no puede exceder el 100%</p>
                                    )}
                                    <ul className="list-disc pl-5 mt-4">
                                        {selectedProject.members.map((member, index) => (
                                            <li key={member.userId} className="text-gray-700">
                                                {member.username}: ${(percentages[index] / 100 * totalSpent).toFixed(2)}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <button
                                className={`mt-8 w-full p-3 rounded-lg font-semibold text-black ${percentageError || exceedError ? 'bg-gray-400' : 'bg-[#B9FF66] hover:bg-[#A1E355]'}`}
                                onClick={handleSubmit}
                                disabled={percentageError || exceedError}
                            >
                                Dividir Gasto
                            </button>
                        </div>
                        <img src={shareImage} alt="Compartir gastos" className="w-full p-8 hidden lg:block" />
                    </div>
                </div>
            </motion.div>
            {showModal && <SplitBillModal onClose={handleModalClose} />}
            <Footer />
        </>
    );
};

export default SplitBill;
