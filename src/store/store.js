import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use localStorage as the storage engine
import sessionSlice from "../reducers/session";
import newWorkOut from "../reducers/newWorkOut";
import { exercises } from "../reducers/exercises";
import currentRoutine from "../reducers/currentRoutine";

// Combine reducers into a single root reducer function
const rootReducer = combineReducers({
  session: sessionSlice,
  newWorkout: newWorkOut,
  exercises: exercises,
  currentRoutine: currentRoutine,
});

// Configure redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["session", "currentRoutine"], // Persist only these reducers
};

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create and configure the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Create persistor for rehydrating the state
export const persistor = persistStore(store);

export default store;