import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
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
    width: 50,
    height: 75,
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
          <Image source={{ uri: product.imgsrc }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.text}>{product.name}</Text>
            <Text style={styles.text}>${product.price}</Text>
            <View style={{ flexDirection: "row", backgroundColor: "white" }}>
              <Ionicons
                name="add-outline"
                onPress={() => {
                  dispatch(
                    CartActions.updateAmountOnCart({
                      ...product,
                      amount: product.amount + 1,
                    })
                  );
                }}
                size={12}
                color={"black"}
              />
              <Text style={styles.text}>{product.amount}</Text>
              <Ionicons
                name="remove-outline"
                onPress={() => {
                  if (product.amount > 1) {
                    dispatch(
                      CartActions.updateAmountOnCart({
                        ...product,
                        amount: product.amount - 1,
                      })
                    );
                  }
                }}
                size={12}
                color={"black"}
              />
            </View>
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
