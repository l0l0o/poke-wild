import useGetPkmnByName from "@/hooks/useGetPkmnByName";
import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, FlatList } from "react-native";

const pokemonDetailScreen = () => {
  const { name } = useLocalSearchParams();
  const pokemon = useGetPkmnByName(name);

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: pokemon.image }}
      />
      <Text style={{ fontSize: 32 }}>
        #{pokemon.pokedexId}&nbsp;
        {pokemon.name}
      </Text>
      <FlatList
        data={pokemon.apiTypes}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(type) => type.name.toString()}
        renderItem={({ item }) => <Text>{item.name} </Text>}
      />

      <View style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <View>
          <Text>HP: {pokemon.stats?.HP}</Text>
          <Text></Text>
        </View>
        <View>
          <Text>ATQ: {pokemon.stats?.attack}</Text>
          <Text></Text>
        </View>
        <View>
          <Text>DEF: {pokemon.stats?.defense}</Text>
          <Text></Text>
        </View>
        <View>
          <Text>ATQSP: {pokemon.stats?.special_attack}</Text>
          <Text></Text>
        </View>
        <View>
          <Text>DEFSP: {pokemon.stats?.special_defense}</Text>
          <Text></Text>
        </View>
        <View>
          <Text>VIT: {pokemon.stats?.speed}</Text>
          <Text></Text>
        </View>
      </View>
    </View>
  );
};

export default pokemonDetailScreen;
