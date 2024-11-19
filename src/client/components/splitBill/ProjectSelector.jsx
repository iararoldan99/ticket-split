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
            {projects &&
                <>
                    <label className="block text-gray-700 font-medium mb-2">Seleccionar Proyecto</label>
                    <select
                        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        onChange={handleSelectChange}
                    >
                        <option value="">Selecciona un proyecto</option>
                        {projects.map((project) => (
                            <option key={project.id} value={project.id}>
                                {project.name}
                            </option>
                        ))}
                        <option value="new">+ Nuevo proyecto</option>
                    </select>
                </>
            }
            <p className="text-center text-gray-500">Todavía no tenés proyectos, ¡empezá creando uno!</p>
        </div>
    )
        ;
};

export default ProjectSelector;
