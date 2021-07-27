import React from "react";
import BotttomNav from "../Components/BottomNav";
import * as VectorIcons from "@expo/vector-icons";
import SearchCategoryCard from "../Components/SearchCategoryCard";
import {
  Box,
  Text,
  VStack,
  Image,
  HStack,
  Input,
  Icon,
  Button,
  Pressable,
  Progress,
} from "native-base";
import { color } from "styled-system";

export default function PlayPage() {
  return (
    <Box
      safeArea
      w={"100%"}
      h={"100%"}
      _web={{ h: "100vh" }}
      px={4}
      bg={"gray.900"}
    >
      <HStack d={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Box>
          <Pressable>
            <Icon
              as={<VectorIcons.Entypo name={"chevron-thin-down"} />}
              color={"gray.400"}
              size={6}
            />
          </Pressable>
        </Box>

        <Box>
          <Text color={"gray.300"} textAlign={"center"} fontSize={"xs"}>
            SONG RADIO BASED ON
          </Text>
          <Text color={"white"} textAlign={"center"} fontSize={"sm"}>
            Mere Bina
          </Text>
        </Box>

        <Pressable>
          <Icon
            as={<VectorIcons.SimpleLineIcons name={"options-vertical"} />}
            color={"gray.400"}
            size={6}
          />
        </Pressable>
      </HStack>

      <Box my={6}>
        <Image
          source={require(`../assets/Images/image2.png`)}
          alt="category_banner"
          width={"100%"}
          height={80}
        />
      </Box>

      <Box mb={2}>
        <Text color={"white"} fontSize={"lg"} fontWeight={"bold"} mb={1}>
          Tera Hone Laga Hoon
        </Text>
        <Text color={"gray.300"} fontSize={"sm"}>
          Atif Aslam, Alisha Chinai, Pritam
        </Text>
      </Box>

      <Box mt={4}>
        <Progress bg={"grey"} colorScheme={"dark"} height={1} value={35} />
        <HStack justifyContent={"space-between"} mt={1}>
          <Text color={"grey"} fontSize={"sm"}>
            2:01
          </Text>
          <Text color={"grey"} fontSize={"sm"}>
            5:33
          </Text>
        </HStack>
      </Box>

      <HStack justifyContent={"space-between"} alignItems={"center"} mt={0}>
        <Icon
          as={<VectorIcons.Ionicons name={"heart-outline"} />}
          color={"gray.400"}
          size={8}
        />

        <Icon
          as={<VectorIcons.Entypo name={"controller-jump-to-start"} />}
          color={"white"}
          size={8}
        />

        <Box bg={"white"} rounded={"full"} p={5}>
          <Icon
            as={<VectorIcons.Entypo name={"controller-paus"} />}
            color={"black"}
            size={8}
          />
        </Box>

        <Icon
          as={<VectorIcons.Entypo name={"controller-next"} />}
          color={"white"}
          size={8}
        />

        <Icon
          as={<VectorIcons.Ionicons name={"remove-circle-outline"} />}
          color={"gray.400"}
          size={8}
        />
      </HStack>

      <HStack justifyContent={"space-between"} mt={6}>
        <Icon
          as={<VectorIcons.MaterialIcons name={"devices"} />}
          color={"gray.500"}
          size={6}
        />

        <Icon
          as={<VectorIcons.MaterialIcons name={"playlist-play"} />}
          color={"gray.500"}
          size={6}
        />
      </HStack>
    </Box>
  );
}
