import React, { useState } from "react";
import ArtistCard from "../Components/ArtistCard";
import * as VectorIcons from "@expo/vector-icons";
import SearchCategoryCard from "../Components/SearchCategoryCard";
import { StyleSheet } from "react-native";
import {
  Box,
  Text,
  VStack,
  Image,
  HStack,
  Input,
  Icon,
  Switch,
  Slider,
  ScrollView,
  Select,
} from "native-base";
import { backgroundColor, color, style } from "styled-system";

interface settingsProps {
  navigation: any;
}

export default function Settings({ navigation }: settingsProps) {
  const [hoverDisplay, sethoverDisplay] = useState("none");
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <Box safeArea h={"100%"} _web={{ h: "100vh" }} bg={"gray.900"} px={4}>
      <ScrollView>
        <Box>
          <Text color={"white"} fontSize={"sm"} fontWeight={"bold"}>
            Data Saver
          </Text>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Data Saver
          </Text>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
              Sets your music quality to low (equivalent to 24 kbit/s) and
              disables artist canvases.
            </Text>
            <Switch onTrackColor="green.800" onThumbColor="green.400" />
          </HStack>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Audio-only podcasts
          </Text>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
              Saves only the audio when downloading video podcasts.
            </Text>
            <Switch onTrackColor="green.800" onThumbColor="green.400" />
          </HStack>
        </Box>

        <Box mt={6}>
          <Text color={"white"} fontSize={"sm"} fontWeight={"bold"}>
            Account
          </Text>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Email
          </Text>
          <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
            sarthak.bakre@gmail.com
          </Text>
        </Box>

        <Box mt={6}>
          <Text color={"white"} fontSize={"sm"} fontWeight={"bold"}>
            Playback
          </Text>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Crossfade
          </Text>
          <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
            Allows you to crossfade between songs
          </Text>
          <HStack mt={2} alignItems={"center"}>
            <Text color={"gray.400"} fontSize={"xs"}>
              Off
            </Text>
            <Slider
              defaultValue={70}
              colorScheme="green"
              minValue={0}
              maxValue={12}
              flex={1}
              px={2}
              onChange={(v) => {
                setSliderValue(Math.floor(v));
              }}
              onChangeEnd={(v) => {
                v && setSliderValue(Math.floor(v));
              }}
            >
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb
                onTouchStart={() => {
                  sethoverDisplay("flex");
                }}
                onTouchEnd={() => {
                  sethoverDisplay("none");
                }}
              >
                <Box bg={"white"} d={hoverDisplay}>
                  <Text>{sliderValue}</Text>
                </Box>
              </Slider.Thumb>
            </Slider>
            <Text color={"gray.400"} fontSize={"xs"}>
              12s
            </Text>
          </HStack>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Gapless
          </Text>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
              Allows Gapless playback
            </Text>
            <Switch onTrackColor="green.800" onThumbColor="green.400" />
          </HStack>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Automix
          </Text>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
              Allows smooth transitions between songs in a playlist.
            </Text>
            <Switch onTrackColor="green.800" onThumbColor="green.400" />
          </HStack>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Allow Explicit Content
          </Text>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
              Turn on to play explicit content. Explicit content is labeled with
              E tag.
            </Text>
            <Switch onTrackColor="green.800" onThumbColor="green.400" />
          </HStack>
        </Box>

        <Box mt={6}>
          <Text color={"white"} fontSize={"sm"} fontWeight={"bold"}>
            Languages
          </Text>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Languages for music
          </Text>
          <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
            choose your preffered languages for music.
          </Text>
        </Box>

        <Box mt={6}>
          <Text color={"white"} fontSize={"sm"} fontWeight={"bold"}>
            Devices
          </Text>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Connect to a device
          </Text>
          <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
            Listen and control Spotify on your devices.
          </Text>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Show local devices only
          </Text>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
              Only show devices on your local WiFi or ethernet in the devices
              menu.
            </Text>
            <Switch onTrackColor="green.800" onThumbColor="green.400" />
          </HStack>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Spotify Connect in background
          </Text>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
              Allow Spotify Connect to keep Spotify running when the app is in
              the background.
            </Text>
            <Switch onTrackColor="green.800" onThumbColor="green.400" />
          </HStack>
        </Box>

        <Box mt={6}>
          <Text color={"white"} fontSize={"sm"} fontWeight={"bold"}>
            Car
          </Text>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Car
          </Text>
          <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
            Always pay full attention to the road and abide with all traffic
            traffic regulations.
          </Text>

          <Text color={"white"} fontSize={"sm"} mt={4}>
            Switch to car mode
          </Text>
          <HStack justifyContent={"space-between"}>
            <Text color={"gray.400"} w={"80%"} fontSize={"sm"}>
              When you are in a car you'll see car mode.
            </Text>
            {/* <VStack alignItems="center" space={4}>
              <Select
                // selectedValue={language}
                minWidth={200}
                accessibilityLabel="Select your favorite programming language"
                placeholder="Select your favorite programming language"
                // onValueChange={(itemValue) => setLanguage(itemValue)}
                // _selectedItem={{
                //   bg: "cyan.600",
                //   endIcon: <CheckIcon size={4} />,
                // }}
              >
                <Select.Item label="JavaScript" value="js" />
                <Select.Item label="TypeScript" value="ts" />
                <Select.Item label="C" value="c" />
                <Select.Item label="Python" value="py" />
                <Select.Item label="Java" value="java" />
              </Select>
            </VStack> */}
          </HStack>
        </Box>
      </ScrollView>
    </Box>
  );
}
