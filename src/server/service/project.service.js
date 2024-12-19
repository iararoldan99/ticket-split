import Project from '../models/project.model.js';
import * as MovementService from '../service/movements.service.js';
import * as UserService from "./user.service.js";
import User from '../models/user.model.js';

export const createProject = async (name, description, members, owner, pic) => {
  const memberIds = members.map(member => member.userId);

  const newProject = new Project({
    name,
    description,
    members: [owner._id, ...memberIds],
    ownerId: owner._id,
    pic,
  });

  await newProject.save();

  owner.projects.push(newProject._id);
  await owner.save();

  for (const memberId of memberIds) {
    const user = await UserService.findUserById(memberId);
    if (user) {
      user.projects.push(newProject._id);
      await user.save();
    }
  }

  return newProject;
};

export const getProjects = async (userId) => {
  const user = await UserService.findUserById(userId);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  await user.populate({
    path: 'projects',
    populate: {
      path: 'members',
      select: 'username email',
    },
  });

  return user.projects;
};

export const getProjectById = async (projectId) => {
  const project = await Project.findById(projectId).populate('members', 'username email');  if (!project) {
    throw new Error("Project not found at getProjectById");
  }
  return project;
};


export const getProjectByName = async (name) => {
  const project = await Project.findOne({ name });
  if (!project) {
    return null;
  }
  return project;
}

export const updateProject = async (projectId, name, description) => {
  const project = await Project.findById(projectId);
  if (!project) {
    throw new Error("Project not found at updateProject");
  }

  project.name = name;
  project.description = description;

  return await project.save();
};

export const addExpenseToProject = async (projectId, expenseData) => {
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      throw new Error("Project not found at addExpenseToProject");
    }

    project.expenses.push(expenseData);

    const validExpenses = project.expenses.filter((expense) =>
      typeof expense.amount === "number" && !isNaN(expense.amount)
    );

    project.totalSpent = validExpenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );

    //project.totalSpent = project.expenses.reduce((total, expense) => total + expense.amount, 0);

    await MovementService.createMovement(project.ownerId, {
      projectId,
      projectName: expenseData.projectName,
      projectPic: expenseData.projectPic,
      amount: expenseData.amount,
      type: "gasto",
      category: "gastos",
      description: expenseData.description,
      userId: expenseData.userId,
    });

    return await project.save();
  } catch (error) {
    console.error("Error adding expense to project:", error);
    throw error;
  }
};

export const addBillFileToProjectService = async (projectId, billFile) => {
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      throw new Error("Project not found at addBillFileToProject");
    }
    project.billFile = billFile;

    return await project.save();
  } catch (error) {
    console.error("Error adding bill file to project:", error);
    throw error;
  }
};

export const addFriendToProject = async (projectId, userId) => {
  const project = await Project.findById(projectId);
  if (!project) {
    throw new Error("Proyecto no encontrado");
  }

  const user = await UserService.findUserById(userId);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  if (!project.members.includes(user._id)) {
    project.members.push(user._id);
    await project.save();
  }

  if (!user.projects.includes(project._id)) {
    user.projects.push(project._id);
    await user.save();
  }

  return project;
};

export const removeFriendFromProjectService = async (projectId, userId) => {
  // Busca el proyecto
  const project = await Project.findById(projectId);
  if (!project) {
    throw new Error("Proyecto no encontrado");
  }

  // Verifica si el usuario es miembro del proyecto
  const userIndex = project.members.findIndex((memberId) => memberId.toString() === userId);
  if (userIndex === -1) {
    throw new Error("No encontramos al usuario en el proyecto");
  }

  // Elimina al usuario de los miembros del proyecto
  project.members.splice(userIndex, 1);
  await project.save();

  // Elimina el ID del proyecto del array `projects` en la colección `User`
  await User.updateOne(
    { _id: userId }, // Encuentra al usuario por ID
    { $pull: { projects: projectId } } // Elimina el ID del proyecto de su array `projects`
  );

  return project;
};

export const deleteProjectByIdService = async (projectId) => {
  try {
    // Encuentra el proyecto
    const project = await Project.findById(projectId);
    if (!project) {
      return { success: false, message: "Proyecto no encontrado" };
    }

    // Itera sobre los miembros del proyecto y elimina el proyecto de sus listas
    for (const memberId of project.members) {
      await User.updateMany(
        { _id: memberId }, // Filtra por el miembro
        { $pull: { projects: projectId } } // Elimina el proyecto del array `projects`
      );
    }

    // Elimina el proyecto de la base de datos
    await Project.findByIdAndDelete(projectId);

    return { success: true };
  } catch (error) {
    console.error("Error en deleteProjectByIdService:", error);
    return { success: false, message: "Error interno del servidor" };
  }
};
