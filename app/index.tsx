import { router } from "expo-router";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import FirstScreen from "@/components/page-components/FirstScreen";
// import playSound from "@/hooks/playSound";

const Index = () => {
  const handleOnPress = () => {
    // playSound("../assets/sounds/start.mp3");
    router.push("/hub/pokedex");
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <FirstScreen />
    </TouchableOpacity>
  );
};

export default Index;
