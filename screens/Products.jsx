import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProductItem from "../components/Products/ProductItem";
import { getProducts } from "../store/actions";
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
});
const itemList = [
  {
    id: 1,
    name: "JOGGER LAVADO",
    price: 4500,
    image: require("../assets/images/pant1.jpg"),
    new: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 2,
    name: "CAMISA RAYAS",
    price: 3000,
    image: require("../assets/images/camisa1.jpg"),
    new: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 3,
    name: "SUDADERA LAVADA",
    price: 3300,
    image: require("../assets/images/suda1.jpg"),
    new: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];
const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productList);
  useEffect(() => {
    const fetchProducts = async () => {
      console.log("vuelv");
      dispatch(getProducts());
    };
    console.log("useeffect");
    fetchProducts();
  }, []);
  return (
    <View style={styles.container}>
      {products.length > 0 ? (
        <FlatList
          data={products}
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
