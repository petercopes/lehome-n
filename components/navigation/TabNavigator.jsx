import React from "react";
import ShopNavigator from "./ShopNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./CartNavigator";
import { Ionicons } from "@expo/vector-icons";

const BottomTabs = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="shopTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name="shopTab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-home"
                size={32}
                color={focused ? "black" : "gray"}
              />
            );
          },
        }}
      />
      <BottomTabs.Screen
        name="cartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="cart-outline"
              size={32}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};
export default TabNavigator;
