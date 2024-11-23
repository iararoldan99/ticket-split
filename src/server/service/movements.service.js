import Movement from "../models/movement.model.js";

export const getAllMovements = async () => {
  return await Movement.find({});
};

export const getMovementsByUserId = async (userId) => {
  return await Movement.find({ userId });
};

export const getMovementById = async (id) => {
  return await Movement.findById(id);
};

export const createMovement = async (movementData) => {
  const newMovement = new Movement(movementData);
  return await newMovement.save();
};

export const updateMovement = async (id, updateData) => {
  return await Movement.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteMovement = async (id) => {
  return await Movement.findByIdAndDelete(id);
};
