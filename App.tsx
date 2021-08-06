import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import HomePage from "./Screens/HomePage";
import Search from "./Screens/Search";
import PlayPage from "./Screens/PlayPage";
import Library from "./Screens/Library";
import { AppContext } from "./AppContext";
import { NativeBaseProvider, Box } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const AppState = {
    activePage,
    setActivePage,
  };

  // const config = {
  //   dependencies: {
  //     'linear-gradient': require('react-native-linear-gradient').default,
  //   },
  // };

  return (
    <NavigationContainer>
      <AppContext.Provider value={AppState}>
        <NativeBaseProvider>
          <Box bg={"gray.900"} h="100%" _web={{h:"100vh"}} w="100%" safeArea>
            <StatusBar style="light" />
            <Stack.Navigator initialRouteName="Home" headerMode={"none"}>
              <Stack.Screen name="Home" component={Library}/>
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="Play" component={PlayPage} />
            </Stack.Navigator>
            {/* <HomePage /> */}
            {/* <Search /> */}
            {/* <PlayPage /> */}
          </Box>
        </NativeBaseProvider>
      </AppContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
