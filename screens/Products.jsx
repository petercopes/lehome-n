import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    margin: 20,
  },
});
const itemList = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];
const Products = (props) => {
  return (
    <View style={styles.container}>
      {itemList.length > 0 ? (
        <FlatList
          data={itemList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(data) => <Text>{data.item.name}</Text>}
        />
      ) : (
        <Text style={styles.texAlert}>No products available</Text>
      )}
    </View>
  );
};
export default Products;
