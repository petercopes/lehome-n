import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet } from "react-native";
import MainNavigator from "./components/navigation";

export default function App() {
  const [loaded] = useFonts({
    MontSerrat: require("./assets/fonts/montserrat/Montserrat-Regular.ttf"),
    MontSerratBold: require("./assets/fonts/montserrat/Montserrat-Bold.ttf"),
    MontSerratThin: require("./assets/fonts/montserrat/Montserrat-Thin.ttf"),
  });

  return loaded ? <MainNavigator /> : <AppLoading />;
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "MontSerratBold",
  },
});
