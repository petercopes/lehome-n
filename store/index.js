import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart-slice";
import ProductSlice from "./products-slice";
import UserSlice from "./user-slice";

const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    products: ProductSlice.reducer,
    user: UserSlice.reducer,
  },
});
export default store;
