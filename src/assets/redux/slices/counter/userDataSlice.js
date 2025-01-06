import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userInput",
  initialState: {
    firstName: "",
    lastName: "",
    description: "",
    id: 0,
  },
  reducers: {
    setInputValue: (state, action) => {
        const { name, value } = action.payload;
        state[name] = value;
      },
    setId: (state, action) => {
      state.id = action.payload;
    },
   
    resetInput: (state) => {
      Object.assign(state, initialState); // Properly reset the state to initial values
    },
  },
});
export const { setInputValue, setId, storeData, resetInput } =
  userDataSlice.actions;
export default userDataSlice.reducer;
