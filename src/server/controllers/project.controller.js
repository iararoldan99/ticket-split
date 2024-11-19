import Project from "../models/project.model.js";

export const createProject = async (req, res) => {
  try {
    const {name, description} = req.body;
    const projectFound = await Project.findOne({name});

    if (projectFound) return res.status(400).json({message: "Este proyecto ya existe"});

    const newProject = new Project({
      name,
      description,
      ownerId: req.user.id,
    });

    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ownerId: req.user.id}); // Filtrar por `ownerId`
    res.json(projects);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({message: "Project not found"});
    res.json(project);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const updateProject = async (req, res) => {
  try {
    const {name, description} = req.body;
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({message: "Project not found"});

    project.name = name;
    project.description = description;

    const updatedProject = await project.save();
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const addExpenseToProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const expenseData = req.body;

    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ error: 'Project not found' });

    project.expenses.push(expenseData);
    await project.save();

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error adding expense' });
  }
};
