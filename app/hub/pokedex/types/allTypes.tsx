import useGetTypes from "@/hooks/useGetTypes";
import styles from "@/styles/styles";
import { router } from "expo-router";
import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";

const allPokemons = () => {
  const types = useGetTypes();

  const searchByType = (type: string) => {
    router.push("/hub/pokedex/types/details/" + type);
  };

  return (
    <View style={styles.container}>
      <Text>Types :</Text>
      <FlatList
        data={types}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() => searchByType(item.name)}
              style={styles.button}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 160, height: 160 }}
              />
              <Text style={styles.pokemonName}>{item.name}</Text>
              <Text style={styles.pokemonName}>{item.pokedexId}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default allPokemons;
