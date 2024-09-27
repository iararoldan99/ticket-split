import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addExpense } from '../../redux/projectSlice';
import NavbarDashboard from '../../layout/Navbar/NavbarDashboard';
import Footer from '../../layout/Footer/Footer';
import ProjectSelector from '../../components/splitBill/ProjectSelector';
import AddExpense from '../../components/splitBill/AddExpense';
import ExpenseMethodSelector from '../../components/splitBill/ExpenseMethodSelector';
import shareImage from '../../assets/img/share.svg';
import { motion } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.5 },
};

const SplitBill = () => {
  const projects = useSelector((state) => state.projects.projects);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedProject, setSelectedProject] = useState(null);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [splitMethod, setSplitMethod] = useState('equitative');
  const [additionalFields, setAdditionalFields] = useState(false);
  const [percentages, setPercentages] = useState([]);
  const [percentageError, setPercentageError] = useState(false);
  const [totalPercentage, setTotalPercentage] = useState(0);
  const [exceedError, setExceedError] = useState(false);

  const handleSplitMethodChange = (method) => {
    setSplitMethod(method);
    setAdditionalFields(true);
    if (method === 'percentage' && selectedProject) {
      setPercentages(Array(selectedProject.members.length).fill(0));
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

  const handleSelectProject = (projectId) => {
    const selected = projects.find((proj) => proj.id === parseInt(projectId));

    if (selected) {
      const isUserInProject = selected.members.some(member => member.username === user.username);

      // Si el usuario no está en el proyecto, añadirlo
      if (!isUserInProject) {
        const updatedProject = {
          ...selected,
          members: [...selected.members, { username: user.username, email: user.email }],
        };
        setSelectedProject(updatedProject);
      } else {
        setSelectedProject(selected);  // Si ya está en el proyecto, solo seleccionarlo
      }
    }
  };

  const handleSubmit = () => {
    if (!selectedProject || totalPercentage !== 100 || exceedError) return;

    let splitDetails;
    if (splitMethod === 'equitative') {
      const sharePerMember = (amount / selectedProject.members.length).toFixed(2);
      splitDetails = selectedProject.members.map((member) => ({
        member,
        share: sharePerMember,
      }));
    } else if (splitMethod === 'percentage') {
      splitDetails = selectedProject.members.map((member, index) => ({
        member,
        percentage: percentages[index],
        share: ((percentages[index] / 100) * amount).toFixed(2),
      }));
    }

    const expenseData = {
      project: selectedProject,
      description,
      amount,
      splitMethod,
      splitDetails,
    };

    dispatch(addExpense({ projectId: selectedProject.id, expense: expenseData }));
  };

  const handleCreateProject = () => {
    navigate('/projectCreate');
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
        <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full p-4">
              <h1 className="text-3xl font-bold text-center mb-4">Dividir Gastos</h1>
              <p className="text-center text-gray-600 mb-8">Elegí un proyecto y dividí los gastos</p>

              <ProjectSelector
                projects={projects}
                onSelectProject={handleSelectProject}
                onCreateProject={handleCreateProject}
              />

              <AddExpense
                description={description}
                amount={amount}
                onChangeDescription={setDescription}
                onChangeAmount={(value) => {
                  const sanitizedValue = value.replace(/[^0-9]/g, '');
                  setAmount(sanitizedValue);
                }}
              />

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
                    {selectedProject.members.map((member, index) => (
                      <li key={index} className="text-gray-700">
                        {member.username}: ${(amount / selectedProject.members.length).toFixed(2)}
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
                      <label className="block text-gray-700 font-medium mb-1">{member}</label>
                      <input
                        type="text"
                        value={percentages[index]}
                        onChange={(e) => handlePercentageChange(index, e.target.value)}
                        className={`w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary ${exceedError ? 'border-red-500' : ''
                          }`}
                        placeholder="Ej: 50%"
                        disabled={totalPercentage >= 100 && percentages[index] === 0}
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
                      <li key={member} className="text-gray-700">
                        {member}: ${(percentages[index] / 100 * amount).toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                className={`mt-8 w-full p-3 rounded-lg font-semibold text-black ${percentageError || exceedError ? 'bg-[#B9FF66]' : 'bg-[#B9FF66] hover:bg-[#a3e65b]'
                  }`}
                onClick={handleSubmit}
                disabled={percentageError || exceedError}
              >
                Guardar Gasto
              </button>
            </div>

            <div className="w-full flex justify-center items-center lg:justify-end">
              <img
                src={shareImage}
                alt="Compartir gastos"
                className="w-full max-w-xs lg:w-2/3 lg:max-w-md"
              />
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default SplitBill;