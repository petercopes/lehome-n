import React, { useEffect } from "react";
import ShopNavigator from "./ShopNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./CartNavigator";
import { Ionicons } from "@expo/vector-icons";
import ProfileNavigator from "./ProfileNavigator";
import { useSelector } from "react-redux";

const BottomTabs = createBottomTabNavigator();
const TabNavigator = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <BottomTabs.Navigator
      initialRouteName={isLoggedIn ? "shopTab" : "profileTab"}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {isLoggedIn && (
        <>
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
        </>
      )}
      <BottomTabs.Screen
        name="profileTab"
        component={ProfileNavigator}
        options={
          isLoggedIn
            ? {
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name="person-outline"
                    size={32}
                    color={focused ? "black" : "gray"}
                  />
                ),
              }
            : {
                tabBarIcon: ({ focused }) => null,
              }
        }
      />
    </BottomTabs.Navigator>
  );
};
export default TabNavigator;
