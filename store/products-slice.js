import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
  },
  reducers: {
    setProducts(state, action) {
      state.productList = action.payload;
    },
    removeFromCart(state, action) {
      state.totalItems = state.totalItems - action.payload.amount;
      state.items = state.items.filter((e) => e.id !== action.payload.id);
    },
    updateAmountOnCart(state, action) {
      const productToUpdateIndex = state.items.findIndex(
        (e) => e.id === action.payload.id
      );
      state.totalItems =
        state.totalItems +
        (action.payload.amount - state.items[productToUpdateIndex].amount);
      state.items[productToUpdateIndex].amount = action.payload.amount;
    },
    emptyCart(state, action) {
      state.items = [];
      state.totalItems = 0;
    },
  },
});
export const ProductActions = productSlice.actions;
export default productSlice;
