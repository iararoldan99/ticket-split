import { Router } from "express";
import {
  getUserById, getUsers,
  login, logout, register,
  updateUserById, verifyToken,
  addFriend, getFriends, deleteFriend, sendMail, requestPasswordReset, resetPassword
} from "../controllers/user.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/user.schema.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

// Autenticación
router.post("/register", validateSchema(registerSchema), register); // funciona
router.post("/login", validateSchema(loginSchema), login); // funciona
router.get("/verify", verifyToken); // funciona
router.post("/logout", logout); // funciona
router.post('/request-password-reset', requestPasswordReset); // funciona ok
router.post('/reset-password', resetPassword); // anda

// Rutas de usuario
router.get('/user/:id', auth, getUserById); // funciona
router.put('/user/:id', auth, updateUserById); // funciona
router.get('/users', auth, getUsers); // funciona

// mails

router.post('/user/mail', sendMail); // anda ok

// Rutas para los contactos del usuario

router.post('/friend/add', auth, addFriend); // funciona
router.get('/friends', auth, getFriends); // funciona
router.delete('/friend/delete/:id', auth, deleteFriend); // funciona

export default router;
