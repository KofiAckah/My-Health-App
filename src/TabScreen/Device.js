import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import HeadName from "../Components/HeadName";
import { useNavigation } from "@react-navigation/native";

const Device = () => {
  return (
    <View className="flex-1 bg-primary-100">
      <HeadName title="Devices" />
      <View className="flex-1 justify-center items-center">
        {/* <Image source={require("../../assets/Images/Working.gif")} /> */}
        <Text className="text-white font-semibold text-xl">
          Smart Devices Just for You
        </Text>
        <Text className="text-gray-400 text-[10px] my-3">
          Sleep, heart rate, and bloodd oxygen levels... Quick access to health
          data.
        </Text>
        <TouchableOpacity className="bg-primary-200 w-[75%] rounded-full mx-auto">
          <Text className="text-white font-semibold text-xl text-center my-2">
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Device;
