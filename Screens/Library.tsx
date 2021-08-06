import React, { useState } from "react";
import BotttomNav from "../Components/BottomNav";
import ArtistCard from "../Components/ArtistCard";
import * as VectorIcons from "@expo/vector-icons";
import SearchCategoryCard from "../Components/SearchCategoryCard";
import { StyleSheet } from "react-native";
import { Box, Text, VStack, Image, HStack, Input, Icon } from "native-base";
import { backgroundColor, color, style } from "styled-system";

export default function Library() {
  return (
    <Box safeArea h={"100%"} _web={{ h: "100vh" }} bg={"gray.900"} px={4}>
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <HStack alignItems={"center"} space={4}>
          <Box
            rounded={"full"}
            backgroundColor={"brown"}
            size={10}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>S</Text>
          </Box>

          <Text color={"white"} fontSize={22} fontWeight={"bold"}>
            Your Library
          </Text>
        </HStack>

        <HStack>
          <Icon
            as={<VectorIcons.EvilIcons name={"search"} />}
            size="md"
            m={2}
            color={"white"}
          />

          <Icon
            as={<VectorIcons.Ionicons name={"md-add"} />}
            size="md"
            m={2}
            color={"white"}
          />
        </HStack>
      </HStack>

      <HStack mt={2} space={2}>
        <Box border={1} px={3} py={1} borderColor={"gray.400"} rounded={"full"}>
          <Text color={"white"} fontSize={"sm"}>
            Artist
          </Text>
        </Box>
        <Box border={1} px={3} py={1} borderColor={"gray.400"} rounded={"full"}>
          <Text color={"white"} fontSize={"sm"}>
            Playlist
          </Text>
        </Box>
      </HStack>

      <VStack space={4} mt={8}>
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"}>
            <Icon
              as={<VectorIcons.FontAwesome name={"sort"} />}
              size="xs"
              m={2}
              color={"white"}
            />
            <Text color={"white"} fontSize={"xs"}>
              Recently Played
            </Text>
          </HStack>
          <Icon
            as={<VectorIcons.MaterialIcons name={"grid-view"} />}
            size="xs"
            m={2}
            color={"white"}
          />
        </HStack>
        <ArtistCard name={"The Local Train"}/>
        <ArtistCard name={"KK"}/>
        <ArtistCard name={"Arijit Singh"}/>
      </VStack>
    </Box>
  );
}
