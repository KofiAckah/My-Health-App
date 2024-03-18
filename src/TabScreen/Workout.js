import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import HeadName from "../Components/HeadName";
import { useNavigation } from "@react-navigation/native";

const Workout = () => {
  const check = [1, 2, 3, 4, 5, 6];
  const [txtColor, setTxtColor] = useState(true);

  function handleColor() {
    setTxtColor(!txtColor);
    // setTxtColor((!prevState) = !prevState, console.log(txtColor));
  }

  const { width } = useWindowDimensions();

  return (
    <View className="flex-1 bg-primary-100">
      <HeadName title="Workouts" />

      <FlatList
        className="bg-yellow-500 flex-[0.05]"
        data={check}
        renderItem={(items) => (
          <TouchableOpacity onPress={handleColor} className="mx-5">
            <Text className={`text-${txtColor ? "white" : "red-500"}`}>
              Page {items.item}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
      />
      <FlatList
        data={check}
        renderItem={(items) => (
          <View
            className={`flex flex-row justify-between items-center`}
            style={{ width }}
          >
            <Text className="text-white text-xl">Workout {items.item}</Text>
            <TouchableOpacity className="bg-primary-200 w-20 h-10 rounded-full flex justify-center items-center">
              <Text className="text-white">Start</Text>
            </TouchableOpacity>
          </View>
        )}
        horizontal
        pagingEnabled
      />
    </View>
  );
};

export default Workout;

{
  /* <ScrollView horizontal={true} className="bg-green-500 flex-[0.1]">
        {check.map((item) => (
          <Text className="text-white mx-5">S Page{item}</Text>
        ))}
      </ScrollView> */
}
