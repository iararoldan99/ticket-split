import { Router } from "express";
import {
  getMovements,
  getMovementByUserId,
  addMovement,
  deleteMovement,
  updateMovement,
  getMovementById
} from "../controllers/movement.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

// Movimientos generales
router.get("/movements", auth, getMovements); // Obtiene todos los movimientos
router.get("/movements/user/:userId", auth, getMovementByUserId); // Movimientos por usuario
router.get("/movements/:id", auth, getMovementById); // Movimiento específico

// Manipulación de movimientos
router.post("/movements", auth, addMovement); // Agrega un movimiento
router.put("/movements/:id", auth, updateMovement); // Actualiza un movimiento
router.delete("/movements/:id", auth, deleteMovement); // Elimina un movimiento

export default router;
