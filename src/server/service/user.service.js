import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const getUsers = async (query, page, limit) => {
  const options = {
    page: parseInt(page, 10) || 1,
    limit: parseInt(limit, 10) || 10,
  };
  try {
    const users = await User.paginate(query, options);
    return users;
  } catch (error) {
    throw new Error("Error al paginar los usuarios: " + error.message);
  }
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const findUserByUsername = async (username) => {
  return await User.findOne( {username} );
}

export const registerUser = async ({ username, email, password }) => {
  const passwordHash = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: passwordHash,
  });

  const userSaved = await newUser.save();

  return userSaved;
};

export const createUserToken = async (user) => {
  const token = await createAccessToken({ id: user._id });
  return token;
};

export const loginUser = async (email, password) => {
  const userFound = await User.findOne({ email });
  if (!userFound) return null;

  const isMatch = await bcrypt.compare(password, userFound.password);
  return isMatch ? userFound : null;
};

export const findUserById = async (id) => {
  return User.findById(id);
};

export const updateUserDetails = async (id, updates) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  Object.keys(updates).forEach(key => {
    user[key] = updates[key];
  });
  return await user.save();
};

export const addFriend = async (userId, friendId) => {
  try {
    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if (!user || !friend) {
      throw new Error("Usuario o amigo no encontrado");
    }

    if (userId === friendId) {
      throw new Error("No puedes agregarte a ti mismo como amigo");
    }

    if (user.friends.includes(friendId)) {
      throw new Error("El usuario ya es amigo");
    }

    user.friends.push(friendId);
    await user.save();

    return friend;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getFriends = async (userId) => {
  try {
    const user = await User.findById(userId).populate("friends", "username email");
    return user.friends;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteFriend = async (userId, friendId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    user.friends = user.friends.filter(friend => friend.toString() !== friendId);
    await user.save();

    return friendId;
  } catch (error) {
    throw new Error(error.message);
  }
};
