import { createSlice } from "@reduxjs/toolkit";

// Named export
export const counterSlice = createSlice({
  name: "counter",
  initialState: 7, // Initial state is a number
  reducers: {
    increment: (state) => state + 1, // Return the new state
    decrement: (state) => state - 1, // Return the new state
    incrementByAmount: (state, action) => state + action.payload, // Return the new state using action.payload
    multiplier: (state, action) => state * action.payload
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multiplier } = counterSlice.actions;

export default counterSlice.reducer