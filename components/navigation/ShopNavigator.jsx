import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../screens/Home";
import Products from "../../screens/Products";
import Header from "../UI/Header";
import ProductDetail from "../../screens/ProductDetail";

const Stack = createNativeStackNavigator();
const ShopNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="products" component={Products} />
      <Stack.Screen name="productDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};
export default ShopNavigator;
