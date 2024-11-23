import * as movementService from "../services/movement.service.js";

// Obtener todos los movimientos
export const getMovements = async (req, res) => {
  try {
    const movements = await movementService.getAllMovements();
    res.json(movements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener movimientos por usuario
export const getMovementByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const movements = await movementService.getMovementsByUserId(userId);
    res.json(movements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un movimiento específico
export const getMovementById = async (req, res) => {
  const { id } = req.params;
  try {
    const movement = await movementService.getMovementById(id);
    res.json(movement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Agregar un movimiento
export const addMovement = async (req, res) => {
  const movementData = req.body;
  try {
    const newMovement = await movementService.createMovement(movementData);
    res.status(201).json(newMovement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un movimiento
export const updateMovement = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedMovement = await movementService.updateMovement(id, updateData);
    res.json(updatedMovement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar un movimiento
export const deleteMovement = async (req, res) => {
  const { id } = req.params;
  try {
    await movementService.deleteMovement(id);
    res.json({ message: "Movimiento eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
