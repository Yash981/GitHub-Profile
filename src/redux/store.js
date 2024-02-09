import { configureStore } from '@reduxjs/toolkit'
import githubSlice from './features/Data.slice';
export const store = configureStore({
  reducer: {
    github: githubSlice
  },
})
