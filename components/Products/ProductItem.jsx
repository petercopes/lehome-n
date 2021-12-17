import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 15,
    margin: "10%",
    maxHeight: 500,
    alignItems: "center",
  },
  image: {
    marginTop: 10,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    maxWidth: "90%",
    margin: 5,
    maxHeight: "80%",
  },
  info: {
    width: "100%",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    fontFamily: "MontSerrat-Bold",
  },
});
const ProductItem = ({ product, navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.info}>
        <Text>{product.name}</Text>
        <Text>${product.price}</Text>
      </View>
    </View>
  );
};
export default ProductItem;
