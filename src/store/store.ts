import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import selectedIndexReducer from './selectUserSlice'

export const store = configureStore({
  reducer: {
    selectedIndex: selectedIndexReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
