import React, { useState, useEffect } from "react";
import { Box, Text, VStack, Image, HStack } from "native-base";

interface titleProps {
  title: string;
  type: string;
  artist_name?: string;
  artist_img?: Function;
}

export default function ListTitle({ title, type, artist_name, artist_img }: titleProps) {
  const [myTitle, setMyTitle] = useState(<Box> </Box>);

  useEffect(() => {
    if (type == "default") {
      const temp = (
        <Box>
          <Text color={"white"} fontSize={"2xl"} fontWeight={"bold"} mb={4}>
            {title}
          </Text>
        </Box>
      );
      setMyTitle(temp);
    } else if (type == "artist") {
      const temp = (
        <Box mb={4}>
          <HStack alignItems={"center"}>
            <Box
              width={8}
              height={8}
              rounded={"full"}
              overflow={"hidden"}
              mr={2}
            >
              <Image
                // @ts-ignore
                source={artist_img}
                alt="alt"
                size="full"
                overflow={"hidden"}
              />
            </Box>
            <VStack>
              <Text fontSize={10} color={"gray.400"}>
                MORE LIKE
              </Text>
              <Text
                color={"white"}
                fontWeight={"bold"}
                fontSize={18}
                letterSpacing={1}
              >
                {artist_name}
              </Text>
            </VStack>
          </HStack>
          {/* <Text color={"white"} fontSize={"2xl"} fontWeight={"bold"} mb={4}>
            {title}
          </Text> */}
        </Box>
      );
      setMyTitle(temp);
    }
  }, []);

  return myTitle;
}
