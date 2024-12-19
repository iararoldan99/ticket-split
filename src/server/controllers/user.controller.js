
import * as userService from "../service/user.service.js";
import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";
import * as mailService from "../service/mail.service.js";
import * as MailService from "../service/mail.service.js";
const isProduction = process.env.NODE_ENV === 'production';

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userFound = await userService.findUserByEmail(email);

    if (userFound) {
      return res.status(400).json({ message: ["Este email ya se encuentra registrado"] });
    }

    const userSaved = await userService.registerUser({ username, email, password });
    const token = await userService.createUserToken(userSaved);

    await MailService.sendNotificationEmail(
      email,
      "Bienvenido a TicketSplit",
      "Se registró tu usuario exitosamente!",
      `<h1>Registro exitoso! </h1><p><b>Username:</b> ${username}</p><p><b>Email:</b> ${email}</p>`
    );


    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 3 * 60 * 60 * 1000,
    });
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

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 3 * 60 * 60 * 1000,
    });
    res.json({ id: userFound._id, username: userFound.username, email: userFound.email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  try {
    const user = await userService.findUserById(req.user.id);
    if (!user) return res.status(401).json({ message: 'Usuario no encontrado' });

    res.json({ id: user._id, username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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

export const getUserByUsername = async (req, res) =>{
  const { username } = req.body;
  try {
    const userFound = await userService.findUserByUsername(username);
    if (!userFound) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(userFound);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getUserByEmail = async (req, res) =>{
  const { email } = req.params;
  try {
    const userFound = await userService.findUserByEmail(email);
    if (!userFound) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(userFound);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateUserById = async (req, res) => {
  const { id } = req.params;
  try {
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
  const { username, email } = req.body;
  const userId = req.user.id;

  try {
    const friend = username
      ? await userService.findUserByUsername(username)
      : await userService.findUserByEmail(email);

    if (!friend) {
      return res.status(404).json({ message: "El usuario no existe" });
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

export const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;
    await userService.requestPasswordReset(email);

    res.status(200).json({ message: 'Correo de restablecimiento enviado. Revisa tu bandeja de entrada.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    await userService.resetPassword(token, newPassword);

    res.status(200).json({ message: 'Contraseña restablecida correctamente.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
