import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
interface UsersState {
  users: []
  loading: boolean
  error: null | unknown
}

const initialState = {
  users: [],
  loading: false,
  error: null,
} as UsersState

export const getUser = createAsyncThunk("getUser", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return response.data
})

export const usersSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, { payload }) => {
      state.loading = true
    })
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.loading = false
      state.users = payload
    })
    builder.addCase(getUser.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload
    })
  },
})

export default usersSlice
