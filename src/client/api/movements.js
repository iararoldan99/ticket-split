import axios from './axios.js';

export const getMovementByUserId = async id => axios.get(`/movements`, id);

export const addMovement = async (id) => axios.post(`/movements/add`, id);

export const deleteMovement = async (id) => axios.delete(`/movements/delete/${id}`);

export const updateMovement = async (id, data) => axios.put(`/movements/update/${id}`, data);

export const getMovementById = async id => axios.get(`/movements/${id}`);

export const getMovements = async () => axios.get(`/movements`);

export const addExpenseToProject = async (projectId, expenseData) =>
  axios.post(`/projects/${projectId}/addExpense`, expenseData);
