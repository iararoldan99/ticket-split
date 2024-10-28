import { createSlice } from '@reduxjs/toolkit';
import { MOVEMENT_TYPE } from '../../constants/constants';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    user: {
        monthlyBudget: 0,  
        projects: [],
        movements: [],
        friends: [],
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addMovement: (state, action) => {
            if (state.user) {
                state.user.movements.push(action.payload);  
                localStorage.setItem('user', JSON.stringify(state.user));
            }
        },
        setMonthlyBudget: (state, action) => {
            state.user.monthlyBudget += action.payload; 
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        addProject: (state, action) => {
            const project = action.payload;
        
            const newProject = {
                ...project,
                id: uuidv4(),  
                createdAt: new Date().toISOString(), 
                expenses: [], 
                members: [...(project.members || [])]
            };
        
            state.user.projects.push(newProject);
        },
        addExpense: (state, action) => {
            const { projectId, expense } = action.payload;
            const project = state.user.projects.find(p => p.id === projectId); 
        
            if (project) {
                const newExpense = {
                    ...expense,
                    id: uuidv4(),  
                    date: new Date().toISOString(),
                    movementType: MOVEMENT_TYPE.EXPENSE, 
                };
              
                project.expenses = [...(project.expenses || []), newExpense];
                state.user.movements.push(newExpense);
            }
        },
    },
});

export const {
    addMovement,
    setMonthlyBudget,
    addProject,
    addExpense
} = userSlice.actions;

export default userSlice.reducer;