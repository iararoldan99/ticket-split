import * as movementService from "../service/movements.service.js";

export const getMovements = async (req, res) => {
  try {
    const { id } = req.user;
    const movements = await movementService.getAllMovements(id);
    res.json(movements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMovementById = async (req, res) => {
  const { id } = req.params;
  try {
    const movement = await movementService.getMovementById(id);
    res.json(movement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllMovementsByProjectId = async (req, res) => {
  const { projectId } = req.params;
  try {
    const movements = await movementService.getAllMovByProjectId(projectId);
    res.json(movements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const addMovement = async (req, res) => {
  const { userId, ...movementData } = req.body;

  try {
    if (userId && typeof userId !== 'string') {
      return res.status(400).json({ message: "El userId proporcionado no es válido." });
    }

    const newMovement = await movementService.createMovement(req.user.id, { userId, ...movementData });
    res.status(201).json(newMovement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
