import React from "react";
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import Health from "./Health";
import Workout from "./Workout";
import Device from "./Device";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();
// const tabBarHeight = useBottomTabBarHeight();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={Health}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ size, color, focused }) => {
          let iconName;
          if (route.name === "Health") {
            iconName = "heart";
            color = focused ? "#f46e0b" : "#7e7e7e";
          } else if (route.name === "Workout") {
            iconName = "run";
            color = focused ? "#f46e0b" : "#7e7e7e";
          } else if (route.name === "Device") {
            iconName = "watch";
            color = focused ? "#f46e0b" : "#7e7e7e";
            return <Feather name={iconName} size={size} color={color} />;
          } else if (route.name === "Me") {
            iconName = "person";
            color = focused ? "#f46e0b" : "#7e7e7e";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#f46e0b",
        inactiveTintColor: "#7e7e7e",
        labelStyle: {
          fontSize: 12,
        },
        activeBackgroundColor: "#262626",
        inactiveBackgroundColor: "#262626",
      }}
      tabBarStyle={{
        display: "flex",
      }}
    >
      <Tab.Screen name="Health" component={Health} />
      <Tab.Screen name="Workout" component={Workout} />
      <Tab.Screen name="Device" component={Device} />
      <Tab.Screen name="Me" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;
