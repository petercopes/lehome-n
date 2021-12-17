import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { setStatusBarBackgroundColor } from "expo-status-bar";
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
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.7,
  },
});
const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Your Cart</Text>
        <View style={styles.imageContainer}>
          <Text>The cart is empty</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Cart;
