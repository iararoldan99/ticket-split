import axios from './axios.js';

export const registerReq = async user => axios.post(`/register`, user);
export const loginRequest = async user => axios.post(`/login`, user);
export const verifyTokenRequest = async () => axios.get(`/verify`);
export const logoutRequest = async () => axios.post(`/logout`, { withCredentials: true });

export const getUserByIdApi = async (id) => axios.get(`/user/${id}`, {withCredentials: true});
export const updateUserById = async (id, data) => axios.put(`/user/${id}`, data);
export const deleteUserById = async (id) => axios.delete(`/user/${id}`);
export const getUserByUsername = async username => axios.get(`/user/${username}`, {withCredentials: true});
export const getUsers = async (page, limit) => axios.get(`/users`, { params: { page, limit }, withCredentials:true });
export const getUserByEmailApi = async email => axios.get(`/user/email/${email}`, {withCredentials: true});

export const addFriend = async (friendId) => axios.post(`/friend/add`, { id: friendId });
export const getAllFriends = async () => axios.get(`/friends`, {withCredentials: true});
export const deleteFriend = async (friendId) => axios.delete(`/friend/delete/${friendId}`);

export const requestPasswordReset = async email => axios.post(`/request-password-reset`, { email });
export const resetPassword = async (token, newPassword) => axios.post(`/reset-password`, { token, newPassword });
