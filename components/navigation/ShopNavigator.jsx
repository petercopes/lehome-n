import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../screens/Home";
import Products from "../../screens/Products";
import Header from "../UI/Header";

const Stack = createNativeStackNavigator();
const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <Header {...props} />,
        }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ShopNavigator;
