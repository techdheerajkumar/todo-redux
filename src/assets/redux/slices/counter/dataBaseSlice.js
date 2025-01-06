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
            console.log(state)
            console.log(action.payload)
            state.splice(state.id, 1, action.payload)
        }   
    }
})

export const {storeData, deleteItem, updateItem} = dataBaseSlice.actions
export default dataBaseSlice.reducer