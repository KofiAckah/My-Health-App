import React from "react";
import { View, Button, Alert } from "react-native";

const GenderPicker = () => {
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
    // Handle the selected gender
    console.log("Selected gender:", gender);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Select Gender" onPress={showGenderPicker} />
    </View>
  );
};

export default GenderPicker;
