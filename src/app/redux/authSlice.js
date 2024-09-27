import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = {
        ...action.payload,
        proyectos: action.payload.proyectos || [],
      };
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    register: (state, action) => {
      state.user = {
        ...action.payload,
        proyectos: [],
      };
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    loadUserFromLocalStorage: (state) => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        state.user = JSON.parse(storedUser);
      }
    },
    addProjectToUser: (state, action) => {
      const newProject = action.payload;
      if (state.user) {
        state.user.proyectos.push(newProject);
        localStorage.setItem('user', JSON.stringify(state.user));
      }
    },
    updateUserProjectsInLocalStorage: (state) => {
      if (state.user) {
        localStorage.setItem('user', JSON.stringify(state.user));
      }
    }
  },
});

export const { login, logout, register, loadUserFromLocalStorage, addProjectToUser, updateUserProjectsInLocalStorage } = authSlice.actions;
export default authSlice.reducer;