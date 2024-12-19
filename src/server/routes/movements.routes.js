import { Router } from "express";
import {
  getMovements,
  addMovement,
  getMovementById, getAllMovementsByProjectId
} from "../controllers/movements.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/movements", auth, getMovements);
router.get("/movements/:id", auth, getMovementById);
router.post("/movements/add", auth, addMovement);
router.get("/movements/project/:projectId", auth, getAllMovementsByProjectId);

export default router;
