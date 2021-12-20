import { fetchProducts } from "../firebase/api";
import { ProductActions } from "./products-slice";
export const getProducts = () => {
  return async (dispatch) => {
    try {
      console.log("objeto");
      const res = await fetchProducts();
      if (res.length > 0) {
        dispatch(ProductActions.setProducts(res));
      } else {
        dispatch(ProductActions.setProducts([]));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
