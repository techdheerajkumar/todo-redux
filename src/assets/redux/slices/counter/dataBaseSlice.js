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
        },
        updateItem: (state, action) =>{
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            } else {
                console.log("Item with the given ID not found.");
            }
        }   
    }
})

export const {storeData, deleteItem, updateItem} = dataBaseSlice.actions
export default dataBaseSlice.reducer