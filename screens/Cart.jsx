import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: Dimensions.get("window").height,
    padding: 20,
    alignItems: "center",
  },
  mainImage: {
    width: "80%",
    height: "70%",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },
  cartContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
});
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.cartContainer}></View>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            contentContainerStyle={{ width: "100%" }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(data) => (
              <TouchableOpacity>
                <CartItem product={data.item} />
              </TouchableOpacity>
            )}
          />
        ) : (
          <Text>Your cart is empty</Text>
        )}
      </View>
    </SafeAreaView>
  );
};
export default Cart;
