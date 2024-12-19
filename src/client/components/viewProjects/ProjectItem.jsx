import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import icon3 from '../../assets/img/ProjectIcon3.svg';

const ProjectItem = ({ project }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}


      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="w-36 h-36 mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
            src={project.pic || icon3}
          alt={project.name}
          className="w-full h-full rounded-full object-cover"
        />
      </motion.div>

      <Link to={`/detalles-proyecto/${encodeURIComponent(project._id)}`} className="text-lg font-bold text-black hover:underline">
        {project.name}
      </Link>
    </motion.div>
  );
};

export default ProjectItem;
