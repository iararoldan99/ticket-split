import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/user/userSlice';
import authReducer, { loadUserFromLocalStorage } from '../store/auth/authSlice'; 

export const store = configureStore({
  reducer: {
    auth: authReducer, 
    user: userReducer,
  },
});

store.dispatch(loadUserFromLocalStorage());