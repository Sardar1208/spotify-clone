import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { getRandomSuggestion } from "../Database/SearchPageData";
import { Box, Text, VStack, Image, HStack, Input, Icon } from "native-base";

export default function SearchCategoryCard() {

  const [cardCategory, setCardCategory] = useState("category");
  const [cardImage, setCardImage] = useState("cat1.jpeg");
  const [cardColor, setCardColor] = useState("red");

  useEffect(() => {
    const result = getRandomSuggestion();
    console.log("result: ", result);
    setCardCategory(result.category);
    setCardImage(result.image);
    setCardColor(result.color);
  }, []);

  return (
    <Box
      d={"flex"}
      flexDir={"row"}
      flex={1}
      height={24}
      rounded={"xl"}
      overflow={"hidden"}
      backgroundColor={cardColor}
      position={"relative"}
    >
      <Text color={"white"} fontWeight={"bold"} fontSize={"md"} m={2}>
        {cardCategory}
      </Text>
      <Image
        // source={require(`../assets/Images/${cardImage}`)}
        source={require(`../assets/Images/cat1.jpeg`)}
        alt="category_banner"
        size={"sm"}
        position={"absolute"}
        right={"-10%"}
        bottom={0}
        style={styles.image}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  image: {
    transform: [{ rotate: "25deg" }],
  },
});
