// create a slice
// create initial state
// create reducers
// export the reducer and reducers

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentStep: 1,
  checkoutFormData: {},
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    // functions used o manipulate state
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateCheckoutFormData: (state, action) => {
      state.checkoutFormData = {
        ...state.checkoutFormData,
        ...action.payload,
      };
    },
  },
});

export const { setCurrentStep, updateCheckoutFormData } = checkoutSlice.actions;

export default checkoutSlice.reducer;
