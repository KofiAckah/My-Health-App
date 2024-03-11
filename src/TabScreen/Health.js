import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import HeadName from "../Components/HeadName";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Health = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1  bg-primary-100">
      <HeadName title="health" />
      <ScrollView>
        <View className="w-full flex">
          <View className="mx-3"></View>
          <View className="mx-3 flex flex-col">
            <Text className="text-white">Steps</Text>
            <Text className="text-white">3564/4000</Text>
            <Text className="text-white">Calories</Text>
            <Text className="text-white">146/300</Text>
            <Text className="text-white">Workout Duration</Text>
            <Text className="text-white">0/30</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Health;
