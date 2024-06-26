//  create the store

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    // slices go here
    cart: cartSlice,
  },
});
