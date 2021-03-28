import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    startup: false,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
    startup: (state) => {
      state.startup = true;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  startup,
} = counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment(amount));
  }, 1000);
};

export const startupAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(startup(amount));
  }, 1000);
};

export const selectCount = (state) => state.counter;

export default counterSlice.reducer;
