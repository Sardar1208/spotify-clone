import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Animated } from "react-native";
import SongList from "../Components/SongList";
import GreetingCard from "../Components/GreetingCard";
import AnimatedHeader from "../Components/AnimatedHeader";
import * as VectorIcons from "@expo/vector-icons";
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

export default function Playlist() {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <Box>
      <AnimatedHeader animatedValue={offset} />
      <ScrollView
        // style={{ flex: 1, backgroundColor: "white" }}
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: 220,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false }
        )}
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
