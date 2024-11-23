import { Router } from "express";
import {
  getUserById, getUsers, getUsersByMail,
  login, logout, register,
  updateUserById, verifyToken,
  addFriend, getFriends, deleteFriend
} from "../controllers/user.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/user.schema.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

// Autenticación
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.get("/verify", verifyToken);
router.post("/logout", logout);

// Rutas de usuario
router.get('/user/:id', auth, getUserById);
router.put('/user/:id', auth, updateUserById);
router.get('/users', auth, getUsers);
router.get('/user/:email', auth, getUsersByMail);

// Rutas para amigos
router.post('/friend/add', auth, addFriend);
router.get('/friends', auth, getFriends);
router.delete('/friend/delete/:id', auth, deleteFriend);

export default router;
