import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UserActions } from "../store/user-slice";
const styles = StyleSheet.create({
  windowContainer: {
    backgroundColor: "white",
  },
  container: {
    height: Dimensions.get("window").height,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mainImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Font-Light",
  },
  imageContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 50,
  },
  helpText: {
    fontSize: 20,
    fontFamily: "Font-Light",
  },
  button: {
    fontFamily: "Font-Medium",
    width: "50%",
    padding: 20,
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
});
const Profile = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  return (
    <View style={styles.windowContainer}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome Back {user.user.username}!</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: user.userimg,
            }}
            style={styles.mainImage}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.helpText}>Edit Image</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(UserActions.logout());
          }}
          style={styles.button}
        >
          <Text style={styles.helpText}>Log Out</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
export default Profile;
