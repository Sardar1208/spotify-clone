import React, { useState, useEffect } from "react";
import { Box, Text, VStack, Image, HStack } from "native-base";

interface ArtistCardProps {
  name: String;
}

export default function ArtistCard({ name }: ArtistCardProps) {
  return (
    <Box>
      <HStack>
        <Box rounded={"full"} overflow={"hidden"} size={16}>
          <Image
            source={require(`../assets/Images/cat1.jpeg`)}
            alt={"artist"}
            size={"sm"}
          />
        </Box>

        <VStack ml={4} justifyContent={"center"}>
          <Text color={"white"} fontSize={18}>
            {name}
          </Text>
          <Text color={"gray.400"} fontSize={"xs"}>
            Artist
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
