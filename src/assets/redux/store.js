import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter/counterSlice'
import  userDataSlice  from './slices/counter/userDataSlice';
import dataBaseSlice from './slices/counter/dataBaseSlice';
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    userInput: userDataSlice,
    dataBase: dataBaseSlice
  },
});