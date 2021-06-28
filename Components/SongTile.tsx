import React from "react";
import { Box, Text, VStack, Image } from "native-base";

interface tileProps {
  image: string;
  creators: string;
}


export default function SongTile({ image, creators }: tileProps) {

    // console.log(image)

    return (
      <Box>
        <VStack>
          <Box width={40} height={40}>
            <Image
              // @ts-ignore
              source={{
                uri: image
              }}
              alt="alt"
              size="full"
              overflow={"hidden"}
            />
          </Box>
          <Box width={40} height={12}>
            <Text noOfLines={2} isTruncated={true} color={"gray.400"}>
              {creators}
            </Text>
          </Box>
        </VStack>
      </Box>
    );
  }