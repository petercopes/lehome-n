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
  },
});
export const ProductActions = productSlice.actions;
export default productSlice;
