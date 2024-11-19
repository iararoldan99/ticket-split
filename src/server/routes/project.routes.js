import {Router} from "express";
import {
  createProject,
  updateProject,
  getProjects,
  getProjectById, addExpenseToProject,
} from "../controllers/project.controller.js";
import {projectSchema} from "../schemas/projects.schema.js";
import {validateSchema} from "../middlewares/validator.middleware.js";

const router = Router();

router.post("/project/create", validateSchema(projectSchema), createProject);
router.put("/project/update/:id", updateProject);
router.get("/project/:id", getProjectById);
router.get("/projects", getProjects);
router.post('/projects/:projectId/expenses', addExpenseToProject);

export default router;
