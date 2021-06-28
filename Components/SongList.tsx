import React, { useEffect, useState } from "react";
import SongTile from "../Components/SongTile";
import ListTitle from "../Components/ListTitle";
import axios from "axios";
import { Box, Text, VStack, Image, HStack } from "native-base";

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
      //   const result = await fetch("https://source.unsplash.com/random");
      //   const res = await result.json();
      //   console.log("image", res);

      axios.get("https://source.unsplash.com/random").then(function (response) {
        // handle success
        console.log("image:", response);
        //@ts-ignore
        setImages([...images, response.config.url])
      });
    }
    fetchData();
  }, []);

  return (
    <Box mx={4} mt={4} flex={1}>
      <ListTitle
        // @ts-ignore
        title={title}
        type={type}
        artist_name={artist_name}
        artist_img={require("../assets/Images/temp.jpg")}
      />
      <HStack space={4}>
        <SongTile
          image={images[0]}
          creators={"Eren Yager, Miskasa Ackerman, Levi Ackerman"}
        />
        {/* <SongTile
          image={require("../assets/Images/temp.jpg")}
          creators={"Eren Yager, Miskasa Ackerman, Levi Ackerman"}
        /> */}
      </HStack>
    </Box>
  );
}
