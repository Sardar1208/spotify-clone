import React, { useEffect, useState } from "react";
import SongTile from "../Components/SongTile";
import ListTitle from "../Components/ListTitle";
import axios from "axios";
import { Box, Text, VStack, Image, HStack, ScrollView } from "native-base";

interface listProps {
  type: string;
  title?: string;
  artist_name?: string;
  artist_img?: string;
}

export default function SongList({
  type,
  title,
  artist_img,
  artist_name,
}: listProps) {
  const [temp, setTemp] = useState("none");
  const [images, setImages] = useState([]);

  //@ts-ignore
  useEffect(() => {
    async function fetchData() {
      //@ts-ignore
      let temp = [];
      for (let i = 0; i < 5; i++) {
        await axios
          .get("https://source.unsplash.com/random?sig=" + i)
          .then(function (response) {
            console.log("image:", response);
            //@ts-ignore
            temp.push(response.config.url);
            console.log("images: ", images);
          });
      }
      //@ts-ignore
      setImages(temp);
    }
    fetchData();
  }, []);

  return (
    <Box flex={1}>
      <ListTitle
        // @ts-ignore
        title={title}
        type={type}
        artist_name={artist_name}
        artist_img={require("../assets/Images/temp.jpg")}
      />
      <ScrollView horizontal={true}>
        <HStack space={4}>
          {images.map((image, key) => {
            return (
              <SongTile
                key={key}
                image={image}
                creators={"Eren Yager, Miskasa Ackerman, Levi Ackerman"}
              />
            );
          })}
        </HStack>
      </ScrollView>
    </Box>
  );
}
