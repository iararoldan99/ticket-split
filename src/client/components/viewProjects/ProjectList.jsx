import React from 'react';
import { motion } from 'framer-motion';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projects }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
    >
      {projects.map((project, index) => (
        <ProjectItem project={project} />
      ))}
    </motion.div>
  );
};

export default ProjectList;
