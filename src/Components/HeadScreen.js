import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

const HeadScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View className="fixed h-14 w-full top-0 flex flex-row items-center pl-6">
      <AntDesign
        name="arrowleft"
        size={30}
        color="white"
        onPress={() => navigation.goBack()}
      />
      <Text className="text-white m-1 ml-6 text-2xl font-semibold capitalize">
        {props.title}
      </Text>
    </View>
  );
};

export default HeadScreen;
