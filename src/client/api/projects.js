import axios from './axios.js';

export const createProject = async (project) => axios.post(`/project/create`, project);

export const getProjects = async () => axios.get(`/projects`, {withCredentials: true});

export const getProjectById = async (id) => axios.get(`/project/${id}`, {withCredentials: true});

export const updateProject = async (id, data) => axios.put(`/project/update/${id}`, data);

export const addExpenseToProjectApi = async (projectId, expenseData) => axios.post(`/projects/${projectId}/expenses`, expenseData);

export const addFriendToProjectApi = async (projectId, friendEmail) => axios.post(`/projects/${projectId}/friends/${friendEmail}`, { email: friendEmail });

export const removeFriendFromProjectApi = async (projectId, friendId) => axios.delete(`/projects/${projectId}/friends/${friendId}`);

export const deleteProjectByIdApi = async (id) => axios.delete(`/project/delete/${id}`);

export const addBillFileToProjectApi = async (projectId, billFileUrl) => axios.post(`/projects/${projectId}/billFile`, { billFileUrl: billFileUrl });
