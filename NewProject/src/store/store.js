import { configureStore } from '@reduxjs/toolkit';
import eduReducer from './slicer';

export const store = configureStore({
  reducer: { edu: eduReducer },
});
