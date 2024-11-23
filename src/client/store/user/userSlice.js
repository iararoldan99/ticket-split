import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    username: '',
    email: '',
    name: '',
    description: '',
    location: '',
    monthlyBudget: 0,
    isAuthenticated: false,
    token: null,
    friends: [],
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
    setUserData: (state, action) => {
      state.user = {
        ...action.payload,
      }
    },
    setAuthenticated: (state, action) => {
      state.user.isAuthenticated = action.payload;
    },
    getUserData: (state, action) => {
      return state.user;
    },
    setFriends: (state, action) => {
      state.friends = action.payload;
    },
    addFriend: (state, action) => {
      state.friends.push(action.payload);
    },
    updateFriend: (state, action) => {
      const {username, projectId, newInfo} = action.payload;
      const friendIndex = state.friends.findIndex(
        friend => friend.username === username || friend.projectId === projectId
      );

      if (friendIndex !== -1) {
        state.friends[friendIndex] = {...state.friends[friendIndex], ...newInfo};
      }
    },
    getFriends: (state, action) => {
      return state.friends;
    },
  },
});

export const {
  getUser,
  updateUser,
  setMonthlyBudget,
  updateFriend,
  getFriends,
  addFriend,
  setFriends,
  getUserData,
  setAuthenticated,
  setUserData,
} = userSlice.actions;

export default userSlice.reducer;
