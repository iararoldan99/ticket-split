import {Router} from "express";
import {
  createProject,
  updateProject,
  getProjects,
  getProjectById, addExpenseToProject,
} from "../controllers/project.controller.js";
import {projectSchema} from "../schemas/projects.schema.js";
import {validateSchema} from "../middlewares/validator.middleware.js";
import {auth} from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/project/create", auth, validateSchema(projectSchema), createProject);
router.put("/project/update/:id", auth, updateProject);
router.get("/project/:id", auth, getProjectById);
router.get("/projects", auth, getProjects);
router.post('/projects/:projectId/expenses', auth, addExpenseToProject);

export default router;
