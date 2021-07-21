import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import HomePage from "./Screens/HomePage";
import Search from "./Screens/Search";
import { AppContext } from "./AppContext";
import { NativeBaseProvider, Box } from "native-base";
import { StyleSheet, Text, View } from "react-native";

export default function App() {

  const [activePage, setActivePage] = useState("home");

  const AppState = {
    activePage,
    setActivePage
  }

  return (
    <AppContext.Provider value={AppState}>
      <NativeBaseProvider>
        <Box bg={"gray.900"} safeArea>
          <StatusBar style="light" />
          {/* <HomePage /> */}
          <Search />
        </Box>
      </NativeBaseProvider>
    </AppContext.Provider>
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
