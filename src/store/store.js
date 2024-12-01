import { configureStore } from '@reduxjs/toolkit'
import sessionSlice from '../reducers/session'

console.log(sessionSlice);

export default configureStore({
  reducer: { session: sessionSlice }
})