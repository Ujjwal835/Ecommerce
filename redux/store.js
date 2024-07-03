//  create the store

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import checkoutSlice from "./slices/checkoutSlice";

export const store = configureStore({
  reducer: {
    // slices go here
    cart: cartSlice,
    checkout: checkoutSlice,
  },
});
