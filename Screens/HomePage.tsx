import React from "react";
import SongTile from "../Components/SongTile";
import ListTitle from "../Components/ListTitle";
import BotttomNav from "../Components/BottomNav";
import { Box, Text, VStack, Image, HStack } from "native-base";

export default function HomePage() {
  return (
    <Box safeArea h={"100%"} _web={{h:"100vh"}}>

      {/* Lists */}
      <Box mx={4} mt={4} flex={1}>
        <ListTitle
          title={"Try something else"}
          type={"artist"}
          artist_name={"Arijit Singh"}
          artist_img={require("../assets/Images/temp.jpg")}
        />
        <HStack space={4}>
          <SongTile
            image={require("../assets/Images/temp.jpg")}
            creators={"Eren Yager, Miskasa Ackerman, Levi Ackerman"}
          />
          <SongTile
            image={require("../assets/Images/temp.jpg")}
            creators={"Eren Yager, Miskasa Ackerman, Levi Ackerman"}
          />
        </HStack>
      </Box>

      {/* Bottom navigation */}
      <Box>
        <BotttomNav />
      </Box>
    </Box>
  );
}
// "../assets/Images/temp.jpg"
// Eren Yager, Miskasa Ackerman, Levi Ackerman
