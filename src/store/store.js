import { configureStore } from '@reduxjs/toolkit'
import sessionSlice from '../reducers/session'
import newWorkOut from '../reducers/newWorkOut'
import { exercises } from '../reducers/exercises';
import currentRoutine from '../reducers/currentRoutine';


export default configureStore({
  reducer: { session: sessionSlice, newWorkout: newWorkOut, exercises: exercises, currentRoutine: currentRoutine }
})