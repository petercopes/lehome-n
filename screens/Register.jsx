import React from "react";

import { signUpUser } from "../store/actions";
import SignForm from "../components/profile/SignForm";

const Register = ({ navigation }) => {
  return (
    <SignForm
      navigation={navigation}
      signHandler={signUpUser}
      titleText={"Welcome to LeHomme"}
      subtitleText={"Please fill the form to register!"}
      ButtonText={"Create Account"}
      navigationPath={"login"}
      navigationText={"Already have an account? Log in"}
    />
  );
};
export default Register;
