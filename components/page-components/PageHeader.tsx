import styles from "@/styles/styles";
import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import SearchBar from "../SearchBar";
import Ionicons from "@expo/vector-icons/Ionicons";

const PageHeader = () => {
  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          style={{ height: 80, width: 80 }}
          source={require("../../assets/images/logoPokeball.png")}
        />
        <Text style={{ fontSize: 20 }}>Dex</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TextInput
          style={{
            backgroundColor: "white",
            height: 50,
            borderRadius: 12,
            width: "80%",
          }}
          placeholder="Chercher un Pokémon"
        />
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            backgroundColor: "white",
            borderRadius: 40,
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PageHeader;
