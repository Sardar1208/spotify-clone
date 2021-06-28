import React, { useState } from "react";
import { Box, Text, VStack, Image, HStack, Icon } from "native-base";
import * as VectorIcons from "@expo/vector-icons";
import { AppContext } from "../AppContext";

export default function BotttomNav() {
  //@ts-ignore
  const { activePage, setActivePage } = React.useContext(AppContext);

  return (
    <Box m={0} width={"100%"} backgroundColor={"gray.700"}>
      <HStack justifyContent={"space-evenly"} py={2}>
        <Box display={"flex"} alignItems={"center"}>
          <Icon
            as={<VectorIcons.Ionicons name={activePage != "home" ? "home-outline" : "home"} />}
            color={activePage != "home" ? "gray.400" : "white"}
            size={6}
          />
          <Text color={activePage != "home" ? "gray.400" : "white"} fontSize={10}>
            Home
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Icon
            as={<VectorIcons.Feather name={"search"} />}
            color={activePage != "search" ? "gray.400" : "white"}
            size={6}
          />
          <Text color={activePage != "search" ? "gray.400" : "white"} fontSize={10}>
            Search
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Icon
            as={<VectorIcons.Ionicons name={activePage != "library" ? "library-outline" : "library"} />}
            color={activePage != "library" ? "gray.400" : "white"}
            size={6}
          />
          <Text color={activePage != "library" ? "gray.400" : "white"} fontSize={10}>
            Library
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Icon
            as={<VectorIcons.FontAwesome name={"spotify"} />}
            color={activePage != "premium" ? "gray.400" : "white"}
            size={6}
          />
          <Text color={activePage != "premium" ? "gray.400" : "white"} fontSize={10}>
            Premium
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}
