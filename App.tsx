import { StatusBar } from "expo-status-bar";
import React from "react";
import SongTile from "./Screens/HomePage";
import { NativeBaseProvider, Box } from "native-base";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box bg={"gray.900"} safeArea>
        <SongTile />
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
