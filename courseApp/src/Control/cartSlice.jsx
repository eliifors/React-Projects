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

  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
