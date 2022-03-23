import { configureStore } from '@reduxjs/toolkit';
import homePageReducer from '../features/homepage/homePageSlice';

export const store = configureStore({
  reducer: {
    homepage: homePageReducer
  },
});
