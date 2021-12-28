import React from "react";
import { loginUser } from "../store/actions";
import SignForm from "../components/profile/SignForm";

const Login = ({ navigation }) => {
  return (
    <SignForm
      navigation={navigation}
      signHandler={loginUser}
      titleText={"Welcome Back to LeHomme"}
      subtitleText={"Please Log In!"}
      ButtonText={"Log In"}
      navigationPath={"register"}
      navigationText={"Are you new? Create an account"}
    />
  );
};
export default Login;
