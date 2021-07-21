import React from "react";
import BotttomNav from "../Components/BottomNav";
import * as VectorIcons from "@expo/vector-icons";
import SearchCategoryCard from "../Components/SearchCategoryCard";
import { Box, Text, VStack, Image, HStack, Input, Icon } from "native-base";

export default function Search() {
  return (
    <Box safeArea h={"100%"} _web={{ h: "100vh" }}>
      <Box mx={4} mt={4} flex={1}>
        {/* Search component */}
        <Text color={"white"} fontSize={32} fontWeight={"bold"} mb={2}>
          Search
        </Text>

        <Input
          InputLeftElement={
            <Icon
              as={<VectorIcons.Ionicons name={"search"} />}
              size="md"
              m={2}
              color={"gray.400"}
            />
          }
          bg={"white"}
          fontWeight={"bold"}
          placeholder="Artists, songs, or podcasts" // mx={4}
          placeholderTextColor={"gray.600"}
        />

        {/* Browse Category */}
        <Text color={"white"} fontSize={16} fontWeight={"bold"} my={4}>
          Browse All
        </Text>

        <HStack space={2}>
          <SearchCategoryCard />
          <SearchCategoryCard />
        </HStack>
      </Box>

      {/* Bottom navigation */}
      <Box>
        <BotttomNav />
      </Box>
    </Box>
  );
}
