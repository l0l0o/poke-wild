import useGetPkmnByGeneration from "@/hooks/useGetPkmnByGeneration";
import useGetPkmns from "@/hooks/useGetPokemons";
import styles from "@/styles/styles";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";

const allPokemons = () => {
  const pokemons = useGetPkmns();
  const searchByName = (pokemonName: number) => {
    router.push("/hub/pokedex/pokemons/details/" + pokemonName);
  };

  const filterByGeneration = (generation: number) => {
    router.push("/hub/pokedex/pokemons/" + generation);
  };

  const generations = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={generations}
        keyExtractor={(item) => item.toString()} // Utilise l'élément comme clé
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => filterByGeneration(item)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              width: 40,
              height: 40,
              marginRight: 4,
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <Text>Pokédex</Text>
      <FlatList
        data={pokemons}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        keyExtractor={(pokemon) => pokemon.pokedexId.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() => searchByName(item.name)}
              style={styles.button}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 160, height: 160 }}
              />
              <Text style={styles.pokemonName}>{item.name}</Text>
              <Text style={styles.pokemonName}>No {item.pokedexId}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default allPokemons;
