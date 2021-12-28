import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/Profile";
import Login from "../../screens/Login";
import Register from "../../screens/Register";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();
const ProfileNavigator = ({ navigation }) => {
  const userLogged = useSelector((state) => state.user.isLoggedIn);
  return (
    <Stack.Navigator
      initialRouteName={userLogged ? "profile" : "login"}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {userLogged ? (
        <Stack.Screen name="profile" component={Profile} />
      ) : (
        <>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};
export default ProfileNavigator;
