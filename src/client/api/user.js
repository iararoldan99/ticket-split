import axios from './axios.js';

export const getUser = async => axios.get(`/user`);

export const updateUserById = async (id) => axios.put(`/user/update`, id);

export const deleteUserById = async (id) => axios.delete(`/user/delete`, id);
