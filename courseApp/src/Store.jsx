import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Control/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
