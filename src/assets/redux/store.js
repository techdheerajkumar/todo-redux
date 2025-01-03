import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counter/counterSlice'
import  userDataSlice  from './slices/counter/userDataSlice';
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    userInput: userDataSlice
  },
});