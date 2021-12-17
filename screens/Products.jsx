import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ProductItem from "../components/Products/ProductItem";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
    width: "100%",
  },
  productList: {
    padding: 15,
    height: "100%",
  },
});
const itemList = [
  {
    id: 1,
    name: "JOGGER LAVADO",
    price: 4500,
    image: require("../assets/images/pant1.jpg"),
  },
  {
    id: 2,
    name: "CAMISA RAYAS",
    price: 3000,
    image: require("../assets/images/camisa1.jpg"),
  },
  {
    id: 3,
    name: "SUDADERA LAVADA",
    price: 3300,
    image: require("../assets/images/suda1.jpg"),
  },
];
const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {itemList.length > 0 ? (
        <FlatList
          style={styles.productList}
          data={itemList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(data) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("productDetail", { product: data.item })
              }
            >
              <ProductItem product={data.item} onPress={() => {}} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.texAlert}>No products available</Text>
      )}
    </View>
  );
};
export default Products;
