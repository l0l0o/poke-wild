import useGetPkmnByType from "@/hooks/useGetPkmnByType";
import styles from "@/styles/styles";
import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

const pokemonDetailScreen = () => {
  const { type } = useLocalSearchParams();
  const pokemons = useGetPkmnByType(type);

  const searchByName = (pokemonName: number) => {
    router.push("/hub/pokedex/pokemons/details/" + pokemonName);
  };

  return (
    <View style={styles.container}>
      <Text>Pokédex {type}</Text>

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

export default pokemonDetailScreen;
