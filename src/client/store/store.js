import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/user/userSlice.js';
import projectReducer from '../store/project/projectSlice.js';
import movementReducer from '../store/movements/movementSlice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
    movement: movementReducer,
  },
});

