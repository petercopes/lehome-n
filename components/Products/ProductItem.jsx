import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FastImage from "react-native-fast-image";
import images from "../images";
const styles = StyleSheet.create({
  container: {
    maxHeight: 500,
    alignItems: "center",
  },
  image: {
    marginTop: 10,
    maxWidth: "95%",

    maxHeight: "80%",
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
      <Image source={images.pant1} style={styles.image} />
      {product.new && <Text style={styles.new}>NEW!</Text>}
      <View style={styles.info}>
        <Text style={styles.text}>{product.name}</Text>
        <Text style={styles.text}>${product.price}</Text>
      </View>
    </View>
  );
};
export default ProductItem;
