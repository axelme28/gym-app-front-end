import { createSlice } from '@reduxjs/toolkit'

export const newWorkOutSlice = createSlice(
  {
    name: 'newWorkOut',
    initialState: {
      title: '',
      exercises: []
    },
    reducers: {
      setTitle(state, action) {
        state.title = action.payload;
      },
      addExercise(state, action) {
        state.exercises.push(action.payload);
      },
      removeExercise(state, action) {
        state.exercises = state.exercises.filter(exercise => exercise.id !== action.payload.id);
      },
      removeAll(state) {
        state.exercises = []
      },
      addBatch(state, payload) {
        state.exercises = [...state.exercises, ...payload.payload.exercises]
      }
    }
  }
)

export const {
  setTitle,
  addExercise,
  removeExercise,
  addBatch
} = newWorkOutSlice.actions

export default newWorkOutSlice.reducer