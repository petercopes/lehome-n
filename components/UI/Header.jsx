import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
  area: {
    backgroundColor: "white",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 35,
    fontFamily: "Font-Light",
  },
});

const Header = ({ navigation, route }) => {
  const navHome = (
    <TouchableOpacity>
      <Ionicons
        name="home-outline"
        onPress={() => navigation.navigate("home")}
        size={32}
        color={"black"}
      />
    </TouchableOpacity>
  );
  const navProducts = (
    <TouchableOpacity onPress={() => navigation.navigate("products")}>
      <Ionicons name="pricetag-outline" size={32} color={"black"} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => () => navigation.navigate("home")}
        >
          <Text style={styles.title}>Le Homme</Text>
        </TouchableWithoutFeedback>
        <View>{route.name === "home" ? navProducts : navHome}</View>
      </View>
    </SafeAreaView>
  );
};
export default Header;
