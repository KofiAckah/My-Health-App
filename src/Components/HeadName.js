import { View, Text } from "react-native";
import React from "react";

const HeadName = (props) => {
  return (
    <View className="fixed h-14 w-full top-0">
      <Text className="text-white absolute bottom-0 m-1 ml-4 text-2xl font-semibold capitalize">
        {props.title}
      </Text>
    </View>
  );
};

export default HeadName;
