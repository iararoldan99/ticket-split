import axios from './axios.js';

export const addMovement = async (id) => axios.post(`/movements/add`, id);

export const getMovementById = async id => axios.get(`/movements/${id}`);

export const getMovements = async () => axios.get(`/movements`);

export const getMovementsByProjectId = async (projectId) =>
  axios.get(`/movements/${projectId}`);
