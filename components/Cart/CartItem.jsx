import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import images from "../images";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/cart-slice";
import { Ionicons } from "@expo/vector-icons";
const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    alignSelf: "center",
    width: "95%",
    borderRadius: 5,
    backgroundColor: "#f7f7f7",
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
  },
  image: {
    marginTop: 10,
    maxWidth: 50,
    maxHeight: 75,
  },
  info: {
    alignItems: "stretch",
  },
  text: {
    fontFamily: "Font-Bold",
    fontSize: 20,
    padding: 5,
  },
});
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const deleteFromCartHandler = () => {
    dispatch(CartActions.removeFromCart(product));
  };
  return (
    <View style={styles.shadowContainer}>
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <Image source={images.pant1} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.text}>{product.name}</Text>
            <Text style={styles.text}>${product.price}</Text>
          </View>
        </View>
        <Ionicons
          name="trash-outline"
          onPress={deleteFromCartHandler}
          size={32}
          color={"black"}
        />
      </View>
    </View>
  );
};
export default CartItem;
