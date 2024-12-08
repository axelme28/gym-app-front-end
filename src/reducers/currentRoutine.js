import { createSlice } from "@reduxjs/toolkit";

export const currentRoutine = createSlice(
  {
    name: "currentRoutine",
    initialState: {
      data: {},
      show: false
    },
    reducers: {
      setCurrentRoutine(state, action) {
        state.data = action.payload;
      },
      setShow(state, action) {
        state.show = action.payload;
      }
    }
  }
);

export const {
  setCurrentRoutine,
  setShow
} = currentRoutine.actions

export default currentRoutine.reducer