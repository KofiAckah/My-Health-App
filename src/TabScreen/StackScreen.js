import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./BottomTab";
import Help from "../Screens/Help";

// Profile Screens
import ProfileInfo from "../Screens/Profile/PersonalInfo";

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Help" component={Help} />
        {/* Profile Screens */}
        <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackScreen;
