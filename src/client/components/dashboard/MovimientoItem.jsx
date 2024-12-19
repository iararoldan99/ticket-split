import { motion } from 'framer-motion';
import React from 'react';
import gastoIcon from '../../assets/icons/gasto.png'; // Asegúrate de tener los iconos correctos
import defaultIcon from '../../assets/icons/social.png';
import { useSelector } from 'react-redux';

const MovimientoItem = ({ movement }) => {
    const projects = useSelector((state) => state.project.projects);

    const getProjectName = (projectId) => {
        const project = projects.find((project) => project._id === projectId);
        return project ? project.name : 'Gastos Generales';
    };

    const getProjectPic = (projectId) => {
        const project = projects.find((project) => project._id === projectId);
        return project && project.pic ? project.pic : gastoIcon;
    };

    return (
        <motion.div
            className="flex items-center justify-between bg-white py-4 px-4 rounded-md shadow-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <div className="flex items-center">
                <img
                    src={getProjectPic(movement.projectId)}
                    alt={movement.description}
                    className="h-12 w-12 mr-4 rounded-full"
                />
                <div>
                    <h3 className="font-semibold text-lg">{movement.description}</h3>
                    <p className="text-sm text-gray-600">{new Date(movement.createdAt).toLocaleDateString('es-ES', {
                        month: 'short', day: 'numeric'
                    })}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-semibold text-lg text-red-600">- ${movement.amount}</p>
                <p className="text-sm text-gray-500">{movement.projectId ? getProjectName(movement.projectId) : ''}</p>
            </div>
        </motion.div>
    );
};

export default MovimientoItem;
