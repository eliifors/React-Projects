import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cartItems: courseItems,
  quantity: courseItems.length,
  total: courseItems.reduce((total, item) => total + item.price, 0),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.total -= state.cartItems[index].price;
        state.cartItems.splice(index, 1);
        state.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
