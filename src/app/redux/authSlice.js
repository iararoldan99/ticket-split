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
        movements: action.payload.movements || [],
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
        movements: [],
      };
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    loadUserFromLocalStorage: (state) => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        state.user = JSON.parse(storedUser);
      }
    },
    addMovementToUser: (state, action) => {
      if (state.user) {
        state.user.movements.push(action.payload);
        localStorage.setItem('user', JSON.stringify(state.user));
      }
    },
  },
});

export const { login, logout, register, loadUserFromLocalStorage, addMovementToUser } = authSlice.actions;

export default authSlice.reducer;