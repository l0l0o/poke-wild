import { TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = () => {
  return (
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
  );
};

export default SearchBar;
