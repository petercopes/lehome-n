import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  title: {
    fontSize: 30,
  },
});

const Header = (props) => {
  const navHome = (
    <TouchableOpacity>
      <Ionicons
        name="home-outline"
        onPress={() => props.pressHandler("home")}
        size={32}
        color={"black"}
      />
    </TouchableOpacity>
  );
  const navProducts = (
    <TouchableOpacity
      onPress={() => {
        props.pressHandler("products");
      }}
    >
      <Ionicons name="pricetag-outline" size={32} color={"black"} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => props.pressHandler("home")}>
        <Text style={styles.title}>Le Homme</Text>
      </TouchableWithoutFeedback>
      <View>{props.screen === "home" ? navProducts : navHome}</View>
    </View>
  );
};
export default Header;
