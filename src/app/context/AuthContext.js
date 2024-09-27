import React, { createContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register, logout } from '../redux/authSlice';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
      dispatch(login(validUser));
      return true;
    } else {
      return false;
    }
  };

  const registerUser = (email, username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { email, username, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    dispatch(register(newUser));  
  };

  const logoutUser = () => {
    dispatch(logout());  
  };

  const forgotPassword = (email) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email);
    return user ? true : false;
  };

  const resetPassword = (email, newPassword) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      return true;
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, registerUser, logoutUser, forgotPassword, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;