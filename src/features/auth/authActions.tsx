import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

interface ILoginParams {
  username: string
  password: string
}

const backendURL = "https://fakestoreapi.com"

const userLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }: ILoginParams, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
      const { data } = await axios.post(
        `${backendURL}/auth/login`,
        { username, password },
        config
      )
      // store user's token in local storage
      localStorage.setItem("userToken", data.token)
      return data
    } catch (error: any) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export default userLogin
