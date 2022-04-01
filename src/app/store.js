import { configureStore } from '@reduxjs/toolkit';
import gamePageReducer from '../features/gamepage/gamePageSlice';

export const store = configureStore({
  reducer: {
    gamepage: gamePageReducer,
  },
});
