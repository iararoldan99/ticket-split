import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useProjects } from '../../context/ProjectContext.js';
import icon3 from '../../assets/img/ProjectIcon3.svg';
import Modal from './Modal.jsx';

const ProjectForm = ({ initialProjectName = '', initialDescription = '', members = [] }) => {
    const [projectName, setProjectName] = useState(initialProjectName);
    const [description, setDescription] = useState(initialDescription);
    const { addProjectContext } = useProjects();
    const [projectMembers, setProjectMembers] = useState(members);
    const [newMember, setNewMember] = useState('');
    const [projectImage, setProjectImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState(null);
    const [nameError, setNameError] = useState('');
    const [memberError, setMemberError] = useState('');
    const [membersListError, setMembersListError] = useState('');

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleAddMember = () => {
        if (!newMember.trim()) {
            setMemberError('El email no puede estar vacío.');
            return;
        }
        if (!isValidEmail(newMember)) {
            setMemberError('Por favor, ingresa un email válido.');
            return;
        }
        setProjectMembers([...projectMembers, { email: newMember.trim() }]);
        setNewMember('');
        setMemberError('');
        setMembersListError('');
    };

    const uploadImage = async (e) => {
        e.preventDefault();
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'nameeeeee');

        setLoading(true);
        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/dtatmwle7/image/upload`, {
                method: 'POST',
                body: data,
            });

            const file = await response.json();
            setProjectImage(file.secure_url);
            setLoading(false);
        } catch (error) {
            console.error('Error uploading image:', error);
            setLoading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();

        if (!projectName.trim()) {
            setNameError('El nombre del proyecto es obligatorio.');
            return;
        }
        setNameError('');

        if (projectMembers.length === 0) {
            setMembersListError('Debes agregar al menos un miembro.');
            return;
        }
        setMembersListError('');

        try {
            const formData = new FormData();
            formData.append('name', projectName);
            formData.append('description', description);
            formData.append('image', projectImage || '');
            formData.append('members', JSON.stringify(projectMembers.map((member) => member.email)));

            const response = await addProjectContext(formData);

            if (response) {
                setModalMessage({
                    title: '¡Proyecto guardado con éxito!',
                    body: 'El proyecto ha sido registrado correctamente.',
                });
            } else {
                setModalMessage({ title: 'Error', body: 'Error al guardar el proyecto.' });
            }
        } catch (error) {
            setModalMessage({ title: 'Error', body: 'Hubo un problema al guardar el proyecto.' });
        }
    };

    return (
        <div className="relative w-full lg:w-[150%] mx-auto">
            <motion.form
                className="space-y-6 w-full lg:w-[70%]"
                onSubmit={handleSave}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Campo Nombre */}
                <div>
                    <label className="block text-sm font-medium text-black" htmlFor="projectName">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="projectName"
                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
                            nameError ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Nombre del proyecto"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                    />
                    {nameError && <p className="mt-1 text-sm text-red-500">{nameError}</p>}
                </div>

                {/* Campo Miembros */}
                <div>
                    <label className="block text-sm font-medium text-black" htmlFor="members">
                        Miembros
                    </label>
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
                                memberError ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Email del usuario"
                            value={newMember}
                            onChange={(e) => setNewMember(e.target.value)}
                        />
                        <button
                            type="button"
                            className="bg-[#B9FF66] text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300"
                            onClick={handleAddMember}
                        >
                            Añadir
                        </button>
                    </div>
                    {memberError && <p className="mt-1 text-sm text-red-500">{memberError}</p>}

                    {projectMembers.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {projectMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-gray-100 text-gray-700 rounded-full px-3 py-1 shadow-sm"
                                >
                                    <span className="text-sm">{member.email}</span>
                                    <button
                                        type="button"
                                        className="ml-2 text-red-500 hover:text-red-600 focus:outline-none"
                                        onClick={() =>
                                            setProjectMembers(projectMembers.filter((_, i) => i !== index))
                                        }
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    {membersListError && <p className="mt-2 text-sm text-red-500">{membersListError}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-black" htmlFor="description">
                        Descripción
                    </label>
                    <textarea
                        id="description"
                        className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-black focus:ring-0 sm:text-sm"
                        placeholder="Descripción del proyecto"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                    ></textarea>
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        type="submit"
                        className="bg-[#B9FF66] text-black font-medium py-2 px-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300"
                    >
                        Guardar cambios
                    </button>
                </div>
            </motion.form>

            <div className="relative lg:absolute top-0 right-0 flex flex-col items-center mt-10 lg:mt-0 lg:right-[-5px]">
                <motion.img
                    src={projectImage || icon3}
                    alt="Ícono del proyecto"
                    className="w-36 h-36 rounded-full object-cover"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                />
                <div className="flex flex-col">
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        onChange={uploadImage}
                        className="hidden"
                    />
                    <button
                        type="button"
                        className="bg-[#B9FF66] text-black font-medium py-2 px-4 mt-4 rounded-md shadow-sm hover:bg-[#a3e65b] transition duration-300"
                        onClick={() => document.getElementById('fileInput').click()}
                    >
                        Subir Imagen
                    </button>
                </div>
                {modalMessage && <Modal message={modalMessage} onClose={() => setModalMessage(null)} />}
            </div>
        </div>
    );
};

export default ProjectForm;
