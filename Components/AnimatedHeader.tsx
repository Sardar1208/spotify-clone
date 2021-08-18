import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Animated, View } from "react-native";
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

const HEADER_HEIGHT = 200;
interface headerProps {
  animatedValue: any;
}

export default function AnimatedHeader({ animatedValue }: headerProps) {
  const insets = useSafeAreaInsets();
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
    extrapolate: "clamp",
  });
  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: headerHeight,
        backgroundColor: "lightblue",
        overflow:"hidden",
      }}
    >
      <Box justifyContent={"center"} alignItems={"center"}>
        <Box width={"64"} height={"64"}>
          <Image
            source={require("../assets/Images/temp.jpg")}
            alt={"poster"}
            size={"full"}
          />
        </Box>
      </Box>
    </Animated.View>
  );
}
