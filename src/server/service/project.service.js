import Project from '../models/project.model.js';

export const createProject = async (name, description, ownerId) => {
  const projectFound = await Project.findOne({ name });
  if (projectFound) {
    throw new Error("Este proyecto ya existe");
  }

  const newProject = new Project({
    name,
    description,
    ownerId,
  });

  return await newProject.save();
};

export const getProjects = async (ownerId, page = 1, limit = 10) => {
  const options = {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
  };

  const query = { ownerId };
  const projects = await Project.paginate(query, options);
  return projects;
};

export const getProjectById = async (projectId) => {
  const project = await Project.findById(projectId);
  if (!project) {
    throw new Error("Project not found");
  }
  return project;
};

export const updateProject = async (projectId, name, description) => {
  const project = await Project.findById(projectId);
  if (!project) {
    throw new Error("Project not found");
  }

  project.name = name;
  project.description = description;

  return await project.save();
};

export const addExpenseToProject = async (projectId, expenseData) => {
  const project = await Project.findById(projectId);
  if (!project) {
    throw new Error("Project not found");
  }

  project.expenses.push(expenseData);
  return await project.save();
};
