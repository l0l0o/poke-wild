import useGetPkmn from "@/hooks/useGetPokemons";
import styles from "@/styles/styles";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

const Index = () => {
  const pokemons = useGetPkmn();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pokédex</Text>
      <FlatList
        horizontal={false}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.pokedexId.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity style={styles.button}>
              <Image source={{ uri: item.sprite }} style={styles.image} />
              <Text style={styles.pokemonName}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Index;
