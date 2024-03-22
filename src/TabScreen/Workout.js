import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import HeadName from "../Components/HeadName";
import { useNavigation } from "@react-navigation/native";
import { WorkOutData } from "../Data/WorkOutData";
import AntDesign from "react-native-vector-icons/AntDesign";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Workout = () => {
  const navigation = useNavigation();
  const check = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  const flatListRef = useRef(null);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const [txtColor, setTxtColor] = useState(WorkOutData[0].id);

  function handleColor(pageNumber) {
    setTxtColor(pageNumber);
    flatListRef.current.scrollToIndex({
      animated: true,
      index: pageNumber - 1,
    });
  }
  const { width } = useWindowDimensions();

  const handleFlatListScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const index = Math.round(contentOffset.x / width);
    setCurrentVisibleIndex(index);
    setTxtColor(index + 1);
  };

  return (
    <View className="flex-1 bg-primary-100">
      <HeadName title="Workouts" />
      <FlatList
        className="flex-[0.5] my-2 bg-yellow-500"
        data={WorkOutData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleColor(item.id)}
            className="mx-5"
          >
            <Text
              className={`text-${
                item.id === txtColor ? "red-500" : "white"
              } font-semibold text-base`}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        ref={flatListRef}
        data={WorkOutData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className={`flex`} style={{ width }}>
            {/* Display if Id <= 3 else don't display */}
            <View
              className={`${
                item.id <= 3 ? "block" : "hidden"
              } flex flex-row items-end ml-6 mt-10`}
            >
              <Text
                className={`text-white text-5xl font-semibold italic ${
                  item.id <= 3 ? "block" : "hidden"
                }`}
              >
                0.00
              </Text>
              <Text
                className={`text-gray-600 text-xl italic -top-1 ml-2 ${
                  item.id <= 3 ? "block" : "hidden"
                }`}
              >
                km
              </Text>
            </View>
            {/* Display if Id <= 3 else don't display */}
            <TouchableOpacity>
              <Text
                className={`text-gray-500  ${
                  item.id <= 3 ? "block" : "hidden"
                } ml-6 my-2`}
              >
                {item.des}{" "}
                <AntDesign name="caretright" className="text-gray-500" />
              </Text>
            </TouchableOpacity>
            {/* Display this image if id <= 3 */}
            <Image
              source={item.image}
              className={`w-full h-[50%] ${item.id <= 3 ? "block" : "hidden"}`}
            />
            {/* Display image if id is greater 3 */}
            <Image
              source={item.image}
              className={`w-[90%] h-[35%] ${
                item.id > 3 ? "block" : "hidden"
              } mx-auto rounded-xl`}
            />
            {/* Display if Id <= 3 else don't display */}
            <View
              className={`flex flex-row justify-between items-center mx-16 -bottom-20 ${
                item.id <= 3 ? "block" : "hidden"
              }`}
            >
              <View className="bg-primary-300 p-3 flex items-center justify-center rounded-full">
                <Foundation name="target-two" className="" size={35} />
              </View>
              <View className="bg-primary-200 p-6 flex items-center justify-center rounded-full">
                <FontAwesome6 name="person-running" color="white" size={50} />
              </View>
              <View className="bg-primary-300 p-3 flex items-center justify-center rounded-full">
                <MaterialIcons name="hexagon" className="" size={35} />
              </View>
            </View>
            {/* Display if Id greater than 3*/}
            <View
              className={`${
                item.id > 3 ? "block" : "hidden"
              } mx-auto w-[90%] mt-6`}
            >
              <Text className="text-white font-semibold text-lg">
                Getting started
              </Text>
              <Text className="text-gray-400 text-sm">
                With the smart watch you can track your workout data and
                progress:
              </Text>
              <Text className="text-gray-400 text-sm">
                1. Activate {item.name} mode on the watch.
              </Text>
              <Text className="text-gray-400 text-sm">
                2. Connect the watch to your phone. You cna view your workout
                data, such as calories burned and duration, on your phone
              </Text>
              <Text className="text-white font-semibold text-lg mt-7">
                Supported devices:
              </Text>
              <Text className="text-gray-400 text-sm">
                Tecno Watch 2, TECNO WATCH PRO, TECNO Watch 3, TECNO Watch Pro 2
              </Text>
            </View>
          </View>
        )}
        horizontal
        pagingEnabled
        onScroll={handleFlatListScroll}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Workout;
