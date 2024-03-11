import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import Health from "./Health";
import Workout from "./Workout";
import Device from "./Device";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={Health}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ size }) => {
          let iconName;
          if (route.name === "Health") {
            iconName = "heart";
          } else if (route.name === "Workout") {
            iconName = "run";
          } else if (route.name === "Device") {
            iconName = "watch";
            return <Feather name={iconName} size={size} />;
          } else if (route.name === "Profile") {
            iconName = "person";
            return <Ionicons name={iconName} size={size} />;
          }
          return <MaterialCommunityIcons name={iconName} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#1AB65C",
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 12,
        },
        activeBackgroundColor: "#181A20",
        inactiveBackgroundColor: "#181A20",
        height: 100,
      }}
    >
      <Tab.Screen name="Health" component={Health} />
      <Tab.Screen name="Workout" component={Workout} />
      <Tab.Screen name="Device" component={Device} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;
