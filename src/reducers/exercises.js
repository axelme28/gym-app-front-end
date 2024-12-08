import { createSlice } from '@reduxjs/toolkit'

export const exercises = createSlice(
  {
    name: 'exercises',
    initialState: {
      exercises: [],
    },
    reducers: {
      setExercises(state, payload) {
        state.exercises = payload;
      },
      deleteExercise(state, payload) {

      }
    }
  }
)

export const {
  setExercises
} = exercises.actions

export default exercises.reducer