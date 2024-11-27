import useGetPkmnRandom from "@/hooks/useGetPkmnRandom";
import useGetPkmn from "@/hooks/useGetPokemons";
import useGetTypes from "@/hooks/useGetTypes";
import shuffleArray from "@/scripts/shuffleArray";
import styles from "@/styles/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const Index = () => {
  const randomPokemons = shuffleArray(useGetPkmn());
  const randomTypes = shuffleArray(useGetTypes());
  const randomPokemonName = useGetPkmnRandom();

  const searchByName = (pokemonName: string) => {
    router.push("/hub/pokedex/pokemons/details/" + pokemonName);
  };

  const showPokedex = () => {
    router.push("/hub/pokedex/pokemons/allPokemons");
  };
  const showTypes = () => {
    router.push("/hub/pokedex/types/allTypes");
  };

  const searchByType = (type: string) => {
    router.push("/hub/pokedex/types/details/" + type);
  };

  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
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
            source={require("../../../assets/images/logoPokeball.png")}
          />
          <Text style={{ fontSize: 20 }}>Dex</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: "white",
              height: 50,
              borderRadius: 12,
              width: "80%",
            }}
            placeholder="Chercher un Pokémon"
            onChangeText={setText}
            value={text}
            onSubmitEditing={() => searchByName(text)}
          />
          <TouchableOpacity onPress={() => searchByName(randomPokemonName)}>
            <Ionicons name="dice" size={32} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ display: "flex", gap: 20 }}>
        <TouchableOpacity onPress={showPokedex}>
          <Text style={{ fontSize: 20 }}>Consulter le Pokédex</Text>
        </TouchableOpacity>

        <FlatList
          data={randomPokemons}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(pokemon) => pokemon.pokedexId.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => searchByName(item.name)}
                style={styles.button}
              >
                <Image source={{ uri: item.sprite }} style={styles.image} />
                <Text style={styles.pokemonName}>{item.name}</Text>
                <Text style={styles.pokemonName}>No {item.pokedexId}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity onPress={showTypes}>
          <Text style={{ fontSize: 20 }}>Consulter les types</Text>
        </TouchableOpacity>

        <FlatList
          data={randomTypes}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(pokemon) => pokemon.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => searchByType(item.name)}
                style={styles.button}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.pokemonName}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Index;
