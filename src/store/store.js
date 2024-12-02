import { configureStore } from '@reduxjs/toolkit'
import sessionSlice from '../reducers/session'
import newWorkOut from '../reducers/newWorkOut'

console.log(sessionSlice);

export default configureStore({
  reducer: { session: sessionSlice, newWorkout: newWorkOut }
})