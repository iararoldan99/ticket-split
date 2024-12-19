import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import icon3 from '../../assets/img/ProjectIcon3.svg';
import Modal from '../projectCreate/Modal';
import { useProjects } from "../../context/ProjectContext.js";
import { useUserInfo } from "../../context/UserContext.js";
import AddExpenseModal from "./AddExpenseModal.jsx";
import AddFriendToProjectModal from "./AddFriendToProjectModal.jsx";
import {useMovements} from "../../context/MovementContext.js";

const ViewProjectDetail = ({ selectedProject }) => {
    const { createMovement } = useMovements();
    const { addBillFileToProjectContext, addExpense, deleteProjectContext, addFriendToProject } = useProjects();
    const { getUserByEmail, getUserById } = useUserInfo();
    const [modalVisible, setModalVisible] = useState(false);
    const [addExpenseModalVisible, setAddExpenseModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [expenseBillFile, setExpenseBillFile] = useState('');
    const [addFriendToProjectModalVisible, setAddFriendToProjectModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState({ title: '', body: '' });
    const [memberNames, setMemberNames] = useState([]);

    const handleAddExpense = () => setAddExpenseModalVisible(true);

    const handleDeleteProject = async (event) => {
        event.preventDefault();
        const success = deleteProjectContext(selectedProject._id);
        if (success) {
            setModalMessage({
                title: "¡Proyecto eliminado!",
                body: "El proyecto ha sido eliminado correctamente.",
            });
            setModalVisible(true);
        } else {
            setModalMessage({
                title: "Error al eliminar",
                body: "Hubo un problema al eliminar el proyecto. Intenta nuevamente.",
            });
            setModalVisible(true);
        }
    };

    const handleAddFriend = () => {
        setAddFriendToProjectModalVisible(true);
    };

    const handleSubmitExpense = async (event) => {
        event.preventDefault();
        const { description, amount, email } = event.target.elements;

        const userId = await getUserByEmail(email.value);
        if (!userId) {
            alert('El usuario no existe');
            return;
        }

        const expenseData = { projectName: selectedProject.name, projectPic: selectedProject.pic, description: description.value, amount: amount.value, date: new Date().toISOString(), userId };
        const success = addExpense(selectedProject._id, expenseData);

        const successfulMovement = createMovement({
                userId: userId,
                projectId: selectedProject._id,
                amount: amount,
                type: 'Expense',
                category: 'Gastos',
                description: selectedProject.description,
        });

        if (success && successfulMovement) {
            setAddExpenseModalVisible(false);
            setModalMessage({
                title: '¡Acción realizada con éxito!',
                body: 'Se agregó el gasto correctamente al proyecto.',
            });
            setModalVisible(true);
        } else {
            setModalMessage({
                title: 'Error',
                body: 'No se pudo agregar el gasto. Inténtalo de nuevo.',
            });
            setAddExpenseModalVisible(false);
            setModalVisible(true);
        }
    };

    const handleSubmitFriend = async (event, setError) => {
        event.preventDefault();
        const { email } = event.target.elements;

        try {
            const user = await getUserByEmail(email.value);

            if (!user || !user._id) {
                setError('El usuario no existe o no tiene un ID válido'); // Actualiza el estado de error
                return;
            }

            const success = await addFriendToProject(selectedProject._id, user._id);
            if (success) {
                setAddFriendToProjectModalVisible(false);
                setModalMessage({ title: '¡Acción realizada con éxito!', body: 'El amigo se agregó correctamente al proyecto.' });
                setModalVisible(true);
            }
        } catch (error) {
            console.error('Error en handleSubmitFriend:', error);
            setError('Ocurrió un error al agregar al amigo');
        }
    };

    const handleAttachInvoice = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'nameeeeee');

        setLoading(true);
        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/dtatmwle7/image/upload', {
                method: 'POST',
                body: data,
            });

            const file = await response.json();
            setExpenseBillFile(file.secure_url);
            const billFileUrl = file.secure_url;
            const success = addBillFileToProjectContext(selectedProject._id, billFileUrl);
            if (success) {
                setModalMessage({ title: '¡Acción realizada con éxito!', body: 'La factura se agregó correctamente al proyecto.' });
                setModalVisible(true);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error uploading file:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchMemberNames = async () => {
            if (selectedProject && selectedProject.members?.length > 0) {
                const names = await Promise.all(
                    selectedProject.members.map(async (member) => {
                        const user = member.username
                            ? member.username
                            : await getUserById(member.userId).then(user => user.username);
                        return user;
                    })
                );
                setMemberNames(names);
            } else {
                setMemberNames([]);
            }
        };

        fetchMemberNames();
    }, [selectedProject]);

    return (
        <div className="relative w-full max-w-4xl mx-auto my-8 p-4 sm:p-6 bg-white">
            {!selectedProject ? (
                <p className="text-md text-gray-700">Aún no tenés proyectos creados</p>
            ) : (
                <div>
                    {selectedProject.name && (
                        <div className="mb-4">
                            <h1 className="text-lg font-bold text-black">Nombre del proyecto:</h1>
                            <p className="text-md text-gray-700">{selectedProject.name}</p>
                        </div>
                    )}
                    {selectedProject.description && (
                        <div className="mb-4">
                            <h2 className="text-lg font-bold text-black">Descripción:</h2>
                            <p className="text-md text-gray-700">{selectedProject.description}</p>
                        </div>
                    )}
                    {selectedProject.totalSpent !== undefined && (
                        <div className="mb-4">
                            <h2 className="text-lg font-bold text-black">Total gastado:</h2>
                            <p className="text-md text-gray-700">${selectedProject.totalSpent || 0}</p>
                        </div>
                    )}
                    {selectedProject && memberNames.length > 0 && (
                        <div className="mb-4">
                            <h2 className="text-lg font-bold text-black">Miembros:</h2>
                            <p className="text-md text-gray-700">{memberNames.join(', ')}</p>
                        </div>
                    )}

                    <div className="absolute top-4 right-4 sm:top-8 sm:right-10">
                        <motion.img
                            src={selectedProject?.pic || icon3}
                            alt="Ícono del proyecto"
                            className="w-24 h-24 sm:w-36 sm:h-36 rounded-full object-cover"
                            initial={{opacity: 0, y: 10}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1}}
                        />
                    </div>

                    <div className="flex flex-wrap justify-end gap-4 mt-10">
                        <button
                            className="bg-[#B9FF66] text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300"
                            onClick={() => document.getElementById('fileInput').click()}
                        >
                            Adjuntar Factura
                        </button>
                        <input
                            type="file"
                            id="fileInput"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleAttachInvoice}
                            className="hidden"
                        />
                        <button
                            className="bg-[#B9FF66] text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300"
                            onClick={handleAddExpense}
                        >
                            Adjuntar Gasto
                        </button>
                        <button
                            className="bg-[#B9FF66] text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300"
                            onClick={handleAddFriend}
                        >
                            Agregar amigo
                        </button>
                        <button
                            className="bg-red-500 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-red-600 transition duration-300"
                            onClick={handleDeleteProject}
                        >
                            Borrar Proyecto
                        </button>
                    </div>

                    {selectedProject.billFile && (
                        <div className="mt-4">
                            <a
                                href={selectedProject.billFile}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                Ver factura adjunta
                            </a>
                        </div>
                    )}
                    {modalVisible && (
                        <Modal
                            message={modalMessage}
                            onClose={() => setModalVisible(false)}
                        />
                    )}
                    {addExpenseModalVisible && (
                        <AddExpenseModal onClose={() => setAddExpenseModalVisible(false)} handleSubmit={handleSubmitExpense}/>
                    )}
                    {addFriendToProjectModalVisible && (
                        <AddFriendToProjectModal
                            onClose={() => setAddFriendToProjectModalVisible(false)}
                            handleSubmit={handleSubmitFriend}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default ViewProjectDetail;
