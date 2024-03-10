import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartOutlined } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

import Health from "./Health";
import Workout from "./Workout";
import Device from "./Device";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();
const Links = [
  { label: "home", href: "/", icon: "fa-solid fa-heart" },
  { label: "home", href: "/", icon: "fa-solid fa-heart" },
  { label: "home", href: "/", icon: "fa-solid fa-heart" },
  { label: "home", href: "/", icon: "fa-solid fa-heart" },
  { label: "home", href: "/", icon: "fa-solid fa-heart" },
];
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={Health}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Health") {
            iconName = focused
              ? (icon = "fa-solid fa-heart")
              : (icon = "fa-regular fa-heart");
          } else if (route.name === "Workout") {
            iconName = focused
              ? (icon = "fa-solid fa-heart")
              : (icon = "fa-regular fa-heart");
          } else if (route.name === "Device") {
            iconName = focused
              ? (icon = "fa-solid fa-heart")
              : (icon = "fa-regular fa-heart");
          } else if (route.name === "Profile") {
            iconName = focused
              ? (icon = "fa-solid fa-heart")
              : (icon = "fa-regular fa-heart");
          }
          return <FontAwesomeIcon icon={iconName} />;
        },
      })}
    >
      <Tab.Screen name="Health" component={Health} />
      <Tab.Screen name="Workout" component={Workout} />
      <Tab.Screen name="Device" component={Device} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;
