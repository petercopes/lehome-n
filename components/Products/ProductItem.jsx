import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    alignItems: "center",
    height: 600,
    maxHeight: "100%",
  },
  image: {
    marginTop: 20,
    width: "95%",
    height: "90%",
  },
  info: {
    width: "100%",
    alignItems: "stretch",
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "Font-Bold",
    fontSize: 20,
  },
  new: {
    paddingTop: 10,
    paddingLeft: 10,
    alignSelf: "flex-start",
    fontFamily: "Font-ExtraBold",
  },
});
const ProductItem = ({ product }) => {
  console.log(product.imgsrc);
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imgsrc }} style={styles.image} />
      {product.new && <Text style={styles.new}>NEW!</Text>}
      <View style={styles.info}>
        <Text style={styles.text}>{product.name}</Text>
        <Text style={styles.text}>${product.price}</Text>
      </View>
    </View>
  );
};
export default ProductItem;
