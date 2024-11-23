import * as ProjectService from '../service/project.service.js';

export const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const ownerId = req.user.id;

    const newProject = await ProjectService.createProject(name, description, ownerId);
    res.json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProjects = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  try {
    const projects = await ProjectService.getProjects(req.user.id, page, limit);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await ProjectService.getProjectById(req.params.id);
    res.json(project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const updatedProject = await ProjectService.updateProject(req.params.id, name, description);
    res.json(updatedProject);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addExpenseToProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const expenseData = req.body;

    const updatedProject = await ProjectService.addExpenseToProject(projectId, expenseData);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
