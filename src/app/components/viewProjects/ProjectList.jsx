import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectItem key={index} name={project.name} icon={project.icon} />
      ))}
    </div>
  );
};

export default ProjectList;
