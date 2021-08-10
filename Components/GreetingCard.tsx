import React from "react";
import SongList from "../Components/SongList";
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
} from "native-base";

interface greetingProps {
  name: string;
  img: Function;
}

export default function GreetingCard({ name, img }: greetingProps) {
  return (
    <Box
      backgroundColor={"gray.700"}
      flex={1}
      rounded={"md"}
      overflow={"hidden"}
    >
      <HStack alignItems={"center"}>
        <Box width={12} height={12}>
          <Image
            //@ts-ignore
            source={img}
            alt={"poster"}
            size={"full"}
          />
        </Box>
        <Text color={"white"} fontSize={"sm"} fontWeight={"bold"} pl={2}>
          {name}
        </Text>
      </HStack>
    </Box>
  );
}
