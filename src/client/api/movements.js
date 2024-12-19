import axios from './axios.js';

export const addMovement = async (data) => axios.post(`/movements/add`, data);

export const getMovementById = async id => axios.get(`/movements/${id}`);

export const getMovements = async () => axios.get(`/movements`, {withCredentials: true});

export const getMovementsByProjectId = async (projectId) =>
  axios.get(`/movements/project/${projectId}`);
