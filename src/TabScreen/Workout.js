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
import { WorkOutData } from "../Data/WorkOutData";

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
  const [txtColor, setTxtColor] = useState(check[0]);

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
        data={WorkOutData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleColor(item.id)}
            className="mx-5"
          >
            <Text
              className={`text-${
                item.id === txtColor ? "white" : "primary-200"
              }`}
            >
              Page {item.name}
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
          <View
            className={`flex flex-row justify-between items-center`}
            style={{ width }}
          >
            <View>
              <Text className="text-white text-xl">Workout {item.id}</Text>
              <Text className="text-white">{item.des} </Text>
            </View>

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
