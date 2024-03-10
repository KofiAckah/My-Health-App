import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import BottomTab from "./src/TabScreen/BottomTab";
import StackScreen from "./src/TabScreen/StackScreen";
import Health from "./src/TabScreen/Health";
import Workout from "./src/TabScreen/Workout";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar />
      {/* <Health />
      <Workout /> */}
      {/* <Text>Hello World</Text> */}
      {/* <BottomTab /> */}
      <StackScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
