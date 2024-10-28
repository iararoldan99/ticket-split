import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; 

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
        login: (state, action) => {
            state.authData = {
                ...action.payload,
            };
            localStorage.setItem('authData', JSON.stringify(state.authData));
        },
        logout: (state) => {
            state.authData = {
                email: '',
                username: '',
                password: '',
            };
            localStorage.removeItem('user');
        },
        register: (state, action) => {
            state.authData = {
                ...action.payload,
            };
            localStorage.setItem('authData', JSON.stringify(state.authData));
        },
        loadUserFromLocalStorage: (state) => {
            const storedUser = localStorage.getItem('authData');
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);

                state.authData = {
                    ...initialState.user,
                    ...parsedUser,
                };
            }
        },
    },
});

export const {
    login,
    logout,
    register,
    loadUserFromLocalStorage,
} = authSlice.actions;

export default authSlice.reducer;