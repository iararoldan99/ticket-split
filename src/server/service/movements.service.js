import Movement from "../models/movement.model.js";

export const getAllMovements = async (userId) => {
  return await Movement.find({ userId });
};

export const getMovementById = async (id) => {
  return await Movement.findById(id);
};

export const createMovement = async (userId, movementData) => {
  const finalUserId = movementData.userId || userId;

  const newMovement = new Movement({ userId: finalUserId, ...movementData });
  return await newMovement.save();
};

export const getAllMovByProjectId = async (projectId) => {
  return await Movement.find({ projectId });
}
