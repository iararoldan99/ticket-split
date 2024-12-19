import React from 'react';
import { useNavigate } from 'react-router-dom';
import icon3 from '../../assets/img/ProjectIcon3.svg';

const ProjectList = ({ projects }) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="space-y-4">
                {projects.map((project) => (
                    <div
                        key={project._id}
                        className="flex items-center bg-white p-4 rounded-lg shadow-md cursor-pointer"
                        onClick={() => navigate(`/detalles-proyecto/${project._id}`)}
                    >
                        <img src={project.pic || icon3} alt="Icono del Proyecto" className="h-10 w-10 mr-4"/>
                        <div>
                            <h3 className="font-semibold">{project.name}</h3>
                            <p className="text-sm text-gray-500">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
