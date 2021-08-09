import React, { useState } from "react";
import * as VectorIcons from "@expo/vector-icons";
import SearchCategoryCard from "../Components/SearchCategoryCard";
import { StyleSheet } from "react-native";
import { Box, Text, VStack, Image, HStack, Input, Icon } from "native-base";
import { backgroundColor, color, style } from "styled-system";

interface searchProps {
  navigation?: any;
}

export default function Search({ navigation }: searchProps) {
  const [searchColor, setSearchColor] = useState("white");

  let styles = StyleSheet.create({
    searchBar: {
      backgroundColor: searchColor,
    },
  });

  return (
    <Box safeArea h={"100%"} _web={{ h: "100vh" }} bg={"gray.900"}>
      <Box mx={4} mt={4} flex={1}>
        {/* Search component */}
        <Text color={"white"} fontSize={32} fontWeight={"bold"} mb={2}>
          Search
        </Text>

        <Box style={styles.searchBar}>
          <Input
            InputLeftElement={
              <Icon
                as={<VectorIcons.Ionicons name={"search"} />}
                size="md"
                m={2}
                color={"gray.400"}
              />
            }
            fontWeight={"bold"}
            placeholder="Artists, songs, or podcasts"
            placeholderTextColor={"gray.600"}
            //@ts-ignore
            onPress={() => {
              setSearchColor("black");
            }}
          />
        </Box>

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
      {/* <Box>
        <BotttomNav navigation={navigation} />
      </Box> */}
    </Box>
  );
}
