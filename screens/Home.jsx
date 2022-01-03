import React, { useState } from "react";
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
  const [image, setImage] = useState(
    "https://static.zara.net/photos///2021/S/0/2/p/0706/367/803/2/w/750/0706367803_2_1_1.jpg?ts=1633428472209"
  );
  const handleNext = () => {
    if (
      image ===
      "https://static.zara.net/photos///2021/S/0/2/p/0706/367/803/2/w/750/0706367803_2_1_1.jpg?ts=1633428472209"
    ) {
      setImage(
        "https://static.zara.net/photos///2021/I/L/2/p/2109/212/000/2/w/750/2109212000_1_1_1.jpg?ts=1631694929445"
      );
    } else if (
      image ===
      "https://static.zara.net/photos///2021/I/L/2/p/2109/212/000/2/w/750/2109212000_1_1_1.jpg?ts=1631694929445"
    ) {
      setImage(
        "https://static.zara.net/photos///2021/I/0/1/p/6361/651/800/12/w/750/6361651800_2_1_1.jpg?ts=1636538059410"
      );
    } else {
      setImage(
        "https://static.zara.net/photos///2021/S/0/2/p/0706/367/803/2/w/750/0706367803_2_1_1.jpg?ts=1633428472209"
      );
    }
  };
  const handlePrevious = () => {
    if (
      image ===
      "https://static.zara.net/photos///2021/S/0/2/p/0706/367/803/2/w/750/0706367803_2_1_1.jpg?ts=1633428472209"
    ) {
      setImage(
        "https://static.zara.net/photos///2021/I/0/1/p/6361/651/800/12/w/750/6361651800_2_1_1.jpg?ts=1636538059410"
      );
    } else if (
      image ===
      "https://static.zara.net/photos///2021/I/L/2/p/2109/212/000/2/w/750/2109212000_1_1_1.jpg?ts=1631694929445"
    ) {
      setImage(
        "https://static.zara.net/photos///2021/S/0/2/p/0706/367/803/2/w/750/0706367803_2_1_1.jpg?ts=1633428472209"
      );
    } else {
      setImage(
        "https://static.zara.net/photos///2021/I/L/2/p/2109/212/000/2/w/750/2109212000_1_1_1.jpg?ts=1631694929445"
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our Website</Text>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <Ionicons
            name="arrow-back-outline"
            size={32}
            color={"black"}
            onPress={handlePrevious}
          />
        </TouchableOpacity>
        <Image style={styles.mainImage} source={{ uri: image }} />
        <TouchableOpacity>
          <Ionicons
            name="arrow-forward-outline"
            size={32}
            onPress={handleNext}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
