import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Modal,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UserActions } from "../store/user-slice";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "40%",
    height: "10%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
  },
  overlayInnactive: {
    backgroundColor: "black",
  },
  overlayActive: {
    backgroundColor: "black",
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
  const [modalVisible, setModalVisible] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const handleImageTake = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!image.cancelled) {
      const fileName = `${user.user.uid}.jpg`;
      dispatch(UserActions.setImage(image.uri));
    }
  };
  return (
    <View style={styles.windowContainer}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Ionicons
              name="close-outline"
              onPress={() => setModalVisible(!modalVisible)}
              size={32}
              color={"black"}
            />
            <Text style={styles.modalText}>Seleccione un talle</Text>
          </View>
        </View>
      </Modal>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Welcome Back {user.user.username}!</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: user.userimg,
            }}
            style={styles.mainImage}
          />
          <TouchableOpacity
            onPress={() => {
              handleImageTake();
            }}
          >
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
