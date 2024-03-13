import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import HeadName from "../Components/HeadName";
import { useNavigation } from "@react-navigation/native";

// Icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-primary-100">
      <HeadName title="Me" />
      <View className="mx-10">
        <TouchableOpacity className="flex flex-row items-center bg-red-500">
          <View className="rounded-full bg-gray-800 h-28 w-28 flex justify-center items-center">
            <FontAwesome name="user" color="white" size={70} />
          </View>
          <Text className="text-white ml-5">User Name</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="flex flex-row items-center m-4">
        <View className="rounded-full bg-primary-200 p-1 w-8 h-8 flex justify-center items-center">
          <FontAwesome name="user" color="white" size={20} />
        </View>
        <View className="flex flex-row justify-between items-center w-[78%] mx-5">
          <Text className="text-lg text-white">Personal Information</Text>
          <FontAwesome name="angle-right" color="white" size={27} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="flex flex-row items-center m-4">
        <View className="rounded-full bg-primary-600 p-1 w-8 h-8 flex justify-center items-center">
          <Octicons name="bell-fill" color="white" size={20} />
        </View>
        <View className="flex flex-row justify-between items-center w-[78%] mx-5">
          <Text className="text-lg text-white">Notifications</Text>
          <FontAwesome name="angle-right" color="white" size={27} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="flex flex-row items-center m-4">
        <View className="rounded-full bg-primary-700 p-1 w-8 h-8 flex justify-center items-center">
          <MaterialIcons name="info" color="white" size={20} />
        </View>
        <View className="flex flex-row justify-between items-center w-[78%] mx-5">
          <Text className="text-lg text-white">About</Text>
          <FontAwesome name="angle-right" color="white" size={27} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
