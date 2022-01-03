import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";
import store from "./store/index";
import { persistor } from "./store/index";
import { Provider } from "react-redux";
import MainNavigator from "./components/navigation";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from "expo-status-bar";
export default function App() {
  let [loaded] = useFonts({
    "Font-Regular": require("./assets/fonts/montserrat/Montserrat-Regular.ttf"),
    "Font-Bold": require("./assets/fonts/montserrat/Montserrat-Bold.ttf"),
    "Font-Thin": require("./assets/fonts/montserrat/Montserrat-Thin.ttf"),
    "Font-Light": require("./assets/fonts/montserrat/Montserrat-Light.ttf"),
    "Font-Medium": require("./assets/fonts/montserrat/Montserrat-Medium.ttf"),
    "Font-SemiBold": require("./assets/fonts/montserrat/Montserrat-SemiBold.ttf"),
    "Font-Black": require("./assets/fonts/montserrat/Montserrat-Black.ttf"),
    "Font-ExtraBold": require("./assets/fonts/montserrat/Montserrat-ExtraBold.ttf"),
  });

  return loaded ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="light-content" />
        <MainNavigator />
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading />
  );
}
