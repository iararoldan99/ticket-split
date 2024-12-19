import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjectsData: (state, action) => {
      state.projects = action.payload;
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const {projectId, updatedData} = action.payload;
      const projectIndex = state.projects.findIndex(project => project.id === projectId);
      if (projectIndex !== -1) {
        state.projects[projectIndex] = {...state.projects[projectIndex], ...updatedData};
      }
    },
    deleteProject: (state, action) => {
      const {projectId} = action.payload;
      state.projects = state.projects.filter(project => project.id !== projectId);
    },
    /*addExpenseToProjectSlice: (state, action) => {
      const {projectId, expense} = action.payload;
      const project = state.find(proj => proj.id === projectId);
      if (project) {
        project.expenses = project.expenses || [];
        project.expenses.push(expense);
      }
    }*/
    addExpenseToProjectSlice: (state, action) => {
      const { projectId, expense } = action.payload;
      const project = state.projects.find(proj => proj.id === projectId);
      if (project) {
        project.expenses = project.expenses || [];
        project.expenses.push(expense);
      }
    },
  },
});

export const { addExpenseToProjectSlice ,setProjectsData, addProject, updateProject, deleteProject} = projectSlice.actions;

export default projectSlice.reducer;
