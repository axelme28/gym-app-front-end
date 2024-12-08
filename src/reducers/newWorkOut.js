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
      },
      setExerciseValue(state, action) {
        const exercise = state.exercises.find(exercise => exercise.id === action.payload.id);
        exercise[action.payload.key] = action.payload.value;
      }
    }
  }
)

export const {
  setTitle,
  addExercise,
  removeExercise,
  addBatch,
  setExerciseValue
} = newWorkOutSlice.actions

export default newWorkOutSlice.reducer