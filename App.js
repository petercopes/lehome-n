import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./components/UI/Header";
import Home from "./screens/Home";
import Products from "./screens/Products";

export default function App() {
  const [page, setPage] = useState("home");

  const [loaded] = useFonts({
    MontSerrat: require("./assets/fonts/montserrat/Montserrat-Regular.ttf"),
    MontSerratBold: require("./assets/fonts/montserrat/Montserrat-Bold.ttf"),
    MontSerratThin: require("./assets/fonts/montserrat/Montserrat-Thin.ttf"),
  });
  const handlePress = (screen) => {
    setPage(screen);
  };
  const content = page === "home" ? <Home /> : <Products />;
  return { loaded } ? (
    <SafeAreaView>
      <Header pressHandler={handlePress} screen={page} />
      {content}
    </SafeAreaView>
  ) : (
    <AppLoading />
  );
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
