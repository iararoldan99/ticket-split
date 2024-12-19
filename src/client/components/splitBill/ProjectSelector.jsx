import React from 'react';

const ProjectSelector = ({projects, onSelectProject, onCreateProject}) => {
    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue === "new") {
            onCreateProject();
        } else {
            onSelectProject(selectedValue);
        }
    };

    return (
        <div className="mb-6">
            {projects ?
                <>
                    <label className="block text-gray-700 font-medium mb-2">Seleccionar Proyecto</label>
                    <select
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        onChange={handleSelectChange}
                    >
                        <option value="">Selecciona un proyecto</option>
                        {projects.map((project) => (
                            <option key={project._id} value={project._id}>
                                {project.name}
                            </option>
                        ))}
                    </select>
                </>
                : <div className="text-center">
                    <p className="text-gray-700 mb-4">No hay proyectos disponibles.</p>
                    <button
                        className="bg-primary text-white py-2 px-4 rounded"
                        onClick={onCreateProject}
                    >
                        Crear proyecto
                    </button>
                </div>}
        </div>
    );
};

export default ProjectSelector;
