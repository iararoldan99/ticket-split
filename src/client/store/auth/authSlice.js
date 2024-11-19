import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authData: {
        email: '',
        username: '',
        password: '',
        isAuthenticated: false,
        token: null,
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUserData: (state, action) => {
          state.authData = {
              ...action.payload,
          }
      },
      setAuthenticated: (state, action) => {
          state.authData.isAuthenticated = action.payload;
      },
      getUserData: (state, action) => {
          return state.authData;
      },
    },
});

export const {
  setUserData,
  getUserData,
  setAuthenticated,
} = authSlice.actions;

export default authSlice.reducer;
