import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: Dimensions.get("window").height,
    padding: 20,
    alignItems: "center",
  },
  mainImage: {
    width: "80%",
    height: "70%",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Font-Light",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.7,
  },
});
const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our Website</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <Ionicons name="arrow-back-outline" size={32} color={"black"} />
        </TouchableOpacity>
        <Image
          style={styles.mainImage}
          source={require("../assets/images/home1.jpg")}
        />
        <TouchableOpacity>
          <Ionicons name="arrow-forward-outline" size={32} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
