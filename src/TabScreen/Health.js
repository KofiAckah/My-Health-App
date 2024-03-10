import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Health = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <Text className="text-center text-green-500 text-xl">Health View</Text>
      <Text className="text-red-500">
        Open up App.js to start working on your app!
      </Text>
      <Button title="Click On Me" onPress={() => navigation.navigate("Help")} />
    </View>
  );
};

export default Health;
