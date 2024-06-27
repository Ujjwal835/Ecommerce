// create a slice
// create reducers
// export the reducer and reducers

const { createSlice } = require("@reduxjs/toolkit");

// get initial state from localStorage if available
const initialState =
  (typeof window !== "undefined" && JSON.parse(localStorage.getItem("cart"))) ||
  [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, salePrice, imageUrl } = action.payload;
      // check if item already exist in the cart
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        // update the quantity
        existingItem.qty += 1;
      } else {
        // if item dont exist add to cart
        const newItem = { id, title, salePrice, qty: 1, imageUrl };
        state.push(newItem);
        // update local storage with the new state
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify([...state]));
        }
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      const newState = state.filter((item) => item.id !== cartId);
      // update local storage with new state
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(newState));
      }
      return newState;
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem) {
        cartItem.qty += 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify([...state]));
        }
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item) => item.id === cartId);
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify([...state]));
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;
