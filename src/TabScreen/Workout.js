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
        className="flex-[0.1] my-2"
        data={WorkOutData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleColor(item.id)}
            className="mx-5"
          >
            <Text
              className={`text-${item.id === txtColor ? "red-500" : "white"}`}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
      />
      <FlatList
        ref={flatListRef}
        data={WorkOutData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className={`flex`} style={{ width }}>
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
            <Image source={item.image} className="w-full h-[50%]" />
            <View></View>
          </View>
        )}
        horizontal
        pagingEnabled
        onScroll={handleFlatListScroll}
      />
    </View>
  );
};

export default Workout;
