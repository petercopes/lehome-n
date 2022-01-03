import React, { useEffect, useState } from "react";
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
  texAlert: {
    fontSize: 30,
    fontFamily: "Font-Light",
    color: "red",
    alignSelf: "center",
    position: "absolute",
    top: "50%",
  },
  loading: {
    fontSize: 30,
    fontFamily: "Font-Light",
    alignSelf: "center",
    position: "absolute",
    top: "50%",
  },
});

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const products = useSelector((state) => state.products.productList);
  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(getProducts());
    };

    fetchProducts();
    setLoaded(true);
  }, []);
  return (
    <View style={styles.container}>
      {loaded ? (
        products.length > 0 ? (
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
        )
      ) : (
        <Text style={styles.loading}>Loading</Text>
      )}
    </View>
  );
};
export default Products;
