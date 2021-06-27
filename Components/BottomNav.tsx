import React from "react";
import { Box, Text, VStack, Image, HStack, Icon } from "native-base";
import * as VectorIcons from "@expo/vector-icons";

export default function BotttomNav() {
  return (
    <Box
      m={0}
      width={"100%"}
      backgroundColor={"gray.700"}
    >
      <HStack justifyContent={"space-evenly"} py={4}>
        <Box>
          <Icon as={<VectorIcons.Ionicons name={"home-outline"}/>}  color={"gray.400"} size={6}/>
        </Box>
        <Box>
          <Icon as={<VectorIcons.Feather name={"search"} />} color={"gray.400"} size={6}/>
        </Box>
        <Box>
          <Icon as={<VectorIcons.Ionicons name={"library-outline"} />} color={"gray.400"} size={6}/>
        </Box>
        <Box>
          <Icon as={<VectorIcons.SimpleLineIcons name={"social-spotify"} />} color={"gray.400"} size={6}/>
        </Box>
      </HStack>
    </Box>
  );
}
