import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectSlice';
import authReducer, { loadUserFromLocalStorage } from './authSlice'; 

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    auth: authReducer, 
  },
});

store.dispatch(loadUserFromLocalStorage());