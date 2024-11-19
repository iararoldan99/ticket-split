import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  friends: [],
};

const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
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
    }
  },
});

export const {getFriends, setFriends, addFriend, updateFriend} = friendSlice.actions;

export default friendSlice.reducer;
