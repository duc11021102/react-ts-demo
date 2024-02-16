import { createSlice } from "@reduxjs/toolkit"
import userLogin from "./authActions"

// initialize userToken from local storage
// const userToken = localStorage.getItem("userToken")
//   ? localStorage.getItem("userToken")
//   : null

const initialState = {
  loading: false,
  userInfo: null,
  userToken: "",
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, { payload }) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false
      state.userToken = payload.token
      state.success = true
    })
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false
      state.error = null
      state.success = false
    })
  },
})

export default authSlice
