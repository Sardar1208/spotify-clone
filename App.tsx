import React from "react";
import { NativeBaseProvider, Box, Text, Icon } from "native-base";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as VectorIcons from "@expo/vector-icons";
import HomePage from "./Screens/HomePage";
import Search from "./Screens/Search";
import Library from "./Screens/Library";
import { backgroundColor } from "styled-system";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: {
              backgroundColor: "#383838",
              borderColor: "transparent",
              justifyContent: "center",
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarIcon: ({ focused }) => {
                let iconName;
                return (
                  <Icon
                    as={
                      <VectorIcons.Ionicons
                        name={focused ? "home" : "home-outline"}
                      />
                    }
                    color={focused ? "white" : "gray.400"}
                    size={6}
                  />
                );
              },
              tabBarActiveTintColor: "white",
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({ focused }) => {
                let iconName;
                console.log("focused: ", focused);
                return (
                  <Icon
                    as={<VectorIcons.Feather name={"search"} />}
                    color={focused ? "white" : "gray.400"}
                    size={6}
                  />
                );
              },
              tabBarActiveTintColor: "white",
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Library"
            component={Library}
            options={{
              tabBarIcon: ({ focused }) => {
                let iconName;
                console.log("focused: ", focused);
                return (
                  <Icon
                    as={
                      <VectorIcons.Ionicons
                        name={focused ? "library" : "library-outline"}
                      />
                    }
                    color={focused ? "white" : "gray.400"}
                    size={6}
                  />
                );
              },
              tabBarActiveTintColor: "white",
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
