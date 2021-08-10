import { useNavigation } from "@react-navigation/native";
import React from "react";
import SongList from "../Components/SongList";
import GreetingCard from "../Components/GreetingCard";
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

interface homeProps {
  navigation?: any;
}

export default function HomePage({ navigation }: homeProps) {
  return (
    <VStack
      safeArea
      h={"100%"}
      _web={{ h: "100vh" }}
      bg={"gray.900"}
      px={4}
      pt={4}
    >
      <HStack>
        <Text color={"white"} fontSize={"2xl"} fontWeight={"bold"} mb={4}>
          Good morning
        </Text>
        <Spacer />
        <Icon
          as={<VectorIcons.MaterialIcons name={"history"} />}
          color={"gray.300"}
          size={7}
        />
        <Icon
          as={<VectorIcons.Ionicons name={"settings-outline"} />}
          color={"gray.300"}
          ml={3}
          size={7}
        />
      </HStack>

      <Box mb={6}>
        <HStack space={4} my={1}>
          <GreetingCard name={"Daily Mix 1"} img={require("../assets/Images/image1.jpg")}/>
          <GreetingCard name={"All Out 00s"} img={require("../assets/Images/cat1.jpeg")}/>
        </HStack>

        <HStack space={4} my={1}>
          <GreetingCard name={"Playlist 1"} img={require("../assets/Images/cat2.png")}/>
          <GreetingCard name={"Daily Mix 2"} img={require("../assets/Images/cat3.jpg")}/>
        </HStack>

        <HStack space={4} my={1}>
          <GreetingCard name={"Liked Songs"} img={require("../assets/Images/image2.png")}/>
          <GreetingCard name={"Playlist 2"} img={require("../assets/Images/cat4.jpeg")}/>
        </HStack>
      </Box>

      {/* Lists */}
      <SongList type={"artist"} artist_name={"Arijit Singh"} title={" "} />
      {/* <SongList type={"default"} artist_name={"Arijit Singh"} title={"Shows to try"} /> */}
    </VStack>
  );
}
// "../assets/Images/temp.jpg"
// Eren Yager, Miskasa Ackerman, Levi Ackerman
