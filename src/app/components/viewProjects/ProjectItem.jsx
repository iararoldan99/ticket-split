import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-36 h-36 mb-4">
        <img 
          src={icon} 
          alt={name} 
          className="w-full h-full rounded-full object-cover" 
        />
      </div>
      <Link to={`/projects/${name}`} className="text-lg font-bold text-black hover:underline">
        {name}
      </Link>
    </div>
  );
};

export default ProjectItem;

