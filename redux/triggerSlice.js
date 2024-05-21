// redux/triggerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const triggerSlice = createSlice({
  name: 'trigger',
  initialState: {
    getProductTrigger: false,
  },
  reducers: {
    toggleGetProduct: (state) => {
      state.getProductTrigger = !state.getProductTrigger;
    },
  },
});

export const { toggleGetProduct } = triggerSlice.actions;
export default triggerSlice.reducer;