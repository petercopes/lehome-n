import { fetchProducts, signUpUserinDB, verifyUserInDB } from "../firebase/api";
import { ProductActions } from "./products-slice";
import { UserActions } from "./user-slice";
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
export const signUpUser = (username, password) => {
  return async (dispatch) => {
    try {
      const userCredential = await signUpUserinDB(username, password);
      if (userCredential.user?.uid) {
        dispatch(
          UserActions.login(userCredential.user.email, userCredential.user.uid)
        );
      } else {
        throw new Error("Usuario no encontrado");
      }
    } catch (error) {
      dispatch(UserActions.setErrorMessage(error.message));
    }
  };
};
export const clearErrorMessage = () => {
  return (dispatch) => {
    dispatch(UserActions.setErrorMessage(" "));
  };
};
export const loginUser = (username, password) => {
  return async (dispatch) => {
    try {
      const userCredential = await verifyUserInDB(username, password);
      if (userCredential.user?.email) {
        dispatch(
          UserActions.login({
            username: userCredential.user.email,
            password: userCredential.user.uid,
          })
        );
      } else {
        throw new Error("Usuario no encontrado");
      }
    } catch (error) {
      dispatch(UserActions.setErrorMessage(error.message));
    }
  };
};
