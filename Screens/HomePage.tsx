import { useNavigation } from '@react-navigation/native';
import React from "react";
import BotttomNav from "../Components/BottomNav";
import SongList from "../Components/SongList";
import { Box, Text, VStack, Image, HStack, Button } from "native-base";

interface homeProps {
  navigation?: any;
}

export default function HomePage({ navigation }: homeProps) {
  return (
    <Box safeArea h={"100%"} _web={{ h: "100vh" }} bg={"gray.900"}>
      {/* Lists */}
      <SongList type={"artist"} artist_name={"Arijit Singh"} title={" "} />

      {/* Bottom navigation */}
      <Box>
        <BotttomNav navigation={navigation}/>
      </Box>
    </Box>
  );
}
// "../assets/Images/temp.jpg"
// Eren Yager, Miskasa Ackerman, Levi Ackerman
