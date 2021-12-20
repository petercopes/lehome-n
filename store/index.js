import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart-slice";
import productSlice from "./products-slice";

const store = configureStore({
  reducer: { cart: CartSlice.reducer, products: productSlice.reducer },
});
export default store;
