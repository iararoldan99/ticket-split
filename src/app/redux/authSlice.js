import { createSlice } from '@reduxjs/toolkit';
import pic1 from '../assets/img/Pic.svg';
import pic2 from '../assets/img/Pic (1).svg';
import pic3 from '../assets/img/Pic (2).svg';

const initialState = {
    user: {
        email: 'iararoldan@gmail.com',
        username: 'iara',
        password: 'Tobogan_99!',
        monthlyBudget: 0,  
        projects: [
            {
                id: 1,
                name: 'Cumple de Fran',
                members: ['Fran', 'Carlos'],
            },
            {
                id: 2,
                name: 'Cena en casa',
                members: ['Ana', 'Juan', 'Sofia'],
            },
            {
                id: 3,
                name: 'Salida grupal',
                members: ['Pedro', 'María', 'Luis'],
            },
        ],
        movements: [
            {
                id: 1,
                name: 'Cumple de Fran',
                date: '01 de septiembre de 2024',
                amount: 3995,
                participants: 6,
                avatar: pic1,
            },
            {
                id: 2,
                name: 'Cena en casa',
                date: '04 de septiembre de 2024',
                amount: 5430,
                participants: 4,
                avatar: pic2,
            },
            {
                id: 3,
                name: 'Merienda',
                date: '10 de septiembre de 2024',
                amount: 6211,
                participants: 4,
                avatar: pic3,
            },
        ],
        friends: [
            { id: 1, name: 'Fran' },
            { id: 2, name: 'Ana' },
            { id: 3, name: 'Carlos' },
            { id: 4, name: 'Sofia' },
            { id: 5, name: 'Juan' },
            { id: 6, name: 'Pedro' },
            { id: 7, name: 'María' },
            { id: 8, name: 'Luis' },
        ],
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = {
                ...action.payload,
                projects: action.payload.projects || [],
                movements: action.payload.movements || [],
                friends: action.payload.friends || [],
            };
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        logout: (state) => {
            state.user = {
                email: '',
                username: '',
                password: '',
                monthlyBudget: 0,
                projects: [],
                movements: [],
                friends: [],
            };
            localStorage.removeItem('user');
        },
        register: (state, action) => {
            state.user = {
                ...action.payload,
                projects: [],
                movements: [],
                friends: [],
            };
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        loadUserFromLocalStorage: (state) => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);

                state.user = {
                    ...initialState.user,
                    ...parsedUser,
                    projects: parsedUser.projects.length > 0 ? parsedUser.projects : initialState.user.projects,
                    movements: parsedUser.movements.length > 0 ? parsedUser.movements : initialState.user.movements,
                    friends: parsedUser.friends.length > 0 ? parsedUser.friends : initialState.user.friends,
                };
            }
        },
        addMovementToUser: (state, action) => {
            if (state.user) {
                state.user.movements.push(action.payload);  
                localStorage.setItem('user', JSON.stringify(state.user));
            }
        },
        setMonthlyBudget: (state, action) => {
            state.user.monthlyBudget += action.payload; 
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        updateSaldo: (state, action) => {  
            state.user.monthlyBudget += action.payload;  
            localStorage.setItem('user', JSON.stringify(state.user));  
        },
    },
});

export const {
    login,
    logout,
    register,
    loadUserFromLocalStorage,
    addMovementToUser,
    setMonthlyBudget,
    updateSaldo,
} = authSlice.actions;

export default authSlice.reducer;