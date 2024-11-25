import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  movements: [],
};

const movementSlice = createSlice({
  name: 'movements',
  initialState,
  reducers: {
    pushMovement: (state, action) => {
      state.movements.push(action.payload);
    },
    setMovements: (state, action) => {
      state.movements = action.payload;
    },
  },
});

export const {pushMovement, setMovements} = movementSlice.actions;

export default movementSlice.reducer;
