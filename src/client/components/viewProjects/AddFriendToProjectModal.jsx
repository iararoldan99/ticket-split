import React, { useState } from 'react';
import { motion } from 'framer-motion';

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariants = {
    hidden: { opacity: 0, y: '-100vh' },
    visible: { opacity: 1, y: '0' },
};

const AddFriendToProjectModal = ({ onClose, handleSubmit }) => {
    const [friendEmail, setFriendEmail] = useState('');
    const [error, setError] = useState(''); // Estado para manejar el error

    const handleChange = (e) => {
        setFriendEmail(e.target.value);
        setError(''); // Limpia el error al cambiar el input
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(e, setError); // Pasa setError para manejar errores desde afuera
    };

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div
                className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full"
                variants={modalVariants}
            >
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &times;
                </button>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email del contacto:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
                                error ? 'border-red-500' : 'border-gray-300'
                            }`}
                            onChange={handleChange}
                            value={friendEmail}
                            required
                        />
                        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
                    </div>
                    <div className="flex justify-between mt-6">
                        <button
                            type="submit"
                            className="bg-light-primary text-black font-medium px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 transition duration-200"
                        >
                            Agregar Amigo
                        </button>
                        <button
                            type="button"
                            className="bg-gray-300 text-black px-4 py-2 rounded-md shadow-sm hover:bg-gray-400 transition duration-200"
                            onClick={onClose}
                        >
                            Cerrar
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default AddFriendToProjectModal;
