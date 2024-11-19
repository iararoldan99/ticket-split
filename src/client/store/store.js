import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/user/userSlice.js';
import authReducer from '../store/auth/authSlice.js';
import projectReducer from '../store/project/projectSlice.js';
import friendReducer from '../store/friends/friendSlice.js';
import movementReducer from '../store/movements/movementSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    project: projectReducer,
    friend: friendReducer,
    movement: movementReducer,
  },
});

