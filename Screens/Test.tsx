import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
// import { Animated } from "react-native";
import SongList from "../Components/SongList";
import GreetingCard from "../Components/GreetingCard";
import AnimatedHeader from "../Components/AnimatedHeader";
import * as VectorIcons from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import {
  Box,
  Text,
  VStack,
  Image,
  HStack,
  Button,
  Icon,
  Spacer,
  ScrollView,
} from "native-base";

export default function Test() {
  const height = useSharedValue(250);

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      width: height.value,
    };
  });

  height.value = interpolate(0, [0, 250], [250, 40], Extrapolate.CLAMP);
  //   inputRange: [0, HEADER_HEIGHT + insets.top],
  //     outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
  //     extrapolate: "clamp",

  return (
    <Box safeArea>
      {/* <Button
        onPress={() => {
            height.value = withSpring(25);
        }}
        >
        Press me!
    </Button> */}
      <Animated.View
        style={[{ backgroundColor: "blue" }, headerStyle]}
      ></Animated.View>
      <ScrollView
        onScroll={(e) => {
          console.log("scroll values: ", e.nativeEvent.contentOffset.y);
          height.value = interpolate(
            e.nativeEvent.contentOffset.y,
            [40, 250],
            [250, 40],
            Extrapolate.CLAMP
          );
          //   height.value = e.nativeEvent.contentOffset.y;
        }}
      >
        <Box height={"94"} bg={"red.400"}>
          A
        </Box>
        <Box height={"94"} bg={"red.400"}>
          A
        </Box>
        <Box height={"94"} bg={"red.400"}>
          A
        </Box>
        <Box height={"94"} bg={"red.400"}>
          A
        </Box>
        <Box height={"94"} bg={"red.400"}>
          A
        </Box>
        <Box height={"94"} bg={"red.400"}>
          A
        </Box>
        <Box height={"94"} bg={"red.400"}>
          A
        </Box>
        <Box height={"94"} bg={"red.400"}>
          A
        </Box>
        <Box height={"94"} bg={"red.400"}>
          A
        </Box>
        <Box height={"94"} bg={"red.400"}>
          A
        </Box>
        <Box height={"94"} bg={"red.400"}>
          A
        </Box>
        <Box height={"94"} bg={"red.400"}>
          A
        </Box>
      </ScrollView>
    </Box>
  );
}
