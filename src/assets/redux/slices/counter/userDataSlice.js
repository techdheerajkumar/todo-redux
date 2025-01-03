import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: 'userInput',
    initialState: {
        firstName: '',
        lastName: '',
        id: null
    },
    reducers: {
        setInputValue: (state, action) =>{
            const {name, value} = action.payload;
            state[name] = value
        }
    }
})
export const {setInputValue, storeData} = userDataSlice.actions
export default userDataSlice.reducer;