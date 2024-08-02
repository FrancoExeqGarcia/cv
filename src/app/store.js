import { configureStore } from '@reduxjs/toolkit'
import languageReducer from "../features/languages/languageSlice"

export const store = configureStore({
  reducer: {
    language: languageReducer
  },
})