import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from '../features/homepage/homePageSlice';
import gamePageReducer from '../features/gamepage/gamePageSlice';

export const store = configureStore({
  reducer: {
    homepage: homePageReducer,
    gamepage: gamePageReducer,
  },
});
