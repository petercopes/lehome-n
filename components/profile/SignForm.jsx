import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage } from "../../store/actions";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: Dimensions.get("window").height,
    padding: 20,
  },
  mainImage: {
    width: "80%",
    height: "70%",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 40,
    fontFamily: "Font-Light",
  },
  subtitle: {
    fontSize: 26,
    textAlign: "center",
    marginTop: 70,
    fontFamily: "Font-Light",
  },
  helpText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 30,
    fontFamily: "Font-Light",
  },
  warnText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Font-Regular",
    color: "red",
  },
  formContainer: {
    marginTop: 20,
    backgroundColor: "#FAFAFA",
    borderRadius: 15,
    justifyContent: "space-around",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.5,
  },
  button: {
    width: "80%",
    backgroundColor: "rgba(0,0,0,0.25)",

    padding: 10,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "Font-Regular",
    fontSize: 28,
    color: "white",
  },
  input: {
    width: "100%",
    fontSize: 20,
    fontFamily: "Font-Regular",
    height: 50,
    borderColor: "rgba(0,0,0,0.25)",
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 5,
  },
  inputLabel: {
    fontFamily: "Font-Light",
    fontSize: 25,
    width: "100%",
  },
});
const SignForm = ({
  navigation,
  signHandler,
  titleText,
  subtitleText,
  ButtonText,
  navigationPath,
  navigationText,
}) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.user.errorMessage);
  useEffect(() => {
    return () => {
      dispatch(clearErrorMessage());
    };
  }, []);
  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.title}>{titleText}</Text>
          <View>
            <Text style={styles.subtitle}>{subtitleText}</Text>
            <View style={styles.formContainer}>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Please insert a valid Email account")
                    .required("Email is required"),
                  password: Yup.string()
                    .required("Password is required")
                    .min(6, "Password must be at least 6 characters"),
                })}
                validateOnChange={false}
                validateOnBlur={true}
                onSubmit={(values) => {
                  dispatch(signHandler(values.email, values.password));
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  touched,
                  errors,
                }) => (
                  <View style={{ width: "80%", alignItems: "center" }}>
                    <Text style={styles.inputLabel}>Username</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email-address"
                      k
                    />
                    {touched.email && errors.email && (
                      <Text style={styles.warnText}>{errors.email}</Text>
                    )}
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                      secureTextEntry={true}
                      style={styles.input}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                    />
                    {touched.password && errors.password && (
                      <Text style={styles.warnText}>{errors.password}</Text>
                    )}
                    <TouchableOpacity style={styles.button}>
                      <Text
                        style={styles.buttonText}
                        onPress={() => {
                          handleSubmit(values);
                        }}
                      >
                        {ButtonText}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </Formik>
              {errorMessage && (
                <View>
                  <Text style={styles.warnText}>{errorMessage}</Text>
                </View>
              )}
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(navigationPath);
                  dispatch(clearErrorMessage());
                }}
              >
                <Text style={styles.helpText}>{navigationText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
export default SignForm;
