import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      id: 1,
      name: 'Cumple de Fran',
      members: ['Fran', 'Carlos'],
      movements: []
    },
    {
      id: 2,
      name: 'Cena en casa',
      members: ['Ana', 'Juan', 'Sofia'],
      movements: []
    },
    {
      id: 3,
      name: 'Salida grupal',
      members: ['Pedro', 'María', 'Luis'],
      movements: []
    },
  ]
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
      addExpense: (state, action) => {
        const { projectId, expense } = action.payload;
        const project = state.projects.find(p => p.id === projectId);
        if (project) {
          project.movements.push(expense);
        }
      },
      addLoggedInUserToProject: (state, action) => {
        const { projectId, loggedInUser } = action.payload;
        const project = state.projects.find(p => p.id === projectId);
        if (project && !project.members.some(member => member.username === loggedInUser.username)) {
          project.members.push(loggedInUser); 
        }
      }
    }
  });

export const { addExpense, addLoggedInUserToProject } = projectSlice.actions;

export default projectSlice.reducer;