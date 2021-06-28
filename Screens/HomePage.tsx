import React from "react";
import BotttomNav from "../Components/BottomNav";
import SongList from "../Components/SongList";
import { Box, Text, VStack, Image, HStack } from "native-base";

export default function HomePage() {
  return (
    <Box safeArea h={"100%"} _web={{h:"100vh"}}>

      {/* Lists */}
      <SongList type={"artist"} artist_name={"Arijit Singh"} title={" "} />

      {/* Bottom navigation */}
      <Box>
        <BotttomNav />
      </Box>
    </Box>
  );
}
// "../assets/Images/temp.jpg"
// Eren Yager, Miskasa Ackerman, Levi Ackerman
