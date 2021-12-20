import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../UI/Header";
import Cart from "../../screens/Cart";

const Stack = createNativeStackNavigator();
const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontFamily: "Font-Regular",
          fontSize: 25,
          padding: 5,
          color: "black",
        },
        tabBarShowLabel: false,
        title: "Your Cart",
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};
export default CartNavigator;
