import { View, Text, Alert, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import HeadScreen from "../../Components/HeadScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PersonalInfoItems = (props) => {
  return (
    <View>
      <View className="flex flex-row justify-between">
        <Text className="text-white">{props.name}</Text>
        <View className="flex flex-row items-center">
          <Text className="text-gray-400">{props.item}</Text>
          <AntDesign name="right" color="grey" />
        </View>
      </View>
    </View>
  );
};

const PersonalInfo = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  useEffect(() => {
    // Load the selected gender when the component mounts
    loadSelectedGender();
  }, []);

  const loadSelectedGender = async () => {
    try {
      const gender = await AsyncStorage.getItem("selectedGender");
      if (gender !== null) {
        // If a gender is stored in AsyncStorage, set it as the selected gender
        setSelectedGender(gender);
      }
    } catch (error) {
      console.error("Error loading selected gender:", error);
    }
  };

  const saveSelectedGender = async (gender) => {
    try {
      // Save the selected gender to AsyncStorage
      await AsyncStorage.setItem("selectedGender", gender);
      // Update the selected gender in state
      setSelectedGender(gender);
    } catch (error) {
      console.error("Error saving selected gender:", error);
    }
  };

  const showGenderPicker = () => {
    Alert.alert(
      "Select Gender",
      null,
      [
        { text: "Male", onPress: () => handleGenderSelected("Male") },
        { text: "Female", onPress: () => handleGenderSelected("Female") },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  const handleGenderSelected = (gender) => {
    // Update the selected gender in state
    setSelectedGender(gender);
  };

  return (
    <View className="flex-1 bg-primary-100">
      <HeadScreen title="Personal Info" />
      <TouchableOpacity onPress={showGenderPicker} className="">
        <View className="flex flex-row justify-between">
          <Text className="text-white">Gender</Text>
          <View className="flex flex-row items-center">
            <Text className="text-gray-400">{selectedGender}</Text>
            <AntDesign name="right" color="grey" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PersonalInfo;
