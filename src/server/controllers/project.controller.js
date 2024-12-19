import * as ProjectService from '../service/project.service.js';
import * as MailService from '../service/mail.service.js';
import * as UserService from "./../service/user.service.js";

export const createProject = async (req, res) => {
  try {
    const { name, description, image, members } = req.body;
    const parsedMembers = Array.isArray(members) ? members : JSON.parse(members || '[]');
    const owner = await UserService.findUserById(req.user.id);

    const validMembers = [];
    for (const email of parsedMembers) {
      const user = await UserService.findUserByEmail(email);
      if (user) {
        validMembers.push({ userId: user._id });
      }
    }

    const newProject = await ProjectService.createProject(name, description, validMembers, owner, image);

    await MailService.sendNotificationEmail(
      owner.email,
      "Nuevo proyecto creado",
      "Tu proyecto ha sido creado exitosamente!",
      `<h1>Tu proyecto ha sido creado exitosamente</h1><p>Proyecto: ${newProject.name}</p><p>Descripción: ${newProject.description}</p>`
    );

    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProjects = async (req, res) => {

  try {
    const projects = await ProjectService.getProjects(req.user.id);
    res.json(projects);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await ProjectService.getProjectById(req.params.id);
    res.json(project);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const updateProject = async (req, res) => {
  try {
    const {name, description} = req.body;
    const updatedProject = await ProjectService.updateProject(req.params.id, name, description);
    res.json(updatedProject);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const addExpenseToProject = async (req, res) => {
  try {
    const {projectId} = req.params;
    const expenseData = req.body;

    const updatedProject = await ProjectService.addExpenseToProject(projectId, expenseData);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const addFriendToProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "friendEmail is required" });
    }

    const updatedProject = await ProjectService.addFriendToProject(projectId, email);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const removeFriendFromProject = async (req, res) => {
  try {
    const {projectId, friendId} = req.params;

    const updatedProject = await ProjectService.removeFriendFromProjectService(projectId, friendId);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}

export const deleteProjectById = async (req, res) => {
  try {
    const projectId = req.params.id;

    const result = await ProjectService.deleteProjectByIdService(projectId);

    if (result.success) {
      return res.status(200).json({ message: "Proyecto eliminado correctamente" });
    }

    return res.status(404).json({ message: result.message || "Error al eliminar el proyecto" });
  } catch (error) {
    console.error("Error eliminando proyecto:", error);
    res.status(500).json({ message: "Error eliminando el proyecto" });
  }
};


export const addBillFileToProject = async (req, res) => {
  try {

    const {projectId } = req.params;

    const {billFileUrl} = req.body;

    const updatedProject = await ProjectService.addBillFileToProjectService(projectId, billFileUrl);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}
