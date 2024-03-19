import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import HeadName from "../Components/HeadName";
import { useNavigation } from "@react-navigation/native";

const Workout = () => {
  const navigation = useNavigation();
  const check = [1, 2, 3, 4, 5, 6];
  const flatListRef = useRef(null);
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const [txtColor, setTxtColor] = useState(1);

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
        className="bg-yellow-500 flex-[0.05]"
        data={check}
        renderItem={(items) => (
          <TouchableOpacity
            onPress={() => handleColor(items.item)}
            className="mx-5"
          >
            <Text
              className={`text-${
                items.item === txtColor ? "white" : "primary-200"
              }`}
            >
              Page {items.item}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
      />
      <FlatList
        ref={flatListRef}
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
        onScroll={handleFlatListScroll}
      />
    </View>
  );
};

export default Workout;
