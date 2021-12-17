import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProductItem from "../components/Products/ProductItem";
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
const ProductDetail = ({ route }) => {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <ProductItem product={product} />
    </View>
  );
};
export default ProductDetail;
