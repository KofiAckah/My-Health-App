import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import HeadName from "../Components/HeadName";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
// import CircularProgress from "../Components/CircularProgress";

const Health = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1  bg-primary-100">
      <HeadName title="health" />
      <ScrollView>
        <View className="w-full flex flex-row justify-between items-center">
          <View className="mx-3">
            <View>
              <MaterialCommunityIcons name="shoe-sneaker" color="white" />
              <View className="w-40 h-40 bg-red-500 rounded-full flex items-center justify-center">
                <View className="w-32 h-32 bg-primary-100 rounded-full"></View>
              </View>
            </View>
            <View>
              <FontAwesome6 name="fire" color="white" />
            </View>
            <View>
              <FontAwesome6 name="clock" color="white" />
            </View>
          </View>
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
