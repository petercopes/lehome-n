import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ShopNavigator from "./components/navigation/ShopNavigator";
import Header from "./components/UI/Header";
import Home from "./screens/Home";
import Products from "./screens/Products";

export default function App() {
  const [loaded] = useFonts({
    MontSerrat: require("./assets/fonts/montserrat/Montserrat-Regular.ttf"),
    MontSerratBold: require("./assets/fonts/montserrat/Montserrat-Bold.ttf"),
    MontSerratThin: require("./assets/fonts/montserrat/Montserrat-Thin.ttf"),
  });

  return loaded ? <ShopNavigator /> : <AppLoading />;
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "MontSerratThin",
  },
});
