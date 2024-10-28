import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import {createAccessToken} from '../libs/jwt.js';
export const register = async (req, res) => {
  const {email, password, username} = req.body;

  try {
    const passwordhash = await bcrypt.hash(password, 10);
    const newUser = new User({email, password: passwordhash, username});
    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id});
    res.cookie('token', token);
    res.json({
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      }
    });

  } catch (error) {
    console.log(error);
  }
}

export const login = (req, res) => {
  res.send('Login route');
}
