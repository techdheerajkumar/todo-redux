import { createSlice } from "@reduxjs/toolkit";
  
export const dataBaseSlice = createSlice({
    name: 'database',
    initialState: [],
    reducers: {
        storeData: (state, action) =>{
            state.push(action.payload);
        }, 
        deleteItem: (state, action) =>{
            const idToRemove = action.payload
            return state.filter(a => a.id !== idToRemove);
        }
    }
})

export const {storeData, deleteItem} = dataBaseSlice.actions
export default dataBaseSlice.reducer