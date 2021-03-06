import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    maxHeight: screenHeight,
    backgroundColor: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  sectionOne: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    maxHeight: screenHeight * 0.95,
  },
  sectionTwo: {
    backgroundColor: "white",
    width: "100%",
    height: "auto",
    maxHeight: screenHeight,
  },
  image: {
    maxWidth: "95%",
    height: "80%",
    width: "95%",
    maxHeight: "80%",
  },
  info: {
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "Font-Bold",
    fontSize: 20,
  },
  descriptionText: {
    paddingHorizontal: 10,
    fontFamily: "Font-Light",
    fontSize: 18,
  },
  new: {
    width: "100%",
    paddingTop: 5,
    paddingLeft: 10,
    alignSelf: "flex-start",
    fontFamily: "Font-ExtraBold",
  },
  sizes: {
    padding: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    width: "100%",
    backgroundColor: "rgb(0,0,0)",

    padding: 10,
  },
  buttonText: {
    fontFamily: "Font-SemiBold",
    fontSize: 18,
    color: "white",
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
});
const ProductDetail = ({ route }) => {
  const dispatch = useDispatch();
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const addToCartHandler = () => {
    if (selectedSize === "") {
      setModalVisible(!modalVisible);
    } else {
      const productToAdd = {
        ...product,
        id: product.id + selectedSize,
        amount: 1,
        size: selectedSize,
      };
      console.log(productToAdd);
      dispatch(CartActions.addToCart(productToAdd));
    }
  };
  return (
    <View style={{ flex: 1 }}>
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
      <ScrollView contentContainerStyle={[styles.container]}>
        <View style={styles.sectionOne}>
          <Image
            source={{
              uri: product.imgsrc,
            }}
            style={styles.image}
          />
          {product.new && <Text style={styles.new}>NEW!</Text>}
          <View style={styles.info}>
            <View>
              <Text style={styles.text}>{product.name}</Text>
              <Text style={styles.text}>${product.price}</Text>
            </View>
            <TouchableOpacity onPress={addToCartHandler}>
              <View style={styles.addButton}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sectionTwo}>
          <Text style={styles.descriptionText}>
            {product.description.toUpperCase()}
          </Text>
          <View style={styles.sizes}>
            <TouchableOpacity onPress={() => setSelectedSize("S")}>
              <Text style={styles.text}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedSize("M")}>
              <Text style={styles.text}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedSize("L")}>
              <Text style={styles.text}>L</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ProductDetail;
