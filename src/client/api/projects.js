import axios from './axios.js';

export const createProject = async (project) => axios.post(`/project/create`, project);

export const getProjects = async () => axios.get(`/projects`);

export const getProjectById = async (id) => axios.get(`/project/${id}`);

export const updateProject = async (id, data) => axios.put(`/project/update/${id}`, data);

export const addExpenseToProject = async (projectId, expenseData) => axios.post(`/projects/${projectId}/expenses`, expenseData);
