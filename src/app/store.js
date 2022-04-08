import { configureStore } from '@reduxjs/toolkit';
import gamePageReducer from '../features/gamepage/gamePageSlice';
import {loadState} from "../localStorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    gamepage: gamePageReducer,
  },
  preloadedState: persistedState
});
