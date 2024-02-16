import { createSlice } from "@reduxjs/toolkit"

// Define slice state
interface CounterState {
  value: number
}

// Initial state
const initialState: CounterState = {
  value: 0,
}

// Define slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
    },
    decrement(state) {
      state.value -= 1
    },
  },
})

// Export actions
export const { increment, decrement } = counterSlice.actions
export default counterSlice
