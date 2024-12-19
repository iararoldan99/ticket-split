import {Router} from "express";
import {
  createProject,
  updateProject,
  getProjects,
  addExpenseToProject,
  getProjectById,
  addFriendToProject,
  deleteProjectById,
  removeFriendFromProject,
  addBillFileToProject,
} from "../controllers/project.controller.js";
import {auth} from "../middlewares/auth.middleware.js";
import upload from "../service/multer.service.js";
const router = Router();

router.post("/project/create", auth, upload.single('projectImage'), createProject);
router.put("/project/update/:id", auth, updateProject);
router.get("/project/:id", auth, getProjectById);
router.get("/projects", auth, getProjects);
router.post('/projects/:projectId/expenses', auth, addExpenseToProject);
router.post('/projects/:projectId/friends/:friendEmail', auth, addFriendToProject);
router.delete("/project/delete/:id", auth, deleteProjectById);
router.delete("/projects/:projectId/friends/:friendId", auth, removeFriendFromProject);
router.post("/projects/:projectId/billFile", auth, upload.single('billFile'), addBillFileToProject);

export default router;
