import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import CartSlice from "./cart-slice";
import ProductSlice from "./products-slice";
import UserSlice from "./user-slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedUserReducer = persistReducer(persistConfig, UserSlice.reducer);
const persistedCartReducer = persistReducer(persistConfig, CartSlice.reducer);
const persistedProductReducer = persistReducer(
  persistConfig,
  ProductSlice.reducer
);
const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    products: persistedProductReducer,
    user: persistedUserReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export const persistor = persistStore(store);
export default store;
