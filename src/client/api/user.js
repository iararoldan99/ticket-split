// archivo: api/user.api.js

import axios from './axios.js';

// Autenticación y verificación de usuario
export const registerReq = async user => axios.post(`/register`, user);
export const loginRequest = async user => axios.post(`/login`, user);
export const verifyTokenRequest = async () => axios.get(`/verify`);
export const logoutRequest = async () => axios.post(`/logout`);

// Operaciones de usuario
export const getUserById = async (id) => axios.get(`/user/${id}`);
export const updateUserById = async (id, data) => axios.put(`/user/${id}`, data);
export const deleteUserById = async (id) => axios.delete(`/user/${id}`);

// Operaciones adicionales
export const getUsers = async (page, limit) => axios.get(`/users`, { params: { page, limit } });
export const getUsersByMail = async email => axios.get(`/user/${email}`);

export const addFriend = async (friendId) => axios.post(`/friend/add`, { id: friendId });
export const getFriends = async () => axios.get(`/friends`);
export const deleteFriend = async (friendId) => axios.delete(`/friend/delete/${friendId}`);
