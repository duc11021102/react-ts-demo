import { configureStore } from "@reduxjs/toolkit"
import RootReducers from "./rootReducer"
import { useDispatch } from "react-redux"
export const store = configureStore({
  reducer: RootReducers,
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
