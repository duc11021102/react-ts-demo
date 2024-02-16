import { combineReducers } from "@reduxjs/toolkit"
import usersSlice from "./user/userDataSlice"
import counterSlice from "./counter/counter-slice"
import authSlice from "./auth/authSlice"
const RootReducers = combineReducers({
  users: usersSlice.reducer,
  counter: counterSlice.reducer,
  auth: authSlice.reducer,
})

export default RootReducers
export type RootState = ReturnType<typeof RootReducers>
