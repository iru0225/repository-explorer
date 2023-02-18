import { configureStore } from "@reduxjs/toolkit";
import { reposSlice } from "../redux/repositories.slice";

export const store = configureStore({
  reducer: {
    repos: reposSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch