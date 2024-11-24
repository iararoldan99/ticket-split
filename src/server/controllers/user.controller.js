
import * as userService from "../service/user.service.js";
import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";
import * as mailService from "../service/mail.service.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userFound = await userService.findUserByEmail(email);

    if (userFound) {
      return res.status(400).json({ message: ["Este email ya se encuentra registrado"] });
    }

    const userSaved = await userService.registerUser({ username, email, password });
    const token = await userService.createUserToken(userSaved);

    res.cookie("token", token, { secure: true, sameSite: "none" });
    res.json({ id: userSaved._id, username: userSaved.username, email: userSaved.email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await userService.loginUser(email, password);

    if (!userFound) {
      return res.status(400).json({ message: ["Email o contraseña incorrectos"] });
    }

    const token = await userService.createUserToken(userFound);
    res.cookie("token", token, { secure: true, sameSite: "none" });
    res.json({ id: userFound._id, username: userFound.username, email: userFound.email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No estás autenticado" });

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await userService.findUserById(user.id);
    if (!userFound) return res.status(401).json({ message: 'Usuario no encontrado' });

    res.json({ id: userFound._id, username: userFound.username, email: userFound.email });
  });
};

export const logout = (req, res) => {
  res.cookie("token", "", { httpOnly: true, secure: true, expires: new Date(0) });
  res.status(200).json({ message: "Logout exitoso" });
};

export const sendMail = async (req, res) => {
  const { email } = req.body;
  const user = await userService.findUserByEmail(email);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  await mailService.sendWelcomeMail(user.email);
  res.status(200).json({ message: "Correo de bienvenida enviado" });
}

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userFound = await userService.findUserById(id);
    if (!userFound) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(userFound);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserById = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(req.body)
    const updates = req.body;
    const updatedUser = await userService.updateUserDetails(id, updates);
    res.json({ message: "Usuario actualizado con éxito", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  try {
    const users = await userService.getUsers({}, page, limit);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsersByMail = async (req, res) => {
  const { email } = req.params;
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const filtro = { email };

  try {
    const users = await userService.getUsers(filtro, page, limit);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addFriend = async (req, res) => {
  const { username, email } = req.body; // Username o email del amigo
  const userId = req.user.id; // ID del usuario autenticado

  try {
    const friend = username
      ? await userService.findUserByUsername(username)
      : await userService.findUserByEmail(email);

    if (!friend) {
      return res.status(404).json({ message: "Amigo no encontrado" });
    }

    if (userId === friend._id.toString()) {
      return res.status(400).json({ message: "No puedes agregarte a ti mismo como amigo" });
    }

    const newFriend = await userService.addFriend(userId, friend._id);
    res.status(200).json({ message: "Amigo agregado exitosamente", friend: newFriend });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getFriends = async (req, res) => {
  const userId = req.user.id;

  try {
    const friends = await userService.getFriends(userId);
    res.status(200).json(friends);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteFriend = async (req, res) => {
  const { id: friendId } = req.params;
  const userId = req.user.id;

  try {
    await userService.deleteFriend(userId, friendId);
    res.status(200).json({ message: "Amigo eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
