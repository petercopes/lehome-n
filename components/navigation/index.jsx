import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../../screens/Home";
import Products from "../../screens/Products";
import Header from "../UI/Header";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
export default MainNavigator;
