// create a slice
// create reducers
// export the reducer and reducers

const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, salePrice, imageUrl } = action.payload;
      // check if item already exist
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        // update the quantity
        existingItem.qty += 1;
      } else {
        // if item dont exist add to cart
        state.push({ id, title, salePrice, qty: 1, imageUrl });
      }
    },
    removeFromCart: (state, action) => {},
    incrementQty: (state, action) => {},
    decrementQty: (state, action) => {},
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;
