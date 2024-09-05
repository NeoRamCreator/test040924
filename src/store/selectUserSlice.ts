import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

interface SelectedIndexState {
  user: User | null;
}

const initialState: SelectedIndexState = {
  user: null
}

const selectedIndexSlice = createSlice({
  name: 'selectedIndex',
  initialState,
  reducers: {
    setIndex: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetIndex: (state) => {
      state.user = null;
    },
  },
});

export default selectedIndexSlice.reducer;
export const { setIndex, resetIndex } = selectedIndexSlice.actions;
