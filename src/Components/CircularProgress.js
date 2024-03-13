import { View, Text, Dimensions } from "react-native";
import React from "react";
import { DangerZone, Svg } from "expo";

const { Animated } = DangerZone;
const { Value } = Animated;

const { Circle } = Svg;
const { width } = Dimensions.get("window");
const size = width - 32;
const strokeWidth = 50;
const radius = (size - strokeWidth) / 2;
const circumfernce = radius * 2 * Math.PI;

// interface CircularProgressProps {}

const CircularProgress = () => {
  const foo = 1;
  return (
    <Svg width={size} height={size}>
      <Circle
        stroke="#00ff00"
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        {...{ strokeWidth }}
      />
    </Svg>
  );
};

export default CircularProgress;
