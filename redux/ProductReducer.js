import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const adProductSlice = createSlice({
  name: 'adProduct',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const isItemExists = state.products.some(item => item.productId === action.payload.productId);
      if (!isItemExists) {
        state.products.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.itemsId !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = adProductSlice.actions;
export default adProductSlice.reducer;
