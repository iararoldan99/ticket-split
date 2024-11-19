import User from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const getUserById = async (req, res) => {
  console.log('estoy aca')
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No estás autenticado" });

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401).json({ message: 'No se encontró el usuario'});
    console.log(res)
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      name: userFound.name,
      description: userFound.description,
      location: userFound.location,
    });
  });
};

export const updateUserById = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No estás autenticado" });

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401).json({ message: 'No se encontró el usuario'});
    console.log(res)
    const { username, email, name, description, location } = req.body;

    if (username) userFound.username = username;
    if (email) userFound.email = email;
    if (name) userFound.name = name;
    if (description) userFound.description = description;
    if (location) userFound.location = location;

    const updatedUser = await userFound.save();

    res.json({ message: "Usuario actualizado con éxito", user: updatedUser });

  });
};

