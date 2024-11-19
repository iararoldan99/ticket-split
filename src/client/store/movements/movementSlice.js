import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  movements: [], // Array para almacenar múltiples movimientos
};

const movementSlice = createSlice({
  name: 'movement',
  initialState,
  reducers: {
    setMovements: (state, action) => {
      state.movements = action.payload;
    },
    addMovement: (state, action) => {
      state.movements.push(action.payload);
    },
    updateMovement: (state, action) => {
      const {id, updatedData} = action.payload;
      const movementIndex = state.movements.findIndex(movement => movement.id === id);
      if (movementIndex !== -1) {
        state.movements[movementIndex] = {...state.movements[movementIndex], ...updatedData};
      }
    },
    deleteMovement: (state, action) => {
      const {id} = action.payload;
      state.movements = state.movements.filter(movement => movement.id !== id);
    },
  },
});

export const {setMovements, addMovement, updateMovement, deleteMovement} = movementSlice.actions;

export default movementSlice.reducer;
