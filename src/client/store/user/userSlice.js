import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    username: '',
    email: '',
    name: '',
    description: '',
    location: '',
    monthlyBudget: 0,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      return state.user;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    setMonthlyBudget: (state, action) => {
      state.user.monthlyBudget = action.payload;
    },
  },
});

export const {
  getUser,
  updateUser,
  setMonthlyBudget,
} = userSlice.actions;

export default userSlice.reducer;
