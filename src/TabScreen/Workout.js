import { View, Text } from "react-native";
import React from "react";
import HeadName from "../Components/HeadName";
import { useNavigation } from "@react-navigation/native";

const Workout = () => {
  return (
    <View className="flex-1 bg-primary-100">
      <HeadName title="Workouts" />
    </View>
  );
};

export default Workout;
