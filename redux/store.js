import { configureStore } from "@reduxjs/toolkit";
import { demoReducer } from "./actions/demoSlice";
import adProductReducer from './ProductReducer'; // Import your reducer here
import triggerReducer from './triggerSlice';

export const store = configureStore({
  reducer: {
    demo: demoReducer,
    adProduct: adProductReducer,
    trigger: triggerReducer,
  },
});
